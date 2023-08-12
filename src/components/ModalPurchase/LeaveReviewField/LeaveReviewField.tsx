import React, { useState } from 'react'
import { IReviewData, ITokenInfoDecoded, IUserOrderItem, IUserOrderToy } from '../../../types/types'
import { toast } from 'react-toastify'
import { toastifyErrorParams, toastifyNotificationParams } from '../../../services/toastParametres'
import { authCheck } from '../../../services/api/authorization'
import { sendReview } from '../../../services/api/products'
import { Link, useNavigate } from 'react-router-dom'
import { Rating } from '@mui/material'

interface IProps {
    item: IUserOrderItem,
    idx: number,
    status: string,
}
export default function LeaveReviewField({ item, idx, status }: IProps) {

    const [rating, setRating] = useState<number>(0)
    const [reviewDesc, setReviewDesc] = useState("")
    const navigate = useNavigate();

    function onSubmit(rating: number, toy: IUserOrderToy) {
        if (!reviewDesc) {
            toast.error("Введите текст отзыва", toastifyErrorParams)
            return
        }
        if (!rating) {
            toast.error("Укажите количество звезд рейтинга", toastifyErrorParams)
            return
        }

        authCheck()
            .then((response) => {
                //если у пользователя не истек refresh токен, то обновляется access и выполняется добавление в корзину
                if (response) {

                    let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");

                    const tokenInfo = accessToken.split('.')[1]
                    const tokenInfoDecoded: ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))
                    //готовим данные и отправляем отзыв

                    const reviewData: IReviewData = {
                        "description": reviewDesc,
                        "rating": rating,
                        "toy": toy.id,
                        "user": tokenInfoDecoded.user_id
                    }
                    console.log(reviewData);

                    sendReview(toy?.slug, reviewData)
                        .then((response) => {
                            toast(response.data.responce, toastifyNotificationParams)
                            setRating(0)
                            setReviewDesc("")
                        }).catch(() => {
                            toast.error("Ошибка, вы не можете оставить отзыв", toastifyErrorParams)
                        })


                } else {
                    //если у пользователя истек refresh токен, то выполняется переход на страницу авторизации
                    navigate('/authorization')
                }
            })
    }
    return (
        <div key={idx}>
            <p className='text-lg font-bold text-center mb-4'>{item.toy.title}</p>
            <div className='flex justify-around items-center flex-col xs:max-lx:gap-7 lx:flex-row'>
                <Link to={`/product/?id=${item.toy.slug}`}>
                    <div className="flex flex-wrap flex-col">
                        <img src={item.photos[0].image_url} alt="" className='w-[200px] h-[200px] object-cover rounded-xl hover:scale-[1.02] duration-200' />
                    </div>
                </Link>
                {/* Инпут username */}
                <form className='' onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(rating, item.toy)
                }}>
                    <textarea value={reviewDesc} onChange={(e) => { setReviewDesc(e.target.value) }} placeholder='Текст отзыва' className='default-input w-full h-[150px] lg:w-[350px]' maxLength={100} />

                    <div className="flex items-center justify-between flex-col xs:max-lx:gap-3 lx:flex-row">
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue: any) => {
                                setRating(newValue);
                            }}
                            size='large'
                        />
                        {status !== "RD" ?
                            <button className='px-4 py-2 font-normal whitespace-nowrap bg-orange-500/30 rounded-xl' disabled>Оставить отзыв</button>
                            : <button className='px-4 py-2 font-normal whitespace-nowrap bg-orange-500/50 rounded-xl hover:bg-orange-500/70'>Оставить отзыв</button>
                        }
                    </div>
                </form>

            </div>
            <hr className='h-[2px] w-3/4 m-auto bg-black/10 mb-10 mt-5' />
        </div>
    )
}

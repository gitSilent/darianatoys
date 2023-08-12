import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Rating } from '@mui/material';
import { authCheck } from '../../services/api/authorization';
import { IProductPageInfo, IReviewData, ITokenInfoDecoded } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { sendReview } from '../../services/api/products';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../Modal/Modal'
import { toastifyErrorParams, toastifyNotificationParams, toastifySuccessParams } from '../../services/toastParametres';

interface IProps {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    toy: IProductPageInfo | undefined,
}

export default function ModalReview({ active, setActive, toy }: React.PropsWithChildren<IProps>) {
    const [rating, setRating] = useState<number>(0)
    const navigate = useNavigate();
    const { register, formState: { errors }, reset, handleSubmit } = useForm({
        mode: 'onBlur'
    });

    function onSubmit(data: any) {
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
                        ...data,
                        "rating": rating,
                        "toy": toy?.category.id,
                        "user": tokenInfoDecoded.user_id
                    }

                    sendReview(toy?.slug, reviewData)
                        .then((response) => {
                            toast(response.data.responce, toastifyNotificationParams)
                            reset()
                        }).catch((er) => {
                            toast.error("Ошибка, вы не можете оставить отзыв", toastifyErrorParams)
                        })
                } else {
                    //если у пользователя истек refresh токен, то выполняется переход на страницу авторизации
                    navigate('/authorization')
                }
            })

    }
    return (
        <div>
            <Modal active={active} setActive={setActive}>
                <ToastContainer />
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center px-5 gap-3  sm:w-[400px] sl:w-[500px] mx-auto'>
                    <h1 className='w-fit font-bold text-3xl mb-5 md:text-4xl'>Оставить отзыв</h1>

                    {/* <input {...register("title", {
                required: "Поле обязательно к заполнению",
                    minLength:{
                    value: 5,
                    message: "Минимум 5 символов"
                    }
                }
                )} type="text" placeholder='Заголовок' className='default-input w-full' maxLength={100}/>
                <span className='text-red-600'>
                {errors?.title && errors?.title?.message?.toString()} 
                </span> */}

                    {/* Инпут username */}
                    <textarea {...register("description", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        }
                    }
                    )} placeholder='Текст отзыва' className='default-input w-full h-[250px]' maxLength={1000} />
                    <span className='text-red-600'>
                        {errors?.description && errors?.description?.message?.toString()}
                    </span>
                    {/* __________________ */}

                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue: any) => {
                            setRating(newValue);
                        }}
                        size='large'
                    />

                    <input type="submit" className='rounded-xl bg-black text-white px-10 py-3 font-semibold mt-5 text-xl hover:cursor-pointer hover:bg-black/90 hover:scale-[101%] duration-150' value="Оставить отзыв" />
                </form>
            </Modal>
        </div>
    )
}

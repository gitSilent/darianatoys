import { addToCart, removeToCart } from '../../services/api/cart'
import { ToastContainer, toast } from 'react-toastify'
import { ITokenInfoDecoded, IToyInCartToy, IToysInCart } from '../../types/types'
import { minusIcon, plusIcon } from '../../media/svgIcons'
import { authCheck } from '../../services/api/authorization'
import { Dispatch, SetStateAction, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CartItem.css'

interface IProps {
    img: string,
    amount: number,
    toy: IToyInCartToy,
    toysInCart: IToysInCart,
    setToysInCart: Dispatch<SetStateAction<IToysInCart | undefined>>
}

export default function CartItem({ toy, amount, toysInCart, setToysInCart, img }: IProps) {

    const [userInfoFromToken, setUserInfoFromToken] = useState<ITokenInfoDecoded>()
    const navigate = useNavigate()

    //функция удаления игрушки из корзины, принимает количество удаляемых игрушек
    function deleteToy(amountToDelete: number) {
        removeToCart({ toy: toy.id, amount: amountToDelete })
            .then((res) => {
                if (res.status === 200) {
                    let newToysInCart;
                    //сначала удаляем то количество, которое передано в функцию и обновляем общий стейт toysInChart
                    const newItems = toysInCart.items.map((item) => {
                        if (item.toy.id === toy.id) {
                            return {
                                ...item,
                                amount: amount - amountToDelete,
                            }
                        } else {
                            return item
                        }
                    })
                    newToysInCart = {
                        ...toysInCart,
                        items: newItems,
                        total_price: toysInCart.total_price - toy.cost //обновляем общую стоимость корзины
                    }
                    setToysInCart(newToysInCart)

                    //в случае, если оставшееся кол-во конкретного товара <= 0, то удаляем товар из свойства items общего стейта toysInChart 
                    for (let item of toysInCart.items) {

                        if (item.toy.id === toy.id && amount - amountToDelete <= 0) {
                            let newItems = toysInCart.items.filter((toyItem) => { //фильтруем массив игрушек и удаляем элемент по id
                                return toyItem.toy.id !== toy.id;
                            });

                            newToysInCart = {
                                ...toysInCart,
                                items: newItems,
                                total_price: toysInCart.total_price - toy.cost * amount //обновляем общую стоимость корзины
                            }
                            setToysInCart(newToysInCart)
                        }
                    }
                }
            })
            .catch(res => {
                toast.error("Произошла ошибка", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            })
    }

    //функция добавления единицы товара при нажатии на знак "+" 
    function addToy() {
        authCheck()
            .then((response) => {
                if (response) {
                    let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");

                    const tokenInfo = accessToken.split('.')[1]
                    const tokenInfoDecoded: ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))
                    setUserInfoFromToken(tokenInfoDecoded)

                } else {
                    navigate('/authorization')
                }
            })

        addToCart({
            toy: toy.id,
            user: userInfoFromToken?.user_id,
            amount: 1
        }).then((response) => {
            let newToysInCart;
            const newItems = toysInCart.items.map((item) => {
                if (item.toy.id === toy.id) {
                    return {
                        ...item,
                        amount: amount + 1,
                    }
                } else {
                    return item
                }
            })
            newToysInCart = {
                ...toysInCart,
                items: newItems,
                total_price: toysInCart.total_price + toy.cost
            }
            setToysInCart(newToysInCart)

        }).catch((er: any) => {
            toast.error("Произошла ошибка", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        })
    }

    return (
        <div className='border p-4 flex flex-col justify-center gap-2 my-4 max-w-7xl sm:max-lx:w-full lx:min-w-[1000px] rounded-xl'>
            <ToastContainer />

            <div className='flex items-center justify-around xs:max-lg:flex-col xs:max-lg:gap-4'>

                <Link to={`/product/?id=${toy.slug}`} className='cursor-pointer flex flex-col gap-2 hover:scale-[1.01] duration-150'>
                    <img src={img} alt="" className='w-[180px]' />
                    <div>
                        <h3 className='font-bold text-lg xs:max-md:text-center'>{toy.title}</h3>
                    </div>

                    <div className="max-w-[400px] xs:max-lg:mb-2">
                        <p className='text-limit xs:max-md:text-center text-gray-600 hover:text-black duration-150'>{toy.description} </p>
                    </div>
                </Link>


                <div className="border w-2/3 lg:hidden border-orange-200"></div>

                <div className="flex flex-col gap-2 items-center xs:max-lg:mt-2">

                    <div className='flex flex-col gap-2 items-center'>
                        <h3 className='font-bold text-lg'>Детали заказа</h3>
                        <ul className=''>
                            <li>Цена за 1 шт. - {toy.cost} р.</li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-5 border p-2 rounded-xl'>
                        <div onClick={() => { deleteToy(1) }} className='hover:scale-110 hover:text-red-700'>{minusIcon}</div>
                        <span className=''>{amount} шт.</span>
                        <div onClick={() => { addToy() }} className='hover:scale-110 hover:text-orange-500'>{plusIcon}</div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <h3 className=''>Сумма:</h3>
                        <span className=''>{toy.cost * amount} р.</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

import toys from '../../media/toys.jpg'
import { closeIcon } from '../../media/svgIcons'
import { removeToCart } from '../../services/api/cart'
import { ToastContainer, toast } from 'react-toastify'
import { IToyInCartToy } from '../../types/types'

interface IProps {
    img: string,
    amount: number,
    toy: IToyInCartToy,
}

export default function CartItem({ toy, amount }: IProps) {

    return (
        <div className='relative flex flex-col gap-10 items-center w-full h-fit p-9 border rounded-xl min-w-[280px] max-w-[1180px] m-auto my-5 lg:flex-row lg:justify-center'>
            <ToastContainer />
            <img src={toys} alt="" className='rounded-xl object-cover max-w-[250px]' />
            <div className='flex flex-col justify-center gap-1 min-w-[250px] lg:mb-auto'>
                <h3 className='font-bold text-xl'>{toy.title}</h3>
                <p className='hidden max-w-[350px] lg:block'>{toy.description} </p>
            </div>

            <hr className='bg-black w-3/4 my-4 lg:hidden' />

            <div className='flex flex-col gap-6 lg:mb-auto'>
                <div className='flex flex-col gap-2 '>
                    <h3 className='font-semibold text-2xl lg:m-0'>Детали заказа</h3>
                    <ul className='list-disc'>
                        <li>Цена за 1 шт. - {toy.cost} р.</li>
                        <li>Всего к покупке - {amount} шт.</li>
                    </ul>
                </div>

                <hr className='bg-black w-full my-4 lg:hidden' />

                <div className='flex flex-row gap-2'>
                    <h3 className='font-semibold text-2xl lg:m-0'>Сумма</h3>
                    <span className='font-bold text-2xl'><u>{toy.cost * amount} р.</u></span>
                </div>
            </div>
            <div className="" onClick={() => {
                removeToCart({ toy: toy.id, amount: amount })
                    .then((res) => {
                        if (res.status === 200) {
                            toast.success("Игрушка успешно удалена!", {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            })

                        }
                    })
                    .catch(res => {
                        toast.error("Произошла ошибка", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    })
            }}>
                {closeIcon}
            </div>
        </div>
    )
}

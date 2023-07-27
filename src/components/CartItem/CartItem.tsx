import toys from '../../media/toys.jpg'
import { closeIcon } from '../../media/svgIcons'
import { addToCart, removeToCart } from '../../services/api/cart'
import { ToastContainer, toast } from 'react-toastify'
import { ITokenInfoDecoded, IToyInCartToy, IToysInCart } from '../../types/types'
import { minusIcon,plusIcon } from '../../media/svgIcons'
import { authCheck } from '../../services/api/authorization'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface IProps {
    img: string,
    amount: number,
    toy: IToyInCartToy,
    toysInCart:IToysInCart,
    setToysInCart:Dispatch<SetStateAction<IToysInCart | undefined>>
}

export default function CartItem({ toy, amount,toysInCart,setToysInCart }: IProps) {
  const [userInfoFromToken, setUserInfoFromToken] = useState<ITokenInfoDecoded>()
  const navigate = useNavigate()

  //функция удаления игрушки из корзины, принимает количество удаляемых игрушек
    function deleteToy(amountToDelete:number){
        removeToCart({ toy: toy.id, amount: amountToDelete })
            .then((res) => {
                if (res.status === 200) {
                    let newToysInCart;
                    //сначала удаляем то количество, которое передано в функцию и обновляем общий стейт toysInChart
                    const newItems = toysInCart.items.map((item)=>{
                        if(item.toy.id === toy.id){
                            return {
                                ...item,
                                amount: amount - amountToDelete,
                            }
                        }else{
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
                    for(let item of toysInCart.items){

                        if(item.toy.id === toy.id && amount - amountToDelete <= 0){
                            let newItems = toysInCart.items.filter((toyItem)=> { //фильтруем массив игрушек и удаляем элемент по id
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
                    // console.log(newToysInCart);
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
            const newItems = toysInCart.items.map((item)=>{
                if(item.toy.id === toy.id){
                    return {
                        ...item,
                        amount: amount + 1,
                    }
                }else{
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
      }

      useEffect(()=>{
        console.log(toy);
        
      })
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
                        {/* <li>Всего к покупке - {amount} шт.</li> */}
                    </ul>
                    <div className='flex flex-row mt-5 w-full gap-3 justify-center items-center '>
                        <div onClick={()=>{
                            deleteToy(1)
                        }}>
                            {minusIcon}
                        </div>
                            
                        <span className='text-2xl'>{amount} шт.</span>

                        <div onClick={()=>{
                            addToy()
                        }}>
                            {plusIcon}
                        </div>
                    </div>
                </div>

                <hr className='bg-black w-full my-4 lg:hidden' />

                <div className='flex flex-row gap-2'>
                    <h3 className='font-semibold text-2xl lg:m-0'>Сумма</h3>
                    <span className='font-bold text-2xl'><u>{toy.cost * amount} р.</u></span>
                </div>
            </div>
            <div className="" onClick={() => {
                deleteToy(amount)
            }}>
                {closeIcon}
            </div>
        </div>
    )
}

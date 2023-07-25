import React, { useEffect, useState } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getCart } from '../../services/api/cart'
import { IToysInCart } from '../../types/types'
import { useNavigate } from 'react-router-dom'

export default function ShoppingCart() {

  const [toysInCart, setToysInCart] = useState<IToysInCart>()
  const navigate = useNavigate()

  useEffect(() => {
    
    getCart()
    .then((response)=>{
      console.log(response);
      if(!response){
        navigate('/authorization')
        return
      }
      setToysInCart(response.data)
    })
    
  }, [])
  

  return (
    <div className='pt-[105px] h-screen justify-between'>
      <Header/>
      <h2 className='font-bold m-auto w-fit text-xl lg:pt-16'>Корзина</h2>

      <div className='px-10'>
        {toysInCart?.items.map((item,i)=>(
          <CartItem img={""} name={"toy name"} desc={"toy desc"} amount={item.amount} priceForOne={1000} sumPrice={1000}/>
        ))}
      
        <span className='block mt-16 font-medium text-4xl w-fit m-auto'>Итого: {toysInCart?.total_price} р.</span>
        <button className='block rounded-xl mt-10 py-3 px-10 font-bold text-2xl w-fit bg-amber-600 m-auto hover:bg-amber-700'>Оформить заказ</button>
      </div>
      <div className='min-h-[50vh]'></div>

      <Footer/>
    </div>
  )
}

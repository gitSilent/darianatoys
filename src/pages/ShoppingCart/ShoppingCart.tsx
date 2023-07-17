import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ShoppingCart() {
  return (
    <div className='pt-[105px] h-screen justify-between'>
      <Header/>
      <h2 className='font-bold m-auto w-fit text-xl lg:pt-16'>Корзина</h2>

      <div className='px-10'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <span className='block mt-16 font-medium text-4xl w-fit m-auto'>Итого: 3 000 р.</span>
        <button className='block rounded-xl mt-10 py-3 px-10 font-bold text-2xl w-fit bg-amber-600 m-auto hover:bg-amber-700'>Оформить заказ</button>
      </div>
      <Footer/>
    </div>
  )
}

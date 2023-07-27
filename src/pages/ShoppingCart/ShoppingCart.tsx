import React, { useEffect, useState } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getCart } from '../../services/api/cart'
import { IToysInCart } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import { textStyle } from '../../styles/style'
import Loader from '../../components/Loader/Loader'

export default function ShoppingCart() {

  const [isLoading, setIsLoading] = useState(true)

  const [toysInCart, setToysInCart] = useState<IToysInCart>()
  const navigate = useNavigate()

  useEffect(() => {

    getCart()
      .then((response) => {
        if (!response) {
          navigate('/authorization')
          return
        }
        setToysInCart(response.data)
        setIsLoading(false)
      })

  }, [])

  useEffect(()=>{
    console.log(toysInCart);
    
  },[toysInCart])

  return (
    <>
      <div className='justify-between'>
        <Header />
      <div className='xs:h-[78px] md:h-[115px]'></div>

        <h2 className={textStyle.titlesText}>Корзина</h2>
        {isLoading ? <Loader/>
      :
      <>
        <div className='px-10'>
          {toysInCart?.items.length !== 0 ? toysInCart?.items.map((item, idx) => (
            <CartItem key={idx} img={""} toy={item.toy} amount={item.amount} toysInCart={toysInCart} setToysInCart={setToysInCart}/>
            ))
            :
            <h3 className="mt-14 text-4xl mx-auto w-fit">Корзина пуста</h3>
          }
          {toysInCart?.items.length ? <span className='block mt-16 font-medium text-4xl w-fit m-auto'>Итого: {toysInCart?.total_price} р.</span> : <></>}
          {toysInCart?.items.length ? <button className='block rounded-xl mt-10 py-3 px-10 font-bold text-2xl w-fit bg-amber-600 m-auto hover:bg-amber-700'>Оформить заказ</button> : <></>}

        </div>

      </>}
      </div>
      <Footer />
    </>

  )
}

import { useEffect, useState } from 'react'
import { getCart } from '../../services/api/cart'
import { IToysInCart } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import { textStyle } from '../../styles/style'
import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
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

  return (
    <div className='wrapper'>
      <Header />
      <main className='mainContainer'>
        <div className='justify-between'>
          <div className='xs:h-[78px] md:h-[115px]'></div>

          <h2 className={textStyle.titlesText}>Корзина</h2>
          {isLoading ? <Loader />
            :
            <>
              <div className='flex flex-col justify-center items-center sm:max-lx:mx-7'>
                {toysInCart?.items.length !== 0 ? toysInCart?.items.map((item, idx) => (
                  <CartItem
                    key={idx}
                    img={""}
                    toy={item.toy}
                    amount={item.amount}
                    toysInCart={toysInCart}
                    setToysInCart={setToysInCart} />
                ))
                  :
                  <h3 className="mt-14 text-4xl mx-auto w-fit">Корзина пуста</h3>
                }
                {toysInCart?.items.length ? <span className='block mt-3 font-medium text-2xl w-fit m-auto'>Итого: {toysInCart?.total_price} р.</span> : <></>}
                {toysInCart?.items.length ? <button className='block rounded-xl mt-5 py-3 px-8 text-xl w-fit bg-orange-500/50 m-auto hover:bg-orange-500/70'>Оформить заказ</button> : <></>}

              </div>

            </>}
        </div>
      </main>
      <Footer />
    </div>

  )
}

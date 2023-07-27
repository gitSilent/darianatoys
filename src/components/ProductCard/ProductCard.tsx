import to_cart from '../../media/to_cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { IProduct, IProductPageInfo, ITokenInfoDecoded } from '../../types/types'
import { toast } from 'react-toastify'
import { addToCart } from '../../services/api/cart'
import { useState } from 'react'
import { authCheck } from '../../services/api/authorization'


export default function ProductCard({ category, slug, photos, description, cost, title, id }: IProductPageInfo) {
  const [userInfoFromToken, setUserInfoFromToken] = useState<ITokenInfoDecoded>()
  const navigate = useNavigate()


  function handleCartBtn() {
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
      toy: id,
      user: userInfoFromToken?.user_id,
      amount: 1
    }).then((response) => {

      toast(response?.data?.responce)
      
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

  return (
    <div className='min-w-[350px] max-w-[480px] min-h-[460px] max-h-[560px] relative border border-gray-400 rounded-xl hover:cursor-pointer hover:scale-[101%] duration-[150ms] '>
      <Link to={`/product/?id=${slug}`}>
        <img src={photos[0].photo} alt="product" className='object-cover w-full min-h-[350px] rounded-tr-xl rounded-tl-xl ' />
      </Link>
      <div className='px-5 pb-5 flex flex-row justify-between items-center'>
        <div className=''>
          <span className='block mt-4 font-semibold text-xl'>{title}</span>
          <span className='block font-normal text-2xl mt-3'>{cost} р.</span>
        </div>
        <img src={to_cart} alt="add to cart" className='w-[72px] h-[72px] hover:cursor-pointer hover:scale-110 duration-500' onClick={handleCartBtn} />
      </div>
    </div>

  )
}

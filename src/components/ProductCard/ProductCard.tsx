import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../../services/api/cart'
import { useState } from 'react'
import { authCheck } from '../../services/api/authorization'
import { cartSvg } from '../../media/svgIcons'
import { IProductPageInfo, ITokenInfoDecoded } from '../../types/types'



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

      toast.success(response?.data?.responce, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      })

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
    <div className='group overflow-hidden min-w-[250px] max-w-[480px] min-h-[460px] max-h-[560px] relative border border-gray-400 rounded-xl hover:cursor-pointer '>
      <Link to={`/product/?id=${slug}`}>
        <img src={photos[0].image_url} alt="product" className=' min-w-[250px] group-hover:scale-[101%] duration-[250ms] object-cover w-[380px] h-[350px] rounded-tr-xl rounded-tl-xl ' />
      </Link>
      <div className='px-5 pb-5 flex flex-row justify-between items-center'>
        <div className=''>
          <span className='block mt-4 font-semibold text-xl'>{title}</span>
          <span className='block font-normal text-2xl mt-3'>{cost} р.</span>
        </div>
        <div className='flex items-center justify-center w-fit h-fit p-2 pb-3 hover:border-amber-800 hover:cursor-pointer' onClick={handleCartBtn}>
          {cartSvg}
        </div>
      </div>
    </div>
  )
}

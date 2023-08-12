import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../../services/api/cart'
import { useState } from 'react'
import { authCheck } from '../../services/api/authorization'
import { cartSvg } from '../../media/svgIcons'
import { IProductPageInfo, ITokenInfoDecoded } from '../../types/types'
import { toastifyErrorParams, toastifySuccessParams } from '../../services/toastParametres'
import { StarIcon } from '@heroicons/react/24/solid'


export default function ProductCard({ category, slug, photos, cost, title, id, overall_rating }: IProductPageInfo) {
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

      toast.success(response?.data?.responce, toastifySuccessParams)

    }).catch((er: any) => {
      toast.error("Произошла ошибка", toastifyErrorParams)
    })
  }

  return (
    <div className='group overflow-hidden  max-w-[480px] min-h-[460px] max-h-[560px] relative border border-gray-400 rounded-xl hover:cursor-pointer '>
      <Link to={`/product/?id=${slug}`}>
        <img src={photos[0].image_url} alt="product" className=' object-cover w-[380px] h-[350px] rounded-tr-xl rounded-tl-xl group-hover:scale-[101%] duration-[250ms]' />
      </Link>

      <div className='px-5 pb-5 flex flex-row justify-between items-center mt-4'>
        <div className=''>
          <div className="flex items-center justify-between">
            <span className='font-semibold text-xl'>{title}</span>
          </div>
          <span className='block font-normal text-2xl mt-3'>{cost} р.</span>
        </div>
        <div className='flex flex-wrap gap-3 flex-col items-center justify-center w-fit h-fit p-2 pb-3 hover:border-amber-800 hover:cursor-pointer' onClick={handleCartBtn}>
          {cartSvg}

          {overall_rating !== 0 ?
            <div className="flex items-center">
              <StarIcon className='xs:w-6 md:w-8  text-yellow-400' />
              <p className=' text-xl'>{overall_rating}</p>
            </div>

            : <div className='flex items-center'>
              <StarIcon className='xs:w-6 md:w-8  text-yellow-500 opacity-40' />
              <p className=' text-xl'>{overall_rating}</p>
            </div>}

        </div>
      </div>

    </div>
  )
}

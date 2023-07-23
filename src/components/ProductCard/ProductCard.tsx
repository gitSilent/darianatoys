import to_cart from '../../media/to_cart.svg'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/types'
import { toast } from 'react-toastify'
import { addToCart } from '../../services/api/cart'

function handleCartBtn() {
  addToCart({
    toy: "1",
    user: "2",
    amount: 1
  }).then((response) => {
    toast(response?.data?.responce)
  }).catch((er: any) => {
    toast("Ошибка, товар не был добавлен в корзину")
  })
}

export default function ProductCard({ slug, photos, description, cost }: IProduct) {
  return (
    <div className='min-w-[350px] max-w-[480px] min-h-[460px] max-h-[560px] relative border border-gray-400 rounded-xl hover:cursor-pointer hover:scale-[101%] duration-[150ms] '>
      <Link to={`/product/?id=${slug}`}>
        <img src={photos[0].photo} alt="product" className='object-cover w-full min-h-[350px] rounded-tr-xl rounded-tl-xl ' />
      </Link>
      <div className='px-5 pb-5 flex flex-row justify-between items-center'>
        <div className=''>
          <span className='block mt-4 font-semibold text-xl'>{description}</span>
          <span className='block font-normal text-2xl mt-3'>{cost} р.</span>
        </div>
        <img src={to_cart} alt="add to cart" className='w-[72px] h-[72px] hover:cursor-pointer hover:scale-110 duration-500' onClick={handleCartBtn} />
      </div>
    </div>

  )
}

import React from 'react'
import toys from '../../media/toys.jpg'
import to_cart from '../../media/to_cart.svg'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/types'

// interface IProps {
//   id:string,
//   img: string,
//   desc:string,
//   price:string
// }

export default function ProductCard({id,img, desc, price}:IProduct) {
  

  return (
    <Link to={`/product/?id=${id}`}>
      <div className='min-w-[350px] max-w-[480px] min-h-[460px] max-h-[560px] relative border border-gray-400 rounded-xl hover:cursor-pointer hover:scale-[101%] duration-[150ms] '>
          <img src={toys} alt="product" className='object-cover w-full min-h-[350px] rounded-tr-xl rounded-tl-xl ' />
          <div className='px-5 pb-5 flex flex-row justify-between items-center'>
            <div className=''>
              <span className='block mt-4 font-semibold text-xl'>{desc}</span>
              <span className='block font-normal text-2xl mt-3'>{price} р.</span>
            </div>
            <img src={to_cart} alt="add to cart" className='w-[72px] h-[72px] hover:cursor-pointer hover:scale-110 duration-500 ' />
          </div>
      </div>
  </Link>
  )
}

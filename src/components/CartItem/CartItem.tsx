import React from 'react'
import toys from '../../media/toys.jpg'

interface IProps{
    img:string,
    name:string,
    desc:string,
    amount:number,
    priceForOne:number,
    sumPrice:number
}

export default function CartItem({img,name,desc,amount,priceForOne,sumPrice}:IProps) {
  return (
    <div className='relative flex flex-col gap-10 items-center w-full h-fit p-9 border rounded-xl min-w-[280px] max-w-[1180px] m-auto my-5 lg:flex-row lg:justify-center'>
        <img src={toys} alt="" className='rounded-xl object-cover max-w-[250px]' />
        <div className='flex flex-col justify-center gap-1 min-w-[250px] lg:mb-auto'>
            <h3 className='font-bold text-xl'>{name}</h3>
            <p className='hidden max-w-[350px] lg:block'>{desc} </p>
        </div>
       
        <hr className='bg-black w-3/4 my-4 lg:hidden'/>

       <div className='flex flex-col gap-6 lg:mb-auto'>
        <div className='flex flex-col gap-2 '>
            <h3 className='font-semibold text-2xl lg:m-0'>Детали заказа</h3>
            <ul className='list-disc'>
                <li>Цена за 1 шт. - {priceForOne}</li>
                <li>Всего к покупке - {amount} шт.</li>
            </ul>
            {/* <p className='max-w-[400px]'>Описание медведя Описание медведя Описание медведя Описание медведя Описание медведя Описание медведя </p> */}
        </div>

        <hr className='bg-black w-full my-4 lg:hidden'/>
        
        <div className='flex flex-row gap-2'>
            <h3 className='font-semibold text-2xl lg:m-0'>Сумма</h3>
            <span className='font-bold text-2xl'><u>{sumPrice} р.    </u></span>
        </div>
       </div>
       
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-2 right-3 lg:top-5 lg:right-5 w-7 h-7 hover:cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>


    </div>
  )
}

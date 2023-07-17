import React from 'react'
import toys from '../../media/toys.jpg'

export default function CartItem() {
  return (
    <div className='flex flex-col gap-10 items-center w-full h-fit p-9 border rounded-xl min-w-[280px] max-w-[1180px] m-auto my-5 lg:flex-row lg:justify-center'>
        <img src={toys} alt="" className='rounded-xl object-cover max-w-[250px]' />
        <div className='flex flex-col justify-center gap-1 lg:mb-auto'>
            <h3 className='font-bold text-xl'>Плюшевый медведь</h3>
            <p className='hidden max-w-[350px] lg:block'>Описание медведя Описание медведя Описание медведя Описание медведя Описание медведя Описание медведя </p>
        </div>
       
        <hr className='bg-black w-3/4 my-4 lg:hidden'/>

       <div className='flex flex-col gap-5 lg:mb-auto'>
        <div className='flex flex-col gap-2 '>
            <h3 className='font-semibold text-2xl lg:m-0'>Детали заказа</h3>
            <ul className='list-disc'>
                <li>Цена за 1 шт. - 1500</li>
                <li>Всего к покупке - 1 шт.</li>
            </ul>
            {/* <p className='max-w-[400px]'>Описание медведя Описание медведя Описание медведя Описание медведя Описание медведя Описание медведя </p> */}
        </div>

        <hr className='bg-black w-full my-4 lg:hidden'/>
        
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-2xl lg:m-0'>Сумма</h3>
            <span className='font-bold text-3xl'>1 500 р.</span>
        </div>
       </div>

    </div>
  )
}

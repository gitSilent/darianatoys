import React from 'react'

export default function OrderCard() {
  return (
    <div className='flex flex-row justify-between items-center w-full min-h-fit p-5 rounded-xl shadow-md border lg:p-9'>
        <div className='flex flex-col'>
            <span className='block font-bold'>Заказ №000001</span>
            <span className='block'>Статус: <span style={{color: "#E3A164"}}>в обработке</span></span>
        </div>
        <span className='block font-bold'>1 500 р.</span>
    </div>
  )
}

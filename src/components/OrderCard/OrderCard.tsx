import React from 'react'

import { IUserOrder } from '../../types/types'

interface IProps{
  orderInfo:IUserOrder
}
export default function OrderCard({orderInfo}:IProps) {
  return (
    <div className='flex flex-row justify-between items-center w-full min-h-fit p-5 rounded-xl shadow-md border lg:p-9'>
        <div className='flex flex-col'>
            <span className='block font-bold'>Заказ № {orderInfo.id}</span>
            <span className='block'>Статус: <span style={{color: "#E3A164"}}>{orderInfo.status}</span></span>
        </div>
        <span className='block font-bold'>{orderInfo.total_price} р.</span>
    </div>
  )
}

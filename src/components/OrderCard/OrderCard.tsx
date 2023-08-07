import { useEffect, useState } from 'react'
import { IUserOrder } from '../../types/types'
import { orderStatus } from '../../services/serviceFuncs/orderStatus'

interface IProps {
  orderInfo: IUserOrder
}

interface switchParams {
  status: string,
  color: string
}

export default function OrderCard({ orderInfo }: IProps) {

  const [param, setParam] = useState<switchParams | undefined>()

  useEffect(() => {
    setParam(orderStatus(orderInfo.status))
  }, [])


  return (
    <div className='flex flex-row justify-between items-center w-full min-h-fit p-5 rounded-xl shadow-md border lg:p-9'>
      <div className='flex flex-col'>
        <span className='block font-bold'>Заказ № {orderInfo.id}</span>
        <span className='block'>Статус:
          <span style={{ color: param?.color }}> {param?.status}</span>
        </span>
      </div>
      <span className='block font-bold'>{orderInfo.total_price} р.</span>
    </div>
  )
}

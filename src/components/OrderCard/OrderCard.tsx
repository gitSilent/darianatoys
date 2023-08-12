import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IUserOrder } from '../../types/types'
import { orderStatus } from '../../services/serviceFuncs/orderStatus'

interface IProps {
  orderInfo: IUserOrder,
  setModalActive: Dispatch<SetStateAction<boolean>>,
  setOrderInfoForModal: Dispatch<SetStateAction<IUserOrder | undefined>>
}

interface switchParams {
  status: string,
  color: string,
}

export default function OrderCard({ orderInfo, setModalActive, setOrderInfoForModal }: IProps) {

  const [param, setParam] = useState<switchParams | undefined>()

  useEffect(() => {
    setParam(orderStatus(orderInfo.status))
  }, [])


  return (
    <div className='flex sm:flex-row xs:flex-col justify-between xs:max-sm:text-center items-center w-full min-h-fit p-5 rounded-xl shadow-md border lg:p-9 '>
      <div className='flex flex-col '>
        <span className='block font-bold'>Заказ № {orderInfo.id}</span>
        <span className='block'>Статус:
          <span style={{ color: param?.color }}> {param?.status}</span>
        </span>
        <span onClick={() => {
          setOrderInfoForModal(orderInfo)
          setModalActive(true)
        }}
          className='mt-3 w-[141px] bg-orange-500/50 rounded-md text-center py-1 hover:bg-orange-500/70 duration-150 transition-all cursor-pointer'>
          Подробнее</span>
      </div>
      <span className='block font-bold xs:max-sm:mt-4 xs:max-sm:p-1 xs:max-sm:border xs:max-sm:rounded-md'>{orderInfo.total_price} р.</span>
    </div>
  )
}

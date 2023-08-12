import React from 'react'
import { IReview } from '../../types/types'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Review({description,title,user,rating}:IReview) {
  return (
    <div className=' border p-5 w-full min-h-[50px] h-fit rounded-xl gap-3 flex flex-row justify-between'>
      <div className='flex flex-col gap-1'>
        <span className='block p-2 bg-slate-200 w-fit rounded-xl font-medium'>{user}</span>
        <h3 className='font-semibold'>{title}</h3>
        <p className='break-words xs:max-w-[70vw] mx:max-w-[500px] lg:max-w-[700px]'>{description}</p>

      </div>
        <div className="flex items-center">
            <StarIcon className='xs:w-6 md:w-8  text-yellow-400' />
            <p className=' text-xl'>{rating}</p>
        </div>
    </div>
  )
}

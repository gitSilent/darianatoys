import React from 'react'
import { IReview } from '../../types/types'

export default function Review({description,title,username}:IReview) {
  return (
    <div className='flex flex-col border p-5 w-full min-h-[50px] h-fit rounded-xl gap-3'>
        <span className='block p-2 bg-slate-200 w-fit rounded-xl font-medium'>{username}</span>
        <h3 className='font-semibold'>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

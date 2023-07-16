import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../media/logo.svg'

export default function Menu() {
    const [isOpened, setIsOpened] = useState(false)    

  
  return (
    <div> 
    {!isOpened ?
        <div className='py-3 px-3 cursor-pointer lg:hidden' onClick={()=> {setIsOpened(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-11 h-11">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    : <div>
        <div className='py-3 cursor-pointer fixed z-50 h-full w-3/4 bg-gray-950 sm:w-2/5 lg:hidden' onClick={()=> {setIsOpened(false)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-11 h-11 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

           
            <ul className='flex flex-col mt-20 '> 
                <Link className='font-semibold text-2xl text-gray-200' to={'/'}>
                    <li className='border-y border-gray-700 py-5 w-full pl-3 hover:bg-slate-700'>
                        Главная
                    </li>
                </Link>
                <Link className='font-semibold text-2xl text-gray-200' to={'/products'}>
                    <li className='border-gray-700 py-5 w-full pl-3 hover:bg-slate-700'>
                        Товары
                    </li>
                </Link>
                <Link className='font-semibold text-2xl text-gray-200' to={'/about'}>
                    <li className='border-t border-gray-700 py-5 w-full pl-3 hover:bg-slate-700'>
                        О нас
                    </li>
                </Link>
                <Link className='font-semibold text-2xl text-gray-200' to={'/feedback'}>
                    <li className='border-y border-gray-700 py-5 w-full pl-3 hover:bg-slate-700'>
                        <span className='font-semibold text-2xl text-gray-200 hover:cursor-pointer'>Обратная связь</span>
                    </li>
                </Link>
            </ul>
        
        </div>
        
    </div>}
    </div>
  )
}

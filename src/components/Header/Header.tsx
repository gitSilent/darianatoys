import React from 'react'
import logo from '../../media/logo.svg'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'

export default function Header() {
  return (
    <>
    <div className='flex justify-between fixed top-0 left-0 z-40 h-fit bg-white w-full '>
        {/* Блок контента для отображения на мобильных устройствах */}
        
        <Menu/>
        
        <Link className='lg:hidden' to={'/'}>
            <div className='w-40 py-3'>
                <img className="w-full" src={logo} alt="logo"/> 
            </div>
        </Link>

        <div className='flex gap-10 items-center px-3 lg:hidden'>
            <Link to={'/cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        


        {/* Блок контента для отображения на ПК */}

        <div className='hidden lg:py-7 lg:px-9 lg:w-screen lg:border lg:flex lg:justify-between'>
            <Link className='' to={'/'}>
                <div className='w-44'>
                    <img className="w-full" src={logo} alt="logo"/> 
                </div>
            </Link>
            <ul className='flex items-center gap-14'> 
                <li>
                    <Link className='font-bold text-2xl hover:text-gray-600' to={'/'}>Главная</Link>
                </li>
                <li>
                    <Link className='font-bold text-2xl hover:text-gray-600' to={'/products'}>Товары</Link>
                </li>
                <li>
                    <Link className='font-bold text-2xl hover:text-gray-600' to={'/about'}>О нас</Link>
                </li>
                <li>
                    <Link className='font-bold text-2xl hover:text-gray-600' to={'/feedback'}>Обратная связь</Link>
                </li>
            </ul>
            <div className='flex gap-10 items-center'>
                <Link to={'/cart'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </Link>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </div>

        
    </div>
    </>
  )
}

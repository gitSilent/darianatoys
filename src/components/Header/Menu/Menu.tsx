import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../media/logo.svg'
import { burgerIcon } from '../../../media/svgIcons'

export default function Menu() {
    const [isOpened, setIsOpened] = useState(false)


    return (
        <div>
            {!isOpened ?
                <div className='py-3 px-3 cursor-pointer lg:hidden text-black' onClick={() => {setIsOpened(true)}}>
                    {burgerIcon}
                </div>
                : <div>
                    <div className='fixed z-50 h-full w-full bg-zinc-800 md:w-2/4 lg:hidden text-white'>
                        <div className='py-3 px-3 cursor-pointer text-white' onClick={() => {setIsOpened(false)}}>
                            {burgerIcon}
                        </div>

                        <div className="py-3 cursor-pointer fixed z-50 h-full w-full bg-zinc-800 md:w-2/4 lg:hidden text-white">
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
                    </div>

                </div>}
        </div>
    )
}

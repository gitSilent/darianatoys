import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../media/logo.svg'

export default function Registration() {
    const navigate = useNavigate();

  return (
    <div>
         <Link className='' to={'/'}>
            <img className="w-15 mx-auto mt-3" src={logo} alt="logo"/> 
        </Link>
        <form  className='flex flex-col items-center mt-[125px] px-5 gap-3 md:w-[500px] mx-auto'>
            <h1 className='w-fit font-bold text-4xl mb-5'>Регистрация</h1>
            <input type="text" placeholder='Логин' className='default-input w-full' maxLength={100}/>
            <input type="email" placeholder='E-mail' className='default-input w-full' maxLength={100}/>
            <input type="password" placeholder='Пароль' className='default-input w-full' maxLength={100}/>
            <input type="password" placeholder='Повторите пароль' className='default-input w-full' maxLength={100}/>
            <button className='rounded-xl bg-black text-white px-10 py-3 font-semibold mt-5 text-xl'>Зарегистрироваться</button>
            <span className='block'>Уже есть созданный профиль? <u className='hover:cursor-pointer' onClick={()=>{navigate('/authorization')}}>Войти</u></span>
        </form>
    </div>
  )
}

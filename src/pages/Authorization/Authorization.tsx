import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../media/logo.svg'

export default function Authorization() {

    const navigate = useNavigate();

  return (
    <div className=''>
        <Link className='' to={'/'}>
            <img className="w-15 mx-auto mt-3" src={logo} alt="logo"/> 
        </Link>

        <form  className='flex flex-col items-center mt-[125px] px-5 gap-3 md:w-[500px] mx-auto'>
            <h1 className='w-fit font-bold text-4xl mb-5'>Авторизация</h1>
            <input type="text" placeholder='Логин' className='default-input w-full' maxLength={100}/>
            <input type="text" placeholder='Пароль' className='default-input w-full' maxLength={100}/>
            <button className='rounded-xl bg-black text-white px-24 py-3 font-semibold mt-5 text-2xl'>Войти</button>
            <span className='block w-fit'>Нет созданного профиля?</span>
            <span className='block w-fit'><u onClick={()=>{navigate('/registration')}} className='hover:cursor-pointer'>Зарегистрироваться</u></span>
        </form>
    </div>
  )
}

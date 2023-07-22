import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import OrderCard from '../../components/OrderCard/OrderCard'
import { getPurchasesUrl } from '../../services/api/urls'
import { getPurchases } from '../../services/api/purchases'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const navigate = useNavigate();

  getPurchases(getPurchasesUrl)
    .then((resp)=>{
      console.log(resp);
      navigate('/authorization')
    })

    function exitAccount(){
      let cookieAccess = `access=""; expires= Thu, 01 Jan 1970 00:00:00 GMT}`
      let cookieRefresh = `refresh=""; expires= Thu, 01 Jan 1970 00:00:00 GMT}`

      document.cookie = cookieAccess;
      document.cookie = cookieRefresh;

      navigate('/authorization')
    }


  return (
    <div className='mt-[81px]'>
      <Header/>



      <h2 className='font-bold m-auto w-fit text-xl my-10 lg:pt-16'>Личные данные</h2>
      <div className='flex flex-col w-full px-5 gap-5 m-auto h-[100vh] lg:w-3/4 lg:max-w-3xl'>
        <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
          <span className='block w-fit font-semibold text-xl'>Имя пользователя</span>
          <input type="text" placeholder='' className='default-input w-full lg:w-[400px]' />
        </div>

        <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
          <span className='block w-fit font-semibold text-xl'>E-mail</span>
          <input type="email" className='default-input w-full lg:w-[400px]' />
        </div>

        <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
          <span className='block w-fit font-semibold text-xl'>Логин</span>
          <input type="text" className='default-input w-full lg:w-[400px]' />
        </div>

        <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
          <span className='block w-fit font-semibold text-xl'>Пароль</span>
          <button className='px-5 py-3 bg-orange-500/50 font-semibold rounded-xl hover:bg-orange-500/70'>Сменить пароль</button>
        </div>

      <button className='px-5 py-3 bg-red-500/50 font-semibold rounded-xl hover:bg-red-500/70' onClick={exitAccount}>Выйти</button>

        <h2 className='font-bold mx-auto w-fit text-xl lg:pt-16'>Мои заказы</h2>

        <OrderCard/>

      </div>
      <Footer/>
    </div>
  )
}

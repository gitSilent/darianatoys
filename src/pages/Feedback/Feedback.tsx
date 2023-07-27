import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {useForm } from 'react-hook-form';
import { sendFeedback } from '../../services/api/feedback';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authCheck } from '../../services/api/authorization';
import { IFeedbackData, ITokenInfoDecoded } from '../../types/types';

export default function Feedback() {
  const navigate = useNavigate()

  const {register, formState:{errors}, reset, handleSubmit} = useForm({
      mode:'onBlur'
    });

  function onSubmit(data:any){
    authCheck()
    .then((response)=>{
        console.log(response);
        //если у пользователя не истек refresh токен, то обновляется access и выполняется отправка обращения
        if (response){
            
            let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            console.log(accessToken);
            
            const tokenInfo = accessToken.split('.')[1]
            const tokenInfoDecoded:ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))
            const newData:IFeedbackData = {
              ...data,
              user:tokenInfoDecoded.user_id
            }
            //отправка обращения
            sendFeedback(newData)
            .then((response)=>{
              if(!response){
                navigate('/authorization')
                return
              }
              console.log(response);
              toast("Ваш запрос был отправлен!")
              reset()
            }).catch((er:any)=>{
              console.log(er);
              
              for (var key of Object.keys(er.response?.data)) {
                for(let errorText of er.response?.data[key]){
                  toast(errorText)
                }
              }
            })
            
        }else{
            //если у пользователя истек refresh токен, то выполняется переход на страницу авторизации
            navigate('/authorization')
        }
    })    
  }

  return (
    <div className=''>
      <ToastContainer/>
      <Header/>
      <div className='xs:h-[78px] md:h-[115px]'></div>

      <div className='relative'>
        <h2 className='pt-8 font-bold m-auto w-fit text-4xl lg:pt-16'>Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-col lg:gap-5 lg:items-center'>

             <input {...register("email", {
              required: "Поле обязательно к заполнению",
              }
            )} type="text" placeholder='E-mail' className='default-input min-w-[300px] max-w-[800px] w-full' maxLength={100}/>
            <span className='text-red-600'>
              {errors?.email && errors?.email?.message?.toString()} 
            </span>


            <input {...register("message", {
              required: "Поле обязательно к заполнению",
              }
            )} type="text" placeholder='Сообщение' className='default-input min-w-[300px] max-w-[800px] w-full' maxLength={100}/>
            <span className='text-red-600'>
              {errors?.message && errors?.message?.message?.toString()} 
            </span>
            
            <button className='rounded-xl bg-black text-white px-24 py-5 font-semibold mt-5 text-2xl'>Отправить</button>
      </form>
      </div>
      
      <Footer/>
    </div>
  )
}

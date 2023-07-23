import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {useForm } from 'react-hook-form';
import { sendFeedback } from '../../services/api/feedback';
import { ToastContainer,toast } from 'react-toastify';

export default function Feedback() {

  const {register, formState:{errors}, reset, handleSubmit} = useForm({
      mode:'onBlur'
    });

  function onSubmit(data:any){
    console.log(data);
    
    sendFeedback(data)
    .then((response)=>{
      console.log(response);
      toast("Ваш запрос был отправлен!")
      reset()
    }).catch((er:any)=>{
      for (var key of Object.keys(er.response?.data)) {
        for(let errorText of er.response?.data[key]){
          toast(errorText)
        }
      }
    })
  }

  return (
    <div className=''>
      <ToastContainer/>
      <Header/>
      <div className='pt-[78px] relative h-[100vh]'>
        <h2 className='pt-8 font-bold m-auto w-fit text-4xl lg:pt-16'>Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-col lg:gap-5 lg:items-center'>
              
            <input {...register("user", {
              required: "Поле обязательно к заполнению",
              }
            )} type="text" placeholder='Как к вам обращаться?' className='default-input min-w-[300px] max-w-[800px] w-full' maxLength={100}/>
            <span className='text-red-600'>
              {errors?.username && errors?.username?.message?.toString()} 
            </span>


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
            
            
{/*             
            <input type="text" placeholder='Как к вам обращаться?' className='default-input min-w-[300px] max-w-[800px] w-full' maxLength={100}/>
            <input type="email" placeholder='E-mail' className='default-input min-w-[300px] max-w-[800px] w-full' maxLength={100}/>
            <input type="text" placeholder='Сообщение' className='default-input min-w-[300px] max-w-[800px] w-full' maxLength={1000}/> */}
            <button className='rounded-xl bg-black text-white px-24 py-5 font-semibold mt-5 text-2xl'>Отправить</button>
      </form>
      </div>
      
      <Footer/>
    </div>
  )
}

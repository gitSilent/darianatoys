import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Feedback() {
  return (
    <div className=''>
      <Header/>
      <div className='pt-[78px] relative h-[100vh]'>
        <h2 className='pt-8 font-bold m-auto w-fit text-4xl lg:pt-16'>Свяжитесь с нами</h2>
        <form className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-col lg:gap-5 lg:items-center'>
            <input type="text" placeholder='Как к вам обращаться?' className='default-input' maxLength={100}/>
            <input type="email" placeholder='E-mail' className='default-input' maxLength={100}/>
            <input type="text" placeholder='Сообщение' className='default-input' maxLength={1000}/>
            <button className='rounded-xl bg-black text-white px-24 py-5 font-semibold mt-5 text-2xl'>Отправить</button>
      </form>
      </div>
      
      <Footer/>
    </div>
  )
}

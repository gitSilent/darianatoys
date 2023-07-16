import React from 'react'
import Header from '../../components/Header/Header'
import main_bg from '../../media/main_bg.jpg'
import leaf_icon from '../../media/leaf_icon.svg'
import safely_icon from '../../media/safely_icon.svg'
import heart_icon from '../../media/heart_icon.svg'
import toys from '../../media/toys.jpg'
import Footer from '../../components/Footer/Footer'

export default function Main() {
  return (
    <div>
        <Header/>
        <main>
          <div className='w-full h-[672px] relative md:h-[572px]'>
            <span className='absolute z-20 font-bold text-white text-6xl top-2/4 px-4 md:text-8xl'>МАГИЯ <br/> КРЮЧКОМ</span>
            <div className='absolute left-0 top-0 w-full h-full z-10 bg-black/70'></div>
            <img className='absolute left-0 top-0 w-full h-full z-0 object-cover' src={main_bg} alt="" />
          </div>
        
        <div className='bg-black py-8 flex flex-col gap-16 items-center md:flex-row md:justify-center md:gap-44'>
          <div className='text-white flex flex-col items-center'>
            <img src={leaf_icon} alt="" className='w-28'/>
            <span>Гипоаллергенно</span>
          </div>
          <div className='text-white flex flex-col items-center'>
            <img src={safely_icon} alt="" className='w-28'/>
            <span>Безопасно</span>
          </div>
          <div className='text-white flex flex-col items-center'>
            <img src={heart_icon} alt="" className='w-28'/>
            <span>С душой</span>
          </div>
        </div>

          <span className='block m-auto w-fit font-bold text-xl my-10'>Наши работы</span>

        <div className='flex flex-wrap flex-col items-center px-3 gap-5 md:flex-row md:m-auto md:justify-center'>
            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>
            
            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>

            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>

            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>

            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>
            
            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>

            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>

            <div className='w-full max-w-[550px] max-h-96 md:w-80'>
              <img src={toys} alt="" className='rounded-xl w-full h-full object-cover' />
            </div>
           
          </div>
        </main>
        
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

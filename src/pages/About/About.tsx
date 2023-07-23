import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import toy_1 from '../../media/toy_1.jpg'
import toy_2 from '../../media/toy_2.jpg'
import toy_3 from '../../media/toy_3.jpg'
import toy_4 from '../../media/toy_4.jpg'
import { textStyle } from '../../styles/style'

export default function About() {
  return (
    <div className='xs:pt-[78px] md:pt-[115px]'>
      <Header/>
      <h2 className={textStyle.titlesText}>О нас</h2>
      <div className='px-5 md:px-10'>

{/* 1 карточка */}

        <div className='flex flex-col items-center lg:flex-row lg:gap-9 lg:max-w-6xl lg:m-auto'>
          <img src={toy_1} alt="" />
          <div className='flex flex-col items-center gap-5'>
            <h3 className='font-bold uppercase text-2xl'>sodales libero interdum</h3>
            <p className='font-light text-2xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
          </div>
        </div>
            <hr className='h-[2px] w-3/4 m-auto bg-black/20' />

{/* 2 карточка */}

      <div className='flex flex-col items-center lg:flex-row-reverse lg:gap-9 lg:max-w-6xl lg:m-auto'>
          <img src={toy_2} alt="" />
          <div className='flex flex-col items-center gap-5'>
            <h3 className='font-bold uppercase text-2xl'>sodales libero interdum</h3>
            <p className='font-light text-2xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
          </div>
        </div>
            <hr className='h-[2px] w-3/4 m-auto bg-black/20' />

{/* 3 карточка */}

            <div className='flex flex-col mt-10 items-center lg:flex-row lg:gap-9 lg:max-w-6xl lg:m-auto lg:mt-10'>
          <img src={toy_3} alt="" />
          <div className='flex flex-col items-center gap-5'>
            <h3 className='font-bold uppercase text-2xl'>sodales libero interdum</h3>
            <p className='font-light text-2xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
          </div>
        </div>
            <hr className='h-[2px] w-3/4 m-auto bg-black/20' />

{/* 4 карточка */}

            <div className='flex flex-col mt-10 items-center lg:flex-row-reverse lg:gap-9 lg:max-w-6xl lg:m-auto lg:mt-10'>
          <img src={toy_4} alt="" />
          <div className='flex flex-col items-center gap-5'>
            <h3 className='font-bold uppercase text-2xl'>sodales libero interdum</h3>
            <p className='font-light text-2xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis varius metus, pulvinar laoreet sapien. Fusce id nisi eget nisl blandit suscipit. Nunc feugiat pulvinar mi, eu suscipit mauris rutrum semper. Ut sed mauris felis. Praesent hendrerit mi est, in sodales libero interdum in. In erat tortor, mattis in posuere in, vehicula non ipsum. In ac risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
          </div>
        </div>


       
      </div>
      <Footer/>
    </div>
  )
}

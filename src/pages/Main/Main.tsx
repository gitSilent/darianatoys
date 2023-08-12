import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import main_bg from '../../media/main_bg.jpg'
import leaf_icon from '../../media/leaf_icon.svg'
import safely_icon from '../../media/safely_icon.svg'
import heart_icon from '../../media/heart_icon.svg'
import Footer from '../../components/Footer/Footer'
import { textStyle } from '../../styles/style'
import { IProductPageInfo } from '../../types/types'
import { getProducts } from '../../services/api/products'
import { productsUrl } from '../../services/api/urls'
import { toast } from 'react-toastify'
import MainImage from '../../components/MainImage/MainImage'
import { toastifyErrorParams } from '../../services/toastParametres'

export default function Main() {

  const [toys, setToys] = useState<IProductPageInfo[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts(productsUrl)
      .then(data => {
        setToys(data.data.results)
        setIsLoading(false)
      })
      .catch(data => {
        toast.error(data.response.data, toastifyErrorParams)
        setIsLoading(false)
      })
  }, [])


  return (
    <div className='wrapper'>
      <Header />
      <main className='mainContainer'>
        <div className='w-full h-[672px] relative md:h-[572px]'>
          <span className='absolute z-20 font-bold text-white xs:text-5xl sm:text-6xl top-2/4 px-4 md:text-8xl md:left-10 '>МАГИЯ <br /> КРЮЧКОМ</span>
          <div className='absolute left-0 top-0 w-full h-full z-10 bg-black/70'></div>
          <img className='absolute left-0 top-0 w-full h-full z-0 object-cover' src={main_bg} alt="" />
        </div>

        <div className=' bg-zinc-800 py-8 flex flex-col gap-16 items-center md:flex-row md:justify-center md:gap-44'>
          <div className='text-white flex flex-col items-center'>
            <img src={leaf_icon} alt="" className='w-28' />
            <span className='mt-2'>Гипоаллергенно</span>
          </div>
          <div className='text-white flex flex-col items-center'>
            <img src={safely_icon} alt="" className='w-28' />
            <span className='mt-2'>Безопасно</span>
          </div>
          <div className='text-white flex flex-col items-center'>
            <img src={heart_icon} alt="" className='w-28' />
            <span className='mt-2'>С душой</span>
          </div>
        </div>

        <span className={textStyle.titlesText}>Наши работы</span>

        <div className='flex flex-wrap flex-col items-center px-3 gap-9 lg:flex-row lg:m-auto lg:justify-start max-w-5xl'>

          {toys?.slice(0, 6).map((item, idx) => {
            return <MainImage
              key={idx}
              photos={item?.photos}
              slug={item?.slug} />
          })}

        </div>
        
      </main>
      <Footer />
    </div>
  )
}

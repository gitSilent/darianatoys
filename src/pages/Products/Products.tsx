import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'

export default function Products() {
  return (
    <div className='pt-[78px]'>
      <Header/>
      <h2 className='font-bold m-auto w-fit text-xl lg:pt-16'>Товары</h2>
      <div className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center'>
        <ProductCard id="1" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="2" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="3" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="4" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="5" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="6" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="7" img="" desc="Плюшевый медведь" price="1500"/>
        <ProductCard id="8" img="" desc="Плюшевый медведь" price="1500"/>
        
      </div>
      <Footer/>
    </div>
  )
}

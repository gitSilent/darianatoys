import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getProducts } from '../../services/api/products'
import { IProduct, IProductPageInfo } from '../../types/types'
import { productsUrl } from '../../services/api/urls'
import { ToastContainer, toast } from 'react-toastify';
import { error } from 'console'

export default function Products() {

  const [toys, setToys] = useState<IProductPageInfo[]>()

  

  useEffect(() => {

    getProducts(productsUrl)
      .then(data => {
        console.log(data.data.results);
        
        setToys(data.data.results)
      })
      .catch(data => {
        console.log(data);
        toast.error(data.response.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      })

  }, [])

  useEffect(() => {
    console.log(toys);
    
  },[toys])

  return (
    <div className='pt-[78px]'>
      <Header />
      <ToastContainer/>
      <h2 className='font-bold m-auto w-fit text-xl lg:pt-16'>Товары</h2>
      <div className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center'>
        {toys?.map((item, idx) => {
          return <ProductCard 
          category={item.category}
          overall_rating={item.overall_rating}
          review={item.review}
          title={item.title}
          slug={item?.slug}
          photos={item?.photos}
          description={item?.description}
          cost={item?.cost} />
        })}
      </div>
      <Footer />
    </div>
  )
}

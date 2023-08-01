import { useEffect, useState } from 'react'
import { getProducts } from '../../services/api/products'
import { IProductPageInfo } from '../../types/types'
import { productsUrl } from '../../services/api/urls'
import { ToastContainer, toast } from 'react-toastify';
import { textStyle } from '../../styles/style'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/Loader'


export default function Products() {

  const [toys, setToys] = useState<IProductPageInfo[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts(productsUrl)
      .then(data => {
        setToys(data.data.results)
        setIsLoading(false)
      })
      .catch(data => {
        toast.error(data.response.data, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <main className='mainContainer'>
        <div className='xs:h-[78px] md:h-[115px]'></div>

        {isLoading ? <Loader />
          :
          <>
            <ToastContainer />
            <h2 className={textStyle.titlesText}>Товары</h2>
            <div className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center'>

              {toys?.map((item, idx) => {
                return <ProductCard key={idx} category={item.category} id={item.id} overall_rating={item.overall_rating} reviews={item.reviews} title={item.title} slug={item?.slug} photos={item?.photos} description={item?.description} cost={item?.cost} />
              })}
            </div>
          </>
        }
      </main>
      <Footer />
    </div>
  )
}


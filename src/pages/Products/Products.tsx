import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getProducts } from '../../services/api/products'
import { IProductPageInfo } from '../../types/types'
import { productsUrl } from '../../services/api/urls'
import { ToastContainer, toast } from 'react-toastify';
import { textStyle } from '../../styles/style'


export default function Products() {

  const [toys, setToys] = useState<IProductPageInfo[]>()

  useEffect(() => {

    getProducts(productsUrl)
      .then(data => {
        setToys(data.data.results)
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
      })

  }, [])

  useEffect(() => {
    console.log(toys);

  }, [toys])

  return (
    <div className='' >
      <Header />
      <div className='xs:h-[78px] md:h-[115px]'></div>
      <ToastContainer />
      <h2 className={textStyle.titlesText}>Товары</h2>
      <div className='mt-11 px-3 flex flex-col gap-5 items-center lg:flex-row lg:flex-wrap lg:gap-5 lg:justify-center'>
        {toys?.map((item, idx) => {
          return <ProductCard
            category={item.category}
            id={item.id}
            overall_rating={item.overall_rating}
            reviews={item.reviews}
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

function UseRef() {
  throw new Error('Function not implemented.')
}


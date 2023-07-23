import React, { useEffect, useState } from 'react'
import { IProduct, IProductPageInfo, ITokenInfoDecoded } from '../../types/types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import toys from '../../media/toys.jpg'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { productUrl, refreshTokenUrl } from '../../services/api/urls'
import { retriveProduct } from '../../services/api/products'
import { ToastContainer, toast } from 'react-toastify'
import { addToCart } from '../../services/api/cart'
import { instance } from '../../services/interceptor'
import { authCheck } from '../../services/api/authorization'


export default function Product() {

    const [parametres] = useSearchParams();
    const [toy, setToy] = useState<IProductPageInfo>()
    const [userInfoFromToken, setUserInfoFromToken] = useState<ITokenInfoDecoded>()
    const navigate = useNavigate()

    function handleCartBtn(){
        // проверяем факт авторизации пользователя
        authCheck()
        .then((response)=>{
            console.log(response);
            //если у пользователя не истек refresh токен, то обновляется access и выполняется добавление в корзину
            if (response){
                
                let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                console.log(accessToken);
                
                const tokenInfo = accessToken.split('.')[1]
                const tokenInfoDecoded:ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))
                setUserInfoFromToken(tokenInfoDecoded)
                
            }else{
                //если у пользователя истек refresh токен, то выполняется переход на страницу авторизации
                navigate('/authorization')
            }
        })
        
        // console.log({
        //     toy:toy?.category.id,
        //     user:userInfoFromToken?.user_id,
        //     amount:1
        // });
        
        addToCart({
            toy:toy?.category.id,
            user:userInfoFromToken?.user_id,
            amount:1
        }).then((response)=>{
            console.log(response);
            
            toast(response?.data?.responce)
        }).catch((er:any)=>{
            for (var key of Object.keys(er.response?.data)) {
                for(let errorText of er.response?.data[key]){
                  toast(errorText)
                }
              }
            })
    }
    

    useEffect(() => {
        retriveProduct(productUrl, parametres.get("id"))
            .then(data => {
                const productInfo:IProductPageInfo = data.data;
                console.log(productInfo);
                setToy(productInfo)

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
    }, [parametres])

    return (
        <div className='xs:mt-[6rem] lg:mt-[11rem]'>
            <Header />
            <ToastContainer />
            <div className='flex flex-col h-screen w-full max-w-4xl mx-auto'>
                <div className='lg:flex lg:flex-col lg:w-5xl'>
                    <div className='flex flex-col px-5 items-center lg:flex-row lg:gap-8 lg:justify-between lg:w-5xl lg:p-0'>
                        <img src={`http://plush-toy.shop/${toy?.photos[0].photo}`} alt="" className='w-full max-w-[500px] mb-5 object-cover rounded-xl lg:max-w-[400px]' />
                        <div className='mt-auto lg:min-w-[400px]'>
                            <div className='flex flex-col max-w-4xl items-center sm:justify-between md:flex-col md:justify-between gap-5  '>
                                <h3 className='font-bold text-2xl mb-3'>{toy?.slug}</h3>
                                <p className=''>{toy?.description}</p>
                                <span className='block p-3 border border-black/10 w-fit rounded-xl font-semibold text-xl mb-5 whitespace-nowrap'>{toy?.cost} р.</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full mb-10 gap-3 justify-center'>
                        <button className='px-5 py-3 w-full max-w-[200px] whitespace-nowrap bg-orange-500/50 font-semibold rounded-xl hover:bg-orange-500/70'>Купить</button>
                        <button onClick={handleCartBtn}className='flex flex-row justify-center px-5 py-3 w-full max-w-[200px] gap-2 items-center whitespace-nowrap bg-red-400 font-semibold rounded-xl hover:bg-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            В корзину
                        </button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { IProduct } from '../../types/types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import toys from '../../media/toys.jpg'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Product() {

    const [parametres] = useSearchParams();
    const[id, setId] = useState<string | null>("")
 
    useEffect(()=>{
        console.log(parametres.get("id"));
        setId(parametres.get("id"))
    },[parametres])

    const productsArr:IProduct[] = [
        { 
            "id":"1",
            "img": "",
            "desc":"description of this product",
            "price":"1800"
        },
        { 
            "id":"2",
            "img": "",
            "desc":"description of this product",
            "price":"1800"
        },
        { 
            "id":"3",
            "img": "",
            "desc":"description of this product",
            "price":"1800"
        },
        { 
            "id":"4",
            "img": "",
            "desc":"description of this product",
            "price":"1800"
        }
    ]
  return (
    <div className='mt-[125px]'>
        <Header/>
        <div className='flex flex-col h-screen w-full max-w-4xl mx-auto'>
            <div className='lg:flex lg:flex-col lg:w-5xl'>
                <div className='flex flex-col px-5 items-center lg:flex-row lg:gap-8 lg:justify-between lg:w-5xl lg:p-0'>
                    <img src={toys} alt="" className='w-full max-w-[500px] mb-5 object-cover rounded-xl lg:max-w-[400px]' />
                        <div className='mt-auto lg:min-w-[400px]'>
                            <div className='flex flex-col max-w-4xl items-center sm:flex-row sm:justify-between md:flex-row md:justify-between md:gap-5  '>
                                <h3 className='font-bold text-2xl mb-3'>Плюшевый медведь </h3>
                                <span className='block p-3 border border-black/10 w-fit rounded-xl font-semibold text-xl mb-5 whitespace-nowrap'>1 500 р.</span>
                            </div>

                            <div className='flex flex-row w-full mb-10 gap-3 justify-center'>
                                <button className='px-5 py-3 w-full max-w-[200px] whitespace-nowrap bg-orange-500/50 font-semibold rounded-xl hover:bg-orange-500/70'>Купить</button>
                                <button className='flex flex-row justify-center px-5 py-3 w-full max-w-[200px] gap-2 items-center whitespace-nowrap bg-red-400 font-semibold rounded-xl hover:bg-red-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                            <h3 className='font-bold text-xl mb-3 lg:hidden'>Описание</h3>
                            <p className='lg:hidden'>Уникальная и милейшая вязаная игрушка - идеальный спутник для всех возрастов!
                                Что делает наши игрушки такими особенными? Они выполнены только из высококачественных материалов, что гарантирует долговечность и безопасность использования. Вы можете быть уверены, что игрушка будет служить верным другом на протяжении многих лет.
                                Игрушки не только красиво выглядят, но и имеют практичное применение. Они станут неотъемлемой частью вашего интерьера, добавят уют и индивидуальный шарм в ваш дом. Кроме того, они идеально подходят для развития у детей моторики и воображения.
                            </p>
                        </div>
                    </div>
            </div>

            <div className='hidden lg:block lg:max-w-5xl'>
                <h3 className='font-bold text-xl mb-3'>Описание</h3>
                <p className=''>Уникальная и милейшая вязаная игрушка - идеальный спутник для всех возрастов!
                        Что делает наши игрушки такими особенными? Они выполнены только из высококачественных материалов, что гарантирует долговечность и безопасность использования. Вы можете быть уверены, что игрушка будет служить верным другом на протяжении многих лет.
                        Игрушки не только красиво выглядят, но и имеют практичное применение. Они станут неотъемлемой частью вашего интерьера, добавят уют и индивидуальный шарм в ваш дом. Кроме того, они идеально подходят для развития у детей моторики и воображения.
                    </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
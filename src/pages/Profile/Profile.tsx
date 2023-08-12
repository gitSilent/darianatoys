import { getPurchasesUrl } from '../../services/api/urls'
import { getPurchases } from '../../services/api/purchases'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import OrderCard from '../../components/OrderCard/OrderCard'
import { useEffect, useState } from 'react'
import { authCheck } from '../../services/api/authorization'
import { ITokenInfoDecoded, IUserFeedback, IUserInfoProfile, IUserOrder } from '../../types/types'
import { getProfileInfo, setNewUserInfo } from '../../services/api/profile'
import Loader from '../../components/Loader/Loader'
import { ToastContainer, toast } from 'react-toastify'
import { toastifySuccessParams } from '../../services/toastParametres'
import { getFeedback } from '../../services/api/feedback'
import ModalPurchase from '../../components/ModalPurchase/ModalPurchase'

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true)
  const [modalPurchasesActive, setModalPurchasesActive] = useState(false);
  const [orderInfoForModal, setOrderInfoForModal] = useState<IUserOrder>()

  const [userInfoFromToken, setUserInfoFromToken] = useState<ITokenInfoDecoded>()
  const [userInfoFromReq, setUserInfoFromReq] = useState<IUserInfoProfile>()
  const [userOrders, setUserOrders] = useState<IUserOrder[]>()
  const [userFeedback, setUserFeedback] = useState<IUserFeedback[]>()

  const [countryInput, setCountryInput] = useState<string>("")
  const [cityInput, setCityInput] = useState<string>("")

  const navigate = useNavigate();

  useEffect(() => {

    authCheck()
      .then((response) => {
        if (response) {
          let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");

          const tokenInfo = accessToken.split('.')[1]
          const tokenInfoDecoded: ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))
          setUserInfoFromToken(tokenInfoDecoded)

        } else {
          navigate('/authorization')
        }
      })

    //здесь приходят заказы пользователя
    getPurchases(getPurchasesUrl)
      .then((resp) => {
        setUserOrders(resp.data)
        setIsLoading(false)

      })

    getFeedback()
      .then((resp) => {
        console.log(resp);
        setUserFeedback(resp.data)
      })
  }, [])

  //получение информации о пользователе для личного кабинета
  useEffect(() => {

    if (userInfoFromToken) {
      getProfileInfo(userInfoFromToken.user_id)
        .then((resp) => {
          setUserInfoFromReq(resp.data)

          setCountryInput(resp.data.country)
          setCityInput(resp.data.town)
        })

    }

  }, [userInfoFromToken])


  function exitAccount() {
    let cookieAccess = `access=""; expires= Thu, 01 Jan 1970 00:00:00 GMT}`
    let cookieRefresh = `refresh=""; expires= Thu, 01 Jan 1970 00:00:00 GMT}`

    document.cookie = cookieAccess;
    document.cookie = cookieRefresh;

    navigate('/authorization')
  }

  function applyChanges() {
    setNewUserInfo(userInfoFromToken?.user_id, countryInput, cityInput)
      .then((resp) => {
        if (userInfoFromToken) {
          getProfileInfo(userInfoFromToken.user_id)
            .then((resp) => {
              setUserInfoFromReq(resp.data)

              setCountryInput(resp.data.country)
              setCityInput(resp.data.town)

              toast.success("Данные успешно изменены", toastifySuccessParams)

            })
        }

      })
  }

  return (
    <div className='wrapper'>
      <ModalPurchase active={modalPurchasesActive} setActive={setModalPurchasesActive} purchaseInfo={orderInfoForModal} />
      <Header />
      <ToastContainer />
      {isLoading ? <Loader />
        :
        <>
          <main className='mainContainer pb-10'>
            <div className='xs:h-[78px] md:h-[115px]'></div>

            <h2 className='font-bold m-auto w-fit text-xl my-10'>Личные данные</h2>
            <div className='flex flex-col w-full px-5 gap-5 m-auto h-[100vh] lg:w-3/4 lg:max-w-3xl'>

              <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
                <span className='block w-fit font-semibold text-xl'>Логин</span>
                <input type="text" className='default-input w-full lg:w-[400px]' disabled={true} defaultValue={userInfoFromReq?.user} />
              </div>

              <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
                <span className='block w-fit font-semibold text-xl'>Страна</span>
                <input onChange={(e) => {
                  setCountryInput(e.target.value)
                }}
                  type="email" className='default-input w-full lg:w-[400px]' disabled={false} defaultValue={userInfoFromReq?.country} />
              </div>

              <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
                <span className='block w-fit font-semibold text-xl'>Город</span>
                <input onChange={(e) => {
                  setCityInput(e.target.value)
                }} type="email" className='default-input w-full lg:w-[400px]' disabled={false} defaultValue={userInfoFromReq?.town} />
              </div>


              {/* СМЕНА ПАРОЛЯ */}

              {/* <div className='flex flex-col gap-3 lg:flex-row justify-between lg:gap-10 items-center'>
                <span className='block w-fit font-semibold text-xl'>Пароль</span>
                <button className='px-5 py-3 bg-orange-500/50 font-semibold rounded-xl hover:bg-orange-500/70'>Сменить пароль</button>
              </div> */}

              {
                userInfoFromReq?.country !== countryInput || userInfoFromReq?.town !== cityInput
                  ?
                  <button className='px-5 py-3 bg-green-500/50 font-semibold rounded-xl hover:bg-green-500/70' onClick={applyChanges}>Применить изменения</button>
                  :
                  <></>
              }
              <button className='px-5 py-3 bg-red-500/50 font-semibold rounded-xl hover:bg-red-500/70' onClick={exitAccount}>Выйти</button>

              <h2 className='font-bold mx-auto w-fit text-xl lg:pt-16'>Мои заказы</h2>

              {userOrders?.length !== 0 ?
                userOrders?.map((item, idx) => (
                  <OrderCard key={item.id} orderInfo={item} setModalActive={setModalPurchasesActive} setOrderInfoForModal={setOrderInfoForModal} />
                ))
                :
                <h3 className="mt-14 text-xl mx-auto w-fit">Нет заказов</h3>
              }

              <h2 className='font-bold mx-auto w-fit text-xl lg:pt-16'>Мои обращения</h2>
              <div className="pb-12">
                {userFeedback?.length !== 0 ?
                  userFeedback?.map((item, idx) => (
                    <div className="flex flex-col w-full min-h-fit p-5 rounded-xl shadow-md border lg:p-9">
                      <span className="font-bold">Обращение №{idx + 1}</span>
                      <p>{item.message}</p>
                    </div>

                  ))
                  :
                  <h3 className="mt-3 text-xl mx-auto w-fit">Нет обращений</h3>
                }
              </div>


            </div>
          </main>
        </>
      }
      <Footer />
    </div>
  )
}

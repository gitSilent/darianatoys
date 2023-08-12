import { useForm } from 'react-hook-form';
import { sendFeedback } from '../../services/api/feedback';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authCheck } from '../../services/api/authorization';
import { IFeedbackData, ITokenInfoDecoded, IUserInfoProfile } from '../../types/types';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { toastifyErrorParams, toastifyNotificationParams } from '../../services/toastParametres';
import { useEffect, useState } from 'react';
import { getProfileInfo } from '../../services/api/profile';

export default function Feedback() {
  const navigate = useNavigate()
  
  // const [userInfoFromToken, setUserInfoFromToken] = useState<ITokenInfoDecoded>()
  const [userInfoFromReq, setUserInfoFromReq] = useState<IUserInfoProfile>()

  const [isAuthorized, setIsAuthorized] = useState(false)

  const { register, formState: { errors }, reset, handleSubmit } = useForm({
    mode: 'onBlur'
  });

  useEffect(() => {
    authCheck()
    .then((response) => {
        if (response) {
            let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");

            const tokenInfo = accessToken.split('.')[1]
            const tokenInfoDecoded: ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))

            getProfileInfo(tokenInfoDecoded.user_id)
            .then((resp)=>{
              setUserInfoFromReq(resp.data)
              console.log(resp.data);
              
            })
            setIsAuthorized(true)

        } else {
            setIsAuthorized(false)
        }
    })
  }, [])
  
  function onSubmit(data: any) {
    authCheck()
      .then((response) => {
        //если у пользователя не истек refresh токен, то обновляется access и выполняется отправка обращения
        if (response) {

          let accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)access\s*\=\s*([^;]*).*$)|^.*$/, "$1");

          const tokenInfo = accessToken.split('.')[1]
          const tokenInfoDecoded: ITokenInfoDecoded = JSON.parse(window.atob(tokenInfo))
          
          let newData: IFeedbackData;
          
          // if(userInfoFromReq){
          //   newData = {
          //     ...data,
          //     user: tokenInfoDecoded.user_id,
          //     email: userInfoFromReq.email
          //   }
          // }else{
            newData = {
              ...data,
              user: tokenInfoDecoded.user_id
            // }
          }
          //отправка обращения
          sendFeedback(newData)
            .then((response) => {
              if (!response) {
                navigate('/authorization')
                return
              }
              toast("Ваш запрос был отправлен!", toastifyNotificationParams)
              reset()
            }).catch((er: any) => {

              for (var key of Object.keys(er.response?.data)) {
                for (let errorText of er.response?.data[key]) {
                  toast(errorText, toastifyErrorParams)
                }
              }
            })


        } else {
          //если у пользователя истек refresh токен, то выполняется переход на страницу авторизации
          navigate('/authorization')
        }
      })
  }

  return (
    <div className='wrapper'>
      <ToastContainer />
      <Header />
      <main className='mainContainer'>
        <div className='h-[78px] md:h-[115px]'></div>

        <div className='relative'>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-11 px-3 flex flex-col gap-3 items-center lg:flex-col lg:gap-3 lg:items-center'>
          <h2 className='pt-8 font-bold m-auto w-fit xs:text-3xl sm:text-4xl lg:pt-16 mb-7'>Свяжитесь с нами</h2>

            {!isAuthorized ? 
              <>
                <input {...register("email", {
                  required: "Поле обязательно к заполнению",
                }
                )} type="text" placeholder='E-mail' className='default-input min-w-[230px] max-w-[600px] w-full' maxLength={100} />
                <span className='text-red-600'>
                  {errors?.email && errors?.email?.message?.toString()}
                </span>
              </>
              :
              <></>
            }

            <input {...register("message", {
              required: "Поле обязательно к заполнению",
            }
            )} type="text" placeholder='Сообщение' className='default-input min-w-[230px] max-w-[600px] w-full' maxLength={100} />
            <span className='text-red-600'>
              {errors?.message && errors?.message?.message?.toString()}
            </span>

            <button className='rounded-xl bg-black text-white px-12 py-3 text-xl sm:px-24 '>Отправить</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>

  )
}

import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../media/logo.svg'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import { authUser } from '../../services/api/authorization';
import { addMinutes } from '../../services/serviceFuncs/addMinutes';
import { getPurchases } from '../../services/api/purchases';
import { getPurchasesUrl } from '../../services/api/urls';
export default function Authorization() {

    const navigate = useNavigate();

    const {register, formState:{errors}, reset, handleSubmit} = useForm({
      mode:'onBlur'
    });


    // function addMinutes(date:Date, minutes:number) {
    //   date.setMinutes(date.getMinutes() + minutes);
    
    //   return date.toUTCString();
    // }

    function onSubmit(data:any){

      authUser(data)
      .then((response)=>{
        console.log(response);

        let currentDate = new Date();
        let cookieAccess = `access=${response.data.access}; expires=${addMinutes(currentDate,15)}`
        let cookieRefresh = `refresh=${response.data.refresh}; expires=${addMinutes(currentDate,1440)}`

        // navigate('/products')

        document.cookie = cookieAccess;
        document.cookie = cookieRefresh;

        console.log(cookieAccess);
        console.log(cookieRefresh);

        navigate('/')

      })
      .catch((er:any)=>{
        console.log(er);

        for (var key of Object.keys(er.response?.data)) {
          // console.log(er.response?.data[key]);
          if(Array.isArray(er.response?.data[key])){
            for(let errorText of er.response?.data[key]){
              toast(errorText)
            }
          }else{
            toast(er.response?.data[key])
          }
        }
      })     
      
    }

    useEffect(() => {
    
    }, [])

  return (
    <div className=''>
      <ToastContainer/>
        <Link className='' to={'/'}>
            <img className="w-15 mx-auto mt-3" src={logo} alt="logo"/> 
        </Link>
{/* Инпут username */}

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center mt-[125px] px-5 gap-3 md:w-[500px] mx-auto'>
            <h1 className='w-fit font-bold text-4xl mb-5'>Авторизация</h1>

            <input {...register("username", {
              required: "Поле обязательно к заполнению"
              }
            )} type="text" placeholder='Имя пользователя' className='default-input w-full' maxLength={100}/>
            <span className='text-red-600'>
              {errors?.username && errors?.username?.message?.toString()} 
            </span>
{/* __________________ */}

{/* Инпут password */}
            <input {...register("password", {
              required: "Поле обязательно к заполнению"
              }
            )} type="password" placeholder='Пароль' className='default-input w-full' maxLength={100}/>
            <span className='text-red-600'>
              {errors?.email && errors?.email?.message?.toString()} 
            </span>
{/* __________________ */}


            <input type="submit" className='rounded-xl bg-black text-white px-10 py-3 font-semibold mt-5 text-xl hover:cursor-pointer' value="Войти" />
            <span className='block w-fit'>Есть созданный профиль?</span>
            <span className='block w-fit'><u onClick={()=>{navigate('/registration')}} className='hover:cursor-pointer'>Зарегистрироваться</u></span>
        </form>

    </div>
  )
}

import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { authUser } from '../../services/api/authorization';
import { addMinutes } from '../../services/serviceFuncs/addMinutes';
import { LogoSvg } from '../../media/svgIcons';


export default function Authorization() {

  const navigate = useNavigate();

  const { register, formState: { errors }, reset, handleSubmit } = useForm({
    mode: 'onBlur'
  });

  function onSubmit(data: any) {

    authUser(data)
      .then((response) => {
        let currentDate = new Date();
        let cookieAccess = `access=${response.data.access}; expires=${addMinutes(currentDate, 15)}`
        let cookieRefresh = `refresh=${response.data.refresh}; expires=${addMinutes(currentDate, 1440)}`

        document.cookie = cookieAccess;
        document.cookie = cookieRefresh;

        navigate('/')

      })
      .catch((er: any) => {

        for (var key of Object.keys(er.response?.data)) {
          if (Array.isArray(er.response?.data[key])) {
            for (let errorText of er.response?.data[key]) {
              toast(errorText)
            }
          } else {
            toast(er.response?.data[key])
          }
        }
      })

  }

  useEffect(() => {

  }, [])

  return (
    <div className=''>
      <ToastContainer />

      {/* Инпут username */}

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[500px] items-center mt-[125px] px-5 gap-3 mx-auto'>
        <Link className='' to={'/'}>
          <div className="w-15 mx-auto mb-16">{LogoSvg}</div>
        </Link>
        <h1 className='w-fit font-bold text-3xl mb-5'>Авторизация</h1>

        <input {...register("username", {
          required: "Поле обязательно к заполнению"
        }
        )} type="text" placeholder='Имя пользователя' className='default-input w-full' maxLength={100} />
        <span className='text-red-600'>
          {errors?.username && errors?.username?.message?.toString()}
        </span>
        {/* __________________ */}

        {/* Инпут password */}
        <input {...register("password", {
          required: "Поле обязательно к заполнению"
        }
        )} type="password" placeholder='Пароль' className='default-input w-full' maxLength={100} />
        <span className='text-red-600'>
          {errors?.email && errors?.email?.message?.toString()}
        </span>
        {/* __________________ */}


        <input type="submit" className='rounded-xl bg-black text-white px-10 py-3 font-semibold mt-5 text-xl hover:cursor-pointer' value="Войти" />
        <span className='block w-fit'>Есть созданный профиль?</span>
        <span className='block w-fit'><u onClick={() => { navigate('/registration') }} className='hover:cursor-pointer'>Зарегистрироваться</u></span>
      </form>

    </div>
  )
}

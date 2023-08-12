import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/api/registration';
import { ToastContainer, toast } from 'react-toastify';
import { LogoSvg, arrowBack } from '../../media/svgIcons';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyErrorParams } from '../../services/toastParametres';

export default function Registration() {
  const navigate = useNavigate();
  const repeatPassRef = useRef<HTMLInputElement>(null)

  const { register, formState: { errors }, reset, handleSubmit } = useForm({
    mode: 'onBlur'
  });

  function onSubmit(data: any) {

    if (data.password === repeatPassRef.current?.value) {

      registerUser(data)
        .then((response) => {
          navigate('/authorization')
        }).catch((er: any) => {

          for (var key of Object.keys(er.response?.data)) {
            for (let errorText of er.response?.data[key]) {
              toast.error(errorText, toastifyErrorParams)
            }
          }
        })
    } else {
      toast("Пароли не совпадают", toastifyErrorParams)
    }


  }

  return (
    <div>
      <div onClick={()=>{navigate('/')}} className="w-10 h-10 absolute top-4 left-3 lg:top-5 lg:left-5 " >
        {arrowBack}
      </div>
      <ToastContainer />

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[500px] items-center mt-[125px] px-5 gap-3 md:w-[500px] mx-auto'>
        <Link className='' to={'/'}>
          <div className="w-15 mx-auto mb-16">{LogoSvg}</div>
        </Link>
        <h1 className='w-fit font-bold text-3xl mb-5'>Регистрация</h1>

        <input {...register("username", {
          required: "Поле обязательно к заполнению",
          minLength: {
            value: 5,
            message: "Минимум 5 символов"
          }
        }
        )} type="text" placeholder='Имя пользователя' className='default-input w-full' maxLength={100} />
        <span className='text-red-600'>
          {errors?.username && errors?.username?.message?.toString()}
        </span>

        {/* Инпут username */}
        <input {...register("email", {
          required: "Поле обязательно к заполнению",
          minLength: {
            value: 5,
            message: "Минимум 5 символов"
          }
        }
        )} type="text" placeholder='E-mail' className='default-input w-full' maxLength={100} />
        <span className='text-red-600'>
          {errors?.email && errors?.email?.message?.toString()}
        </span>
        {/* __________________ */}

        {/* Инпут email */}
        <input {...register("password", {
          required: "Поле обязательно к заполнению",
          minLength: {
            value: 5,
            message: "Минимум 5 символов"
          }
        }
        )} type="password" placeholder='Пароль' className='default-input w-full' maxLength={100} />
        <span className='text-red-600'>
          {errors?.password && errors?.password?.message?.toString()}
        </span>
        {/* _________________ */}

        {/* Инпут password */}
        <input ref={repeatPassRef} type="password" placeholder='Повторите пароль' className='default-input w-full' maxLength={100} />

        {/* _________________ */}

        <input type="submit" className='rounded-xl bg-black text-white px-5 xs:px-10 py-3 font-semibold mt-5 text-xl hover:cursor-pointer' value="Зарегистрироваться" />
        <span className='block'>Уже есть созданный профиль? <u className='hover:cursor-pointer' onClick={() => { navigate('/authorization') }}>Войти</u></span>
      </form>
    </div>
  )
}

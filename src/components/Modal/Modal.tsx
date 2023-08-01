import React, { Children, Dispatch, SetStateAction } from 'react'

interface IProps{
    active:boolean,
    setActive:Dispatch<SetStateAction<boolean>>
}

//переиспользуемый компонент для создания модальных окон

export default function Modal({active, setActive,children}:React.PropsWithChildren<IProps>) {
    const modalStyles = 'flex bg-black/50 fixed top-0 left-0 w-[100vw] h-[100vh] z-50 justify-center items-center'
  return (
    <div onClick={()=>{setActive(false)}} className={active ? modalStyles : "hidden"}>
        <div onClick={(e)=>{e.stopPropagation()}} className='p-8 md:py-10 px-5 bg-white w-fit h-fit rounded-xl'>
            {children}
        </div>
    </div>
  )
}

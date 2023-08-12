import React, { Children, Dispatch, SetStateAction } from 'react'
import "./Modal.css"
interface IProps {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
}

//переиспользуемый компонент для создания модальных окон

export default function Modal({ active, setActive, children }: React.PropsWithChildren<IProps>) {
  const modalStyles = 'flex bg-black/50 fixed top-0 left-0 w-[100vw] h-[100vh] z-50 justify-center items-center'

  const modalFit = {
    manyEl: "p-8 lx:py-10 px-5 bg-white xs:max-mx:w-[90vw] mx:w-[60vw] lx:w-[60vw] w-fit h-[60vh] rounded-xl overflow-y-auto overflow-x-hidden modal-scroll position: relative",
    oneEl: "p-8 lx:py-10 px-5 bg-white xs:max-mx:w-[90vw] mx:w-[60vw] lx:w-[60vw] w-fit h-fit rounded-xl overflow-y-auto overflow-x-hidden modal-scroll position: relative"
  }

  return (
    <div onClick={() => { setActive(false) }} className={active ? modalStyles : "hidden"}>
      <div onClick={(e) => { e.stopPropagation() }} className={modalFit.manyEl}>
        {children}
      </div>
    </div>
  )
}

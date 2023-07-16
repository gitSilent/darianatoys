import React, {useEffect,useState} from 'react'

export default function Footer() {
  const [classes, setClasses] = useState('flex flex-col py-4 px-5 bg-black w-full h-28 mt-11 text-white items-center justify-center')
  
  useEffect(() => {
    console.log(window.location.href.indexOf("feedback") >= 0);
    if (window.location.href.indexOf("feedback") >= 0){
      setClasses('flex flex-col py-4 px-5 bg-black w-full h-28 mt-11 text-white items-center justify-center absolute bottom-0')
    }
  }, [])

  
  return (
    <div className={classes}>
      <span>&copy; 2023 DARIANATOYS</span>
      <span>Все права защищены</span>
    </div>
  )
}

import React from 'react'
import { RxExit } from "react-icons/rx";

interface typeofLogout{
  logout:string|null
  Logout: React.MouseEventHandler<HTMLSpanElement>
}


const ButtonSigOut:React.FC<typeofLogout> = ({logout,Logout}) => {
  

  return (
    <div className=' h-20 pl-5 w-full flex items-center justify-start bg-white shadow-[0_35px_50px_15px_rgba(0,0,0,0.2)] rounded-3xl '>
        <span onClick={Logout} className='flex text-orange-500 items-center gap-5 text-xl'>
          <RxExit className='text-3xl' />{ logout? "Sig Out":"Resign Acconunt" }</span>
    </div>
  )
}

export default ButtonSigOut

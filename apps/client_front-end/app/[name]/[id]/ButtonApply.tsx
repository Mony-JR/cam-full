
import Data2 from '@/TypeofData/TypeofData';
import Link from 'next/link';
import React from 'react'
import { MdMessage } from "react-icons/md";


const ButtonApply:React.FC<Data2> = ({id,handleClick}) => {


  return (
    <div className=' fixed pl-5 pr-5 w-full h-20 flex justify-center gap-3 items-center bottom-0 z-30 bg-white '>
      <button onClick={handleClick}  className='bg-red-400 p-3 w-full rounded-3xl text-white '>Apply Now</button>
      <span className=' p-3  text-red-400 text-xl bg-white drop-shadow-2xl rounded-2xl '><Link href={`${id}/message`}> <MdMessage /></Link> </span>
    </div>  
  )
}

export default ButtonApply

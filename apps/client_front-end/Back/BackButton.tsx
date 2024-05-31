import React from 'react'
import { IoArrowBack } from "react-icons/io5";


const BackButton = () => {
  return (
    <div className='w-full h-10 '>
      <span className='text-3xl'><IoArrowBack /></span>
    </div>
  )
}

export default BackButton

export const BackButton_md = () => {
  return (
    <div className='w-full h-10 '>
      <span className='text-2xl '><IoArrowBack /></span>
    </div>
  )
}
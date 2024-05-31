import BackButton from '@/Back/BackButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import apple from "@/Icon_social/apple-logo.png"
import google from "@/Icon_social/search.png"
import facebook from "@/Icon_social/facebook.png"
import Connect from './Connect'

const Register = () => {
  return (
    <div className='flex flex-col gap-5 '>
      <div >
        <Link className='w-full pl-6 h-[100px] flex justify-center items-center ' href={"../"}><BackButton/></Link>
      </div>
      <div className='flex w-full h-full flex-col mt-5 justify-center items-center gap-5 '>
        <h1 className='text-xl mb-10 '>Register Account</h1>
        <input className='p-4 pl-6 outline-none shadow-lg w-10/12 rounded-xl ' type="text" placeholder='Sur Name' />
        <input className='p-4 pl-6 outline-none shadow-lg w-10/12 rounded-xl ' type="text" placeholder='last Name' />
        <input className='p-4 pl-6 outline-none shadow-lg w-10/12 rounded-xl ' type="text" placeholder='Phone Number,Email' />
        <input className='p-4 pl-6 outline-none shadow-lg w-10/12 rounded-xl ' type="text" placeholder='Password' />

        <div className='flex gap-2'>
        <h3>Have an account already? </h3>  
        <Link href={"/login"} className=' text-orange-500 '> Sign in</Link>         
        </div>

      </div>
      <div>
        <Connect/>
      </div>

      
    </div>
  )
}

export default Register

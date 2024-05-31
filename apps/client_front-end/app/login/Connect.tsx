import React from 'react'
import apple from "@/Icon_social/apple-logo.png"
import google from "@/Icon_social/search.png"
import facebook from "@/Icon_social/facebook.png"
import Image from 'next/image'

const Connect = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex w-full justify-center gap-2 items-center '>
                <hr className='h-1 w-[40%] ' />
                <h3>or</h3>
                <hr className='h-1 w-[40%] ' />
            </div>
            <div className='flex flex-col gap-5 justify-center items-center '>
                <button
                    className='p-4 flex items-center justify-start pl-10 gap-10 bg-white shadow-xl w-10/12 rounded-2xl 
         '>
                    <Image src={facebook} alt="Facebook" width={20} height={20} /> Sign in with Facebook
                </button>
                <button
                    className='p-4 flex items-center justify-start pl-10 gap-10 bg-white shadow-xl w-10/12 rounded-2xl 
         '>
                    <Image src={google} alt="Facebook" width={20} height={20} /> Sign in with Google
                </button>
                <button
                    className='p-4 flex items-center justify-start pl-10 gap-10 bg-white shadow-xl w-10/12 rounded-2xl 
         '>
                    <Image src={apple} alt="Facebook" width={20} height={20} /> Sign in with Apple ID
                </button>
            </div>
        </div>
    )
}

export default Connect

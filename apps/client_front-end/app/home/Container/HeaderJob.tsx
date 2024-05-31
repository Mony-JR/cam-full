'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdNotifications } from 'react-icons/md'
import { TbMenuDeep } from 'react-icons/tb'
import Popup from './Popup'

const HeaderJob:React.FC = () => {

    const [pop1, setPop] = useState(true);  


    return (
        <div className='Cato w-11/12 h-40
        rounded-2xl flex-col justify-between
         flex items-center'>

            <div className='flex justify-between
         w-full h-full items-center'>
                <div className="location flex flex-col 
          justify-center gap-5 w-full h-full items-start">
                    <select className='text-white
             mt-2 ml-5 bg-inherit outline-none '>
                        <option selected>Pnhom phenh</option>
                        <option>Siem Reap</option>
                    </select>
                    <label className='text-white pl-6'>This job</label>
                </div>
                <span className='mt-5 mr-3 w-20 h-14 
          text-3xl bg-white rounded-full flex 
          justify-center items-center text-[red]'><MdNotifications /></span>
            </div>
            <div className='flex
        gap-3
         justify-start items-center 
        w-full h-full'>

        <Link className=' w-full flex flex-col items-center justify-center relative' href={"/Search"}> 
         <button  className='text-xl absolute left-5 desktop:left-10 z-10
          flex items-center justify-center p-4 Cato 
           rounded-full text-white pointer-events-none '><IoSearch /></button>
        <input placeholder='hello' type='text' className='p-4
           placeholder:text-gray-400
            rounded-2xl text-black input r
           elative w-[95%] outline-none pl-20' /> </Link>
          <span role='button' onClick={() => setPop(!pop1)} className='text-xl p-2 
          absolute right-[10%] '><TbMenuDeep /></span>
          
        </div>
        <Popup setUp={setPop} up={pop1} />
        </div>
    )
}

export default HeaderJob

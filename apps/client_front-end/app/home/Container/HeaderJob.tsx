'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdNotifications } from 'react-icons/md'
import { TbMenuDeep } from 'react-icons/tb'
import Popup from './Popup'
import Image from 'next/image'
import logoTeam from "@/public/logo.png"
import ButtonLanguage from '@/ChangLanguage/ButtonLanguage'

const HeaderJob: React.FC = () => {

    const [pop1, setPop] = useState(true);


    return (
        <div className=' w-full h-44 pl-4 pr-4 mb-5 '>
            <div className=' rounded-2xl bg-mybg-linear w-full h-full flex flex-col justify-between items-center'>
                <div className='w-full m-[-20px] flex justify-start'>
                    <Image className='bg-red-500 rounded-[30px] rounded-e-[50px] ' src={logoTeam} alt={'logo'} width={100} />
                </div>

                <div className='flex justify-between mt-5
         w-full h-full items-center'>
                    <div className="location flex flex-col 
          justify-center gap-5 w-full h-full items-start pl-5 ">
                        <select className='text-white
             mt-3 bg-inherit outline-none '>
                            <option selected>Phnom penh</option>
                            <option>Siem Reap</option>
                        </select>
                        <div className='w-10 h-5  '>
                        <ButtonLanguage/>                            
                        </div>

                    </div>
                    <span className=' w-20 h-14 mr-5
          text-3xl bg-white rounded-full flex 
          justify-center items-center text-[red] '><MdNotifications /></span>
                </div>
                <div className='flex gap-3 justify-start items-center w-full h-full'>

                    <Link className=' w-full flex mt-5 flex-col items-center justify-center relative' href={"/Search"}>
                        <button className='text-xl absolute left-5 desktop:left-10 z-10
          flex items-center justify-center p-4 bg-mybg-linear
           rounded-full text-white pointer-events-none '><IoSearch /></button>
                        <input placeholder='hello' type='text' className='p-4
           placeholder:text-gray-400 shadow-md
            rounded-2xl text-black input relative w-[95%] outline-none pl-20' /> </Link>
                    <span role='button' onClick={() => setPop(!pop1)} className='text-xl p-2 
          absolute mt-5  right-[10%] '><TbMenuDeep /></span>
                </div>
            </div>
            <Popup setUp={setPop} up={pop1} />
        </div>
    )
}

export default HeaderJob

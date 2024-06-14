import React from 'react'
import Image from 'next/image'

import { MdCalendarToday } from "react-icons/md";
import Data2 from '@/TypeofData/TypeofData';

const CardApply: React.FC<Data2> = ({ txt, logo, location, position, date ,styles}: Data2) => {
    return (
        <div className={` ${styles} w-full h-full rounded-3xl
         bg-white shadow-md pl-5 pr-5 
         flex flex-col pt-7 pb-4
         justify-between items-center `}>
            <div className='w-full flex justify-start gap-5 items-center '>
                <div className=' w-[100px] h-[100px] flex justify-center items-center bg-white rounded-full shadow-2xl '>
                    <Image src={logo||""} width={50} height={50} alt='logo' />
                </div>
                <div className='flex flex-col gap-5 justify-center h-full'>
                    <div className='w-full  '>
                        <h1>{txt}</h1>
                        <p className='text-gray-400 '>{location}</p>
                    </div>
                    <p className='text-gray-400'>{position} Job Opening </p>
                </div>

            </div>
            <div className='w-full flex justify-between '>
                <span className=' flex text-red-500 items-center gap-2 text-sm'><MdCalendarToday />{date}</span>
                <p className='text-gray-400 text-sm '>2 hour ago</p>
            </div>

        </div>
    )
}

export default CardApply

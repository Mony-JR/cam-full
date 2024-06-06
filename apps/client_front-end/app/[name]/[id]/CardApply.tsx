import React from 'react'
import Image from 'next/image'
import Data2 from '@/TypeofData/TypeofData'


const CardApply: React.FC<Data2> = ({ txt, logo, location, position, date ,styles}: Data2) => {
    return (
        <div className={` ${styles} w-full h-full rounded-3xl
         bg-white shadow-2xl pl-5 pr-5 
         flex flex-col pt-7 pb-4
         justify-between items-center `}>
            <div className='w-full flex justify-start items-center '>
                <div className=' w-[130px] h-[130px] flex justify-center items-center bg-white rounded-full shadow-2xl '>
                    <Image src={logo||""} width={80} height={80} alt='logo' />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='w-full h-24 '>
                        <h1>{txt}</h1>
                        <p className='text-gray-400 '>{location}</p>
                    </div>
                    <p className='text-gray-400'>{position} Job Opening </p>
                </div>

            </div>
            <div className='w-full flex justify-between '>
                <span className='text-red-500 text-xl'>{date}</span>
                <p className='text-gray-400'>2 hour ago</p>
            </div>

        </div>
    )
}

export default CardApply

import Data2 from '@/TypeofData/TypeofData'
import React from 'react'
import Image from 'next/image'
import { BackButton_md } from '@/Back/BackButton'
import Link from 'next/link'

const CardMessage: React.FC<Data2> = ({ logo, txt, location }) => {
    return (
        <div className='w-full pl-5 flex justify-start gap-5 h-32 bg-white drop-shadow-md items-center '>
            <Link href={"./"}> <BackButton_md /></Link>

            <div className=' w-[80px] h-[80px] flex justify-center items-center bg-white rounded-full drop-shadow-xl  '>
                <Image src={logo || ""} width={50} height={50} alt='logo' />
            </div>
            <div className='flex flex-col justify-center gap-3 h-full'>
                <h1>{txt}</h1>
                <p>{location}</p>
            </div>

        </div>
    )
}

export default CardMessage

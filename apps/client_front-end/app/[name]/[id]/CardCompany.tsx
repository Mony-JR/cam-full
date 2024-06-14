import React from 'react'
import Image from 'next/image'
import Data2 from '@/TypeofData/TypeofData'


const CardCampany:React.FC<Data2> = ({logo}) => {
    return (
        <div className={` w-full h-full rounded-3xl
        bg-white shadow-md pl-5 pr-5 
        flex flex-col pt-7 pb-4 gap-5
        justify-between items-start `}>
            <h1 className=' font-medium '>Job Publicsher</h1>
           <div className='w-full flex justify-center gap-1 items-center '>
               <div className=' w-[70px] h-[70px] flex justify-center items-center
               shadow-xl
               overflow-hidden bg-white rounded-full '>
                 <Image width={50} height={50} src={logo||""} alt='Loog'/>
                   
               </div>
               <div className='flex text-sm flex-col gap-5 justify-between h-full'>
                   <div className='w-full'>
                       <h1>Job Insurance Broker Cambodia </h1>
                       <p className='text-gray-400 '>Phnom Penh</p>
                   </div>
                   <div className='w-full'>
                       <h1>+855 16xxxxxxxx </h1>
                       <p>jobinsurance.cambodia@gmail.com</p>
                   </div>
                   
               </div>

           </div>

       </div>
    )
}

export default CardCampany

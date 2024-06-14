
import Data2 from '@/TypeofData/TypeofData'
import React from 'react'



const CardApply: React.FC<Data2> = ({ txt, salary, logo, time, location, position, date, styles }: Data2) => {
    return (
        <div className='w-full flex flex-col justify-center p-3 bg-white rounded-md shadow-md pl-4 pr-4 '>
            <div className='flex w-full p-2 justify-between '>
                <h2 className='text-xl font-semibold  '>{txt}</h2>
                <p className='text-gray-400 text-sm '>5 Application</p>
            </div>
            <div className='w-full text-xs flex flex-col p-2 gap-3 '>
                <h3 className=' text-orange-400 text-lg '>{salary?.min}$-{salary?.max}$</h3>
                <div className='flex w-full justify-start gap-10 '>
                    <h3 className='text-orange-400 text-lg '>{time?.full}</h3>
                    <h3 className='text-orange-400 text-lg '>Internship</h3>
                </div>
                <div>
                    <h3 className='text-orange-400 text-lg '>Having Bonus </h3>
                </div>
                <h2 className='text-lg font-semibold'>Job Description </h2>
                <p className=' text-sm'>We are a leading financial services provider committed to making
                    decisions easier and lives better for our customers and colleagues
                    around the world.
                </p>
            </div>
        </div>
    )
}

export default CardApply

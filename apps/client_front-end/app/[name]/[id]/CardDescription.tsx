import React from 'react'
import Data2 from '@/TypeofData/TypeofData'


const CardApply: React.FC<Data2> = ({ txt, salary, logo, time, location, position, date, styles }: Data2) => {
    return (
        <div className='w-full flex flex-col justify-center p-3 bg-white rounded-2xl shadow-2xl pl-4 pr-4 '>
            <div className='flex w-full p-2 justify-between '>
                <h2 className='text-2xl font-semibold  '>{txt}</h2>
                <p className='text-gray-400 '>5 Application</p>
            </div>
            <div className='w-full flex flex-col p-2 gap-3 '>
                <h3 className=' text-orange-400 text-xl '>{salary?.min}$-{salary?.max}$</h3>
                <div className='flex w-full justify-start gap-10 '>
                    <h3 className='text-orange-400 text-xl'>{time?.full}</h3>
                    <h3 className='text-orange-400 text-xl'>Internship</h3>
                </div>
                <div>
                    <h3 className='text-orange-400 text-xl'>Having Bonus </h3>
                </div>
                <h2 className='text-xl font-semibold'>Job Description </h2>
                <p>We are a leading financial services provider committed to making
                    decisions easier and lives better for our customers and colleagues
                    around the world.
                </p>
            </div>
        </div>
    )
}

export default CardApply

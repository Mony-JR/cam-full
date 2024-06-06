import Background from '@/Background/Background'
import React from 'react'
import Image from 'next/image'
import Mypic from "@/public/Croods User Interface.png"


const page = () => {
  return (
    <div className='w-full h-screen pl-3 pr-3 pt-5 pb-20 flex justify-center items-center'>
      <Background style="rounded-3xl bg-mybg-linear" >

        <div className='w-full flex gap-4 flex-col '>

          <div className=' h-28 mt-[-10%] w-full shadow-xl rounded-3xl flex justify-start pl-10 items-center bg-white '>
            <h1>Create & Generate CV Online</h1>
          </div>
          <div className=' h-28 w-full shadow-xl rounded-3xl flex justify-start pl-10 items-center bg-white '>
            <h1>Attached CV </h1>
          </div>
          <div className='flex flex-col justify-center pt-5 items-center '>
            <h1 className='w-full pl-3 text-2xl'>My Resume</h1>
            <Image src={Mypic} alt={''} width={300} height={400}/>
            <div className='flex  flex-col justify-center items-center'>
              <h1 >{"Sorry, Your Don't Have A Data Yet ."}</h1>
              <p className='text-gray-400 text-s '>You will see your data when </p>
              <p className='text-gray-400 text-s '>have appliend your CV.</p>
            </div>
          </div>
        </div>

      </Background>
    </div>
  )
}

export default page

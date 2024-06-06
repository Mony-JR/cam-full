import React, { ReactNode } from 'react'

interface TypeNode{
    children?:ReactNode
    style?:string
}
const Background:React.FC<TypeNode> = ({children,style}) => {
  return (

    <div className={`  h-screen w-full flex flex-col justify-start items-center ` }>
      <div className={` w-full h-[20%] bg-mybg-linear ${style} `}>

      </div>
      <div className='flex w-full flex-col bg-white mt-[-50px]
      rounded-3xl justify-center items-center  '>
        {children}
      </div>
      
    </div>
  )
}

export default Background
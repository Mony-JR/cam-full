import React, { ReactNode } from 'react'

interface TypeNode{
    children?:ReactNode
    style?:string
    bgColor?:string
    bgImage?:string
}
const Background:React.FC<TypeNode> = ({children,style,bgImage}) => {
  return (

    <div className={`  h-full w-full flex flex-col justify-start items-center ` }>
      <div className={` ${bgImage} ${style ? style:" bg-mybg-linear "} w-full h-[20%]  `}>

      </div>
      <div className='flex w-full flex-col bg-white mt-[-50px]
      rounded-3xl justify-center items-center  '>
        {children}
      </div>
      
    </div>
  )
}

export default Background
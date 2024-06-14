'use client'
import React, { useState } from 'react'
import kh from "@/Icon_social/language_/cambodia.png"
import eng from "@/Icon_social/language_/english.png"
import Image from 'next/image'

const ButtonLanguage:React.FC = () => {
    const [swich,setSwich]=useState<boolean>(false)

  return (
    <div onClick={()=>setSwich(!swich)} className={`flex w-10 h-5 rounded-2xl ${swich? 'bg-white': ' bg-blue-300 '} relative `}>

        <span className={` absolute   ${swich? ' left-1' : ' right-0' } `} > <Image src={swich? kh:eng} alt={""} width={20}  /> </span>

    </div>
  )
}

export default ButtonLanguage

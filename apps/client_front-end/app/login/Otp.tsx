'use client'
import Data2 from '@/TypeofData/TypeofData'
import React,{useState,useEffect} from 'react'

const Otp:React.FC<Data2> = ({handleClick}) => {
    const [count, setcount] = useState<number>(30)
    const [get, setget] = useState<number | string>("Get")
    const [work, setwork] = useState<boolean>(true)
  
  
    useEffect(() => {
      
       setTimeout(() => {
        if (!work && count > 0) {
          setcount(count - 1)
        }
      }, 1000)
      if(count==0){
        setTimeout(()=>{
        setwork(true)
        setcount(30)      
        },1000)
  
      } 
      
      
    }, [work,count])
    function getOTP() {
    setwork(false)

    }
  
  return (
    <div>
      <button onClick={getOTP} className='Cato p-5 w-[120px] absolute right-5 bottom-0 rounded-[20px] text-white  '>{work ? get : count}</button>
    </div>
  )
}

export default Otp

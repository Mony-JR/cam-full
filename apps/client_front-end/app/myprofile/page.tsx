'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Background from '@/Background/Background';
import ButtonSigOut from '@/ButtonLoguot/ButtonSigOut';
import { FaRegHeart } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation'


const Page: React.FC = () => {
  const RefFile = useRef<HTMLInputElement | null>(null)
  const [pic, setPic] = useState<string | null>('')
  const router = useRouter();


  function handleImage() {
    RefFile.current?.click();

  }
  function handleSelectImage(event: any) {
    setPic(URL.createObjectURL(event.target.files[0]))
  }

  function handleLogut(){
    if(!pic){
      router.push('/login')
    }
    setPic(null);
    if(RefFile.current){
      RefFile.current.value=""

    }
    
  }

  return (
    <div className='w-full h-screen '>
      <Background>
        <div className='w-full mt-[-70px]  pl-5 pr-5 justify-center items-center flex flex-col gap-5 '>
          <div className=' relative'>
            <div className=' w-40 h-40 ip14:w-40 ip14:h-40 ipse:w-28 ipse:h-28 rounded-full overflow-hidden bg-white'>
              <div className={`w-10 h-10 ip14:w-10 ip14:h-10 ipse:w-8 ipse:h-8 rounded-full ipse:ml-4 ml-8 ip14:ml-8 mt-5 bg-mybg-linear ${pic? 'hidden' :''} ` }></div>
              <div className={`w-40 h-40 ipse:w-32 ipse:h-32 ip14:w-40 ip14:h-40 rounded-full ip14:mt-4 ipse:mt-2 ml-[-40px] bg-mybg-linear ${pic? 'hidden' :''} ` }></div>

              <Image className={` ${pic ? '' : 'hidden'}`} src={pic || ""}
                height={200}
                width={200} alt={pic || ""} />

            </div>
            <input onChange={handleSelectImage} ref={RefFile} className=' hidden ' type="file" name="myImage" accept="image/*" />
            <span onClick={handleImage} className=' text-gray-400 shadow-xl right-0 bottom-0 absolute ipse:p-1 ip14:p-3 p-3 flex items-center rounded-full bg-white text-2xl'><IoCameraSharp /></span>
          </div>


          <h1 className=' ip14:text-2xl ipse:text-sm'>No Nickname</h1>
          <div className=' p-5 w-full pl-5 flex flex-col gap-5 justify-center 
          items-center bg-white shadow-[0_35px_224px_15px_rgba(0,0,0,0.2)]
           rounded-3xl '>
            <span className={`flex w-full ipse:text-sm ip14:text-xl text-xl gap-5 items-center ${pic ? '' : 'hidden'} `}><FaCircleUser /> Personanl Profile </span>
            <span className='flex w-full ipse:text-sm ip14:text-xl text-xl gap-5 items-center'><FaRegHeart /> Favorith</span>
            <span className='flex w-full ipse:text-sm ip14:text-xl text-xl gap-5 items-center'> <MdCircleNotifications /> Notification</span>
          </div>
          <ButtonSigOut Logout={handleLogut} logout={pic} />
        </div>
      </Background>
    </div>
  );
};

export default Page;

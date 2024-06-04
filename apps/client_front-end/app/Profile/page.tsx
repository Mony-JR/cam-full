import React from 'react';
import Image from 'next/image';
import Background from '@/Background/Background';
import ButtonSigOut from '@/ButtonLoguot/ButtonSigOut';
import { FaRegHeart } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";



interface TypeProfile {

}
const Page: React.FC = () => {
  return (
    <div>
      <Background>
        <div className='w-full mt-[-70px]  pl-5 pr-5 justify-center items-center flex flex-col gap-5 '>
          <div className=' relative'>
            <div className=' w-40 h-40 rounded-full overflow-hidden  '>
              <Image src='https://i.pinimg.com/736x/63/a5/e8/63a5e8ee8cdcfab2f952bcd46a73e5c4.jpg'
                height={200}
                width={200} alt={''} />

            </div>
            <span className=' right-0 bottom-0 absolute p-3 flex items-center rounded-full bg-white text-2xl'><IoCameraSharp /></span>
          </div>


          <h1 className='text-2xl'>Mony JR</h1>
          <div className=' h-40 w-full pl-5 flex flex-col gap-5 justify-center 
          items-center bg-white shadow-[0_35px_224px_15px_rgba(0,0,0,0.2)]
           rounded-3xl '>
            <span className='flex w-full text-xl gap-5 items-center'><FaCircleUser /> Personanl Profile </span>
            <span className='flex w-full text-xl gap-5 items-center'><FaRegHeart /> Favorith</span>
            <span className='flex w-full text-xl gap-5 items-center'> <MdCircleNotifications /> Notification</span>
          </div>
          <ButtonSigOut />
        </div>
      </Background>
    </div>
    // <div>
    //   <Background>
    //     <h2>Hello</h2>
    //   </Background>
    // </div>
  );
};

export default Page;

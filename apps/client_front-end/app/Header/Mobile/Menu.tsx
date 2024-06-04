"use client"
import React, { useEffect, useState } from 'react';
import "../Menu.css";
import { FaFile } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link';
import { GrUp } from "react-icons/gr";
import { usePathname } from 'next/navigation';

const Menu: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [hover, setHover] = useState<boolean>(false);
  const pathname = usePathname();

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (!hover) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, hover]);

  return (
    <div className='fixed bottom-0 z-10 w-full h-20'>
      <span onClick={handleShow} className={` ${show ? 'block' : 'hidden'} z-10 absolute text-3xl top-10 right-3`}>
        <GrUp />
      </span>
      <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`flex sm:flex-col justify-between items-center text-3xl 
        fixed h-20 w-full  
        bottom-0 pl-5 pr-5  
        pt-2 pb-2 menu z-10 bg-white bg-white  ${show ? 'hidden' : 'flex'} `}
      >
        <Link href={'/home'}>
          <span className={`text-black flex justify-center flex-col items-center ${(pathname === '/home' || pathname === '/Search') ? 'text-orange-500' : ''}`}>
            <GoHomeFill />
            <label className='text-xl'>Home</label>
          </span>
        </Link>

        <span className='text-black flex justify-center flex-col items-center'>
          <FaFile />
          <label className='text-xl'>Resume</label>
        </span>
        <span className='text-black flex justify-center flex-col items-center'>
          <FaClipboardCheck />
          <label className='text-xl'>Apply</label>
        </span>
        <Link href={'/profile'}>
          <span className={`text-black flex justify-center flex-col items-center ${pathname === '/profile' ? 'text-orange-500' : ''}`}>
            <FaCircleUser />
            <label className='text-xl'>Profile</label>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;

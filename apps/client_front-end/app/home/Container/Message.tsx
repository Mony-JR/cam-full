'use client'
import React, { useState, useEffect } from 'react'
import { HiChatAlt2 } from "react-icons/hi";

const Message = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; 
        };
    }, [show]);

    function handleShow() {
        setShow(!show);
    }

    return (
        <div className={`flex z-10 fixed w-full ${show? 'h-screen': 'h-20'} ` }>
            <div onClick={() => setShow(false)} className='w-full h-full'></div>
            <div className={` ${show ? 'h-4/5' : 'h-0'} overflow-y-auto rounded-s-2xl transition-all absolute bottom-20 bg-slate-400 w-9/12 right-0 `}>
                <div className='w-full h-screen flex justify-center items-center'>
                    <h1>Hello</h1>
                </div>
            </div>
            <span onClick={handleShow} className='p-5 text-white bg-orange-500 fixed rounded-full right-2 bottom-24'>
                <HiChatAlt2 />
            </span>
        </div>
    );
}

export default Message;

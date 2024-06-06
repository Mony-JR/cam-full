import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaBusinessTime, FaLocationDot } from 'react-icons/fa6';
import { IoMdHeart } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import Data2 from '@/TypeofData/TypeofData';

const Card: React.FC<Data2> = ({ id, txt, logo, location, like, time, position, salary, date, handleHeartClick }: Data2) => {
    const onHeartClick = () => {
        if (handleHeartClick) {
            handleHeartClick(id||0);
        }
    };

    return (
        <section key={id} className='w-[400px] flex justify-between flex-col pl-5 items-center pr-5 '>

            <div className='ipse:w-[350px] ip14:w-[400px] py-3 w-[350px] flex justify-between flex-col items-center bg-white drop-shadow-lg rounded-2xl pt-3'>

                <div className='flex h-[30px] pl-5 pr-5 justify-between w-full items-center'>
                    <div className='flex gap-5 items-center'>
                        <Image src={logo||""} width={50} height={50} alt='logo' />
                        <h1>{txt}</h1>
                    </div>

                    <span onClick={onHeartClick} className='text-2xl z'>{like ? <IoMdHeart /> : <CiHeart />}</span>
                </div>
                <Link className=' h-[250px] w-[100%] flex justify-evenly flex-col pl-5 pr-5 items-center pt-3' href={`${date}/${id}`}>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex flex-col gap-5 w-full justify-between'>
                            <div className='flex gap-8 w-full justify-start'>
                                <span className='text-orange-500'>Remote</span>
                                <span className='text-orange-500'>{time?.full}</span>
                                <span className='text-orange-500'>{time?.part}</span>
                            </div>
                            <div className='flex gap-3'>
                                <button className='bg-orange-200 p-1 rounded-xl w-5/12 text-orange-500'>Communication</button>
                                <button className='bg-orange-200 p-1 rounded-xl w-5/12 text-orange-500'>Language</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full flex-col justify-between gap-5 items-center'>
                        <div className='flex justify-between w-10/12'>
                            <span className='text-slate-400'>Position {position}</span>
                            <h1 className='text-orange-500'>{salary?.min}$ - {salary?.max}$</h1>
                        </div>
                        <div className='flex justify-between w-full mb-4'>
                            <label className='flex items-center gap-3'>
                                <FaBusinessTime />
                                <span>{date}</span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <FaLocationDot />
                                <span>{location}</span>
                            </label>
                        </div>
                    </div>
                </Link>
            </div>

        </section>

    )
}

export default Card

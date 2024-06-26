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
            handleHeartClick(id || 0);
        }
    };

    return (
        <section key={id} className='w-full flex justify-between flex-col pl-5 items-center pr-5 '>

            <div className=' w-full flex justify-between flex-col items-center bg-white drop-shadow-lg rounded-2xl pt-3'>

                <div className='flex h-[30px] pl-5 pr-5 justify-between w-full items-center'>
                    <div className='flex gap-5 items-center'>
                        <Image src={logo || ""} width={50} height={50} alt='logo' />
                        <div className='flex flex-col '>
                            <h1>{txt}</h1>
                            <p className='text-xs text-gray-400'>{location +"-"+txt  }</p>
                        </div>

                    </div>

                    <span onClick={onHeartClick} className='text-2xl z'>{like ? <IoMdHeart /> : <CiHeart />}</span>
                </div>
                <Link className=' h-[250px] w-[100%] flex justify-evenly flex-col pl-5 pr-5 items-center pt-3' href={`${date}/${id}`}>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex flex-col gap-5 w-full justify-between'>
                            <div className='flex text-sm gap-8 w-full justify-start'>
                                <span className='text-orange-500'>Remote</span>
                                <span className='text-orange-500'>{time?.full}</span>
                                <span className='text-orange-500'>{time?.part}</span>
                            </div>
                            <div className='flex justify-start w-full gap-3'>
                                <button className='bg-orange-200 w-5/12 p-1 rounded-xl text-xs text-orange-500'>Communication</button>
                                <button className='bg-orange-200 w-5/12 p-1 rounded-xl text-xs text-orange-500'>Language</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full flex-col justify-between gap-5 items-center'>
                        <div className='flex text-sm items-center justify-between w-10/12'>
                            <span className='text-slate-400'>Position {position}</span>
                            <h1 className='text-orange-500 text-xl '>{salary?.min}$ - {salary?.max}$</h1>
                        </div>
                        <div className='flex justify-between w-full '>
                            <label className='flex items-center gap-3'>
                                <FaBusinessTime />
                                <span className='text-sm'>{date}</span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <FaLocationDot />
                                <span className='text-sm'>{location}</span>
                            </label>
                        </div>
                    </div>
                </Link>
            </div>

        </section>

    )
}

export default Card

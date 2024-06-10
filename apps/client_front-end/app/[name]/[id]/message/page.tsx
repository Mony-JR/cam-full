'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Data2 from '@/TypeofData/TypeofData';
import Image from 'next/image';
import CardMessage from './CardMessage';
import { IoMdSend } from "react-icons/io";
import pic from "@/public/Croods The Feedback.png"


const page = () => {
    const params = useParams();
    const id = params?.id ? parseInt(params.id as string, 10) : null;
    const [data, setData] = useState<Data2[]>([
        {
            id: 1,
            txt: 'Developer',
            logo: 'https://optimise2.assets-servd.host/dig-upsiide/production/images/starbsloh.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1668098882&s=3ee470c8b1123213d7f7f147bc1126e4',
            position: 5,
            time: { part: "part time", full: "full time" },
            salary: { min: 200, max: 500 },
            date: '2023-05-25',
            location: 'Khan Camkarmon',
            like: false
        },
        {
            id: 2,
            txt: 'ABA Dev',
            logo: 'https://i.pinimg.com/474x/36/9f/61/369f612149566874dcbc2d8735d51ccb.jpg',
            position: 10,
            time: { part: "part time", full: "full time" },
            salary: { min: 500, max: 1000 },
            date: '2023-05-25',
            location: 'Phnom penh',
            like: false
        },
        {
            id: 3,
            txt: 'Flutter Developer',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6cqji5FGvPQsj3PR21AjZFIQzq_eAUIFyzfAGqkmww&s',
            position: 10,
            time: { part: "part time", full: "full time" },
            salary: { min: 500, max: 1000 },
            date: '2023-05-25',
            location: 'Pnhom penh',
            like: false
        },
        {
            id: 4,
            txt: 'web Dev',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6cqji5FGvPQsj3PR21AjZFIQzq_eAUIFyzfAGqkmww&s',
            position: 5,
            time: { part: "part time", full: "full time" },
            salary: { min: 299, max: 499 },
            date: '2023-05-25',
            location: 'Pnhom penh',
            like: false
        },
        {
            id: 5,
            txt: 'Intership mobile App',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6cqji5FGvPQsj3PR21AjZFIQzq_eAUIFyzfAGqkmww&s',
            position: 2,
            time: { part: "part time", full: "full time" },
            salary: { min: 100, max: 200 },
            date: '2023-05-25',
            location: 'Pnhom penh',
            like: false
        },
    ]);

    const [getData, setGetData] = useState<Data2[]>([])

    useEffect(() => {
        const Fil_data = data?.filter((p: Data2) => p.id === id)
        setGetData(Fil_data)
    }, [])

    console.log(getData);

    return (
        <div className='flex flex-col w-full h-screen justify-center '>
            <div className='w-full' >
                {getData.map((p) => (
                    <CardMessage key={p.id} logo={p.logo} txt={p.txt} location={p.location} />
                ))}
            </div>
            <div className=' h-full w-full flex justify-center items-center '>
                <Image src={pic} alt={"My Pic"} width={500} height={200}/>
            </div>
            <div className='p-5 w-full flex justify-center items-center relative bg-white z-30 '>
                <input className='p-4 rounded-3xl drop-shadow-md w-full' type="text" placeholder='Text Message' />
                <span className=' text-2xl absolute right-10 '><IoMdSend /></span>
            </div>
        </div>
    );
}

export default page;

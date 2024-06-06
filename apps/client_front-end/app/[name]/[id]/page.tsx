'use client'
import Data2 from '@/TypeofData/TypeofData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from "ui-components098/Button"
import MyButton from "mini-ui-mony/Button/MyButton"
import Background from '@/Background/Background';
import { BackButton_md } from '@/Back/BackButton';
import Image from 'next/image';
import CardApply from './CardApply';
import CardDescription from './CardDescription';

interface PageProps {
    params: {
        id: string;
    };
}



const Page: React.FC<PageProps> = ({ params }) => {

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
        let id: number = parseInt(params.id)
        const Fil_data = data.filter((p: Data2) => p.id === id)
        setGetData(Fil_data)
    }, [])

    console.log(getData);



    return (
        <div className='w-full h-full flex flex-col pb-20 '>
            <Link href={"../"}> <BackButton_md styles='absolute bg-white p-3 px-4 rounded-xl top-5 left-3 ' /></Link>
            <Background  style='bg-mybg-image h-[250px] '>
                <div className=' h-60 w-full pl-4 pr-4 mt-[-100px] z-10 '>
                    {getData.map((p) => (
                        <CardApply key={p.id} id={p.id} txt={p.txt}
                            logo={p.logo} position={p.position}
                            date={p.date}
                            location={p.location} />
                    ))}
                </div>
                
            </Background>
            <div className='pl-5 pr-5 pt-4'>
                {getData.map((p)=>(
                    <CardDescription key={p.id} />
                ))}
            </div>
            <div className='pl-5 pr-5 pt-4'>
                {getData.map((p)=>(
                    <CardDescription key={p.id} />
                ))}
            </div>
            <div className='pl-5 pr-5 pt-4'>
                <h1>Location</h1>
                {getData.map((p)=>(
                    <CardDescription key={p.id} />
                ))}
            </div>
            <div className='pl-5 pr-5 pt-4'>
                {getData.map((p)=>(
                    <CardDescription key={p.id} />
                ))}
            </div>
        </div>
    );
}

export default Page;

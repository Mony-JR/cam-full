'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { GrFormNextLink } from "react-icons/gr";
import Data2 from '@/TypeofData/TypeofData';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const JobMain: React.FC = () => {
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
    ]);

    const handleHeartClick = (id: number) => {
        setData(prevData =>
            prevData.map(job =>
                job.id === id ? { ...job, like: !job.like } : job
            )
        );
    }

    return (
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            
            <div className='flex justify-between w-full pl-4 pr-4'>
                <h3>Recommend</h3>
                <Link href="/Search"><span className='text-orange-400'>Searching more</span></Link>
            </div>
            <main className='w-full h-[300px]'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper '
        >
          {data.map(p => (
            <SwiperSlide key={p.id}>
                <div className='flex justify-center items-center pb-10 '>
              <Card
                id={p.id}
                txt={p.txt}
                logo={p.logo}
                position={p.position}
                time={p.time}
                salary={p.salary}
                date={p.date}
                location={p.location}
                like={p.like}
                handleHeartClick={handleHeartClick}
              />                    
                </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </main>

            <Link className='w-full flex items-center justify-center' href={"/login"}>
                <button className='p-3 text-white text-xl bg-orange-500 w-[90%] flex justify-center items-center gap-2 rounded-3xl'>
                Find Your Matching
                <span className='text-4xl text-white'><GrFormNextLink /></span>
            </button>
            </Link>
        </div>
    )
}

export default JobMain

'use client'

import React, { useState } from 'react'
import Position from './Position'
import Data2 from '@/TypeofData/TypeofData';
import Card from './Card';

const MoreCard = () => {
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


  return (
    <div className='w-full pb-[20%] justify-start items-center flex flex-col '>
      <div className=' pl-5 w-full '>
        <h1>Positions</h1>
        <p className='text-gray-400'>You can find more positions here</p>
      </div>
      <Position/>
      <div className='flex pt-10 pb-10 flex-col gap-5 '>
        {data.map((p)=>(
          <Card key={p.id} id={p.id} txt={p.txt} 
          logo={p.logo} 
          position={p.position} 
          time={p.time} 
          salary={p.salary} 
          date={p.date} 
          location={p.location} like={p.like}/>
        ))}
      </div>
    </div>
  )
}

export default MoreCard

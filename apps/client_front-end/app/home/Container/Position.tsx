'use client'
import ButtonPosition from '@/positionScroll/ButtonPosition';
import React, { useState } from 'react';

const Position: React.FC = () => {
  const [indexofClick,setIndexofClick]=useState<number>(0)
  const positions = [
    'All Positions',
    'Graphic Design',
    'Web Developer',
    'UI & UX',
    'Engineering',
    'Software'
  ];

  function handleClickGetIndex(index:number){
    setIndexofClick(index)
  }

  return (
    <div className='flex justify-start items-end w-full overflow-hidden'>
      <div className='w-full justify-start items-center flex mt-5 gap-5 pr-7 pl-7 h-[70px] flex-row overflow-x-auto whitespace-nowrap'>

        {positions.map((p, index) => (
          <ButtonPosition onClick1={()=>handleClickGetIndex(index)} 
          key={index} label={p} 
          className={`${index==indexofClick ? 'bg-mybg-linear' : '' }  `} />
        ))}
      </div>
    </div>
  );
}

export default Position;

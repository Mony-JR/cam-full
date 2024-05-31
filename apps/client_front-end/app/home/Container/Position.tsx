import React from 'react';

const Position = () => {
  return (
    <div className='flex justify-start items-end w-full overflow-hidden'>
      <div className='w-full justify-start items-center flex mt-5 gap-5 pr-7 pl-7 h-[70px] flex-row overflow-x-auto whitespace-nowrap'>
        <button className='p-3 Cato rounded-3xl'>All Positions</button>
        <button className='p-3 bg-white shadow-md rounded-3xl'>Graphic Design</button>
        <button className='p-3 bg-white shadow-md rounded-3xl'>Marketing</button>
        <button className='p-3 bg-white shadow-md rounded-3xl'>Web Developer</button>
        <button className='p-3 bg-white shadow-md rounded-3xl'>UI & UX</button>
        <button className='p-3 bg-white shadow-md rounded-3xl'>Engineering</button>
        <button className='p-3 bg-white shadow-md rounded-3xl'>Software</button>
      </div>        
    </div>
  );
}

export default Position;

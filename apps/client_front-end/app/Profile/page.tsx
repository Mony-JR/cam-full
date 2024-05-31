import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <div className='w-full h-1/5 bg-orange-500'>

      </div>
      <div className='flex h-full w-12/12 flex-col mt-[-20px] rounded-3xl justify-stat items-center bg-white '>
        <div className='w-[200px] mt-[-20%] h-[200px] bg-green-400  rounded-full '>

        </div>
      </div>
    </div>
  );
};

export default Page;

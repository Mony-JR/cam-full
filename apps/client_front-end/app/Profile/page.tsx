import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <div className='w-full h-1/5 bg-gray-500'>
        {/* Content for the top section */}
      </div>
      <div className='relative flex-grow bg-white'>
        {/* Content for the bottom section */}
        <div className='w-1/4 mx-auto mt-8'>
          
        </div>
      </div>
    </div>
  );
};

export default Page;

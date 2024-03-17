import Image from 'next/image'
import React from 'react'

const Card2 = ({d}) => {
  return (
    <div className='bg-white text-black rounded-[50px] flex flex-col items-center w-[31%] h-[450px]'>
        <div className='flex items-center justify-center h-1/2'>
            <Image width={200} height={200} src={d?.img}></Image>
        </div>
        <h4 className='text-3xl font-semibold mb-5'>{d?.title}</h4>
        <p className='w-1/2 text-sm text-center text-shadow shadow-blue-300'>{d?.desc}</p>
    </div>
  );
}

export default Card2;
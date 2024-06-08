import Image from 'next/image'
import React from 'react'

const Card2 = ({d}) => {
  return (
    <div className='bg-gradient-to-b from-[#D90202] to-[#8E0D0D] rounded-[50px] flex flex-col items-center w-full md:w-[34%] h-[500px] md:h-[550px] py-2'>
        <div className='flex items-center justify-center h-1/2'>
            <Image alt="image" width={d.w} height={d.h} src={d?.img}></Image>
        </div>
        <h4 className='text-3xl md:text-4xl font-semibold pb-5 text-center'>{d?.title}</h4>
        <p className='px-3 text-xs md:text-sm font-medium text-center w-5/6'>{d?.desc}</p>
    </div>
  );
}

export default Card2;
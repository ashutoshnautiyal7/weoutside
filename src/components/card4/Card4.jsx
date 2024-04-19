import Image from 'next/image'
import React from 'react'

const Card4 = ({data}) => {
  return (
    <div className='flex flex-col rounded-3xl bg-white p-8 md:w-5/12 gap-6 items-center'>
        <div className='relative h-[210px] w-[210px]'>
            <Image alt="image" fill={true} src={data.icon}></Image>
        </div>
        <h4 className='py-0.5 px-1.5 bg-[#D93737] font-semibold text-xl md:text-2xl w-full flex justify-center'>{data.title}</h4>
        <p className='text-black text-center md:text-lg px-2'>{data.desc}</p>
    </div>
  )
}

export default Card4
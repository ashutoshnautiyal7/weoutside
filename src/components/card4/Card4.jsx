import Image from 'next/image'
import React from 'react'

const Card4 = ({data}) => {
  return (
    <div className='flex flex-col rounded-3xl bg-white p-10 w-5/12 gap-6 items-center'>
        <div className='relative h-[120px] w-[120px]'>
            <Image fill={true} src={data.icon}></Image>
        </div>
        <h4 className='py-0.2 px-1.5 bg-[#D93737] font-medium'>{data.title}</h4>
        <p className='text-black text-center text-xs'>{data.desc}</p>
    </div>
  )
}

export default Card4
import Image from 'next/image'
import React from 'react'

const Card1 = ({d}) => {
  return (
    <div className='flex flex-col items-center w-[22%]'>
        <div className='w-full flex justify-center items-center py-5  rounded-xl bg-white bg-opacity-20'>
            <Image alt="image" width={150} height={150} src={d?.img}></Image>
        </div>
        <h3 className='font-medium text-4xl my-2 text-[#F5F5F5]'>{d?.title}</h3>
        <p className='text-center text-sm w-10/12 mt-2'>{d?.desc}</p>
    </div>
  )
}

export default Card1
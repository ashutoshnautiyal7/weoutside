import Image from 'next/image'
import React from 'react'

const Card3 = ({d}) => {
  return (
    <div className='p-8 mx-5 mb-12 text-black bg-white rounded-2xl'>
        <div className='flex gap-2 my-2'>
            <Image className='rounded-full bg-black' width={50} height={50} src={d.img}></Image>
            <div className='flex flex-col'>
                <h2 className='font-medium'>{d.name}</h2>
                <h4 className='text-sm'>{d.title}</h4>
            </div>
        </div>
        <p className='text-sm text-center'>{d.desc}</p>
    </div>
  )
}

export default Card3
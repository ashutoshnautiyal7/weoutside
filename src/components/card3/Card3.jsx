import Image from 'next/image'
import React from 'react'

const Card3 = ({d}) => {
  return (
    <div className='p-8 mx-2 md:mx-5 mb-12 flex flex-col gap-5 text-black bg-white rounded-xl min-h-[300px]'>
        <p className='text-xs leading-relaxed'>{d.desc}</p>
        <div className='flex gap-5'>
            <div className='relative w-[60px] h-[60px] rounded-full'>
              <Image alt="image" className='rounded-full object-cover bg-red-600' fill={true} src={d.img}></Image>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center'>
                    <h2 className='font-medium'>{d.name}</h2>
                    <h4 className='text-[12px]'>{d.title}</h4>
                    <div className='flex gap-0.5'>
                      <div className='relative h-[15px] w-[15px]'>
                        <Image alt="image" fill={true} src={d.rating>=1?"/Star.png":"/Unstar.png"}></Image>
                      </div>
                      <div className='relative h-[15px] w-[15px]'>
                        <Image alt="image" fill={true} src={d.rating>=2?"/Star.png":"/Unstar.png"}></Image>
                      </div>
                      <div className='relative h-[15px] w-[15px]'>
                        <Image alt="image" fill={true} src={d.rating>=3?"/Star.png":"/Unstar.png"}></Image>
                      </div>
                      <div className='relative h-[15px] w-[15px]'>
                        <Image alt="image" fill={true} src={d.rating>=4?"/Star.png":"/Unstar.png"}></Image>
                      </div>
                      <div className='relative h-[15px] w-[15px]'>
                        <Image alt="image" fill={true} src={d.rating>=5?"/Star.png":"/Unstar.png"}></Image>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Card3
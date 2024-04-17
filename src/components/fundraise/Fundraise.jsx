import Image from 'next/image'
import React from 'react'

const Fundraise = ({data}) => {
  return (
    <div className='flex flex-col gap-5 mx-[160px]'>
    {
        data.map((d)=>(
            <div className='w-full' key={d.id}>
                <div className={`$ flex ${d.id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className='w-1/2 flex flex-col gap-5 items-start'>
                        <h2 className='text-5xl font-medium'>{d.title}</h2>
                        <p className='text-sm'>{d.desc}</p>
                        <button className='bg-[#D93737] py-2 px-5 rounded-s-xl rounded-b-xl rounded-tr-full'>{d.button}</button>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <div className='relative h-[400px] w-[400px]'>
                            <Image fill={true} src={d.img}></Image>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Fundraise
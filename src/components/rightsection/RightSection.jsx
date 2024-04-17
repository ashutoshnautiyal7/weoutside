import Image from 'next/image';
import React from 'react'

const data=[
    {
        id:0,
        img:"/icon.png",
        name:"John Martin",
        role:"Member of Outside",
    },
    {
        id:1,
        img:"/icon.png",
        name:"John Martin",
        role:"Member of Outside",
    },
    {
        id:2,
        img:"/icon.png",
        name:"John Martin",
        role:"Member of Outside",
    },
    {
        id:3,
        img:"/icon.png",
        name:"John Martin",
        role:"Member of Outside",
    },
    {
        id:4,
        img:"/icon.png",
        name:"John Martin",
        role:"Member of Outside",
    },
];

const RightSection = () => {
  return (
    <div className='bg-[#F5F5F5] p-4 text-black text-center rounded-xl'>
        <h2 className='font-semibold mb-4'>TOP CONTRIBUTORS</h2>
        <div className='flex flex-col gap-5'>
            {
                data.map((d)=>(
                    <div key={d.id} className='flex gap-3'>
                        <div className='relative h-[100px] w-[100px]'>
                            <Image fill={true} src={d.img}></Image>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h2 className='font-bold text-sm'>{d.name}</h2>
                            <h3 className='text-xs font-medium'>{d.role}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RightSection
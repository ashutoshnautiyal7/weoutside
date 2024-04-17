import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <div className='flex items-center justify-between py-5'>
        <div className='w-[65%] flex gap-5 items-center '>
            <div className='relative w-[80px] h-[70px]'>
                <Image fill={true} src={"/image5.png"}></Image>
            </div>
            <div className='bg-white flex gap-1 h-fit w-full items-center py-2 px-5 rounded-full'>
                <div className='relative w-[20px] h-[20px]'>
                    <Image fill={true} src={"/search.png"}></Image>
                </div>
                <input className='w-full outline-none text-black placeholder:text-sm placeholder:text-black placeholder:font-light' placeholder='Search'></input>
            </div>
        </div>
        <div className='w-[25%] flex items-center justify-start gap-6'>
            <div className='relative h-[50px] w-[50px]'>
                <Image fill={true} src={"/Group_97.png"}></Image>
            </div>
            <div className='relative h-[50px] w-[50px]'>
                <Image fill={true} src={"/Ellipse_3.png"}></Image>
            </div>
            <h4 className='text-lg'>AndrewDK</h4>
        </div>
    </div>
  )
}

export default Topbar
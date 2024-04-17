import Navbar2 from '@/components/navbar2/Navbar2'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar2/>
        <div className='flex flex-col items-center'>
            <div className='text-center text-5xl flex flex-col gap-2'>
                <h1>WE HELP</h1>
                <h1>OUR COMMUNITY FOR</h1>
                <h1>BUSINESS ENCUBATOR <span className='text-red-700'>!</span></h1>
            </div>
            <div className='w-[1020px] rounded-[80px] bg-[#770909]'>
                <div className='relative w-[1040px] h-[468px]'>
                    <Image fill={true} src={"/busi.png"}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
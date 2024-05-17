import Image from 'next/image'
import React from 'react'

const Support = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl md:text-6xl font-medium py-5'>JOIN OUR WEOUTSIDE COMMUNITY</h1>
        <h4 className='text-lg md:text-3xl py-5 leading-normalmd:leading-snug w-4/6'>Stay informed with educational content, participate in polls, and embody our community&apos;s shared values of adventure and environmental stewardship.</h4>
        <div className='relative h-[200px] w-[290px] md:h-[500px] md:w-[700px] py-10'>
          <Image alt="image" className='' fill={true} src={"/financial-icon.png"}></Image>
        </div>
        <button className='flex gap-3 p-2 md:p-4 rounded-md items-center justify-center text-xl md:text-4xl font-bold bg-white shadow-2xl shadow-black text-[#AC1010]'>
        <Image alt="image" className='w-[20px] h-[15px] md:w-[40px] md:h-[30px]' width={40} height={40} src={"/Vector.png"}></Image><span>SUPPORT US</span></button>
    </div>
  )
}

export default Support
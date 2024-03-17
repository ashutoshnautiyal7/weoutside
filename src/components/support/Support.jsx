import Image from 'next/image'
import React from 'react'

const Support = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-5xl font-medium my-5'>GET TO SUPPORT COMMUNITY</h1>
        <h4 className='text-lg w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h4>
        <Image className='my-10' width={600} height={600} src={"/financial-icon.png"}></Image>
        <button className='flex gap-3 p-4 rounded-md items-center justify-center text-3xl font-semibold bg-white text-[#AC1010]'><Image width={40} height={40} src={"/Vector.png"}></Image><span>SUPPORT US</span></button>
    </div>
  )
}

export default Support
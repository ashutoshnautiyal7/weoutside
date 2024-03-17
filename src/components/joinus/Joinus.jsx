import Image from 'next/image'
import React from 'react'

const Joinus = () => {
  return (
    <div className='flex gap-20'>
      <div className='flex flex-col justify-center items-end w-[50%]'>
        <div className='items-center justify-center mx-auto my-24'>
          <h1 className='text-6xl font-black text-shadow shadow-red-600'>WE</h1>
          <div className='tracking-wider text-2xl my-2'>
            <h3>Melanted</h3>
            <h3>Community</h3>
          </div>
          <p className='w-56 text-xs mb-8'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .
          </p>
          <button className='text-red-700 bg-white px-9 py-1 rounded-md'>Join Us</button>
        </div>
      </div>
      <div className='w-[50%] '>
        <Image className='flex' width={750} height={750} src={"/WhatsApp_Image.png"}></Image>
      </div>
    </div>
  )
}

export default Joinus
import Image from 'next/image'
import React from 'react'

const GetinTouch = () => {
  return (
    <form className='bg-[#F5F5F5] my-10 w-9/12 mx-auto p-5'>
        <h2 className='text-[#D21414] text-center text-3xl font-medium mb-5'>Get in touch</h2>
        <div className='flex flex-col gap-5 w-9/12 mx-auto text-black text-sm'>
            <input className='h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs' placeholder='Name'></input>
            <input type='email' className='h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs' placeholder='Email'></input>
            <input className='h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs' placeholder='Contact No.'></input>
            <textarea className='border-gray-500 border-[1px] outline-none placeholder-black placeholder:text-xs p-5' rows={5} placeholder='Purpose'></textarea>
            <div className='w-1/3 bg-white border-gray-500 border-[1px] p-2 flex gap-4 justify-center items-center'>
                <input className='w-5 h-5' type='checkbox'></input>
                <span>I'm not a robot</span>
                <Image width={50} height={50} src={"/captcha.png"}></Image>
            </div>
            <button className='bg-gradient-to-b from-[#FF1010] to-[#692323] rounded-sm text-white p-3 w-[200px]'>Send Message</button>
        </div>
    </form>
  )
}

export default GetinTouch
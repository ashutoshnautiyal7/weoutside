import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center bg-[#000000] h-screen'>
        <div className='bg-[#F41717] rounded-b-full h-[120px] flex items-end'>
            <Image width={80} height={80} src={"/image5.png"}></Image>    
        </div>
        <div className='w-11/12 md:w-4/12 '>
            <h1 className='text-4xl text-center my-5'>Sign Up</h1>
            <form className='flex flex-col gap-5 items-center text-xl text-black'>
                <input className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Name *' required={true}></input>
                <input type='email' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Email id *' required={true}></input>
                <input type='password' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Password *' required={true}></input>
                <div className='flex gap-10 w-full rounded-full outline-none bg-white'>
                    <span className='w-4/12 text-center rounded-full bg-[#E1E1E1] p-3.5'>Goals</span>
                    <input className='w-8/12 p-3.5 outline-none rounded-r-full placeholder:text-[#B0ADAD]' placeholder='Raise Fund' required={true}></input>
                </div>
                <button className='bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-xl'>Continue</button>
                <span className='font-medium text-2xl text-white'>Login *</span>
            </form>
        </div>
    </div>
  )
}

export default page
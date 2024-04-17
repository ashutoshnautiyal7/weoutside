import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center bg-[#000000] h-screen'>
        <div className='bg-[#F41717] rounded-b-full h-[120px] flex items-end'>
            <Image width={80} height={80} src={"/image5.png"}></Image>    
        </div>
        <div className='w-11/12 md:w-4/12 '>
            <h1 className='text-4xl text-center my-5'>Log In</h1>
            <form className='flex flex-col gap-5 items-center text-xl text-black'>
                <input type='email' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Email *' required={true}></input>
                <input type='password' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Password *' required={true}></input>
                <button className='bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-xl'>Continue</button>
                <span className='font-medium text-2xl text-white'>Sign Up / Forget Password</span>
            </form>
        </div>
    </div>
  )
}

export default page
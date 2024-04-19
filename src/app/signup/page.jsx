"use client"
import Image from 'next/image'
import React from 'react'
import { signIn} from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  
  if(localStorage.getItem("access_token"))
  {
    router.push("/");
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const name=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const goals=e.target[3].value;
    try{
      const res=await fetch("https://we-out-backend.vercel.app/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name,email,password,goals
        })
      });
      // console.log(res);
      const data=await res.json();
      console.log(data);
      res.status===200&&localStorage.setItem("access_token",data.access_token);
      res.status===200&&localStorage.setItem(data.access_token,email);
      res.status===200&&router.push("/");
    }catch(err){
    }
  }
  return (
    <div className='flex flex-col items-center bg-[#000000] h-screen'>
        <div className='bg-[#F41717] rounded-b-full h-[120px] flex items-end'>
            <Image width={80} height={80} src={"/image5.png"}></Image>    
        </div>
        <div className='w-11/12 md:w-4/12 '>
            <h1 className='text-4xl text-center my-5'>Sign Up</h1>
            <form className='flex flex-col gap-5 items-center text-xl text-black' onSubmit={handleSubmit}>
                <input className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Name *' required={true}></input>
                <input type='email' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Email id *' required={true}></input>
                <input type='password' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Password *' required={true}></input>
                <div className='flex gap-10 w-full rounded-full outline-none bg-white'>
                    <span className='w-4/12 text-center rounded-full bg-[#E1E1E1] p-3.5'>Goals</span>
                    <input className='w-8/12 p-3.5 outline-none rounded-r-full placeholder:text-[#B0ADAD]' placeholder='Raise Fund' required={true}></input>
                </div>
                <button className='bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-xl'>Continue</button>
            </form>
            <div className='flex flex-col gap-5 items-center text-xl text-black py-3'>
                <Link href={"/login"} className='font-medium text-2xl text-white'>Login *</Link>
                <p className='text-white font-medium'>OR</p>
                <button className='flex items-center gap-2 justify-center w-3/4 h-12 px-1 bg-white text-black font-medium rounded-md' onClick={()=>signIn("google")}>
                  <div className='relative h-[40px] w-[40px]'>
                    <Image fill={true} src={"/google.png"}></Image>
                  </div>
                  Continue with Google
                </button>
            </div>
        </div>
    </div>
  )
}

export default page
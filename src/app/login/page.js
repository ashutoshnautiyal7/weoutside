"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { signIn,useSession} from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const page = () => {

  const session=useSession();
  const router = useRouter();

  // console.log(session);

  if(localStorage.getItem("access_token"))
  {
    router.push("/");
  }
  const handleSubmit=async(e)=>{
      e.preventDefault();
      const email=e.target[0].value;
      const password=e.target[1].value;
      try{
        const res=await fetch("https://we-out-backend.vercel.app/api/auth/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            email,password,
          })
        });
        const data=await res.json();
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
            <h1 className='text-4xl text-center my-5'>Log In</h1>
            <form className='flex flex-col gap-5 items-center text-xl text-black' onSubmit={handleSubmit}>
                <input type='email' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Email *' required={true}></input>
                <input type='password' className='w-full rounded-full outline-none p-3.5 placeholder:text-black' placeholder='Password *' required={true}></input>
                <button type='submit' className='bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-xl'>Continue</button>
            </form>
            <div className='flex flex-col gap-5 items-center text-xl text-black py-3'>
                <span className='font-medium text-2xl text-white'><Link href={"/signup"}>Sign Up *</Link> / Forget Password *</span>
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
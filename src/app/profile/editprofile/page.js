"use client"
import GetCookie from '@/components/getCookie/GetCookie';
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const EditProfile = () => {
  const [user,setUser]=useState("");
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;

  useEffect(() => {

    const getProfile = async () => {
      try {
        const res = await axios.get(
          "https://we-out-backend.vercel.app/api/profile",
          { headers: { Authorization: token } }
        );
        setUser(res.data.user)
      } catch (err) {
        console.log(err)
      }
    };
    getProfile();
  }, []);

  const [mispass,setMissPass]=useState(false)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const name=e.target[0].value;
    const goals=e.target[1].value;
    const address=e.target[2].value;
    const email=e.target[3].value;
    const currp=e.target[4].value;
    const newp=e.target[5].value;
    const confp=e.target[6].value;
    if(newp!==confp)
    setMissPass(true)
    else
    {
      const body={
        name,
        goals,
        address,
        email,
      }
      try{
        const res = await axios.put(
          "https://we-out-backend.vercel.app/api/update-profile",
          body,
          { headers: { Authorization: token } }
        );
      }
      catch(err)
      {

      }
    }
  }
console.log(user)
  return (
    <div>
      <div className='border-b-[1px] border-[#676767] pb-2'>
        <span className='text-sm font-semibold'>Edit Profile</span>
      </div>
      <form onSubmit={handleSubmit} className='pt-4 text-xs md:text-sm'>
        <span className=''>Profile Photo</span>
        <div className='flex justify-center'>
          <div>
            <Image className='h-[60px] w-[60px] md:h-[110px] md:w-[110px] rounded-full bg-cover' width={1000} height={1000} src={user.image?user.image:"/sophia.png"}></Image>
            <div className='cursor-pointer bg-white w-fit relative left-10 -top-3 md:-top-5 md:left-16 p-0.5 md:p-1 rounded-full'>
              <Image className='h-[10px] w-[10px] md:h-[20px] md:w-[20px]' height={1000} width={1000} src={"/cam.png"}></Image>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-wrap gap-2 justify-between'>
            <div className='flex flex-col gap-1'>
              <h4 className=''>Name</h4>
              <input className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.name}></input>
            </div>
            <div className='flex flex-col gap-1'>
              <h4 className=''>Goals</h4>
              <input className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.goals}></input>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className=''>Address</h4>
            <textarea rows={3} className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.address!==null?user.address:"Address"}></textarea>
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className=''>Email</h4>
            <input type='email' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' defaultValue={user.email}></input>
          </div>
          <div className='bg-[#1B1B1B] px-3 py-3'>
            <div className='pb-5'>
              <h4>Change Password</h4>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <h4 className=''>Current Password</h4>
                <input type='password' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' placeholder='Current Password'></input>
              </div>
              <div className='flex flex-col gap-1'>
                <h4 className=''>New Password</h4>
                <input type='password' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' placeholder='New Password'></input>
              </div>
              <div className='flex flex-col gap-1'>
                <h4 className=''>Confirm New Password</h4>
                <input type='password' className='border-[1px] border-[#676767] py-2 bg-transparent px-2 text-[#676767] placeholder:text-[#676767] outline-none' placeholder='Confirm New Password'></input>
                {mispass&&<span className='text-xs text-red-700'>Passwords dont match</span>}
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center md:justify-end'>
            <button type='submit' className='border-[1px] border-[#676767] px-3 py-2'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
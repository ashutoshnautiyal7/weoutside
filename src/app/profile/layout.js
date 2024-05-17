"use client"
import Footer from '../../../components/footer/Footer'
import GetCookie from '../../../components/getCookie/GetCookie'
import Navbar from '../../../components/navbar/Navbar'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Profile = ({children}) => {
  const pathname=usePathname().substring(9)
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;
  const [user,setUser]=useState("");
  const router=useRouter();

  useEffect(() => {
      if(token)
        setUser(typeof window !== "undefined" ? JSON.parse(GetCookie(token)) : null);
      else
      router.push("/")
  }, []);

  // useEffect(() => {
  
  //   const getProfile = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://we-out-backend.vercel.app/api/profile",
  //         { headers: { Authorization: token } }
  //       );
  //       setUser(res.data.user)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   getProfile();
  // }, []);
  
  return (
    <div>
      <Navbar/>
      <div className='py-10'>
        <div className='w-full md:w-9/12 pt-10 bg-[#0D0D0D] mx-auto'>
          <div className='px-5 md:px-10 flex gap-2 items-center border-b-[1px] border-[#676767] pb-5'>
            <Image className='h-[60px] w-[60px] md:h-[110px] md:w-[110px] rounded-full bg-cover' width={1000} height={1000} src={user.image?user.image:"/prof.jpg"}></Image>
            <div className='flex flex-col gap-1'>
              <h2 className='font-medium text-xl md:text-3xl'>{user.name}</h2>
              <h4 className='text-xs md:text-sm'>{user.email}</h4>
            </div>
          </div>
          <div className='w-full flex'>
            <div className='w-[25%] md:w-[20%] flex flex-col p-2 md:p-5 text-xs md:text-sm gap-5 border-r-[1px] border-[#676767]'>
              <Link className={`${pathname==="editprofile"&&"font-semibold"}`} href={"editprofile"}>Edit Profile</Link>
              <Link className={`${pathname==="donations"&&"font-semibold"}`} href={"donations"}>Donations</Link>
              <Link className={`${pathname==="communitypost"&&"font-semibold"}`} href={"communitypost"}>Community Post</Link>
            </div>
            <div className='w-[75%] md:w-[80%]'>
              {children}
            </div>
          </div>
        </div>

      </div>
      <div className="py-10 bg-[#190808]">
        <div className='md:w-5/6 mx-auto px-2'>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Profile
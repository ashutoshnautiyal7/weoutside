"use client"
import axios from 'axios';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ResetPassword = () => {
  const router=useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('reset-password/');
  const filteredSegments = pathSegments.filter(segment => segment !== '');
  const token = filteredSegments[filteredSegments.length - 1]
  const [invalid,setInvalid]=useState(false);
  useEffect(()=>{
    var Cookies = document.cookie.split(';');
    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=; expires="+ new Date(0).toUTCString();
    }
  },[])
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const newPass = e.target[0].value;
      const confpass = e.target[1].value;
      
        if(newPass!==confpass)
        {
          setInvalid(true)
        }
        else
        {
          const pass={
            newPass
          }
          try {
            const res = await axios.post("https://we-out-backend.vercel.app/api/reset-pass/"+token,pass
            );
            if(res.status===200)
            {
              router.push("/login")
            }
          } catch (err) {
            console.log(err)  
            setInvalid(true)
          }
        }
    }
    return (
        <div className="flex flex-col items-center bg-[#000000] h-screen">
          <div className="bg-[#F41717] rounded-b-full h-[120px] flex items-end">
            <Image alt="image" width={80} height={80} src={"/image5.png"}></Image>
          </div>
          <div className="w-11/12 md:w-4/12 ">
            <h1 className="text-2xl md:text-4xl text-center my-5">Reset Password</h1>
            <form onSubmit={handleSubmit}
              className="flex flex-col gap-5 items-center text-lg md:text-xl text-black"
            >
              <input
                type="password"
                className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
                placeholder="Set Password"
                required={true}
                minLength={8}
              ></input>
              <input
                type="password"
                className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
                placeholder="Confirm Password"
                required={true}
                minLength={8}
              ></input>
              {
                invalid&&
                <p className="text-red-600 text-sm">Passwords don't match</p>
              }
              <button
                type="submit"
                className="bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-lg md:text-xl"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      );
}

export default ResetPassword
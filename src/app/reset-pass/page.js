"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import GetCookie from "@/components/getCookie/GetCookie";

const ResetPass = () => {
  const router = useRouter();
  const[invalid,setInvalid]=useState(false);
 
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;
   useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const user={
      email,
      password
    }
    try {
      const res = await axios.post("https://we-out-backend.vercel.app/api/auth/login",user
      );
      if(res.status===200)
      {
        document.cookie="token=Bearer "+res.data.token+"; max-age=86400";
        document.cookie="Bearer "+res.data.token+"="+JSON.stringify(res.data.payloadData)+"; max-age=86400";
        router.push("/community")
      }
    } catch (err) {
      setInvalid(true)
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#000000] h-screen">
      <div className="bg-[#F41717] rounded-b-full h-[120px] flex items-end">
        <Image alt="image" width={80} height={80} src={"/image5.png"}></Image>
      </div>
      <div className="w-11/12 md:w-4/12 ">
        <h1 className="text-2xl md:text-4xl text-center my-5">Log In</h1>
        <form
          className="flex flex-col gap-5 items-center text-lg md:text-xl text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
            placeholder="Email *"
            required={true}
          ></input>
          <input
            type="password"
            className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
            placeholder="Password *"
            required={true}
          ></input>
          {
            invalid&&
            <p className="text-red-600 text-sm">Invalid Credentials*</p>
          }
          <button
            type="submit"
            className="bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-lg md:text-xl"
          >
            Continue
          </button>
        </form>
        <div className="flex flex-col items-center text-lg md:text-2xl text-black py-3">
          <span className="font-medium text-white">
            <Link href={"/signup"}>Sign Up *</Link> / Forget Password *
          </span>
        </div>
      </div>
    </div>
  );
};
export default ResetPass;

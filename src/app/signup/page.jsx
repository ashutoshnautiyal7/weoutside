"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import GetCookie from "@/components/getCookie/GetCookie";

const SignUpPage = () => {
  const router = useRouter();
  const [exists,setExists]=useState(false)

  const token=typeof window !== "undefined" ? GetCookie("token")  : null;
   useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const goals = e.target[3].value;
    const user={
      name,
      email,
      password,
      goals
    }
    try {
      const res = await axios.post("https://we-out-backend.vercel.app/api/auth/register",user
      );
      if(res.status === 200)
      {
        const userlogin={
          email,password
        }
        const reslogin=await axios.post("https://we-out-backend.vercel.app/api/auth/login",userlogin);
        if(reslogin.status==200)
        {
          document.cookie="token=Bearer "+reslogin.data.token+"; max-age=7200";
          document.cookie="Bearer "+reslogin.data.token+"="+JSON.stringify(reslogin.data.payloadData)+"; max-age=7200";
          router.push("/")
        }
      }
    } catch (err) {
      setExists(true)
    }
  };
  return (
    <div className="flex flex-col items-center bg-[#000000] h-screen">
      <div className="bg-[#F41717] rounded-b-full h-[120px] flex items-end">
        <Image alt="image" width={80} height={80} src={"/image5.png"}></Image>
      </div>
      <div className="w-11/12 md:w-4/12 ">
        <h1 className="text-2xl md:text-4xl text-center my-5">Sign Up</h1>
        <form
          className="flex flex-col gap-5 items-center text-lg md:text-xl text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
            placeholder="Name *"
            required={true}
          ></input>
          <input
            type="email"
            className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
            placeholder="Email id *"
            required={true}
          ></input>
          <input
            type="password"
            minLength={8}
            className="w-full rounded-full outline-none p-3.5 placeholder:text-black"
            placeholder="Password *"
            required={true}
          ></input>
          <div className="flex gap-10 w-full rounded-full outline-none bg-white">
            <span className="w-4/12 text-center rounded-full bg-[#E1E1E1] p-3.5">
              Goals
            </span>
            <input
              className="w-8/12 p-3.5 outline-none rounded-r-full placeholder:text-[#B0ADAD]"
              placeholder="Raise Fund"
              minLength={6}
              required={true}
            ></input>
          </div>
          {
            exists&&
            <p className="text-sm text-red-600">Email already exists*</p>
          }
          <button className="bg-[#F41717] text-white py-2 px-10 rounded-md font-semibold text-lg md:text-xl">
            Continue
          </button>
        </form>
        <div className="flex flex-col gap-5 items-center text-lg md:text-xl text-black py-3">
          <Link href={"/login"} className="font-medium text-lg md:text-2xl text-white">
            Login *
          </Link>
          <p className="text-white font-medium">OR</p>
          <button
            className="text-sm md:text-xl flex items-center gap-2 justify-center w-3/4 h-12 px-1 bg-white text-black font-medium rounded-md"
            onClick={() => signIn("google")}
          >
            <div className="relative h-[35px] w-[35px] md:h-[40px] md:w-[40px]">
              <Image alt="image" fill={true} src={"/google.png"}></Image>
            </div>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

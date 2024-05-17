"use client"
import GetinTouch from "../components/getintouch/GetinTouch";
import Navbar from "../components/navbar/Navbar";
import Joinus from "../components/joinus/Joinus";
import Mid from "../components/mid/Mid";
import Support from "../components/support/Support";
import Ujaama from "../components/ujaama/Ujaama";
import Footer from "../components/footer/Footer";
import GetCookie from "../components/getCookie/GetCookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;
  const [user,setUser]=useState("");
  const router=useRouter();

  useEffect(() => {
      if(token)
      setUser(typeof window !== "undefined" ? JSON.parse(GetCookie(token)):null);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-[#182023] to-[#0B1016]">
        <Navbar/>
        <Joinus/>
      </div>
      <div className="bg-[#0D1218]">
        <Mid/>
        <Ujaama/>
        <Support/>
        <div className="w-full md:px-0  pt-10 ">
          <div className="py-16 px-2 md:w-5/6 mx-auto">
            <GetinTouch/>
          </div>
          <div className="py-10 bg-black px-2">
            <div className="md:w-5/6 mx-auto">
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

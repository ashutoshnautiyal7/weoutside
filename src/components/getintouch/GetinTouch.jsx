"use client";
import Image from "next/image";
import React, { useRef } from "react";

const GetinTouch = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  const user = token ? JSON.parse(localStorage.getItem(token)) : null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const contact = e.target[2].value;
    const purpose = e.target[3].value;
    const res = await fetch("https://we-out-backend.vercel.app/api/postform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name,
        email,
        contact,
        purpose,
      }),
    });
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F5F5F5] py-5 md:py-10 w-full md:w-9/12 mx-auto p-2 md:p-5"
    >
      <h2 className="text-[#D21414] text-center text-3xl md:text-5xl font-semibold pb-5">
        Get in touch
      </h2>
      <div className="flex flex-col gap-5 w-full md:w-9/12 mx-auto text-black text-sm">
        <input
          className="h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs"
          placeholder="Name"
        ></input>
        <input
          type="email"
          className="h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs"
          placeholder="Email"
        ></input>
        <input
          className="h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs"
          placeholder="Contact No."
        ></input>
        <textarea
          className="border-gray-500 border-[1px] outline-none placeholder-black placeholder:text-xs p-5"
          rows={5}
          placeholder="Purpose"
        ></textarea>
        <div className="w-2/3 md:w-5/12 bg-white border-gray-500 border-[1px] p-2 flex gap-4 justify-center items-center">
          <input className="w-5 h-5" type="checkbox"></input>
          <span>I&apos;m not a robot</span>
          <Image
            alt="image"
            width={50}
            height={50}
            src={"/captcha.png"}
          ></Image>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-b from-[#FF1010] to-[#692323] rounded-sm text-white p-3 w-[200px]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default GetinTouch;

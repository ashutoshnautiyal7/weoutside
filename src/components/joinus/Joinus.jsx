import Image from "next/image";
import Link from "next/link";
import React from "react";

const Joinus = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-wrap justify-between w-full md:w-5/6 mx-auto">
      <div className="flex flex-col justify-center w-full md:w-[40%]">
        <div className="flex flex-col md:items-start items-center justify-center px-3 py-2">
          <h2 className="text-4xl md:text-5xl  font-semibold text-center md:text-left leading-snug">
            EMPOWERING THE MELANATED COMMMUNITY
          </h2>
          <p className="font-medium my-5 text-center md:text-left leading-loose">
            We are dedicated to uplifting and empowering the Melanated Community
            through a vibrant online platform.
          </p>
          <Link className="w-1/2" href={"/community"}>
            <button className="w-full bg-gradient-to-b from-[#FF1111] to-[#692323] text-white px-10 py-2 rounded-xl border-[1px] border-white text-xl font-light">
              JOIN US
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[60%] flex">
        <Image
          alt="image"
          className=""
          width={750}
          height={750}
          src={"/Whatsapp_Image.png"}
        ></Image>
      </div>
    </div>
  );
};

export default Joinus;

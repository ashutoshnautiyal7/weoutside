import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ujaama = () => {
  return (
    <div className="flex flex-col gap-[120px] px-2 w-full md:w-7/12 mx-auto py-[100px]">
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-0 md:items-start justify-between">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image alt="image" fill={true} src={"/ujaama.png"}></Image>
        </div>
        <div className="flex flex-col items-center md:items-end md:w-[50%]">
          <h2 className="text-2xl md:text-7xl font-bold tracking-wide">
            UJAAMA
          </h2>
          <h5 className="text-base md:text-2xl leading-tight md:leading-none tracking-normal md:tracking-widest py-1 text-right">
            Cooperative Economics
          </h5>
          <p className="text-center md:text-right text-xs md:text-sm leading-tight md:leading-loose w-5/6 md:w-9/12 pb-2  md:pb-5">
            At Ujamaa Economic, we are committed to applying the principles of
            Ujamaa to foster economic empowerment, entrepreneurship, and
            sustainable development within our communities.
          </p>
          <Link
            href={"https://buy.stripe.com/test_fZe9BF78V0kFbRe4gg"}
            className="bg-[#F41717] text-sm md:text-2xl rounded-md border-[1px] border-white px-2 md:px-10 py-1 md:py-2 font-medium shadow-[#211e1e] shadow-md"
          >
            Join Us
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center gap-1 md:gap-0 md:items-start justify-between">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image alt="image" fill={true} src={"/rab.png"}></Image>
        </div>
        <div className="flex flex-col md:items-start items-center md:w-[50%]">
          <h2 className="text-2xl md:text-7xl font-bold tracking-wide">
            R & B
          </h2>
          <h5 className="text-base md:text-2xl leading-tight md:leading-none tracking-normal md:tracking-widest py-1 text-right">
            MUSIC
          </h5>
          <p className="text-center md:text-left text-xs md:text-sm leading-tight md:leading-loose w-5/6 md:w-9/12 pb-2  md:pb-5">
            We&apos;re passionate about celebrating the rich history, vibrant
            culture, and timeless music of R&B.
          </p>
          <Link className="" href={"/community"}>
            <button className="bg-[#F41717] text-sm md:text-2xl rounded-md border-[1px] border-white px-2 md:px-10 py-1 md:py-2 font-medium shadow-[#211e1e] shadow-md">
              Join Us
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-0 md:items-start justify-between">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image alt="image" fill={true} src={"/mmtm.png"}></Image>
        </div>
        <div className="flex flex-col items-center md:items-end md:w-[50%]">
          <h2 className="text-2xl md:text-7xl font-bold tracking-wide">MMTM</h2>
          <h5 className="text-base md:text-2xl leading-tight md:leading-none tracking-normal md:tracking-widest py-1 text-right">
            COMMUNITY
          </h5>
          <p className="text-center md:text-right text-xs md:text-sm leading-tight md:leading-loose w-5/6 md:w-9/12 pb-2  md:pb-5">
            At &quot;My Mama Told Me,&quot; we celebrate the timeless wisdom,
            guidance, and life lessons passed down from mothers to their
            children.
          </p>
          <button className="bg-[#F41717] text-sm md:text-2xl rounded-md border-[1px] border-white px-2 md:px-10 py-1 md:py-2 font-medium shadow-[#211e1e] shadow-md">
            Join Us
          </button>
          <div className="flex flex-col items-center md:items-end md:w-[50%]">
            <h2 className="text-2xl md:text-7xl font-bold tracking-wide">
              MMTM
            </h2>
            <h5 className="text-base md:text-2xl leading-tight md:leading-none tracking-normal md:tracking-widest py-1 text-right">
              COMMUNITY
            </h5>
            <p className="text-center md:text-right text-xs md:text-sm leading-tight md:leading-loose w-5/6 md:w-9/12 pb-2  md:pb-5">
              At &quot;My Mama Told Me,&quot; we celebrate the timeless wisdom,
              guidance, and life lessons passed down from mothers to their
              children.
            </p>
            <Link className="" href={"/community"}>
              <button className="bg-[#F41717] text-sm md:text-2xl rounded-md border-[1px] border-white px-2 md:px-10 py-1 md:py-2 font-medium shadow-[#211e1e] shadow-md">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ujaama;

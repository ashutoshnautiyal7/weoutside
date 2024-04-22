import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Topbar = ({user,onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  
  return (
    <div className="flex items-center justify-between py-5">
      <div className="w-[50%] md:w-[65%] flex gap-2 md:gap-5 items-center ">
        <Link href="/" className="relative w-[50px] h-[40px] md:w-[120px] md:h-[100px]">
          <Image alt="image" fill={true} src={"/image5.png"}></Image>
        </Link>
        <div className="bg-white flex gap-1 h-fit w-full justify-center items-center py-1 md:py-2 px-2 md:px-5 rounded-full">
          <div className="relative w-[18px] h-[14px] md:w-[20px] md:h-[20px]">
            <Image alt="image" fill={true} src={"/search.png"}></Image>
          </div>
          <input
            className="w-full outline-none text-black text-xs md:text-base placeholder:text-xs md:placeholder:text-sm placeholder:text-black placeholder:font-light"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      <div className="w-[45%] md:w-[25%] flex items-center justify-start gap-2 md:gap-6">
        <div className="relative h-[30px] w-[30px] md:h-[50px] md:w-[50px]">
          <Image alt="image" fill={true} src={"/Group_97.png"}></Image>
        </div>
        <div className="relative h-[30px] w-[30px] md:h-[50px] md:w-[50px]">
          <Image alt="image" fill={true} src={"/Ellipse_3.png"}></Image>
        </div>
        <h4 className="text-sm md:text-lg">{user?.name}</h4>
      </div>
    </div>
  );
};

export default Topbar;

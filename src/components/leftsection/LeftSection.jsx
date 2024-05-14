import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Post from "../post/Post";
import axios from "axios";
import Link from "next/link";

const services = [
  {
    id: 0,
    icon: "/fund.png",
    title: "Fund Raising",
    link:"/fundraising"
  },
  {
    id: 1,
    icon: "/legal.png",
    title: "Legal Support",
    link:"/legalsupport"
  },
  {
    id: 2,
    icon: "/business.png",
    title: "Business Incubator",
    link:"/fundraising"
  },
  {
    id: 3,
    icon: "/community.png",
    title: "Community Forums",
    link:"/community"
  },
  {
    id: 4,
    icon: "/sign.png",
    title: "Ujamaa",
    link:"/ujaama"
  },
  {
    id: 5,
    icon: "/mama.png",
    title: "My MAMA Told me",
    link:"/mymamatoldme"
  },
  {
    id: 6,
    icon: "/melanated.png",
    title: "Melenated Lifes Matter",
    link:"/melenatedlifesmatter"
  },
];

// const posts=[
//     {
//         id:0,
//         icon:"/usericon.png",
//         name:"Rexa99",
//         time:"1 days ago",
//         title:"How to help Our Melanted Community ?",
//         content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
//         img:"/postimg.png",
//         likes:18,
//         comments:13,
//     },
//     {
//         id:1,
//         icon:"/usericon.png",
//         name:"Rexa99",
//         time:"1 days ago",
//         title:"How to help Our Melanted Community ?",
//         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
//         img:"/postimg.png",
//         likes:18,
//         comments:13,
//     },
//     {
//         id:2,
//         icon:"/usericon.png",
//         name:"Rexa99",
//         time:"1 days ago",
//         title:"How to help Our Melanted Community ?",
//         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
//         img:"/postimg.png",
//         likes:18,
//         comments:13,
//     },
// ];

const LeftSection = ({loading,token,user,posts,size,currentPage,setCurrentPage}) => {
  const lastPage=Math.ceil(size/10);
  const [imageSrc, setImageSrc] = useState([]);
  const titleRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();
  const [uploadData, setUploadData] = useState();
  const [warn, setWarn] = useState(false);
  const [publish,setPublish ]=useState("Publish");
  
  function handleOnChange(changeEvent) {
    const reader = new FileReader();
    const files = changeEvent.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      reader.onload = function (onLoadEvent) {
        setImageSrc([...imageSrc, onLoadEvent.target.result]);
        setUploadData(undefined);
        setWarn(false);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublish("Publishing...")
    const title = e.target[0].value;
    const content = e.target[1].value;
    const images = [];
    if (imageSrc !== null) {
      for (const imageUrl of imageSrc) {
        const formData = new FormData();
        formData.append("file", imageUrl);
        formData.append("upload_preset", "my-upload");
        try {
          const data = await fetch(
            "https://api.cloudinary.com/v1_1/dgav9ohkf/image/upload",
            {
              method: "POST",
              body: formData,
            }
          ).then((r) => r.json());
          console.log(data);
          images.push(data.url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    }
    const user={
      title,
      content,
      images,
    }
    try {
      const res = await axios.post(
        "https://we-out-backend.vercel.app/api/createpost",user,
        { headers: { Authorization: token } }
      );
      titleRef.current.value = "";
      contentRef.current.value = "";
      imageRef.current.value = [];
      setImageSrc([]);
      setPublish("Publish");
      location.reload();
    } catch (err) {
      setPublish("Publish");
    }
  };

  const handleImageRemove = (indexToRemove) => {
    setImageSrc(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 md:gap-2">
        {services.map((s) => (
          <Link
            href={s.link}
            key={s.id}
            className="py-1.5 md:py-2.5 px-2 md:px-4 rounded-md bg-[#DD2929] flex gap-2 items-center justify-center"
          >
            <div className="relative h-[25px] w-[25px]">
              <Image alt="image" fill={true} src={s.icon}></Image>
            </div>
            <span className="text-xs">{s.title}</span>
          </Link>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black my-2 rounded-xl p-3 md:p-5 overflow-hidden"
      >
        <h2 className="text-base font-medium ml-5">Create Post</h2>
        <div className="flex items-center gap-2 my-2 bg-[#F6F3F3] rounded-xl py-3 px-5">
          <input
            required={true}
            ref={titleRef}
            className="outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black"
            placeholder="Title"
          ></input>
        </div>
        <div className="flex items-center gap-2 my-4 bg-[#F6F3F3] rounded-xl p-5">
          <div className="relative h-[30px] w-[30px] rounded-l-xl ">
            <Image alt="image" fill={true} src={"/person.png"}></Image>
          </div>
          <input
            ref={contentRef}
            required={true}
            className="outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black"
            placeholder="What's on your mind"
          ></input>
        </div>
        {imageSrc && (
          <div className="flex flex-col gap-2 pb-5">
            {imageSrc.map((image,index) => (
              <div key={image} className="">
                <div onClick={() => handleImageRemove(index)} className="cursor-pointer relative top-4 -left-2">
                    <span className="bg-gray-400 w-fit text-black px-2 py-0.5 font-medium rounded-full flex justify-center items-center">×</span>
                </div>
                <Image
                  alt="image"
                  className="w-full h-full"
                  src={image}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2 md:gap-0 justify-center md:justify-between items-center md:text-base text-sm">
          <div className="flex items-center justify-center gap-1.5 md:gap-5">
            <label
              for="gallery"
              className="cursor-pointer flex items-center justify-center gap-2 md:gap-4 rounded-full bg-[#C2F6C8] text-black px-6 py-2"
            >
              <Image
                alt="image"
                width={20}
                height={20}
                src={"/gallery.png"}
              ></Image>
              <span>Gallery</span>
            </label>
            <input
              name="file"
              ref={imageRef}
              onChange={handleOnChange}
              id="gallery"
              className="hidden"
              type="file"
            />
            <label className="flex items-center justify-center gap-2 md:gap-4 rounded-full bg-[#C2F6C8] text-black px-6 py-2">
              <Image
                alt="image"
                width={20}
                height={20}
                src={"/tag.png"}
              ></Image>
              <span>Tag</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#2CC34D] flex items-center justify-center gap-2 text-white rounded-full px-6 py-2"
          >
            <Image
              alt="image"
              width={20}
              height={20}
              src={"/publish.png"}
            ></Image>
            <span>{publish}</span>
          </button>
        </div>
      </form>
      {loading?
      <div className="w-full flex justify-center py-5">Loading...</div>
      :
      <div className="flex flex-col gap-2">
        {posts?.map((p) => (
          <Post key={p?.id} post={p} user={user} token={token} />
        ))}
      </div>
      }
      <div className={`w-full flex ${(currentPage<=1||currentPage===lastPage)?"justify-center":"justify-between"} my-8`}>
        {currentPage>1&&<div className="bg-white p-0.5 md:p-1 rounded-lg">
          <button
            onClick={() => {
              setCurrentPage((prev)=>(prev-1)),
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-lg py-2 px-8 bg-gradient-to-b from-[#FF1111] to-[#692323] md:text-xl text-base text-white"
          >
            Previous Page
          </button>
        </div>}
        {currentPage<lastPage&&<div className="bg-white p-0.5 md:p-1 rounded-lg">
          <button
            onClick={() => {
              setCurrentPage((prev)=>(prev+1)),
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-lg py-2 px-8 bg-gradient-to-b from-[#FF1111] to-[#692323] md:text-xl text-base text-white"
          >
            Next Page
          </button>
        </div>}
      </div>
    </div>
  );
};

export default LeftSection;

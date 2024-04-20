"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Post from '../post/Post'

const services=[
    {
        id:0,
        icon:"/fund.png",
        title:"Fund Raising",
    },
    {
        id:1,
        icon:"/legal.png",
        title:"Legal Support",
    },
    {
        id:2,
        icon:"/business.png",
        title:"Business Incubator",
    },
    {
        id:3,
        icon:"/community.png",
        title:"Community Forums",
    },
    {
        id:4,
        icon:"/sign.png",
        title:"Ujamaa",
    },
    {
        id:5,
        icon:"/mama.png",
        title:"My MAMA Told me",
    },
    {
        id:6,
        icon:"/melanated.png",
        title:"Melenated Lifes Matter",
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

const LeftSection = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const titleRef=useRef();
    const contentRef=useRef();
    const imageRef=useRef();
    const [imageSrc, setImageSrc] = useState([]);
    const [uploadData, setUploadData] = useState();
    const [warn,setWarn]=useState(false);
    const [posts,setPosts]=useState([]);
    const token=localStorage.getItem('access_token');
    const user=JSON.parse(localStorage.getItem(token));

    function handleOnChange(changeEvent) {
        const reader = new FileReader();
        const files = changeEvent.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            reader.onload = function(onLoadEvent) {
            setImageSrc([...imageSrc, onLoadEvent.target.result]);
            setUploadData(undefined);
            setWarn(false);
            }
            reader.readAsDataURL(file);
        }
      }

    useEffect(()=>{
        const getPosts=async()=>{
            try{
                const res=await fetch("https://we-out-backend.vercel.app/api/posts?page="+currentPage,{
                    method:"GET",
                    headers:{
                      "Content-Type":"application/json",
                      'Authorization': token,
                    }, 
                  });
                  const resp=await res.json();
                  const data=resp.formattedPosts;
                  setPosts(data);
                }
                catch(err){

                }
            }
            getPosts();
    },[currentPage]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const title=e.target[0].value;
        const content=e.target[1].value;
        const images=[];
        if(imageSrc!==null)
        {
            for (const imageUrl of imageSrc) {
                const formData = new FormData();
                formData.append('file', imageUrl); 
                formData.append('upload_preset', 'my-upload');
              try {
                const data = await fetch('https://api.cloudinary.com/v1_1/dgav9ohkf/image/upload', {
                  method: 'POST',
                  body: formData
                }).then(r => r.json());
                console.log(data);
                images.push(data.url);
              } catch (error) {
                console.error('Error uploading image:', error);
              }
            }
        }
      try{
        const res=await fetch("https://we-out-backend.vercel.app/api/createpost",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            'Authorization': token,
          },
          body:JSON.stringify({
            title,content,images
          })
        });
        const data=await res.json();
        titleRef.current.value="";
        contentRef.current.value="";
        imageRef.current.value=[];
        setImageSrc([]);
        location.reload();
      }catch(err){
      }
    }

  return (
    <div>
        <div className='flex flex-wrap gap-3 md:gap-5'>
            {
                services.map((s)=>(
                    <button key={s.id} className='py-1.5 md:py-2 px-2 md:px-3 rounded-md bg-[#DD2929] flex gap-2 items-center justify-center'>
                        <div className='relative h-[25px] w-[25px]'>
                            <Image alt="image" fill={true} src={s.icon}></Image>
                        </div>
                        <span className='text-xs'>{s.title}</span>
                    </button>
                ))
            }
        </div>
        <form onSubmit={handleSubmit} className='bg-white text-black my-2 rounded-xl p-3 md:p-5 overflow-hidden'>
            <h2 className='text-base font-medium ml-5'>Create Post</h2>
                <div className='flex items-center gap-2 my-2 bg-[#F6F3F3] rounded-xl py-3 px-5'>
                    <input ref={titleRef} className='outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black' placeholder="Title"></input>
                </div>
                <div className='flex items-center gap-2 my-4 bg-[#F6F3F3] rounded-xl p-5'>
                    <div className='relative h-[30px] w-[30px] rounded-l-xl '>
                        <Image alt="image" fill={true} src={"/person.png"}></Image>
                    </div>
                <input ref={contentRef} className='outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black' placeholder="What's on your mind"></input>
            </div>
            {imageSrc&&
                <div className='flex flex-col gap-2 pb-5'>
                    {
                        imageSrc.map((image)=>(
                            <div key={image} className='relative h-[400px] w-[400px]'>
                                <Image alt="image" className='object-cover' src={image} fill={true}/>
                            </div>
                        ))
                    }
                </div>
            }
            <div className='flex gap-2 md:gap-0 justify-center md:justify-between items-center md:text-base text-sm'>
                <div className='flex items-center justify-center gap-1.5 md:gap-5'>
                    <label for='gallery' className='cursor-pointer flex items-center justify-center gap-2 md:gap-4 rounded-full bg-[#C2F6C8] text-black px-6 py-2' >
                        <Image alt="image" width={20} height={20} src={"/gallery.png"}></Image>
                        <span>Gallery</span>
                    </label>
                    <input name='file' ref={imageRef} onChange={handleOnChange} id='gallery' className='hidden' type='file'/>
                    <label className='flex items-center justify-center gap-2 md:gap-4 rounded-full bg-[#C2F6C8] text-black px-6 py-2' >
                        <Image alt="image" width={20} height={20} src={"/tag.png"}></Image>
                        <span>Tag</span>
                    </label>
                </div>
                <button type='submit' className='bg-[#2CC34D] flex items-center justify-center gap-2 text-white rounded-full px-6 py-2'>
                    <Image alt="image" width={20} height={20} src={"/publish.png"}></Image>
                    <span>Publish</span>
                </button>
            </div>
        </form>
        <div className='flex flex-col gap-2'>
            {
                posts?.map((p)=>(
                    <Post key={p?.id} post={p} user={user}/>
                ))
            }
        </div>
        <div className='w-full flex justify-center my-8'>
            <div className='bg-white p-0.5 md:p-1 rounded-lg'>
                <button onClick={()=>{setCurrentPage(currentPage+1),window.scrollTo({top: 0,behavior: "smooth"});}} className='rounded-lg py-2 px-8 bg-gradient-to-b from-[#FF1111] to-[#692323] md:text-xl text-base text-white'>Next Page</button>                
            </div>
        </div>
    </div>
  )
}

export default LeftSection
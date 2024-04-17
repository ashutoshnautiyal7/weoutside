import Image from 'next/image'
import React from 'react'
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

const post=[
    {
        id:0,
        icon:"/usericon.png",
        name:"Rexa99",
        time:"1 days ago",
        title:"How to help Our Melanted Community ?",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        img:"/postimg.png",
        likes:18,
        comments:13,
    },
    {
        id:1,
        icon:"/usericon.png",
        name:"Rexa99",
        time:"1 days ago",
        title:"How to help Our Melanted Community ?",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        img:"/postimg.png",
        likes:18,
        comments:13,
    },
    {
        id:2,
        icon:"/usericon.png",
        name:"Rexa99",
        time:"1 days ago",
        title:"How to help Our Melanted Community ?",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        img:"/postimg.png",
        likes:18,
        comments:13,
    },
];

const LeftSection = () => {
  return (
    <div>
        <div className='flex flex-wrap gap-5'>
            {
                services.map((s)=>(
                    <button key={s.id} className='py-2 px-3 rounded-md bg-[#DD2929] flex gap-2 items-center justify-center'>
                        <div className='relative h-[25px] w-[25px]'>
                            <Image fill={true} src={s.icon}></Image>
                        </div>
                        <span className='text-xs'>{s.title}</span>
                    </button>
                ))
            }
        </div>
        <form className='bg-white text-black my-2 rounded-xl p-5'>
            <h2 className='text-base font-medium ml-5'>Create Post</h2>
            <div className='flex items-center gap-2 my-4 bg-[#F6F3F3] rounded-xl p-5'>
                <div className='relative h-[30px] w-[30px] rounded-l-xl '>
                    <Image fill={true} src={"/person.png"}></Image>
                </div>
                <input className='outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black' placeholder="What's on your mind"></input>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-center gap-5'>
                    <button className='flex items-center justify-center gap-4 rounded-full bg-[#C2F6C8] text-black px-6 py-2' >
                        <Image width={20} height={20} src={"/gallery.png"}></Image>
                        <span>Gallery</span>
                    </button>
                    <button className='flex items-center justify-center gap-4 rounded-full bg-[#C2F6C8] text-black px-6 py-2' >
                        <Image width={20} height={20} src={"/tag.png"}></Image>
                        <span>Tag</span>
                    </button>
                </div>
                <button className='bg-[#2CC34D] flex items-center justify-center gap-2 text-white rounded-full px-6 py-2'>
                    <Image width={20} height={20} src={"/publish.png"}></Image>
                    <span>Publish</span>
                </button>
            </div>
        </form>
        <div className='flex flex-col gap-2'>
            {
                post.map((p)=>(
                    <Post key={Post.id} post={p}/>
                ))
            }
        </div>
        <div className='w-full flex justify-center my-8'>
            <div className='bg-white p-1 rounded-lg'>
                <button className='rounded-lg py-2 px-8 bg-gradient-to-b from-[#FF1111] to-[#692323] text-xl text-white'>Next Page</button>                
            </div>
        </div>
    </div>
  )
}

export default LeftSection
import Image from 'next/image'
import React, { useState } from 'react'
import { debounce } from 'lodash';

const Post = ({post}) => {
    const [likes,setLikes]=useState(post?.likeCount);
    const [comments,setComments]=useState(post?.comments);
    const [commOpen,setcommopen]=useState(false);
    const token=localStorage.getItem('access_token');

    const likeUnlikePost=async()=>{
        const postId=post.id;
        const res=await fetch("https://we-out-backend.vercel.app/api/likepost",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Authorization': token,
            },
            body:JSON.stringify({
                postId
            })
        });
        const data=await res.json();
        setLikes(data?.updatedPost?.likeCount);
    }
    const debouncedLikeUnlikePost = debounce(likeUnlikePost, 5000);
    const handleLike = () => {
        debouncedLikeUnlikePost();
    };
    
    const handleSubmit=async(e)=>{
        const postId=post.id;
        const content=e.target[0].value;
        e.preventDefault();
        const res=await fetch("https://we-out-backend.vercel.app/api/comment",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json",
                  'Authorization': token,
                },
                body:JSON.stringify({
                    postId,content
                })
              });
              res.status===201&&setComments([...comments,{"content":content}]);
              e.target[0].value="";
    }
  return (
    <div className='bg-white p-4 md:p-6 rounded-3xl flex text-black'>
        <div className='w-full md:w-9/12'>
            <div className='flex items-center gap-2 my-2'>
                <div className='relative rounded-full h-[60px] w-[60px]'>
                    <Image className='rounded-full object-cover' fill={true} src={"/usericon.png"}></Image>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-sm font-medium'>{post?.name}</h2>
                    <h3 className='text-xs'>{post?.time}</h3>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{post?.title}</h2>
                <p>{post?.content}</p>
                <div className='flex flex-col'>
                    {post.images?.map((image)=>(
                        <div key={image} className='relative w-full md:w-10/12 h-[250px] my-2'>
                            <Image className='object-cover' fill={true} src={image}></Image>
                        </div>
                        ))
                    }
                </div>
                <div className='flex items-center gap-8 mt-4'>
                    <div className='cursor-pointer flex items-center justify-center gap-2'>
                        <Image onClick={handleLike} height={25} width={25} src={"/like.png"}></Image>
                        <span className='font-medium'>{likes}</span>
                    </div>
                    <div className='cursor-pointer flex items-center justify-center gap-2'>
                        <Image onClick={()=>(setcommopen(!commOpen))} height={20} width={23} src={"/comment.png"}></Image>
                        <span className='font-medium'>{post?.comments.length}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <Image height={20} width={20} src={"/share.png"}></Image>
                        <span className='text-xs'>Share</span>
                    </div>
                </div>
            </div>
            {commOpen&&
            <div className='pt-5'>
                <form onSubmit={handleSubmit} className='py-1 flex gap-2'>
                    <input className='outline-none w-full bg-slate-200 px-2 py-1 rounded-lg' placeholder='Write Comment'></input>
                    <button type='submit' className='px-3 py-1 bg-[#2CC34D] rounded-lg text-white'>Post</button>
                </form>
                <div className='flex flex-col gap-1 md:gap-5'>
                    {
                        comments?.map((comment)=>(
                            <p key={comment.userId} className='px-2 py-0.5'>{comment.content}</p>
                        ))
                    }
                </div>
            </div>}
        </div>
        <div className='w-1/12 md:w-3/12 flex justify-end'>
            <span className='text-lg font-semibold'>•••</span>
        </div>
    </div>
  )
}

export default Post
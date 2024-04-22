import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { debounce, forEach, update } from 'lodash';
import {format} from 'timeago.js'
import axios from 'axios';

const Post = ({post,user,token}) => {
    const [isLiked,setIsLiked]=useState(false);
    const [openMenu,setOpenMenu]=useState(false);
    const [openUpdate,setOpenUpdate]=useState(false)
    const titleRef=useRef();
    const contentRef=useRef();
    const [likes,setLikes]=useState(post?.likeCount);
    const [comments,setComments]=useState(post?.comments);
    const [commOpen,setcommopen]=useState(false);

    useEffect(()=>{
        post.likes.forEach(like => {
            if(like.userId===user?.id)
            {
                setIsLiked(true);
            }
        });
    },[])
    

    const likeUnlikePost=async()=>{
        const postId=post.id;
        const body={
            postId
        }
        try{
            const res=await axios.post("https://we-out-backend.vercel.app/api/likepost",body,
            { headers: { Authorization: token } }
            );
            setIsLiked(!isLiked)
            setLikes((likes+(isLiked?-1:1)));
        }
        catch(err){

        }
    }

    const debouncedLikeUnlikePost = debounce(likeUnlikePost, 200);
    const handleLike = () => {
        debouncedLikeUnlikePost();
    };
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const postId=post.id;
        const content=e.target[0].value;
        const commentData={
            postId,content
        }
        try{
            const res=await axios.post("https://we-out-backend.vercel.app/api/comment",commentData,
            { headers: { Authorization: token } }
            );
            const data=res.data;
            res.status===201&&setComments([...comments,{"commentId":data.data.id,"userId":user.id,"username":user.name,"content":content}]);
            e.target[0].value="";
        }
        catch(err){

        }
    }
    
    const handleDelete=async(e)=>{
        e.preventDefault();
        const postId=post.id;
       
        try{
            const res=await axios.delete("https://we-out-backend.vercel.app/api/deletepost",
            { headers: { Authorization: token },data:{postId} }
            );
            setOpenMenu(false)
            location.reload()
        }
        catch(err){

        }
    }

    const handleUpdate=async(e)=>{
        e.preventDefault();
        const title=e.target[0].value;
        const content=e.target[1].value;
        const postId=post.id;
        const user={
            title,
            content,
            postId
          }
        try
        {
            const res=await axios.put("https://we-out-backend.vercel.app/api/updatepost",user,
                { headers: { Authorization: token } }
            );
            setOpenUpdate(false)
            location.reload();
        }
        catch(err)
        {

        }
    }

    const handleDeleteComment=async(e,commId)=>{
        e.preventDefault();
        console.log(commId)
        const commentId=commId;
        try{
            const res=await axios.delete("https://we-out-backend.vercel.app/api/deletecomment",
            { headers: { Authorization: token },data:{commentId} }
            );
            const newcomms=[]
            comments.forEach(comment=> {
                if(comment.commentId!==commId)
                {
                    newcomms.push(comment);
                }
            });
            setComments(newcomms);
        }
        catch(err){
        }
    }

  return (
    <div className='bg-white p-4 md:p-6 rounded-3xl flex text-black'>
        <div className='w-full md:w-9/12'>
            <div className='flex items-center gap-2 my-2'>
                <div className='relative rounded-full h-[60px] w-[60px]'>
                    <Image alt="image" className='rounded-full object-cover' fill={true} src={"/usericon.png"}></Image>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-sm font-semibold'>{post?.user}</h2>
                    <h3 className='text-xs'>{format(post?.createdAt)}</h3>
                </div>
            </div>
            {openUpdate?
            <form onSubmit={handleUpdate}>
                <div className='flex items-center gap-2 my-2 bg-[#F6F3F3] rounded-xl py-3 px-5'>
                    <input ref={titleRef} defaultValue={post?.title} className='outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black' placeholder="Title"></input>
                </div>
                <div className='flex items-center gap-2 my-4 bg-[#F6F3F3] rounded-xl p-5'>
                    <input ref={contentRef} defaultValue={post?.content} className='outline-none rounded-r-xl w-full bg-[#F6F3F3] placeholder:text-black' placeholder="Content"></input>
                </div>
                <div className='flex flex-col'>
                    {post?.images?.map((image)=>(
                        <div key={image} className='relative w-full md:w-10/12 h-[250px] my-2'>
                            <Image alt="image" className='object-cover' fill={true} src={image}></Image>
                        </div>
                        ))
                    }
                </div>
                <div className='flex w-full justify-center items-center py-2'>
                    <button type='submit' className='bg-[#2CC34D] px-3 py-1 text-white rounded-md font-medium'>Update</button>
                </div>
            </form>
                :
            <div>
                <h2 className='text-2xl font-bold'>{post?.title}</h2>
                <p>{post?.content}</p>
                <div className='flex flex-col'>
                    {post?.images?.map((image)=>(
                        <div key={image} className='relative w-full h-full my-2'>
                            <Image alt="image" className='h-full w-full' width={1000} height={1000} src={image}></Image>
                        </div>
                        ))
                    }
                </div>
                <div className='flex items-center gap-8 mt-4'>
                    <div className='cursor-pointer flex items-center justify-center gap-2'>
                        <Image alt="image" onClick={handleLike} height={25} width={25} src={isLiked?"/like.png":"/empty.png"}></Image>
                        <span className='font-medium'>{likes}</span>
                    </div>
                    <div className='cursor-pointer flex items-center justify-center gap-2'>
                        <Image alt="image" onClick={()=>(setcommopen(!commOpen))} height={20} width={23} src={"/comment.png"}></Image>
                        <span className='font-medium'>{comments.length}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <Image alt="image" height={20} width={20} src={"/share.png"}></Image>
                        <span className='text-xs'>Share</span>
                    </div>
                </div>
            </div>
            }
            {commOpen&&
            <div className='flex flex-col gap-2 pt-5'>
                <form onSubmit={handleSubmit} className='py-1 flex gap-2'>
                    <input className='outline-none w-full bg-slate-200 px-2 py-1 rounded-lg' placeholder='Write Comment'></input>
                    <button type='submit' className='px-3 py-1 bg-[#2CC34D] rounded-lg text-white'>Post</button>
                </form>
                <div className='flex flex-col gap-2 '>
                    {
                        comments?.map((comment)=>(
                            <div key={comment.userId} className='flex flex-col gap-0.5 px-2 py-1 bg-slate-200 rounded-lg'>
                                <span className='text-sm font-semibold'>{comment.username}</span>
                                <div className='flex justify-between items-end'>
                                    <p className=''>{comment.content}</p>
                                    {comment.userId==user?.id&&<button onClick={(e)=>{handleDeleteComment(e,comment.commentId)}} className='flex items-center justify-center bg-[#2CC34D] px-1.5 py-1 rounded-md text-sm text-white'>Delete</button>}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>}
        </div>
        <div className='w-1/12 md:w-3/12 flex justify-end'>
            <div className='flex flex-col items-end'>
                <span onClick={()=>{setOpenMenu(!openMenu)}} className={`${post.userId===user?.id?"cursor-pointer":"cursor-not-allowed"} text-lg font-semibold`}>•••</span>
                {openMenu&&post.userId===user.id&&
                    <div className='flex flex-col bg-slate-400 gap-[1px]'>
                        <div onClick={handleDelete} className='cursor-pointer flex justify-center items-center bg-slate-300 px-5 py-1'>Delete</div>
                        <div onClick={()=>{setOpenUpdate(!openUpdate),setOpenMenu(false)}} className='cursor-pointer flex justify-center items-center bg-slate-300 px-5 py-1'>{openUpdate?"Cancel":"Update"}</div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Post
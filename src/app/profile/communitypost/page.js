"use client"
import GetCookie from '@/components/getCookie/GetCookie';
import Post from '@/components/post/Post';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [user,setUser]=useState([]);
  const token=typeof window !== "undefined" ? GetCookie("token")  : null;
  useEffect(() => {
    if(token)
    {
      setUser(typeof window !== "undefined" ? JSON.parse(GetCookie(token)):null);
    }
  }, []);
  useEffect(() => {

    const getPosts = async () => {
      try {
        const res = await axios.get(
          "https://we-out-backend.vercel.app/api/postsforuser",
          { headers: { Authorization: token } }
        );
        const data = res.data.formattedPosts;
        setPosts(data);
      } catch (err) {
      }
    };
    getPosts();
  }, []);
  
  return (
    <div>
      <div className='p-5'>
        <h3 className='text-sm font-semibold'>Your Post</h3>
      </div>
      <div className='flex flex-col gap-2'>
        {
          posts.map((p)=>(
            <Post key={p?.id} user={user} token={token} post={p} prof={"prof"}/>
          ))
        }
      </div>
    </div>
  )
}

export default CommunityPage;
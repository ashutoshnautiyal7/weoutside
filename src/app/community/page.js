"use client"
import Footer from '@/components/footer/Footer'
import LeftSection from '@/components/leftsection/LeftSection'
import RightSection from '@/components/rightsection/RightSection'
import Topbar from '@/components/topbar/Topbar'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const router=useRouter();
    const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
    
    if(!token)
    router?.push("/login");
  useEffect(() => {

    const getPosts = async () => {
      try {
        const res = await fetch(
          "https://we-out-backend.vercel.app/api/posts?page=" + currentPage,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        const resp = await res.json();
        const data = resp.formattedPosts;
        setPosts(data);
        setFilteredPosts(data)
      } catch (err) {}
    };
    getPosts();
  }, [currentPage]);

  const onSearch = (query) => {
    if (query.trim() === "") {
        setFilteredPosts(posts);
    } else {
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||  
            post.content.toLowerCase().includes(query.toLowerCase()) ||  
            (post.user && post.user.toLowerCase().includes(query.toLowerCase()))  
        );
        setFilteredPosts(filtered);
    }
};

  return (
    <div className='w-full bg-gradient-to-b from-[#470a0a] via-black to-[#480203]'>
        <div className='w-full px-2 md:px-0 md:w-10/12 mx-auto'>
            <Topbar onSearch={onSearch}  posts={posts}/>
            <div className='flex justify-between my-5'>
                <div className='w-full md:w-[65%]'>
                    <LeftSection posts={filteredPosts} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
            <div className='py-5'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default page
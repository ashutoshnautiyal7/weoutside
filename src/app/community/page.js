"use client"
import Footer from '@/components/footer/Footer'
import GetCookie from '@/components/getCookie/GetCookie'
import LeftSection from '@/components/leftsection/LeftSection'
import RightSection from '@/components/rightsection/RightSection'
import Topbar from '@/components/topbar/Topbar'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CommunityPage = () => {
    const token=typeof window !== "undefined" ? GetCookie("token")  : null;
    const router=useRouter();
    const [user,setUser]=useState("");

    useEffect(() => {
      if (!token) {
        router.push("/login");
      }
      else
      {
        setUser(typeof window !== "undefined" ? JSON.parse(GetCookie(token)):null);
      }
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    

  useEffect(() => {

    const getPosts = async () => {
      try {
        const res = await axios.get(
          "https://we-out-backend.vercel.app/api/posts?page=" + currentPage,
          { headers: { Authorization: token } }
        );
        const data = res.data.formattedPosts;
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
            <Topbar onSearch={onSearch} user={user}/>
            <div className='flex justify-between my-5'>
                <div className='w-full md:w-[65%]'>
                    <LeftSection token={token} user={user} posts={filteredPosts} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
            <div className='py-5'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default CommunityPage
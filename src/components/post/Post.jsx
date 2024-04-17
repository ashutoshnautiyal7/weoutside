import Image from 'next/image'
import React from 'react'

const Post = ({post}) => {
  return (
    <div className='bg-white p-6 rounded-3xl flex text-black'>
        <div className='w-9/12'>
            <div className='flex items-center gap-2 my-2'>
                <div className='relative rounded-full h-[60px] w-[60px]'>
                    <Image className='rounded-full object-cover' fill={true} src={post.icon}></Image>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-sm font-medium'>{post.name}</h2>
                    <h3 className='text-xs'>{post.time}</h3>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{post.title}</h2>
                <p>{post.desc}</p>
                <div className='relative w-10/12 h-[250px] my-2'>
                    <Image className='object-cover' fill={true} src={post.img}></Image>
                </div>
                <div className='flex items-center gap-8 mt-4'>
                    <div className='flex items-center justify-center gap-2'>
                        <Image height={25} width={25} src={"/like.png"}></Image>
                        <span className='font-medium'>{post.likes}</span>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <Image height={20} width={20} src={"/comment.png"}></Image>
                        <span className='font-medium'>{post.comments}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1'>
                        <Image height={20} width={20} src={"/share.png"}></Image>
                        <span className='text-xs'>Share</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/12 flex justify-end'>
            <span className='text-lg font-semibold'>•••</span>
        </div>
    </div>
  )
}

export default Post
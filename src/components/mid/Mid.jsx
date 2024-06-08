"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card2 from '../card2/Card2';
import Card3 from '../card3/Card3';
import Image from 'next/image';

const Mid = () => {
    const data2=[
        {
            id:0,
            img:"/Group_25.png",
            title:"501c3",
            desc:"The fundraising section of the WeOutside app serves as a critical component of our mission to empower Melanated communities. While other communities often receive large grants and funding, systemic inequalities have historically",
            h:300,
            w:300
        },
        {
            id:1,
            img:"/Group_27.png",
            title:"Seeking Justice",
            desc:"Access to legal support is essential for ensuring justice and equality within the Melanated Community. Our legal support services are here to assist you in navigating legal challenges and advocating for your rights.",
            h:200,
            w:200
        },
        {
            id:2,
            img:"/Group.png",
            title:"Join Home Growth Collective",
            desc:"Turn your entrepreneurial dreams into reality with our business incubator program. Whether you're launching a startup or scaling your existing business, our incubator provides the resources, mentorship, and support you need to succeed.",
            h:200,
            w:200
        },
        {
            id:3,
            img:"/Group_43.png",
            title:"Community Forms",
            desc:"Join the conversation and connect with fellow members of the Melanated Community in our community forums. Our forums provide a space for open dialogue, collaboration, and support.",
            h:200,
            w:200
        },
       
    ];
    const data3=[
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"We Outside has truly been a lifeline for me. The fundraising support has helped my small business thrive, and the sense of community here is incredible. It's a place where I feel seen, heard, and empowered to reach my full potential.",
            rating:4,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"As an artist, finding a platform that values and promotes R&B music has been amazing. We Outside not only supports my creative journey but also connects me with other talented individuals in the melanated community. It's a hub of inspiration and opportunity.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"We Outside's legal support services are top-notch. Navigating legal challenges can be daunting, but having a dedicated resource tailored to our community's needs has been invaluable. The guidance and assistance I've received have made a significant difference.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"The UJAMA section on We Outside is a brilliant initiative. It has connected me with fellow entrepreneurs, fostering collaboration and shared growth. The emphasis on cooperative economics is empowering and has given my business a real boost.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"Empowerment is at the heart of We Outside. Programs like 'My Mama Told Me' and 'Melanated Lives Matter' resonate deeply with me, providing both emotional support and actionable advice. This platform has been a source of strength and solidarity.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"Joining We Outside was one of the best decisions I've made. The community is vibrant and welcoming, and the initiatives focused on uplifting our people are truly inspiring. I've gained valuable insights, made lasting connections, and feel more empowered than ever to make a difference in my community.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"We Outside provides a unique and necessary space for the melanated community. The content is rich and relevant, addressing issues that matter to us. Whether it's through their articles, forums, or events, I always leave feeling informed, supported, and motivated to take action.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"I love how We Outside celebrates our culture and achievements while also addressing the challenges we face. The platform offers a balanced mix of inspiration and practical advice, which has been incredibly helpful in my personal and professional growth. It's a true beacon of empowerment.",
            rating:5,
        },
        
    ];
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 
        },
        mobile: {
          breakpoint: { max: 767, min: 300 },
          items: 1,
          slidesToSlide: 1 
        }
      };
  return (
    <div className=''>
        <div className='w-5/6 flex flex-wrap md:justify-between justify-center gap-8 md:gap-0 py-5 mx-auto'>
            <div className='flex flex-col items-center gap-3 md:gap-8 w-[320px]'>
                <div className='relative h-[120px] w-[120px]'>
                    <Image alt="image" fill={true} src={"/vision.png"}></Image>
                </div>
                <div className='bg-[#F41717] w-full py-1 flex justify-center items-center rounded-sm shadow-md shadow-black'>
                    <span className='text-3xl font-semibold'>OUR VISION</span>
                </div>
                <p className='text-center md:text-left'>Our vision at WeOutside is to create a thriving ecosystem where Melanated individuals are empowered to shape their own destinies and build prosperous futures for themselves and their communities</p>
            </div>
            <div className='flex flex-col items-center gap-3 md:gap-8 w-[320px]'>
                <div className='relative h-[120px] w-[120px]'>
                    <Image alt="image" fill={true} src={"/mission.png"}></Image>
                </div>
                <div className='bg-[#F41717] w-full py-1 flex justify-center items-center rounded-sm'>
                    <span className='text-3xl font-semibold'>OUR MISSION</span>
                </div>
                <p className='text-center'>At WeOutside, our mission is deeply rooted in organizing to empowering the Melanated community by organizing us so we can unite ,collaboration and  achieve economic empowerment. We believe in</p>
            </div>
            <div className='flex flex-col items-center gap-3 md:gap-8 w-[320px]'>
                <div className='relative h-[120px] w-[125px]'>
                    <Image alt="image" fill={true} src={"/goal.png"}></Image>
                </div>
                <div className='bg-[#F41717] w-full py-1 flex justify-center items-center rounded-sm shadow-md shadow-black'>
                    <span className='text-3xl font-semibold'>OUR GOAL</span>
                </div>
                <p className='text-center md:text-right'>Our goal is to be the premier platform for Melanated individuals seeking to elevate themselves and their communities through collective action and empowerment. We strive to facilitate meaningful connections,   foster collaboration,</p>
            </div>
        </div>
        <div className='py-5'>
            <h1 className='text-4xl md:text-6xl font-medium text-shadow-xs shadow-black text-center pt-0 md:pt-10'>Why Organize the</h1>
            <h1 className='text-4xl md:text-6xl font-medium text-shadow-xs shadow-black text-center pt-0 md:pt-10'>Melenated Community</h1>
            <div className='hidden md:flex justify-between relative -top-5'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='relative h-[100px] w-[100px]'>
                        <Image alt="image" fill={true} src={"/q4.png"}></Image>
                    </div>
                    <div className='relative h-[200px] w-[200px]'>
                        <Image alt="image" fill={true} src={"/q3.png"}></Image>
                    </div>
                </div>
                <div className='relative h-[240px] w-[160px]'>
                    <Image alt="image" fill={true} src={"/q1.png"}></Image>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div className='relative h-[100px] w-[100px]'>
                        <Image alt="image" fill={true} src={"/q2.png"}></Image>
                    </div>
                    <div className='relative h-[200px] w-[200px]'>
                        <Image alt="image" fill={true} src={"/q5.png"}></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto w-5/6 flex gap-10 md:gap-16 items-center justify-center flex-wrap'>
        {
            data2.map((d)=>(
                <Card2 key={d.id} d={d}/>
            ))
        }
        </div>
        <div className='w-full md:w-5/6 overflow-hidden mx-auto'>
            <h1 className='text-4xl md:text-5xl font-medium text-center py-10 md:py-14 text-shadow-xs shadow-black'>WHAT OUR COMMUNITY SAYS ABOUT US !</h1>
            <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            dotListClass="custom-dot-list-style">
                {data3.map((d) => {
                    return (
                        <Card3 key={d.id} d={d}/>
                    );
                })}
            </Carousel>
        </div>
    </div>
  )
}

export default Mid;
"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card1 from '../card1/Card1'
import Card2 from '../card2/Card2';
import Card3 from '../card3/Card3';
import Image from 'next/image';

const Mid = () => {
    const data2=[
        {
            id:0,
            img:"/Group_25.png",
            title:"Fund Raising",
            desc:"Join us in making a difference! Our fundraising efforts are dedicated to supporting vital initiatives within the Melanated Community. Together, we can create positive change by contributing to causes that uplift and empower our community.",
            h:300,
            w:300
        },
        {
            id:1,
            img:"/Group_27.png",
            title:"Legal Support",
            desc:"Access to legal support is essential for ensuring justice and equality within the Melanated Community. Our legal support services are here to assist you in navigating legal challenges and advocating for your rights.",
            h:200,
            w:200
        },
        {
            id:2,
            img:"/Group.png",
            title:"Business Incubator",
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
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:4,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo Dekoja",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
          breakpoint: { max: 767, min: 464 },
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
                <div className='bg-[#F41717] w-full py-1 flex justify-center items-center rounded-md shadow-md shadow-black'>
                    <span className='text-3xl font-semibold'>OUR VISION</span>
                </div>
                <p className='text-center md:text-left'>Our vision is a world where the Melanated Community is empowered, prosperous, and celebrated for its contributions to society. We envision a future where every individual has access to the resources and support they need to achieve their fullest potential, regardless of race or background.</p>
            </div>
            <div className='flex flex-col items-center gap-3 md:gap-8 w-[320px]'>
                <div className='relative h-[120px] w-[120px]'>
                    <Image alt="image" fill={true} src={"/mission.png"}></Image>
                </div>
                <div className='bg-[#F41717] w-full py-1 flex justify-center items-center rounded-md'>
                    <span className='text-3xl font-semibold'>OUR MISSION</span>
                </div>
                <p className='text-center'>Our mission is to empower and uplift the Melanated Community through a digital platform built on the principles of unity, solidarity, and self-sufficiency. We are committed to providing resources, support, and opportunities that enable individuals within our community to thrive and excel.</p>
            </div>
            <div className='flex flex-col items-center gap-3 md:gap-8 w-[320px]'>
                <div className='relative h-[120px] w-[125px]'>
                    <Image alt="image" fill={true} src={"/goal.png"}></Image>
                </div>
                <div className='bg-[#F41717] w-full py-1 flex justify-center items-center rounded-md shadow-md shadow-black'>
                    <span className='text-3xl font-semibold'>OUR GOAL</span>
                </div>
                <p className='text-center md:text-right'>We aim to empower individuals in the Melanated Community by offering access to resources, opportunities, and supportive networks, facilitating personal and professional advancement.</p>
            </div>
        </div>
        <div className='py-5'>
            <h1 className='text-4xl md:text-6xl font-medium text-shadow-xs shadow-black text-center pt-0 md:pt-10'>Why Empowering Community</h1>
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
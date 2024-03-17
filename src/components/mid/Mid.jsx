"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card1 from '../card1/Card1'
import Card2 from '../card2/Card2';
import Card3 from '../card3/Card3';

const Mid = () => {
const data=[
        {
            id:0,
            img:"/Group_95.png",
            title:"OUR VISION",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id:1,
            img:"/Group_90.png",
            title:"OUR MISSION",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            id:2,
            img:"/Group_92.png",
            title:"OUR GOAL",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ];
    const data2=[
        {
            id:0,
            img:"/Group_25.png",
            title:"Fund Raising",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
        },
        {
            id:1,
            img:"/Group_27.png",
            title:"Legal Support",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
        },
        {
            id:2,
            img:"/Group.png",
            title:"Business Incubator",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
        },
        {
            id:3,
            img:"/Group_43.png",
            title:"Community Forms",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
        },
       
    ];
    const data3=[
        {
            img:"/pngwing.png",
            name:"Leo",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
        {
            img:"/pngwing.png",
            name:"Leo",
            title:"Community member",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            rating:5,
        },
    ];
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div>
        <h1 className='text-center text-4xl font-semibold my-8'>LOREM IPSUM IS SIMPLY DUMMY</h1>
        <div className='flex gap-8 justify-center'>
           {data.map((d)=>(
                <Card1 key={d.id} d={d}/>
            ))}
        </div>
        <div className='flex items-center justify-center my-5'>
            <h1 className='flex text-5xl font-medium border-[1px] p-2 rounded-md border-red-700'>Why Empowering Community</h1>
        </div>
        <div className='flex gap-16 items-center justify-center flex-wrap'>
        {
            data2.map((d)=>(
                <Card2 d={d}/>
            ))
        }
        </div>
        <div className='mx-8'>
            <h1 className='text-4xl font-medium text-center my-5 text-shadow-sm shadow-black'>WHAT OUR COMMUNITY SAYS ABOUT US !</h1>
            <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
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
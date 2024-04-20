"use client"
import Card3 from '@/components/card3/Card3';
import Footer from '@/components/footer/Footer';
import GetinTouch from '@/components/getintouch/GetinTouch';
import Navbar3 from '@/components/navbar3/Navbar3'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const card = [
  {
    id: 1,
    url: "/curation.png",
    desc: "Content Curation"
  },
  {
    id: 2,
    url: "/promotion.png",
    desc: "New Artist Promotion"
  },
  {
    id: 3,
    url: "/engagement.png",
    desc: "User Engagement"
  },
  {
    id: 4,
    url: "/educational.png",
    desc: "Educational content"
  },
  {
    id: 5,
    url: "/live.png",
    desc: "Live Performances"
  },
  {
    id: 6,
    url: "/community_forms.png",
    desc: "Community Forms"
  },
  {
    id: 7,
    url: "/collaborations.png",
    desc: "Collaborations"
  },
  {
    id: 8,
    url: "/contest.png",
    desc: "Events and Concerts"
  },
  {
    id: 9,
    url: "/mobile.png",
    desc: "Mobile Accessibilty"
  },
  {
    id: 10,
    url: "/social.png",
    desc: "Social Media Presence"
  },
  {
    id: 11,
    url: "/feedback.png",
    desc: "Feedback Mechanism"
  },
  {
    id: 12,
    url: "/partnership.png",
    desc: "Partnerships"
  },
  {
    id: 13,
    url: "/money.png",
    desc: "Monetization Strategy"
  },
  {
    id: 14,
    url: "/legal-cons.png",
    desc: "Legal Considerations"
  },
  {
    id: 15,
    url: "/cont.png",
    desc: "Continuous Innovation"
  },
  {
    id: 16,
    url: "/feed_loop.png",
    desc: "Feedback Loop"
  }
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
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1 
  }
};
const page = () => {
  return (
    <div>
      <div className="bg-[url('/rndb.png')] bg-cover">
        <Navbar3/>
        <div className='md:w-5/6 mx-auto pb-6 md:pb-[120px] md:px-0 px-2'>
          <div className='flex items-center justify-between '>
            <div className='flex flex-col gap-5 md:w-[30%]'>
              <div className='relative h-[100px] w-[100px] md:h-[300px] md:w-[300px]'>
                <Image alt="image" fill={true} src={"/rnbmusic.png"}></Image>
              </div>
              <p className='text-sm md:text-base leading-relaxed'>Welcome to our platform dedicated to the revival of R&B music and its profound impact on cultural identity and community cohesion. Join us on a journey to rediscover the soulful rhythms and heartfelt lyrics that once served as the heartbeat of our neighborhoods.</p>
              <div className='w-1/3 md:w-1/2'>
                <button className='w-full bg-[#FF0000] py-2 border-[1px] border-white text-xs md:text-xl font-semibold'>SUPPORT US</button>
              </div>
            </div>
            <div className='md:block hidden w-[45%]'>
              <div className='relative h-[500px] w-[500px]'>
                <Image alt="image" fill={true} src={"/rnbheart.png"}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className='relative top-32 flex flex-col py-10 gap-28 bg-gradient-to-b from-[#040409]/70 to-[#020205]/90'>
          <div className='md:w-5/6 flex flex-col gap-3 md:gap-0 md:flex-row justify-between mx-auto'>
              <div className='md:w-[45%] flex justify-center items-center'>
                <div className='relative h-[150px] w-[150px] md:h-[200px] md:w-[200px]'>
                  <Image fill={true} src={"/explore.png"}></Image>
                </div>
              </div>
              <div className='md:w-[50%] flex justify-center items-center md:items-start flex-col gap-7'>
                <h3 className='text-3xl md:text-5xl font-semibold'>Exploring the Legacy</h3>
                <p className='text-sm w-9/12 leading-relaxed text-center md:text-left'>Delve into the history of R&B music and its deep roots within African American culture. From its origins in gospel and blues to its evolution into a powerful form of expression, R&B has provided a soundtrack to the triumphs, struggles, and love stories of generations past. </p>
              </div>
          </div>
          <div className='md:w-5/6 flex flex-col-reverse gap-3 md:gap-0 md:flex-row justify-between mx-auto'>
              <div className='md:w-[50%] flex justify-center items-center md:items-start flex-col gap-7'>
                <h3 className='text-3xl md:text-5xl font-semibold'>Restoring Connection</h3>
                <p className='text-sm w-9/12 leading-relaxed text-center md:text-left'>Experience the transformative power of music as we strive to bridge generational divides and reconnect communities through the universal language of R&B. Through curated playlists, live performances, and interactive forums, we aim to reignite the sense of belonging and cultural pride that R&B once fostered.</p>
              </div>
              <div className='md:w-[40%] flex justify-center items-center'>
                <div className='relative h-[150px] w-[150px] md:h-[200px] md:w-[200px]'>
                  <Image fill={true} src={"/connection.png"}></Image>
                </div>
              </div>
          </div>
        </div>
      </div>
        <div className='md:w-5/6 pt-44 flex flex-col gap-3 md:gap-0 md:flex-row justify-between mx-auto'>
            <div className='md:w-[45%] flex justify-center items-center'>
              <div className='relative h-[150px] w-[150px] md:h-[200px] md:w-[200px]'>
                <Image fill={true} src={"/empower.png"}></Image>
              </div>
            </div>
            <div className='md:w-[50%] flex justify-center items-center md:items-start flex-col gap-7'>
              <h3 className='text-3xl md:text-5xl font-semibold'>Empowering Artists</h3>
              <p className='text-sm w-9/12 leading-relaxed text-center md:text-left'>Celebrate the talent and creativity of emerging Black artists as we provide platforms for them to showcase their unique perspectives and voices. From virtual showcases to artist spotlights, we are dedicated to supporting the next generation of R&B pioneers.</p>
            </div>
        </div>
        <div className='py-24 flex flex-col gap-20 md:w-5/6 px-2 md:px-0 mx-auto'>
          <h1 className='text-center text-4xl md:text-6xl font-bold'>R & B FEATURES</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-14'>
            {
              card.map((c)=>(
                  <div key={c.id} className='bg-white rounded-3xl flex flex-col gap-5 justify-center items-center py-6'>
                    <div className='relative h-[70px] w-[70px]'>
                      <Image fill={true} src={c.url}></Image>
                    </div>
                    <p className='text-black text-xs md:text-sm font-semibold'>{c.desc}</p>
                  </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-4 md:gap-8 md:w-4/6 mx-auto justify-center items-center'>
          <h2 className='text-4xl md:text-6xl font-semibold'>R & B HISTORY</h2>
          <div className='flex justify-between items-center w-10/12'>
            <div className='relative h-[40px] w-[40px] md:h-[110px] md:w-[110px]'>
              <Image fill={true} src={"/heartdouble.png"}></Image>
            </div>
            <div className=''>
              <div className='relative h-[200px] w-[200px] md:h-[500px] md:w-[500px] '>
                <Image fill={true} src={"/legends.png"}></Image>
              </div>
              <div className='relative -mb-[177px] -top-[177px] left-[25px] h-[150px] w-[150px] md:-mb-[426px] md:-top-[426px] md:left-[75px] md:h-[350px] md:w-[350px] '>
                <Image fill={true} src={"/legendscenter.png"}></Image>
              </div>
            </div>
            <div className='relative h-[40px] w-[40px] md:h-[110px] md:w-[110px]'>
              <Image fill={true} src={"/play.png"}></Image>
            </div>
          </div>
          <div className='relative h-[12px] w-[350px] md:h-[28px] md:w-[820px]'>
            <Image fill={true} src={"/volume.png"}></Image>
          </div>
          <p className='text-center w-9/12 leading-relaxed text-sm md:text-xl'>R&B, short for rhythm and blues, emerged in the African American communities of the United States in the early 20th century.It evolved from a blend of jazz, gospel, and blues, with influences from African musical traditions and European harmonies.</p>
        </div>
        <div className='w-full flex flex-col gap-16 md:w-5/6 overflow-hidden mx-auto pt-24'>
            <h1 className='text-4xl md:text-5xl font-medium text-center text-shadow-xs shadow-black'>WHAT OUR COMMUNITY SAYS ABOUT US !</h1>
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
        <div className="w-full px-2 md:px-0 md:w-5/6 pt-10 mx-auto">
          <div className="py-10">
            <GetinTouch/>
          </div>
          <div className='flex justify-center py-10'>
            <button className='flex justify-center items-center border-[1px] border-white rounded-md gap-2 md:gap-5 bg-gradient-to-b from-[#FF1111] to-[#692323] px-6 py-3 md:px-10 md:py-6'>
                <div className='relative h-[20px] w-[25px] md:h-[25px] md:w-[40px]'>
                    <Image alt="image" fill={true} src={"/rightarrow.png"}></Image>
                </div>
                <span className='text-lg md:text-2xl font-medium'>COMMUNITY FORMS</span>
            </button>
          </div>
          <div className="py-16">
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default page
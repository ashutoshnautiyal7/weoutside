import Navbar3 from '@/components/navbar3/Navbar3'
import Image from 'next/image'
import React from 'react'

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

const page = () => {
  return (
    <div>
      <div className="bg-[url('/rndb.png')] bg-contain">
        <Navbar3/>
        <div className='w-5/6 mx-auto pb-[120px]'>
          <div className='flex items-center justify-between '>
            <div className='flex flex-col gap-5 w-[30%]'>
              <div className='relative h-[300px] w-[300px]'>
                <Image alt="image" fill={true} src={"/rnbmusic.png"}></Image>
              </div>
              <p className='leading-relaxed'>Welcome to our platform dedicated to the revival of R&B music and its profound impact on cultural identity and community cohesion. Join us on a journey to rediscover the soulful rhythms and heartfelt lyrics that once served as the heartbeat of our neighborhoods.</p>
              <div className='w-1/2'>
                <button className='w-full bg-[#FF0000] py-2 border-[1px] border-white text-xl font-semibold'>SUPPORT US</button>
              </div>
            </div>
            <div className='w-[45%]'>
              <div className='relative h-[500px] w-[500px]'>
                <Image alt="image" fill={true} src={"/rnbheart.png"}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className='relative top-32 flex flex-col py-10 gap-28 bg-gradient-to-b from-[#040409]/70 to-[#020205]/90'>
          <div className='w-5/6 flex justify-between mx-auto'>
              <div className='w-[45%] flex justify-center items-center'>
                <div className='relative h-[200px] w-[200px]'>
                  <Image fill={true} src={"/explore.png"}></Image>
                </div>
              </div>
              <div className='w-[50%] flex justify-center flex-col gap-7'>
                <h3 className='text-5xl font-semibold'>Exploring the Legacy</h3>
                <p className='text-sm w-9/12 leading-relaxed'>Delve into the history of R&B music and its deep roots within African American culture. From its origins in gospel and blues to its evolution into a powerful form of expression, R&B has provided a soundtrack to the triumphs, struggles, and love stories of generations past. </p>
              </div>
          </div>
          <div className='w-5/6 flex justify-between mx-auto'>
              <div className='w-[50%] flex flex-col gap-7'>
                <h3 className='text-5xl font-semibold'>Restoring Connection</h3>
                <p className='text-sm leading-relaxed'>Experience the transformative power of music as we strive to bridge generational divides and reconnect communities through the universal language of R&B. Through curated playlists, live performances, and interactive forums, we aim to reignite the sense of belonging and cultural pride that R&B once fostered.</p>
              </div>
              <div className='w-[40%] flex items-center'>
                <div className='relative h-[200px] w-[200px]'>
                  <Image fill={true} src={"/connection.png"}></Image>
                </div>
              </div>
          </div>
        </div>
      </div>
        <div className='w-5/6 pt-44 flex justify-between mx-auto'>
            <div className='w-[45%] flex justify-center items-center'>
              <div className='relative h-[200px] w-[200px]'>
                <Image fill={true} src={"/empower.png"}></Image>
              </div>
            </div>
            <div className='w-[50%] flex justify-center flex-col gap-7'>
              <h3 className='text-5xl font-semibold'>Empowering Artists</h3>
              <p className='text-sm w-9/12 leading-relaxed'>Celebrate the talent and creativity of emerging Black artists as we provide platforms for them to showcase their unique perspectives and voices. From virtual showcases to artist spotlights, we are dedicated to supporting the next generation of R&B pioneers.</p>
            </div>
        </div>
        <div className='py-24 flex flex-col gap-20 w-5/6 mx-auto'>
          <h1 className='text-center text-6xl font-bold'>R & B FEATURES</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14'>
            {
              card.map((c)=>(
                  <div key={c.id} className='bg-white rounded-3xl flex flex-col gap-5 justify-center items-center py-6'>
                    <div className='relative h-[70px] w-[70px]'>
                      <Image fill={true} src={c.url}></Image>
                    </div>
                    <p className='text-black text-sm font-semibold'>{c.desc}</p>
                  </div>
              ))
            }
          </div>
        </div>
        <div>
          <h2>R & B HISTORY</h2>
        </div>
    </div>
  )
}

export default page
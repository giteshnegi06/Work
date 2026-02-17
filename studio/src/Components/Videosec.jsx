import React from 'react'
import BlurText from "./BlurText";

export default function Videosec() {
    const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
    const youtubeVideo = [
        {href: "/", img: "/", title: ""},
    ]
  return (
    <>
    <div className=' flex flex-col bg-[#060010] py-8 px-2.5 md:py-10 lg:py-15  items-center '>
        <section className="intro-section mb-10 lg:mb-20 items-center text-center">
        <h1 className="font-cormorant text-wrap text-lg md:text-2xl lg:text-4xl">
          <BlurText
            text="Love • Emotion • Memories"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h1>
      </section>
        <div className=' h-fit  w-screen 2xl:w-430 flex flex-wrap justify-center items-center md:gap-x-15 lg:gap-x-25 xl:gap-x-30 2xl:gap-x-80  gap-y-10 '>
            {youtubeVideo.map((v,i) =>(
                <a key={i} href= {v.href}><div  className='bg-amber-950 w-75 h-40 md:w-78 md:h-50 lg:w-100 lg:h-60 xl:w-150 xl:h-80 mb-8 md:mb-10 lg:mb-20'>{v.img}
                </div>
                <p>{v.title}</p>
                </a>
            ))}
        </div>
    </div>
    </>
  )
}

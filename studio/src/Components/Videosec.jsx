import React from "react";
import { GradualSpacing } from "./GradualSpacing";


export default function Videosec() {
  // ✅ use embed URLs (IMPORTANT)
  const youtubeVideo = [
    {
      src: "https://www.youtube.com/embed/WH_sJehBVVw",
      title: "Wedding Highlight",
    },
    {
      src: "https://www.youtube.com/embed/redOaUVS858",
      title: "Pre Wedding",
    },
    {
      src: "https://www.youtube.com/embed/mDdb3M9kJ1A",
      title: "Destination Wedding",
    },
    {
      src: "https://www.youtube.com/embed/Hyi73r9YJo8",
      title: "Cinematic Film",
    },
    {
      src: "https://www.youtube.com/embed/6ozANCKN2L4",
      title: "KIYANSH 1ST BIRTHDAY",
    },
    {
      src: "https://www.youtube.com/embed/7nogdBxr_XU",
      title: "Sneha' 19th Birthday",
    },
  ];

  return (
    <div className="relative flex flex-col py-8 px-2.5 md:py-10 lg:py-20 items-center bg-white/10 ">
      
      {/* background */}
      <img
        src={"https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772373825/042A6334.jpg_yem8ct.jpg"}
        alt="background img"
        className="absolute -z-50 top-0 w-full h-full object-cover"
      />

      <section>
        {/* heading */}
        <section className="intro-section mb-10 lg:mb-20 items-center text-center ">
          <h1 className="font-cormorant text-wrap text-lg md:text-2xl lg:text-4xl xl:text-6xl text-white ">
            <GradualSpacing text="Love • Emotion • Memories" />
          </h1>
        </section>

        {/* video grid */}
        <div className="w-screen 2xl:w-430 flex flex-wrap justify-center items-center gap-y-1 md:gap-x-10 lg:gap-x-20 xl:gap-x-20">

          {youtubeVideo.map((v, i) => (
            <div key={i} className={`mb-8 md:mb-10 lg:mb-20 ${i > 1 ? "hidden md:block" : ""}`}>
              
              {/* VIDEO PLAYER */}
              <iframe
                className="bg-black w-75 h-42 md:w-55 md:h-34 lg:w-65 lg:h-38 xl:w-90 xl:h-52 2xl:w-110 2xl:h-61 rounded-2xl shadow-xl"
                src={v.src}
                title={v.title}
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* title */}
              <p className="text-center mt-3 text-white font-cormorant text-sm md:text-base lg:text-xl">
                {v.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

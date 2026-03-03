import React from "react";
import { GradualSpacing } from "./GradualSpacing";


export default function Videosec() {
  // ✅ use embed URLs (IMPORTANT)
  const youtubeVideo = [
    {
      src: "https://www.youtube.com/embed/DYv_nGW__Co",
      title: "Wedding Highlight",
    },
    {
      src: "https://www.youtube.com/embed/fpjWRVXhyPk",
      title: "Pre Wedding",
    },
    {
      src: "https://www.youtube.com/embed/aRLJcKm684s",
      title: "Destination Wedding",
    },
    {
      src: "https://www.youtube.com/embed/0452CPZPyT8",
      title: "Cinematic Film",
    },
    {
      src: "https://www.youtube.com/embed/DYv_nGW__Co",
      title: "Wedding Highlight",
    },
    {
      src: "https://www.youtube.com/embed/fpjWRVXhyPk",
      title: "Pre Wedding",
    },
  ];

  return (
    <div className="relative flex flex-col py-8 px-2.5 md:py-10 lg:py-20 items-center bg-white/10 ">
      
      {/* background */}
      <img
        src={"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772373825/042A6334.jpg_yem8ct.jpg"}
        alt="background img"
        className="absolute -z-50 top-0 w-full h-full object-cover"
      />

      <section>
        {/* heading */}
        <section className="intro-section mb-10 lg:mb-20 items-center text-center ">
          <h1 className="font-cormorant text-wrap text-lg md:text-2xl lg:text-4xl">
            <GradualSpacing text="Love • Emotion • Memories" />
          </h1>
        </section>

        {/* video grid */}
        <div className="w-screen 2xl:w-430 flex flex-wrap justify-center items-center gap-y-1 md:gap-x-10 lg:gap-x-20 xl:gap-x-20">

          {youtubeVideo.map((v, i) => (
            <div key={i} className={`mb-8 md:mb-10 lg:mb-20 ${i > 5 ? "hidden lg:block" : ""}`}>
              
              {/* VIDEO PLAYER */}
              <iframe
                className="bg-black w-75 h-42 md:w-[320px] md:h-50 lg:w-100 lg:h-60 xl:w-120 xl:h-65 rounded-2xl shadow-xl"
                src={v.src}
                title={v.title}
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* title */}
              <p className="text-center mt-3 text-white font-medium">
                {v.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

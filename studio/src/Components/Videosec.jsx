import React from "react";
import { GradualSpacing } from "./GradualSpacing";
import BackImg from "../Images/042A6334.jpg.jpeg";

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
  ];

  return (
    <div className="relative flex flex-col py-8 px-2.5 md:py-10 lg:py-20 items-center bg-white/10 ">
      
      {/* background */}
      <img
        src={BackImg}
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
        <div className="w-screen 2xl:w-430 flex flex-wrap justify-center items-center gap-y-3 md:gap-x-10 lg:gap-x-40 xl:gap-x-60">

          {youtubeVideo.map((v, i) => (
            <div key={i} className=" mb-8 md:mb-10 lg:mb-20">
              
              {/* VIDEO PLAYER */}
              <iframe
                className="bg-black w-75 h-45 md:w-[320px] md:h-50 lg:w-100 lg:h-60 xl:w-140 xl:h-80 rounded-2xl shadow-xl"
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

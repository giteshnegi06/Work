import React from "react";
import { GradualSpacing } from "./GradualSpacing";


export default function PortfolioVideos() {
  // ✅ use embed URLs (IMPORTANT)
  const youtubeVideo = [
    {
      src: "https://www.youtube.com/embed/DYv_nGW__Co",
      title: "Wedding Highlight",
    },
    {
      src: "https://www.youtube.com/embed/fpjWRVXhyPk",
      title: "Aankush & Anshul Pre-Wedding",
    },
    {
      src: "https://www.youtube.com/embed/aRLJcKm684s",
      title: "Rahul & Payal Pre-Wedding",
    },
    {
      src: "https://www.youtube.com/embed/0452CPZPyT8",
      title: "Himanshu & Raveena",
    },
    {
      src: "https://www.youtube.com/embed/aJXj9tgO55I",
      title: "Switi & Yuvraj Wedding Highlight",
    },
    {
      src: "https://www.youtube.com/embed/Hpd4ocA5c9A",
      title: "Gurkirat & Gurbaksh Ring Ceremony",
    },
    {
      src: "https://www.youtube.com/embed/S0WdbLuDGeA",
      title: "Garima & Ashish",
    },
    {
      src: "https://www.youtube.com/embed/jE7RCnGcYMU",
      title: "Sahil & Kajal",
    },
    {
      src: "https://www.youtube.com/embed/ERsEV8V-O9Q",
      title: "Nipun & Priya",
    },
  ];

  return (
    <div className="relative flex flex-col py-8 px-2.5 md:py-10 lg:py-20 items-center bg-black/40 ">
      
      {/* background */}
      <img
        src={"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772388347/_DSC5025_utsuw6.jpg"}
        alt="background img"
        className="absolute -z-50 top-0 w-full h-full object-cover"
      />

      <section>
        {/* heading */}
        <section className="intro-section mb-10 lg:mb-20 items-center text-center ">
          <h1 className="font-dancing text-4xl lg:text-6xl xl:text-8xl text-white">
            <GradualSpacing text="Our Work" />
          </h1>
        </section>

        {/* video grid */}
        <div className="w-screen 2xl:w-430 flex flex-wrap justify-center items-center gap-y-1 md:gap-x-10 lg:gap-x-20 xl:gap-x-20">

          {youtubeVideo.map((v, i) => (
            <div key={i} className={`mb-8 md:mb-10 lg:mb-20 text-center ${i > 4 ? "hidden md:block" : ""}`}>
              
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
              <p className="text-center mt-3 text-white font-cormorant xl:text-2xl">
                {v.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

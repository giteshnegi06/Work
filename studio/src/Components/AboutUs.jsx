import React from "react";
import Img1 from "../Images/3D9A0119.jpeg";
import ScrollIndicator from "./ScrollIndicator";
import Sec2Img from "../Images/042A8055.jpg.jpeg";
import Sec2Img2 from "../Images/345.JPG.jpeg";
import Sec3Img from "../Images/042A7718.JPG.jpeg";
import Sec3Img2 from "../Images/042A7953.jpg.jpeg";
import Sec3Img3 from "../Images/042A8072.jpeg";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#060010] h-fit top-0 flex justify-center">
        <section className=" relative flex flex-col 2xl:px-8 h-fit">
          <img
            src={Img1}
            alt=""
            className=" h-100 md:h-150 md:w-182 lg:h-150 lg:w-245 xl:h-215 xl:w-350 2xl:h-215 2xl:w-screen md:my-5 lg:m-5 2xl:my-8 2xl:mx-0 "
          />
          <div className=" absolute top-65 md:top-120 md:left-8 lg:top-105 lg:left-12 xl:top-165 2xl:top-140 2xl:left-12 text-balance md:w-150 lg:w-230 xl:w-300 2xl:w-7xl ">
            <h3 className="text-red-500 font-cormorant uppercase text-xs md:text-lg text-center md:text-start">
              Bay Area Indian wedding photographer
            </h3>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase text-balance text-center md:text-start">
              Capturing natural moments of joy & celebration
            </h1>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="absolute top-170">
                <ScrollIndicator />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#060010] absolute flex justify-between items-center py-15 px-2 lg:py-30">
        <div className="z-50">
          <img
            src={Sec2Img}
            alt=""
            className="relative w-75 xl:h-120 xl:w-170 top-80"
          />
        </div>
        <div className="w-75 h-fit text-balance text-center space-y-5 absolute bg-black/20 px-2 py-8 lg:p-20 2xl:left-165">
          <h1 className="text-2xl xl:text-5xl text-white font-dancing tracking-wide">
            Creative and Candid Wedding Photography
          </h1>
          <p className="text-white font-cormorant text-balance">
            Mahak Photography is a Bay Area Indian wedding photography studio
            that breaks from the traditional, heavily posed style of Indian
            wedding photography. Instead, we focus on documenting the real, raw,
            authentic, and emotional moments—from the quiet getting ready
            moments before your ceremony to letting it loose fun moments on the
            dance floor
          </p>
        </div>
        <div className="z-10">
          <img
            src={Sec2Img2}
            alt=""
            className=" relative w-55 xl:w-100 xl:h-150 top-75 "
          />
        </div>
      </div>
      <div className="hidden bg-black lg:flex justify-center  h-200">
        <div className=" relative w-screen">
          <div className=" absolute w-180 mt-20 left-72">
            <img src={Sec3Img} alt="" className="w-180 h-90" />
            <div className="text-end font-cormorant text-white text-balance space-y-5 mt-8">
              <h3 className="text-lg tracking-wide text-balance ">
                For over a decade, we’ve photographed{" "}
                <span className="text-red-500">over 450</span> Indian weddings
                in the Bay Area, including Hindu, Sikh, Muslim, and Indo-Western
                fusion ceremonies. We know how to capture every element of a
                South Asian wedding, including pithi ceremonies, mehndi,
                sangeet, baarat, nikah, and anything else you’re planning.
              </h3>
              <p>
                Our photographs celebrate the candid, spontaneous moments with
                family, friends, and each other that you’ll want to remember for
                years, alongside stylized portraits with an editorial flair.
              </p>
            </div>
          </div>
          <div className=" absolute space-y-8 -top-15 2xl:left-260">
            <img src={Sec3Img3} alt="" className="w-130" />
            <img src={Sec3Img2} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="bg-[#060010] h-200"></div>
    </>
  );
}

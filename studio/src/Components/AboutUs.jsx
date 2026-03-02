import React from "react";
import ScrollIndicator from "./ScrollIndicator";
import { GradualSpacing } from "./GradualSpacing";

import Sec2Img from "../Images/042A8055.jpg.jpeg";
import Sec2Img2 from "../Images/345.JPG.jpeg";
import Sec3Img from "../Images/042A7718.JPG.jpeg";
import Sec3Img2 from "../Images/042A7953.jpg.jpeg";
import Sec3Img3 from "../Images/042A8072.jpeg";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#060010] h-fit top-0 flex justify-center items-center">
        <section className=" relative flex flex-col justify-center items-center mx-2 2xl:px-8 h-fit">
          <img
            src={
              "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772388347/_DSC5025_utsuw6.jpg"
            }
            alt=""
            className=" h-100  md:h-150 md:w-182 lg:h-150 lg:w-245 xl:h-215 xl:w-350 2xl:h-215 2xl:w-screen md:my-5 lg:m-5 2xl:my-8 2xl:mx-0 "
          />
          <div className=" absolute flex flex-col bottom-8 lg:bottom-25 text-balance text-center items-center 2xl:w-250">
            <h3 className="text-[#0EA5D9] font-italianno lowercase  md:text-2xl text-center 2xl:text-5xl tracking-wide">
              Bay Area Indian wedding photographer
            </h3>

            <h1 className="text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase text-balance text-center md:text-start ">
              <GradualSpacing
                text="Capturing natural moments"
                className="text-lg md:text-4xl lg:text-5xl font-normal"
              />
              <GradualSpacing
                text="of joy & celebration"
                className="text-lg md:text-4xl lg:text-5xl font-normal"
              />
            </h1>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="absolute flex flex-col items-center text-center bottom-10 rounded-2xl shadow-xl">
                <ScrollIndicator />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#060010] relative h-180 md:h-150 lg:h-200  flex justify-center items-center  px-2 lg:py-30 overflow-hidden">
        <div className=" absolute -right-8  md:left-0 top-72 md:top-44 ">
          <img
            src={
              "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377749/042A6563_fzipdy.jpg"
            }
            alt=""
            className=" w-80 md:w-100 lg:w-120 xl:w-150 2xl:h-110 2xl:w-160 top-130"
          />
        </div>
        <div className="absolute top-10 md:top-48 xl:left-115 2xl:left-170 z-10">
          <div className=" flex flex-col text-center items-center space-y-5 bg-black/50  2xl:bg-black/20 mx-3 p-5 xl:p-15 rounded-xl shadow-xl">
            <h1 className="text-2xl lg:text-3xl xl:text-5xl text-white font-dancing tracking-wide text-balance md:w-80 lg:w-90 xl:w-110 2xl:w-110">
              Creative and Candid Wedding Photography
            </h1>
            <p className="text-white font-cormorant text-balance w-75 lg:w-110 text-center tracking-wide text-xs lg:text-lg ">
              Mahak Photography is a Bay Area Indian wedding photography studio
              that breaks from the traditional, heavily posed style of Indian
              wedding photography. Instead, we focus on documenting the real,
              raw, authentic, and emotional moments—from the quiet getting ready
              moments before your ceremony to letting it loose fun moments on
              the dance floor
            </p>
          </div>
        </div>
        4<div className="absolute -left-3 md:left-auto md:right-0 top-100 md:top-32">
          <img
            src={
              "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377733/042A6077_cgmise.jpg"
            }
            alt="Wedding Photography by Mahak Studio"
            className="w-45 md:w-60 lg:w-70 xl:w-90 2xl:w-100 2xl:h-150"
          />
        </div>
      </div>
      {/* <div className="hidden bg-black lg:flex justify-center  h-200">
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
      <div className=" hidden bg-[#060010] h-200"></div> */}
    </>
  );
}

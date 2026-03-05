import React from "react";
import ScrollIndicator from "./ScrollIndicator";
import { GradualSpacing } from "./GradualSpacing";
import Whatsaap from "./Whatsaap";

export default function AboutUs() {
  return (
    <>
      <Whatsaap />
      <div className="bg-black h-fit top-0 flex justify-center items-center">
        <section className=" relative flex flex-col justify-center items-center md:mx-2 2xl:px-8 h-fit">
          <img
            src={
              "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772388347/_DSC5025_utsuw6.jpg"
            }
            alt=""
            className=" h-90  md:h-150 md:w-182 lg:h-150 lg:w-245 xl:h-215 xl:w-350 2xl:h-215 2xl:w-screen md:my-5 lg:m-5 2xl:my-8 2xl:mx-0 object-cover"
          />
          <div className=" absolute flex flex-col bottom-5 lg:bottom-25 text-balance text-center items-center 2xl:w-250">
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
      <div className="bg-[#060010] relative h-210 md:h-158 lg:h-220  flex justify-center items-center  px-2 lg:py-30 overflow-hidden">
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
              Mahak Photography is a Indian wedding photography studio that
              breaks from the traditional, heavily posed style of Indian wedding
              photography. Instead, we focus on documenting the real, raw,
              authentic, and emotional moments—from the quiet getting ready
              moments before your ceremony to letting it loose fun moments on
              the dance floor
            </p>
          </div>
        </div>
        <div className="absolute -left-3 md:left-auto md:right-0 top-[48%] md:top-32">
          <img
            src={
              "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377733/042A6077_cgmise.jpg"
            }
            alt="Wedding Photography by Mahak Studio"
            className="w-45 md:w-60 lg:w-70 xl:w-90 2xl:w-100 2xl:h-150"
          />
        </div>
      </div>
      <div className=" bg-black ">
        <div className="relative flex justify-center items-center h-180 md:h-145 lg:h-174 xl:h-200  max-w-470 mx-auto ">
          <div className="absolute flex items-center text-center space-y-5 left-0 xl:left-40 2xl:left-90 top-10 md:top-20 xl:top-30 2xl:top-26 z-10">
            <img
              src={
                "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378482/41_wc8nyy.jpg"
              }
              alt="by Mahak Studio"
              className="w-70 md:w-92.5 lg:w-132 xl:w-135 2xl:w-145"
            />
          </div>
          <div className="absolute w-80  md:w-92 lg:w-132 xl:w-145 text-xs lg:text-sm xl:text-[16px] text-center md:text-end  font-cormorant text-white text-balance space-y-5 md:left-0 xl:left-30 2xl:left-90 md:top-auto md:bottom-18 lg:bottom-25">
            <h3 className="tracking-wide text-balance ">
              For over a decade, we’ve photographed{" "}
              <span className="text-red-500">over 450</span> Indian weddings in
              India, including Hindu, Sikh, Muslim, and Indo-Western fusion
              ceremonies. We know how to capture every element of a South Asian
              wedding, including pithi ceremonies, mehndi, sangeet, baarat,
              nikah, and anything else you’re planning.
            </h3>
            <p>
              Our photographs celebrate the candid, spontaneous moments with
              family, friends, and each other that you’ll want to remember for
              years, alongside stylized portraits with an editorial flair.
            </p>
          </div>

          <div className="absolute -top-20 right-0 xl:right-40 2xl:right-85 ">
            <img
              src={
                "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377783/042A9279_deit1k.jpg"
              }
              alt=""
              className="w-60 md:w-92.5 lg:w-118 xl:w-140"
            />
          </div>
          <div className="absolute -bottom-30 xl:-bottom-41 right-0 md:right-7 lg:right-28 xl:right-75 2xl:right-120">
            <img
              src={
                "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378531/15_huwtd5.jpg"
              }
              alt=""
              className=" w-60 md:w-85 lg:w-90 xl:w-105 xl:h-160"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#060010] h-480 md:h-260 lg:h-270 flex justify-center items-center">
        <div className="w-7xl mx-auto h-420 md:h-230 lg:h-220 bg-black/30 flex flex-col justify-center gap-y-15">
          <div className=" mx-5 lg:mx-20 text-white flex flex-col md:flex-row items-center md:gap-x-5 lg:gap-x-10 gap-y-5">
            <img
              src="https://res.cloudinary.com/dbtlo70e5/image/upload/v1772443109/WhatsApp_Image_2026-02-26_at_8.22.48_PM_q5yqwq.jpg"
              alt="SATISH KHURANA MD OF MAHAK PHOTOGRAPHY"
              className="w-65 rounded-2xl"
            />
            <div className=" space-y-5 text-center md:text-start">
              <h1 className="text-2xl md:text-3xl font-cormorant">
                Founder’s Note — Satish Khurana
              </h1>
              <div className=" space-y-3 font-cormorant tracking-wide text-sm lg:text-lg">
                <p>
                  I’m Satish Khurana, and I began my journey in wedding photography in 1995 after completing 
                  my matriculation. I started from very small beginnings, learning the craft step by step and 
                  working hard to build my skills and experience in this field.
                </p>
                <p>
                  Over the years, with dedication and passion, I focused on perfecting image capturing, 
                  luxury album presentation, and cinematic storytelling. What began as a small effort gradually 
                  grew into a lifelong commitment to creating beautiful wedding memories. My goal has always been 
                  to capture real emotions and preserve moments in a way that couples can cherish for a lifetime.
                </p>
              </div>
            </div>
          </div>
          <div className=" mx-5 lg:mx-20  flex flex-col   text-white md:flex-row-reverse items-center md:gap-x-5 lg:gap-x-10 gap-y-5">
            <img
              src="https://res.cloudinary.com/dbtlo70e5/image/upload/v1772443109/WhatsApp_Image_2026-02-26_at_8.22.48_PM_q5yqwq.jpg"
              alt="SATISH KHURANA MD OF MAHAK PHOTOGRAPHY"
              className="w-65 rounded-2xl "
            />
            <div className=" space-y-5 text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-cormorant">
                Co-Founder’s Note — Sandeep Khurana
              </h1>
              <div className=" space-y-3 font-cormorant tracking-wide text-sm lg:text-lg">
                <p>
                  I’m Sandeep Khurana, and I started my journey in wedding photography in 2013
                  after completing my Bachelor’s in Commerce. Since then, I have been passionate
                  about capturing weddings through premium photography and cinematic films across
                  Haryana, Punjab, and Delhi NCR.
                </p>
                <p>
                  My focus is on creating high-quality images, elegant album presentations, and modern 
                  cinematic wedding stories. Every wedding I capture is about preserving real emotions 
                  and turning beautiful moments into timeless memories that couples can relive for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

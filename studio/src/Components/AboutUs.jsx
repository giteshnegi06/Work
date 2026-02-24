import React from "react";
import Img1 from "../Images/042A2375.JPG.jpeg";
import ScrollIndicator from "./ScrollIndicator";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#060010] h-1000 top-0 flex justify-center">
        <section className=" relative flex flex-col px-8">
          <img src={Img1} alt="" className=" h-100 md:h-150 md:w-182 lg:h-150 lg:w-245 xl:h-215 xl:w-350 2xl:h-220 2xl:w-screen md:my-5 lg:m-5 2xl:my-8 2xl:mx-0 " />
          <div className=" absolute top-65 md:top-120 md:left-8 lg:top-105 lg:left-12 xl:top-165 2xl:top-140 2xl:left-12 text-balance md:w-150 lg:w-230 xl:w-300 2xl:w-7xl ">
            <h3 className="text-red-500 font-cormorant uppercase text-xs md:text-lg text-center md:text-start">Bay Area Indian wedding photographer</h3>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase text-balance text-center md:text-start">
              Capturing natural moments of joy & celebration
            </h1>
          </div>
         <div>
           <div className="flex justify-center">
            {/* <div className=" hidden lg:flex absolute top-138 left-125 xl:top-205 xl:left-180 2xl:top-165 2xl:left-185 text-center">
            <ScrollIndicator />
          </div> */}
            <div className="absolute top-170">
            <ScrollIndicator />
          </div>
           </div>
         </div>
        </section>
      </div>
    </>
  );
}

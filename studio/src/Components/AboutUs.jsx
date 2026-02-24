import React from "react";
import Img1 from "../Images/042A2375.JPG.jpeg";
import ScrollIndicator from "./ScrollIndicator";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#060010] h-1000 top-0">
        <section className=" hidden relative flex justify-center">
          <img src={Img1} alt="" className=" h-100 md:h-175 md:w-175 lg:h-155 lg:w-200 xl:w-420 2xl:h-215 2xl:w-460 md:my-4 lg:m-8 " />
          <div className=" absolute top-65 md:top-150 md:left-8 lg:top-130 lg:left-12 2xl:top-180 2xl:left-20 text-balance md:w-150 lg:w-230 xl:w-300 2xl:w-320 ">
            <h3 className="text-red-500 font-cormorant uppercase text-xs md:text-lg text-center md:text-start">Bay Area Indian wedding photographer</h3>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase text-balance text-center md:text-start">
              Capturing natural moments of joy & celebration
            </h1>
          </div>
          <div className=" hidden lg:flex absolute top-165 left-125 xl:left-180 2xl:top-205 2xl:left-235 ">
            <ScrollIndicator />
          </div>
        </section>
      </div>
    </>
  );
}

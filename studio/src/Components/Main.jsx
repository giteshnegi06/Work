import React from "react";
import BlurText from "./BlurText";
import Img from "../Images/12.jpg";
import Img1 from "../Images/3.jpg";
import Img2 from "../Images/7.jpg";
import Img3 from "../Images/13.jpg";
import Img4 from "../Images/45.jpg";
import { Link } from "react-router-dom";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
export default function main() {
  return (
    <>
      <div className=" h-220 md:h-220 lg:h-280 xl:h-300 2xl:h-350 bg-[#060010] text-white py-10  lg:py-20  px-2.5 md:px-10 items-center ">
        <div className="flex justify-center flex-col h-25 items-center">
          <h3 className=" font-cormorant text-lg lg:text-3xl text-[#0EA5D9]">
            <BlurText
              text="specializing in"
              delay={500}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h3>
          <h1 className="w-60 md:w-90 lg:w-110 xl:w-130 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-italianno text-wrap left-5 items-center tracking-wider">
            <BlurText
              text="South Asian, Fusion & Destination Weddings"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className=" flex justify-center"
            />
          </h1>
        </div>
        <div className=" lg:flex justify-center">
          <div className="flex relative mx-2.5 md:mt-10 lg:mt-40 xl:mt-25 2xl:mt-35">
            <div className="bg-amber-500 h-50 md:h-60 lg:h-50 xl:h-60 2xl:h-70 lg:w-70 xl:w-90 2xl:w-100 absolute top-3 xl:top-15 lg:right-40 xl:right-60 2xl:right-90 z-30 lg:z-0">
              <img src={Img} alt="1" className="w-full h-full" />
            </div>
            <div className="bg-blue-600 h-60 md:h-70 xl:h-90 2xl:h-110 lg:w-120 xl:w-150 2xl:w-185 absolute top-42 xl:top-60 right-0 md:-right-2 lg:-left-50 xl:-left-50 2xl:-left-80 z-20">
              <img src={Img1} alt="1" className="w-full h-full" />
            </div>
            <div className="hidden lg:flex bg-lime-600 h-65 xl:h-75 2xl:h-85 w-95 xl:w-110 2xl:w-140 absolute right-5 -top-15 xl:-top-5 lg:left-30 xl:left-60 2xl:left-75 z-40">
              <img src={Img2} alt="1" className="w-full h-full" />
            </div>
            <div className=" hidden lg:flex bg-orange-500 h-50 xl:h-60 2xl:h-70 w-80 xl:w-100 2xl:w-120 absolute left-20 top-125 xl:top-160 2xl:top-180 lg:left-30 xl:left-50 2xl:left-60 ">
              <img src={Img3} alt="1" className="w-full h-full" />
            </div>
            <div className=" bg-fuchsia-400 h-60 xl:h-75 2xl:h-90 lg:w-95 xl:w-120 2xl:w-170 absolute top-95 lg:top-105 xl:top-135 2xl:top-150 lg:right-25 xl:right-30 2xl:right-40">
              <img src={Img4} alt="1" className="w-full h-full" />
            </div>
            <Link
              to="/portfolio"
              className="md:hidden text-white absolute top-165 flex left-28"
            >
              <button className="border p-4 rounded-2xl font-cormorant">
                VIEW PORTFOLIO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

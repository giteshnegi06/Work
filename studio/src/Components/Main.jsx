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
      <div className=" h-220 md:h-300 bg-[#060010] text-white py-10  lg:py-25  px-2.5 md:px-10 items-center ">
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
        <div className="flex relative mx-2.5">
          <div className="bg-amber-500 h-50  lg:w-80 absolute top-3 xl:top-35 xl:left-40 z-30">
            <img src={Img} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-blue-600 h-60 lg:w-180 absolute top-42 xl:top-60 right-0 xl:left-145 z-20">
            <img src={Img1} alt="1" className="w-full h-full" />
          </div>
          <div className="hidden lg:flex bg-lime-600 h-75 lg:w-md absolute xl:top-10 xl:left-300 z-40">
            <img src={Img2} alt="1" className="w-full h-full" />
          </div>
          <div className=" hidden lg:flex bg-orange-500 h-72 lg:w-105 absolute xl:top-140 xl:left-60 ">
            <img src={Img3} alt="1" className="w-full h-full" />
          </div>
          <div className=" bg-fuchsia-400 h-60 lg:w-95 absolute top-95 xl:top-150 xl:left-340">
            <img src={Img4} alt="1" className="w-full h-full" />
          </div>
          <Link to="/portfolio" className="md:hidden text-white absolute top-165 flex left-28">
          <button className="border p-4 rounded-2xl font-cormorant">VIEW PORTFOLIO</button>
        </Link>
     </div>
        
      </div>
    </>
  );
}

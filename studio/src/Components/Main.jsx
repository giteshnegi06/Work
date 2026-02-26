import React from "react";
import BlurText from "./BlurText";
import Img from "../Images/12.jpg";
import Img1 from "../Images/3.jpg";
import Img2 from "../Images/7.jpg";
import Img3 from "../Images/13.jpg";
import Img4 from "../Images/45.jpg";
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
export default function main() {
  return (
    <>
      <div className=" h-150 md:h-300 bg-[#060010] text-white py-10  lg:py-25  px-2.5 md:px-10 items-center ">
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
        <div className="hidden lg:flex relative mx-2.5">
          <div className="bg-amber-500 h-50 lg:w-80 absolute top-35 left-40">
            <img src={Img} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-blue-600 h-110 lg:w-180 absolute top-60 left-145 z-20">
            <img src={Img1} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-lime-600 h-75 lg:w-md absolute top-10 left-300 z-40">
            <img src={Img2} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-orange-500 h-72 lg:w-105 absolute top-140 left-60 ">
            <img src={Img3} alt="1" className="w-full h-full" />
          </div>
          <div className="bg-fuchsia-400 h-62 lg:w-95 absolute top-150 left-340">
            <img src={Img4} alt="1" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

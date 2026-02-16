import React from "react";
import DarkVeil from "./DarkVeil";
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";
import Main from "./Main";
import { GradualSpacing } from "./GradualSpacing";
import FlowingMenu from "./FlowingMenu";
import { ImagesSlider } from "./ImagesSlider";
import ScrollHorizontal from "./ScrollHorizontal";
import ScrollIndicator from "./ScrollIndicator";
import PreWed from "../Images/prewed.jpg";
import Slid1 from "../Images/042A8072.JPG.jpeg";
import Slid2 from "../Images/042A7718.JPG.jpeg";
import Slid3 from "../Images/042A6334.jpg.jpeg";
const demoItems = [
  { link: "#", text: "Pre-Wedding Shoot", image: PreWed },
  {
    link: "#",
    text: "Wedding Shoot",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Destination Wedding Shoot",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Any Celebrition",
    image: "https://picsum.photos/600/400?random=4",
  },
];
export default function Body() {
  return (
    <>
    
      <a href="#" className=" fixed z-50 flex text-center ">
        <button className=" hidden lg:flex bg-green-500 p-5 xl:py-6  xl:px-5.5 h-5 w-45 xl:w-52 text- xl:text-xl absolute items-center rounded-3xl text-white lg:left-200 xl:left-300 2xl:left-410 top-170 2xl:top-200  gap-2">
          <FaWhatsapp className=" text-2xl  xl:text-[28px]"/>
          WhatsApp Us!
        </button>
        <button className="lg:hidden flex bg-green-500 p-2  text-xl absolute items-center rounded-4xl text-white left-67 md:left-175 top-130 md:top-170">
          <FaWhatsapp className="text-2xl"/>
        </button>
      </a>
      <Navbar />
      <div className="h-screen relative w-full ">
        {/* <DarkVeil
          hueShift={237}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0.5}
          warpAmount={0}
        /> */}
        <div className="relative w-full h-full overflow-hidden touch-pan-y">
          <ImagesSlider images={[Slid1, Slid2, Slid3]} className="h-full">
            <div className=" relative top-67 lg:top-67 items-center">
              <h2 className="text-red-600  text-center font-love-light ">
                {" "}
                <GradualSpacing
                  text="breaking the traditional mold of"
                  className="md:text-xl lg:text-[40px] tracking-wide md:tracking-wider font-normal"
                />
              </h2>
              <h1 className="text-white text-2xl md:text-4xl  xl:text-7xl font-cormorant text-center">
                <GradualSpacing
                  text="INDIAN WEDDING"
                  className="text-2xl md:text-4xl lg:text-7xl font-normal"
                />
              </h1>
              <h1 className="text-white text-2xl md:text-4xl  xl:text-7xl font-cormorant text-center">
                <GradualSpacing
                  text="PHOTOGRAPHY"
                  className="text-2xl md:text-4xl lg:text-7xl font-normal"
                />
              </h1>
              <ScrollIndicator targetId="next-section" />
            </div>
          </ImagesSlider>
        </div>
      </div>
      <Main />

      <div className="bg-black">
        <ScrollHorizontal />
      </div>


      <div className="h-150 relative">
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#fff"
          bgColor="#060010"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#060010"
          borderColor="#89CFF0"
        />
      </div>
    </>
  );
}

import React from "react";
import DarkVeil from "./DarkVeil";
import Navbar from './Navbar'
import Main from "./main";
import { GradualSpacing } from "./GradualSpacing";
import FlowingMenu from "./FlowingMenu";
import { ImagesSlider } from "./ImagesSlider";
import ScrollHorizontal from "./ScrollHorizontal";
import ScrollIndicator from "./ScrollIndicator";
import PreWed from "../Images/prewed.jpg" 
import Slid1 from "../Images/042A8072.JPG.jpeg" 
import Slid2 from "../Images/042A7718.JPG.jpeg" 
import Slid3 from "../Images/042A6334.jpg.jpeg" 
const demoItems = [
  { link: "#", text: "Pre-Wedding Shoot", image: PreWed },
  { link: "#", text: "Wedding Shoot", image: "https://picsum.photos/600/400?random=2" },
  { link: "#", text: "Destination Wedding Shoot", image: "https://picsum.photos/600/400?random=3" },
  { link: "#", text: "Any Celebrition", image: "https://picsum.photos/600/400?random=4" }
];
export default function Body() {
  return (
    <>
    <Navbar/>
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
      <ImagesSlider
        images={[
          Slid1,Slid2,Slid3,
        ]}
        className="h-full"
      >
        <div className=" relative top-67 lg:top-67 items-center">
          
          <h2 className="text-red-600  text-center font-love-light "> <GradualSpacing
        text="breaking the traditional mold of"
        className="md:text-xl lg:text-[40px] tracking-wide md:tracking-wider font-normal"
      /></h2>
        <h1 className="text-white text-2xl md:text-4xl lg:text-7xl font-cormorant text-center"><GradualSpacing
        text="INDIAN WEDDING"
        className="text-2xl md:text-4xl lg:text-7xl font-normal"
        />
         
        </h1>
        <h1 className="text-white text-2xl md:text-4xl lg:text-7xl font-cormorant text-center"><GradualSpacing
        text="PHOTOGRAPHY"
        className="text-2xl md:text-4xl lg:text-7xl font-normal"
        />
        </h1>
        <ScrollIndicator targetId="next-section"/>
        </div>
      </ImagesSlider>
    </div>
      </div>
        <Main/>

         <div className="bg-black">
      <ScrollHorizontal />
    </div>




    <div className="h-150 relative">
      <FlowingMenu
        items={demoItems}
        speed={15}
        textColor="#89CFF0"
        bgColor="#373737"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#060010"
        borderColor="#fff"
      />
    </div>
    </>
  );
}

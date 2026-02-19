import React from "react";
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";
import Main from "./Main";
import { GradualSpacing } from "./GradualSpacing";
import FlowingMenu from "./FlowingMenu";
import Swiper from "./Swiper"
import Videosec from "./Videosec";
import ContactUs from "./ContactUs";
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
const cardsData = [
    {
      title: "Wedding Shoot",
      desc: "Your wedding day deserves nothing less than perfection. At Mehak Photography, we specialize in capturing every emotion — from intimate rituals to grand celebrations — with artistic precision and cinematic style.",
      image: Slid3
    },
    {
      title: "Pre-Wedding Shoot",
      desc: "Tell your love story before the big day with our beautifully planned pre-wedding shoots. We create romantic, fun, and cinematic moments that reflect your unique chemistry.",
      image: Slid3
    },
    {
      title: "Destination Wedding",
      desc: "Planning a wedding away from home? We travel with you to capture your destination wedding in the most breathtaking way. From beaches to palaces, we document every moment with a luxury cinematic touch.",
      image: Slid3
    },
    {
      title: "Maternity Photoshoot",
      desc: "Celebrate the beautiful journey of motherhood with our soft, emotional, and artistic maternity photoshoots. We create warm and graceful portraits you will cherish forever.",
      image: Slid3
    },
  ];

export default function Body() {
  return (
    <>

      <a href="#" className=" fixed z-50 flex text-center ">
        <button className=" hidden lg:flex bg-green-500 p-5 xl:py-6  xl:px-5.5 h-5 w-45 xl:w-52 text- xl:text-xl absolute items-center rounded-3xl text-white lg:left-200 xl:left-300 2xl:left-410 top-170 2xl:top-200  gap-2">
          <FaWhatsapp className=" text-2xl  xl:text-[28px]" />
          WhatsApp Us!
        </button>
        <button className="lg:hidden bg-green-500 p-2  text-xl absolute items-center rounded-4xl text-white left-67 md:left-175 top-130 md:top-130">
          <FaWhatsapp className="text-2xl" />
        </button>
      </a>
      <Navbar />
      <div className="h-screen relative w-full ">
        <div className="relative w-full h-full overflow-hidden touch-pan-y">
          <ImagesSlider images={[Slid1, Slid2, Slid3]} className="h-full">
            <div className=" relative top-58 lg:top-67 items-center">
              <h2 className="text-red-600  text-center font-love-light ">
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

      <div className=" bg-black ">
        <ScrollHorizontal />
      </div>

      <div className=" lg:hidden ">
        <Swiper />
      </div>
      <div>
        <Videosec />
      </div>
      
      <ScrollStack
        onComplete={() => console.log("✅ Stack animation finished")}
      >
        {cardsData.map((v, i) => (
          <ScrollStackItem key={i}>
            <div className=" md:flex flex-row-reverse justify-between xl:mx-5 items-center">
              <img src= {v.image} alt="Wedding" className=" md:mt-0 w-100 md:w-90 lg:w-120 xl:w-160 2xl:w-200 rounded-2xl" />
              <div className="xl:ml-10 text-center">
                <h2 className=" mt-3 text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-love-light mb-2 text-[#0EA5D9] tracking-wider">{v.title}</h2>
                <p className=" text-white font-cormorant text-sm md:text-[16px] lg:text-xl xl:text-2xl 2xl:text-3xl text-balance lg:mt-4">{v.desc}</p>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

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

        <ContactUs/>
    </>
  );
}

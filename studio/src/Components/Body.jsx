import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Whatsaap from "./Whatsaap";
import Swiper from "./Swiper";
import Videosec from "./Videosec";
import ContactUs from "./ContactUs";
import Feedback from "./Feedback";
import FadeSlids from "./HeroSlider";
import ScrollHorizontal from "./ScrollHorizontal";
import PhotoGallery from "./PhotoGallery";

const cardsData = [
  {
    title: "Wedding Shoot",
    desc: "Your wedding day deserves nothing less than perfection. At Mehak Photography, we specialize in capturing every emotion — from intimate rituals to grand celebrations — with artistic precision and cinematic style.",
    image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377623/0N6A4728_l47b9u.jpg",
  },
  {
    title: "Pre-Wedding Shoot",
    desc: "Tell your love story before the big day with our beautifully planned pre-wedding shoots. We create romantic, fun, and cinematic moments that reflect your unique chemistry.",
    image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378513/106_d4ywyt.jpg",
  },
  {
    title: "Destination Wedding",
    desc: "Planning a wedding away from home? We travel with you to capture your destination wedding in the most breathtaking way. From beaches to palaces, we document every moment with a luxury cinematic touch.",
    image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772388347/_DSC5025_utsuw6.jpg",
  },
  {
    title: "Maternity Photoshoot",
    desc: "Celebrate the beautiful journey of motherhood with our soft, emotional, and artistic maternity photoshoots. We create warm and graceful portraits you will cherish forever.",
    image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772467604/042A6063.JPG_xdsxqa.jpg",
  },
  {
    title: "Baby Photoshoot",
    desc: "Tiny toes, gentle smiles, and pure love — we specialize in baby photoshoots and newborn photography that beautifully capture your little one’s earliest moments. From dreamy newborn portraits to joyful milestone sessions, we create timeless images your family will cherish forever.",
    image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772467629/042A5928.JPG_gvajuv.jpg",
  },
  {
    title: "Passport & Visa Photoshoot",
    desc: "We also provide professional passport and visa photos for USA, Canada, Australia, and other countries. Our photos follow official embassy guidelines with correct size and biometric standards, ensuring smooth and hassle-free approval.",
    image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772544886/Passport_Visa_h7f1db.png",
  },
];

export default function Body() {
  return (
    <>
      <Whatsaap />
      <FadeSlids />
      <PhotoGallery />

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
            <div className="flex flex-col md:flex md:flex-row-reverse justify-between items-center gap-auto  xl:mx-5 overflow-hidden">
              <img
                src={v.image}
                alt="By Mahak Studio"
                className="w-full md:w-90 lg:w-120 xl:w-130 2xl:w-150 rounded-2xl"
              />
              <div className="xl:ml-10 text-center">
                <h2 className=" mt-2 text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-dancing mb-2 text-[#0EA5D9] tracking-wider">
                  {v.title}
                </h2>
                <p className=" text-white font-cormorant text-sm md:text-[16px] lg:text-xl xl:text-2xl 2xl:text-2xl text-balance lg:mt-4">
                  {v.desc}
                </p>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
      <ContactUs />
      <Feedback />
    </>
  );
}

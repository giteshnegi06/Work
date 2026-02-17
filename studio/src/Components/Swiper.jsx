import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Img from "../Images/042A8040.jpg.jpeg"
import "swiper/css";
import "swiper/css/effect-cards";
import BlurText from "./BlurText";

export default function Swiperimg() {
  const swiper = [
    {title: "Aryan/Sonu", Img: Img},
    {title: "/", Img: ""},
    {title: "/", Img: ""},
    {title: "/", Img: ""},
    {title: "/", Img: ""},
    {title: "/", Img: ""},
  ]
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <>
    <div className="h-fit pt-15 pb-13 items-center bg-gray-900">
    <section className="intro-section h-10 mb-8 items-center text-center">
        <h1 className="font-cormorant w-45 md:w-60 lg:w-119 text-wrap text-lg md:text-2xl lg:text-5xl">
          <BlurText
            text="Crafting Timeless   Wedding Stories"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h1>
      </section>
    
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-80 h-120 md:w-90 md:h-130"
      >
        {swiper.map((v,i)=>(
          <SwiperSlide key={i} className="flex items-center justify-center rounded-xl text-white text-xl font-bold ">{v.Img && (
                  <img
                    src={v.Img}
                    alt="logo"
                    className="h-full w-full p-0"
                  />
                )}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-love-light tracking-widest text-2xl text-red-600">{v.title}</p>
        </SwiperSlide>
        ))}
      </Swiper>

      <section className="  mt-8 w-full flex justify-center items-center ">
        <h5 className="w-55 md:w-105 lg:w-200 lg:text-3xl text-[#0EA5D9] font-cormorant">
          <BlurText
            text="Over the last decade we've worked with hundreds of happy couples."
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h5>
      </section>
    </div>
    </>
  );
}

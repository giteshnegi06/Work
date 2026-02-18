import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Imag1 from "../Images/042A3672.JPG.jpeg";
import Imag2 from "../Images/042A6374.jpg.jpeg";
import Imag3 from "../Images/042A7740.JPG.jpeg";
import Imag4 from "../Images/042A7979.jpg.jpeg";
import Imag5 from "../Images/4554.JPG.jpeg";
import Imag6 from "../Images/3G4A3223.JPG.jpeg";
import "swiper/css";
import "swiper/css/effect-cards";
import BlurText from "./BlurText";

export default function Swiperimg() {
  const swiper = [
    {
        id: 1,
        color: "#ff0088",
        label: "Night One",
        image: Imag2,
      },
      {
        id: 2,
        color: "#dd00ee",
        label: "Night Two",
        image: Imag1,
      },
      {
        id: 3,
        color: "#9911ff",
        label: "Night Three",
        image: Imag3,
      },
      {
        id: 4,
        color: "#0d63f8",
        label: "Night Four",
        image: Imag4,
      },
      {
        id: 5,
        color: "#0cdcf7",
        label: "Night Five",
        image: Imag5,
      },
      {
        id: 6,
        color: "#0cdcf7",
        label: "Night Six",
        image: Imag6,
      },
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
          <SwiperSlide key={i} className="flex items-center justify-center rounded-xl text-white text-xl font-bold ">{v.image && (
                  <img
                    src={v.image}
                    alt="logo"
                    className="h-120 w-100 p-0"
                  />
                )}
          <div className="item-content">
                  <span className="item-number">0{v.id}</span>
                  <h2>{v.label}</h2>
                </div>
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

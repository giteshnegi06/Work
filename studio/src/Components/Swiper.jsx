import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

export default function Swiperimg() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-80 h-120"
      >
        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-red-500">
          Slide 1
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-blue-500">
          Slide 2
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-green-500">
          Slide 3
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-orange-500">
          Slide 4
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-purple-500">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-purple-500">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-xl text-white text-xl font-bold bg-purple-500">
          Slide 5
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

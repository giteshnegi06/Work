import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function Feedback() {
  return (
    <section className="relative h-130 md:h-150 xl:h-180 w-full overflow-hidden">
      <img
        src={"https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772378546/18_sjzg0s.jpg"}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      <div className=" bg-black/60 z-10 flex flex-col items-center justify-center h-full  text-center px-4">
        <h1 className="relative font-cormorant text-[42px] md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 text-white/10">
          TESTIMONIALS
          <span className=" absolute bottom-1 md:bottom-0 lg:bottom-1 left-0 right-0 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-wider">What our beloved Client says</span>
        </h1>

         <TestimonialSlider />
      </div>
    </section>
  );
}

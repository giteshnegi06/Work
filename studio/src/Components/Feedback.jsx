import React from "react";
import FeedbackBG from "../Images/042A8072.jpg.jpeg";
import TestimonialSlider from "./TestimonialSlider";

export default function Feedback() {
  return (
    <section className="relative h-180 w-full overflow-hidden">
      <img
        src={FeedbackBG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      <div className="relative bg-black/60 z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="font-cormorant text-5xl md:text-6xl mb-6">
          Testimonials
        </h1>

         <TestimonialSlider />
      </div>
    </section>
  );
}

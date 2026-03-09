import React from "react";
import ContactForm from "./ContactForm";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function ContactUs() {
  return (

    <div className=" h-fit md:h-300 lg:h-fit xl:h-250 bg-black z-50 text-white py-15 lg:px-10 lg:py-20 xl:px-15 2xl:p-30 items-center">
      <div className=" flex flex-col mx-5 lg:mx-0 pb-12 xl:pb-10 lg:px-5 pt-10 xl:flex-row justify-around bg-white/10 rounded-[65px] shadow-2xl shadow-white/40 items-center">
        <div className="lg:w-150 xl:w-200 flex flex-col justify-center gap-5 items-center">
          <h1 className="text-5xl lg:text-6xl font-cormorant text-[#0EA5D9] underline decoration-gray-700">
            About <span className="text-red-500">US</span>
          </h1>

          {/* Quote Wrapper */}
          <div className="relative w-65 md:w-160 lg:w-200 xl:w-173 text-xl font-cormorant space-y-5 tracking-wider text-balance text-center">

            {/* Opening Quote */}
            <RiDoubleQuotesL className="absolute -left-8 md:-left-5 lg:left-6 xl:-left-6 -top-4 text-4xl text-gray-400" />

            <p>
              Great wedding photography truly focuses on strong emotion.
              We are <span className="text-[#0EA5D9]">Mahak Photography</span>. We never just take simple pictures.
              Conversely, we feel honored capturing your real, authentic moments.
              Your unique love story matters deeply to us. Furthermore, our job is carefully listening to your complete vision.
              We transform your dream wedding into stunning memories. These special, cherished memories will last forever.
              We offer trusted service as expert <a href="/" className="text-red-500">wedding photographers in India</a>.
            </p>
            <h3 className="text-2xl lg:text-4xl font-cormorant text-[#0EA5D9] ">Delivering Pure Joy Through Our Work</h3>
            <p>
              At <span className="text-[#0EA5D9]">Mahak Studio</span>, our greatest reward is seeing your joy when you relive your special
              day through our photographs. We capture beautiful, candid moments and real emotions, telling
              your love story through natural and timeless wedding photography.
            </p>

            {/* Closing Quote */}
            <RiDoubleQuotesR className="absolute right-8 md:right-2 lg:right-0 xl:right-9 bottom-6 lg:bottom-7 xl:bottom-6 text-4xl text-gray-400" />
          </div>
        </div>
        <div>

            <ContactForm />

        </div>
      </div>
    </div>

  );
}

import React from "react";
import ContactForm from "./ContactForm";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function ContactUs() {
  return (
    <div className=" h-320 lg:h-230 xl:h-250 bg-black z-50 text-white pt-15 lg:px-10 lg:py-20 xl:px-15 2xl:p-30 items-center">
      <div className=" flex flex-col mx-5 lg:mx-0 xl:pb-10 px-5 pt-10 lg:flex-row justify-around bg-white/10 rounded-[65px] shadow-2xl shadow-white/40 items-center">
        <div className=" lg:w-150 xl:w-200 flex flex-col justify-center gap-5 items-center ">
          <h1 className=" text-5xl lg:text-6xl font-cormorant text-[#0EA5D9] underline decoration-gray-700">
            About <span className="text-red-500">US</span>
          </h1>
          <div className=" text-xl font-cormorant space-y-5 tracking-wider text-balance text-center">
            <h1>
              <RiDoubleQuotesL /> 
              <span className="text-[#0EA5D9]">Established in 2000, </span> 
              CandidShutters started as a <span className="text-red-500">premium boutique wedding photography
              and films venture</span> aiming to tell folk tales of love of the
              modern-day new age couple.
            </h1>

            <h1>
              We are a team of passionate creative individuals who love
              narrating, capturing and epitomizing stories of love, laughter,
              and togetherness.
            </h1>

            <h1>
              We have learned,experienced and grown over the last <span className="text-red-500">twenty five years, </span> 
              having covered <span className="text-[#0EA5D9]">over 1000 multi-cultural wedding celebrations
              across the globe.</span> <RiDoubleQuotesR className="" />
            </h1>
          </div>
        </div>
        <div className=" ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

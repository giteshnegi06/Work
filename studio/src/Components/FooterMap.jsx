import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
export default function FooterMap() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-x-2.5 lg:gap-x-10 items-center">
        <div className="w-75 md:w-100 h-50 text-center md:text-start">
          <h1 className="text-5xl font-cormorant mb-3">Contact</h1>
          <ul className=" flex flex-col gap-2.5 mt-5">
            <p className="flex gap-2">
              <a href="tel:+919996076362" className="flex items-center gap-2">
              <FaPhoneAlt />
                +91 99960 76362
              </a>
              <a href="tel:+919255195704" className="flex items-center gap-2">
                <FaPhoneAlt />
                +91 92551 95704,
              </a>
            </p>
            <a href="/" className="text-balance flex items-center gap-2">
              <IoLocation className="text-4xl" />
              Main, Phusgarh Rd, behind SEC-6, Rajivpuram, Vikas Nagar, Karnal,
              Phusgarh Part, Haryana 132001
            </a>
            <a href="mailto:mahakstudio2000@gmail.com" className="flex items-center gap-2">
              <IoIosMailUnread className="text-2xl" type="email" />
              mahakstudio2000@gmail.com
            </a>
          </ul>
        </div>
        <div className="w-65 h-70 rounded-2xl overflow-hidden shadow-lg shadow-black/40 mt-3 md:mt-0 ">
          <iframe
            title="Mahak Digital Studio Location"
            src="https://maps.google.com/maps?q=29.6792995,77.016679&z=19&output=embed"
            className="w-full h-full border-0 transition duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

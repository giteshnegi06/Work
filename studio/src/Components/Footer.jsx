import React from "react";
import FooterMap from "./FooterMap";
import FollowUs from "./FollowUs";

export default function Footer() {
  const link = [
    { href: "/", name: "Home" },
    { href: "/", name: "Portfolio" },
    { href: "/", name: "About Us" },
    { href: "/", name: "Contact" },
  ];
  return (
    <div className="bg-black ">
      <div className=" h-fit flex flex-col items-center mx-2 py-3 md:p-10 lg:px-30 xl:px-10 lg:py-20 text-white">
        <div className="flex flex-wrap gap-x-50 gap-y-10 lg:gap-y-4 lg:gap-62 xl:gap-20 2xl:gap-70">
          <FollowUs />
          <div className="text-xl flex flex-col justify-center font-cormorant">
            <h1 className="text-5xl mb-3 font-cormorant">Links</h1>
            <ul className="flex flex-col">
              {link.map((v, i) => (
                <a key={i} href={v.href} className="hover:underline">
                  {v.name}
                </a>
              ))}
            </ul>
          </div>
          <div className="flex items-center md:gap-5">
            <FooterMap />
          </div>
        </div>
        <div className="mt-10 pt-1 mx-2 md:w-150 lg:w-210 xl:w-300 border-t flex flex-wrap justify-center md:justify-between ">
          <h3 className="md:flex">
            &#x00A9; 2026 Mehak Photography{" "}
            <span className=" hidden md:flex">, All Rights Reserved.</span>{" "}
          </h3>
          <span className="items-center">
            Made With &#x2764; in Karnal, India.
          </span>
        </div>
      </div>
    </div>
  );
}

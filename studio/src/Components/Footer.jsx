import React from "react";
import FooterMap from "./FooterMap";
import FollowUs from "./FollowUs";

export default function Footer() {
  const link =[
    {href:"/", name:"Home" },
    {href:"/", name:"Portfolio" },
    {href:"/", name:"About Us" },
    {href:"/", name:"Contact" },
  ]
  return (
    <div className="bg-black h-120 w-screen flex flex-col items-center  px-30 py-20 text-white">
      <div className="flex gap-50">
        <FollowUs />
        <div className="text-xl flex flex-col justify-center font-cormorant">
          <h1 className="text-5xl mb-3 font-cormorant">Links</h1>
          <ul className="flex flex-col">
            {link.map((v,i)=>(
              <a key={i} href={v.href} className="hover:underline">{v.name}</a>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <FooterMap />
        </div>
      </div>
      <div className="mt-10 pt-1 w-250 border-t flex justify-between ">
        <span>&#x00A9; 2026 Mehak Photography </span>
        <span>Made With &#x2764; in Karnal, India.</span>
      </div>
    </div>
  );
}

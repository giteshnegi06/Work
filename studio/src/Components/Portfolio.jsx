// Portfolio.js
import React from 'react';
import { Link } from "react-router-dom";
import Whatsaap from "./Whatsaap";
import PortfolioGallery from './PortfolioGallery';
import PortfolioVideos from './PortfolioVideos';

export default function Portfolio() {

  const wedding = [
    { slug: "taranveer-bhupinder", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377745/042A6463_n4pbpv.jpg", alt: "Taranveer Singh & Bhupinder Kaur", title: "Taranveer Singh & Bhupinder Kaur" },
    { slug: "amandeep-pooja", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772900625/0P0A9781.JPG_wma6no.jpg", alt: "Amandeep & Pooja", title: "Amandeep & Pooja" },
  ];
  const preWedding = [
    { slug: "amit-tanvi", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378530/5_r0yfxo.jpg", alt: "Image 1", title: "Amit & Tanvi" },
  ];

  return (
    <>
      <Whatsaap />
      <div>
        <img src="https://res.cloudinary.com/dbtlo70e5/image/upload/v1772474708/753_bzn068.jpg"
          alt="Pre-Wedding Shoot by Mahak Studio" className=' h-150  md:h-150 md:w-195 lg:h-160 lg:w-260 xl:h-189 xl:w-360 2xl:h-230 2xl:w-screen object-cover' />
      </div>
      <PortfolioGallery />

      {/* Wedding Section */}
      <div className="bg-black flex justify-center py-5 md:py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-10 font-dancing ">
            Wedding
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-10 md:px-4 mt-10">
            {wedding.map((v, i) => (
              <Link key={i} to={`/wedding/${v.slug}`}>
                <div className="group relative w-70 h-105 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={v.image} alt={v.alt} className=" object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 group-hover:bg-black/30 transition duration-500"></div>
                  <h2 className="absolute bottom-10 left-0 right-0 text-white text-center text-3xl md:text-4xl font-dancing z-10">
                    {v.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pre-Wedding Section */}
      <div className="bg-[#060010] flex justify-center py-5 md:py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-10 font-dancing ">
            Pre-Wedding
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-10 md:px-4 mt-10">
            {preWedding.map((v, i) => (
              <Link key={i} to={`/wedding/${v.slug}`}> {/* Fixed: used v.slug instead of wedding.slug */}
                <div className="group relative w-70 h-105 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={v.image} alt={v.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 group-hover:bg-black/30 transition duration-500"></div>
                  <h2 className="absolute bottom-10 left-0 right-0 text-white text-center text-3xl md:text-4xl font-dancing z-10">
                    {v.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <PortfolioVideos />
    </>
  )
}
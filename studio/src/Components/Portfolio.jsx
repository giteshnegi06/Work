// Portfolio.js
import React from 'react';
import { Link } from "react-router-dom";
import Whatsaap from "./Whatsaap";
import PortfolioGallery from './PortfolioGallery';
import PortfolioVideos from './PortfolioVideos';
import PageSEO from "./PageSEO";
import { PAGES, SITE } from "../lib/seo";

export default function Portfolio() {

  const wedding = [
    { slug: "taranveer-bhupinder", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377745/042A6463_n4pbpv.jpg", alt: "Taranveer Singh & Bhupinder Kaur Wedding by Mahak Studio", title: "Taranveer Singh & Bhupinder Kaur" },
    { slug: "amandeep-pooja", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772900625/0P0A9781.JPG_wma6no.jpg", alt: "Amandeep & Pooja Wedding by Mahak Studio", title: "Amandeep & Pooja" },
    { slug: "sarthak-vanshika", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1776093856/042A2041.JPG_oec64z.jpg", alt: "Sarthak & Vanshika", title: "Sarthak & Vanshika" },
    { slug: "rahul-payal", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1776095696/5.jpg_ywhxdu.jpg", alt: "Rahul & Payal", title: "Rahul & Payal" },
  ];

  // const preWedding = [
  //   { slug: "amit-tanvi", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378530/5_r0yfxo.jpg", alt: "Amit & Tanvi Pre-Wedding Shoot by Mahak Studio", title: "Amit & Tanvi" },
  // ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": PAGES.portfolio.canonical },
    ]
  };

  return (
    <>
      <PageSEO
        title={PAGES.portfolio.title}
        description={PAGES.portfolio.description}
        canonical={PAGES.portfolio.canonical}
        ogImage={PAGES.portfolio.ogImage}
        structuredData={breadcrumbSchema}
      />
      <Whatsaap />
      <div>
        <img src="https://res.cloudinary.com/dbtlo70e5/image/upload/v1772474708/753_bzn068.jpg"
          alt="Pre-Wedding Shoot by Mahak Studio Karnal" loading="eager" fetchpriority="high"
          className=' h-150  md:h-150 md:w-195 lg:h-160 lg:w-260 xl:h-189 xl:w-360 2xl:h-230 2xl:w-screen object-cover' />
      </div>
      <PortfolioGallery />

      {/* Wedding Section */}
      <div className="bg-black flex justify-center py-5 md:py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-10 font-dancing ">
            Wedding's/ Pre-Wedding
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-10 md:px-4 mt-10">
            {wedding.map((v, i) => (
              <Link key={i} to={`/wedding/${v.slug}`}>
                <div className="group relative w-70 h-105 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={v.image} alt={v.alt} className=" object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 lg:bg-black/0 lg:group-hover:bg-black/50 transition duration-500"></div>
                  <h2 className="hidden absolute lg:block  bottom-10 left-0 right-0 text-white text-center text-3xl md:text-4xl font-dancing z-10 
                    opacity-0 group-hover:opacity-100 transition duration-500">
                    {v.title}
                  </h2>
                  <h2 className="lg:hidden absolute bottom-10 left-0 right-0 text-white text-center text-3xl md:text-4xl font-dancing z-10">
                    {v.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Pre-Wedding Section */}
      {/* <div className="bg-[#060010] flex justify-center py-5 md:py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold mb-10 font-dancing ">
            Pre-Wedding's
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-10 md:px-4 mt-10">
            {preWedding.map((v, i) => (
              <Link key={i} to={`/wedding/${v.slug}`}> 
                <div className="group relative w-70 h-105 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={v.image} alt={v.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 group-hover:bg-black/50 transition duration-500"></div>
                  <h2 className="absolute bottom-10 left-0 right-0 text-white text-center text-3xl md:text-4xl font-dancing z-10">
                    {v.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}

      <PortfolioVideos />
    </>
  )
}
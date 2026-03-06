import React from 'react'
import Whatsaap from "./Whatsaap";
import PortfolioGallery from './PortfolioGallery';
import PortfolioVideos from './PortfolioVideos';
export default function Portfolio() {
  const wedding = [
    { href: "/", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378530/5_r0yfxo.jpg", alt: "Image 1", tittle: "Amit & Tanvi" },
    { href: "/", image: "/", alt: "Image 1", tittle: "Image 1" },
    { href: "/", image: "/", alt: "Image 1", tittle: "Image 1" },
    { href: "/", image: "/", alt: "Image 1", tittle: "Image 1" },
  ];
  const preWedding = [
    { href: "/", image: "https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378530/5_r0yfxo.jpg", alt: "Image 1", tittle: "Amit & Tanvi" },
    { href: "/", image: "/", alt: "Image 1", tittle: "Image 1" },
    { href: "/", image: "/", alt: "Image 1", tittle: "Image 1" },
    { href: "/", image: "/", alt: "Image 1", tittle: "Image 1" },
  ];
  return (
    <>
      <Whatsaap />
      <div>
        <img src="https://res.cloudinary.com/dbtlo70e5/image/upload/v1772474708/753_bzn068.jpg"
          alt="Pre-Wedding Shoot by Mahak Studio" className=' h-150  md:h-150 md:w-195 lg:h-160 lg:w-260 xl:h-189 xl:w-360 2xl:h-230 2xl:w-screen object-cover' />
      </div>
      <PortfolioGallery />

      <div className='bg-black flex  justify-center py-5 md:py-20 '>
        <div className=' flex flex-col items-center   '>
          <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-10 font-cormorant uppercase'>Wedding</h1>
          <div className="flex-wrap md:flex items-center justify-center gap-10 px-4 mt-10">
            {wedding.map((v, i) => (
              <a key={i} href="/">
                <div className="relative bg-amber-400 w-xs h-110 rounded-2xl overflow-hidden mb-10 ">
                  <img src={v.image} alt={v.alt} className=' object-cover' />
                  <h2 className=' absolute bottom-10 left-0 right-0 text-white text-center py-2 text-4xl font-dancing '>{v.tittle}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#060010] flex  justify-center py-5 md:py-20 '>
        <div className=' flex flex-col items-center  '>
          <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-10 font-cormorant uppercase'>Pre-Wedding</h1>
          <div className=" flex-wrap md:flex  items-center justify-center gap-10 px-4 mt-10 ">
            {preWedding.map((v, i) => (
              <a key={i} href="/">
                <div className="relative bg-amber-400 w-xs h-110 rounded-2xl overflow-hidden ">
                  <img src={v.image} alt={v.alt} className=' object-cover' />
                  <h2 className=' absolute bottom-10 left-0 right-0 text-white text-center py-2 text-4xl font-dancing '>{v.tittle}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <PortfolioVideos />
    </>
  )
}

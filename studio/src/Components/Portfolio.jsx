import React from 'react'
import Whatsaap from "./Whatsaap";
import PortfolioGallery from './PortfolioGallery';
import PortfolioVideos from './PortfolioVideos';
export default function Portfolio() {
  return (
    <>
      <Whatsaap />
      <div>
        <img src="https://res.cloudinary.com/dbtlo70e5/image/upload/v1772474708/753_bzn068.jpg" 
        alt="Pre-Wedding Shoot by Mahak Studio" className=' h-150  md:h-150 md:w-195 lg:h-160 lg:w-260 xl:h-189 xl:w-360 2xl:h-230 2xl:w-screen object-cover' />
      </div>
      <PortfolioGallery />
      <PortfolioVideos />
    </>
  )
}

import React, { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GradualSpacing } from "./GradualSpacing";
import ScrollIndicator from "./ScrollIndicator";

const rawImages = [
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772467648/DSC02608.jpg_dkhvks.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377712/042A2443_qnkwor.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772374035/042A8072_tk04fr.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377770/042A9135_owfjnv.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378549/17_eyehdm.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772373825/042A6334.jpg_yem8ct.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772377767/042A9099_ignjp8.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772373833/042A7718.JPG_oota2j.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378508/104_spnmte.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772378531/11_cqwgys.jpg",
"https://res.cloudinary.com/dbtlo70e5/image/upload/v1772467654/DSC02585.jpg_dfzdvk.jpg"
];

const optimize = (url) => {
  return url.replace(
    "/upload/",
    "/upload/f_auto,q_auto,w_1920,dpr_auto/"
  );
};;

const FadeSlides = () => {

  const [images, setImages] = useState([
    optimize(rawImages[0]) // load only first image initially
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImages(rawImages.map(optimize));
    }, 1500); // load others after first paint

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">

      <Fade
        duration={3500}
        transitionDuration={900}
        arrows={false}
        pauseOnHover={false}
        indicators={true}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-screen">
            <img
              src={img}
              alt={`Mahak Studio Wedding ${index}`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Fade>

      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

const HeroSlider = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <FadeSlides />

     <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 top-35 md:top-48 lg:top-65 2xl:top-80 ">
        <h3 className="text-red-600 font-love-light">
          <GradualSpacing
            text="breaking the traditional mold of"
            className="md:text-xl lg:text-3xl tracking-wide md:tracking-wider font-normal"
          />
        </h3>

        <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-cormorant">
          <GradualSpacing
            text="INDIAN WEDDING"
            className="text-2xl md:text-4xl lg:text-5xl font-normal"
          />
        </h1>

        <h2 className="text-white text-2xl md:text-4xl xl:text-5xl font-cormorant">
          <GradualSpacing
            text="PHOTOGRAPHY"
            className="text-2xl md:text-4xl lg:text-5xl font-normal"
          />
        </h2>

        <ScrollIndicator targetId="next-section" />
      </div>
    </section>
  );
};

export default HeroSlider;
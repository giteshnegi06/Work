import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [slideDirection, setSlideDirection] = useState(1);

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
          }),
      );

      try {
        const loaded = await Promise.all(promises);
        setLoadedImages(loaded);
      } catch (err) {
        console.error("Failed to load images", err);
      }
    };

    loadImages();
  }, [images]);

  // Keyboard + autoplay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  // Smooth cross-slide variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
      scale: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.35, 0.75, 0, 1], // Apple's signature easing
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const ready = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className,
      )}
      style={{ perspective: "1000px" }}
    >
      {ready && (
        <motion.div
          initial="initial"
          animate="animate"
          className="relative z-50 w-full h-full flex items-center justify-center"
        >
          {children}
        </motion.div>
      )}

      {ready && overlay && (
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          className={cn(
            "absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60 z-40",
            overlayClassName
          )}
        />
      )}

      {ready && (
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              willChange: "transform",
            }}
          />
        </AnimatePresence>
      )}
    </div>
  );
};
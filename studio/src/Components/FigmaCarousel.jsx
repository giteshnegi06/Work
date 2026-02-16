import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Make anything possible, all in Figma",
    video: "https://share.google/Jyicpg859IazIHOCm",
  },
  {
    title: "Make my cursor reveal an image",
    video: "https://player.vimeo.com/video/1106141156",
  },
  {
    title: "Make an infinite canvas gallery",
    video: "https://player.vimeo.com/video/1103822384",
  },
  {
    title: "Make this design move with a parallax effect",
    video: "https://player.vimeo.com/video/1103822749",
  },
  {
    title: "Make these photos rotate in 3D",
    video: "https://player.vimeo.com/video/1103822703",
  },
];

export default function FigmaCarousel() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="relative top-35 w-full h-180 overflow-hidden bg-transparent flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        {slides.map((slide, i) => {
          const offset = i - index;
          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              animate={{
                x: offset * 320,
                scale: isActive ? 1 : 0.7,
                opacity: isActive ? 1 : 0.5,
                zIndex: isActive ? 10 : 1,
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="absolute"
            >
              <div className="w-400 h-500 rounded-2xl overflow-hidden shadow-2xl bg-transparent">
                <iframe
                  src={`${slide.video}?autoplay=1&muted=1&loop=1&controls=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur p-4 rounded-4xl text-white "
      >
        →
      </button>

      {/* Title */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-xl font-semibold">
        {slides[index].title}
      </div>
    </div>
  );
}

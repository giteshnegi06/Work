import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Riya & Arjun",
    role: "Wedding Client",
    text: "Mehak Photography captured our wedding beautifully. Every picture feels magical and full of emotion!",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "Pre-Wedding Shoot",
    text: "The team made us so comfortable during the shoot. The photos look straight out of a movie!",
    rating: 5,
  },
  {
    name: "Kunal Verma",
    role: "Family Session",
    text: "Professional, creative, and super friendly. Highly recommended for any special occasion.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-10 sm:py-14 md:py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 text-center mx-6 sm:mx-10 md:mx-0"
            >
              {/* Stars */}
              {/* <div className="flex justify-center mb-3 sm:mb-4">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ),
                )}
              </div> */}

              {/* Text */}
              <p className="text-white text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                “{testimonials[index].text}”
              </p>

              {/* Name */}
              <h4 className="text-lg sm:text-xl font-semibold">
                {testimonials[index].name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-3 md:-left-6 top-1/2 -translate-y-1/2 bg-transparent shadow-lg rounded-full p-2 sm:p-3 hover:scale-110 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-3 md:-right-6 top-1/2 -translate-y-1/2 bg-transparent shadow-lg rounded-full p-2 sm:p-3 hover:scale-110 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5 sm:mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-black" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

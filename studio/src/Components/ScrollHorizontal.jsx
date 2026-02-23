import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import BlurText from "./BlurText";
import Imag1 from "../Images/042A3672.JPG.jpeg";
import Imag2 from "../Images/042A6374.jpg.jpeg";
import Imag3 from "../Images/042A7740.JPG.jpeg";
import Imag4 from "../Images/042A7979.jpg.jpeg";
import Imag5 from "../Images/4554.JPG.jpeg";
import Imag6 from "../Images/3G4A3223.JPG.jpeg";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

/**
 * ==============   Data   ================
 */
const items = [
  {
    id: 1,
    color: "#ff0088",
    label: "Night One",
    image: Imag2,
  },
  {
    id: 2,
    color: "#dd00ee",
    label: "Night Two",
    image: Imag1,
  },
  {
    id: 3,
    color: "#9911ff",
    label: "Night Three",
    image: Imag3,
  },
  {
    id: 4,
    color: "#0d63f8",
    label: "Night Four",
    image: Imag4,
  },
  {
    id: 5,
    color: "#0cdcf7",
    label: "Night Five",
    image: Imag5,
  },
  {
    id: 6,
    color: "#0cdcf7",
    label: "Night Six",
    image: Imag6,
  },
];

// Responsive dimensions
const getDimensions = () => {
  if (typeof window === "undefined") {
    return { itemWidth: 500, gap: 30 };
  }

  if (window.innerWidth < 640) {
    // mobile
    return { itemWidth: 280, gap: 15 };
  } else if (window.innerWidth < 768) {
    // tablet
    return { itemWidth: 350, gap: 20 };
  } else if (window.innerWidth < 1024) {
    // small desktop
    return { itemWidth: 400, gap: 25 };
  } else {
    // large desktop
    return { itemWidth: 500, gap: 30 };
  }
};

export default function ScrollHorizontal() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ itemWidth: 500, gap: 30 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total distance without adding an extra gap at the end
  // The last item should align to the same position as the first item's start
  const totalDistance =
    (items.length - 1) * (dimensions.itemWidth + dimensions.gap);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="example" className="hidden lg:flex flex-col py-10 md:py-20 ">
      <section className="intro-section items-center text-center">
        {" "}
        <h1 className="font-cormorant w-45 md:w-60 lg:w-119 text-wrap text-lg md:text-2xl lg:text-5xl">
          {" "}
          <BlurText
            text="Crafting Timeless Wedding Stories"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />{" "}
        </h1>{" "}
      </section>

      <div ref={containerRef} className="scroll-container my-5">
        <div className="sticky-wrapper ">
          <motion.div
            className="gallery"
            style={{
              x,
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item h-500"
                style={{
                  width: `${dimensions.itemWidth * 1.2}px`,
                  height: `${dimensions.itemWidth * 1.6}px`, // Maintain aspect ratio
                  backgroundImage: `url(${item.image})`,
                  marginRight:
                    index < items.length - 1 ? `${dimensions.gap}px` : "0", // No gap after last item
                }}
              >
                <div
                  className="item-content"
                  style={{ "--item-color": item.color }}
                >
                  <span className="item-number">0{item.id}</span>
                  <h2>{item.label}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="h-auto mt-10 w-full flex justify-center items-center px-4">
        <h5 className="max-w-2xl lg:max-w-4xl text-center text-[#0EA5D9] font-cormorant text-xl md:text-2xl lg:text-3xl">
          <BlurText
            text="Over the last decade we've worked with hundreds of happy couples."
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h5>
      </section>

      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
      body {
        overflow-x: hidden;
      }

      #example {
        height: auto;
        overflow: visible;
        width: 100%;
      }

      .intro-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        padding-bottom: 10px;
      }

      .intro-section h1 {
        color: #f5f5f5;
        margin: 0;
        text-transform: uppercase;
        line-height: 1.2;
      }

      .scroll-container {
        height: 300vh;
        position: relative;
        width: 100%;
      }

      .sticky-wrapper {
        position: sticky;
        top: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding-left: max(20px, calc((100vw - 1200px) / 2)); /* Center first item on large screens */
      }

      .gallery {
        display: flex;
        will-change: transform;
      }

      .gallery-item {
        flex-shrink: 0;
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        background-size: cover;
        background-position: center;
      }

      .gallery-item:last-child {
        margin-right: 0; /* Ensure no margin on last item */
      }

      .gallery-item::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          transparent 60%,
          rgba(0, 0, 0, 0.6)
        );
        pointer-events: none;
      }

      .item-content {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        z-index: 1;
        color: white;
      }

      .item-number {
        font-size: 14px;
        color: var(--item-color, #ff0088);
        font-family: "Azeret Mono", monospace;
        display: block;
        margin-bottom: 4px;
        font-weight: 600;
      }

      .gallery-item h2 {
        font-size: clamp(20px, 4vw, 28px);
        font-weight: 600;
        color: #f5f5f5;
        margin: 0;
        line-height: 1.2;
      }

      /* Mobile specific adjustments */
      @media (max-width: 640px) {
        .sticky-wrapper {
          padding-left: 20px;
        }
        
        .item-content {
          bottom: 15px;
          left: 15px;
        }
        
        .item-number {
          font-size: 12px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .gallery {
          transform: none !important;
        }
        .scroll-container {
          height: auto;
        }
        .sticky-wrapper {
          position: relative;
          height: auto;
          width: 100%;
          overflow-x: auto;
          padding: 50px 0;
          -webkit-overflow-scrolling: touch;
        }
      }
    `}</style>
  );
}

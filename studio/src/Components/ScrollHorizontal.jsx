import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import BlurText from "./BlurText";
import Imag1 from "../Images/042A3672.JPG.jpeg";
import Imag2 from "../Images/042A6374.jpg.jpeg";
import Imag3 from "../Images/042A7740.JPG.jpeg";
import Imag4 from "../Images/042A7979.jpg.jpeg";
import Imag5 from "../Images/4554.JPG.jpeg";
import Imag6 from "../Images/3G4A3223.JPG.jpeg";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
export default function ScrollHorizontal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="example" className="py-10 md:py-20 ">
      <section className="intro-section h-30 items-center text-center">
        <h1 className="font-cormorant w-45 md:w-60 lg:w-119 text-wrap text-lg md:text-2xl lg:text-5xl">
          <BlurText
            text="Crafting Timeless   Wedding Stories"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h1>
      </section>

      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item h-180 lg:h-200 w-150 "
                style={{
                  //   "--item-color": item.color,
                  "--item-image": `url(${item.image})`,
                }}
              >
                <div className="item-content">
                  <span className="item-number">0{item.id}</span>
                  <h2>{item.label}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="h-40 w-full flex justify-center items-center ">
        <h5 className="w-55 md:w-105 lg:text-3xl text-[#0EA5D9] font-cormorant">
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

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            body {
                overflow-x: hidden;
            }

            #example {
                height: auto;
                overflow: visible;
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
            }

            .scroll-container {
                height: 300vh;
                position: relative;
            }

            .sticky-wrapper {
                position: sticky;
                top: 0;
                height: 100vh;
                width: 400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
            }

            .gallery-item {
                flex-shrink: 0;

                border-radius: 12px;
                position: relative;
                overflow: hidden;
                background-image: var(--item-image);
                background-size: cover;
                background-position: center;
            }

            .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 60%,
                    var(--item-color)
                );
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .item-number {
                font-size: 14px;
                color: var(--item-color);
                font-family: "Azeret Mono", monospace;
                display: block;
                margin-bottom: 2px;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: #f5f5f5;
                margin: 0;
            }


            @media (max-width: 600px) {
                .sticky-wrapper {
                    width: 280px;
                }

                .gallery {
                    gap: 15px;
                }

                .gallery-item {
                    width: 280px;
                    height: 350px;
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
                }
            }
        `}</style>
  );
}

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

const ITEM_WIDTH = 500;
const GAP = 30;

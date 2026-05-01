import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Camera, Film, Monitor, Heart, Clock, Award, Fingerprint, Sparkles } from 'lucide-react';
import ScrollIndicator from "./ScrollIndicator";
import { GradualSpacing } from "./GradualSpacing";
import Whatsaap from "./Whatsaap";
import PageSEO from "./PageSEO";
import { PAGES, SITE } from "../lib/seo";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}/aboutUs#webpage`,
  "url": PAGES.about.canonical,
  "name": PAGES.about.title,
  "description": PAGES.about.description,
  "isPartOf": { "@id": `${SITE.url}/#website` },
  "about": {
    "@id": `${SITE.url}/#organization`
  }
};

const NumberCounter = ({ target, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Smooth premium easing
        onUpdate: (value) => setDisplayValue(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [target, isInView]);

  return <span ref={nodeRef}>{displayValue}{suffix}</span>;
};

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <>
      <PageSEO
        title={PAGES.about.title}
        description={PAGES.about.description}
        canonical={PAGES.about.canonical}
        ogImage={PAGES.about.ogImage}
        structuredData={aboutSchema}
      />
      <Whatsaap />
      <div className="bg-black h-fit top-0 flex justify-center items-center">
        <section className=" relative flex flex-col justify-center items-center md:mx-2 2xl:px-8 h-fit">
          <img
            src={
              "https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1776873798/pre_9_pxpf1p.jpg"
            }
            alt="Destination wedding photography by Mahak Studio, Karnal"
            loading="eager"
            fetchpriority="high"
            className=" h-90  md:h-150 md:w-182 lg:h-150 lg:w-245 xl:h-215 xl:w-350 2xl:h-215 2xl:w-screen md:my-5 lg:m-5 2xl:my-8 2xl:mx-0 object-cover"
          />
          <div className=" absolute flex flex-col bottom-5 lg:bottom-25 text-balance text-center items-center 2xl:w-250">
            <h3 className="text-[#0EA5D9] font-italianno lowercase  md:text-2xl text-center 2xl:text-5xl tracking-wide">
              Bay Area Indian wedding photographer
            </h3>

            <h1 className="text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase text-balance text-center md:text-start ">
              <GradualSpacing
                text="Capturing natural moments"
                className="text-lg md:text-4xl lg:text-5xl font-normal"
              />
              <GradualSpacing
                text="of joy & celebration"
                className="text-lg md:text-4xl lg:text-5xl font-normal"
              />
            </h1>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="absolute flex flex-col items-center text-center bottom-10 rounded-2xl shadow-xl">
                <ScrollIndicator />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='bg-black text-white'>
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-32 relative  ">
          <div className="space-y-32">
            {/* Narrative Part 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1 space-y-8">
                  <span className="text-amber-500 font-script text-4xl block">1995: The Chemical Truth</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-extralight text-white leading-tight">
                    Where <span className="italic">Every Frame</span> Was Pre-Paid in Patience.
                  </h2>
                  <div className="text-gray-300 font-serif text-xl leading-relaxed space-y-6">
                    <p>
                      I started Mahak Studio in 2000, in an era where photography wasn't an app—it was an alchemy.
                      I remember the sharp, stinging scent of developing chemicals and the absolute silence of the darkroom.
                      In those days, there was no 'Review' button. Every click of the shutter was a financial commitment, a risk taken on a roll of negative film.
                    </p>
                    <p>
                      I faced my share of losses. Ruined reels, missed exposures, and the crushing weight of small-town competition.
                      But those early failures were my most honest teachers. They forced me to master the light before I ever dared to touch the button.
                      I learned that a great photo isn't taken by a camera—it's felt by the person behind it.
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:w-80 shrink-0"
                >
                  <img
                    src="https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772377749/042A6563_fzipdy.jpg"
                    alt="Vintage Studio Moment"
                    className="rounded-lg shadow-2xl sepia-[0.3]"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Narrative Part 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none text-right"
            >
              <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                <div className="flex-1 space-y-8">
                  <span className="text-amber-500 font-script text-4xl block">2013: The Cinematic Shift</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-extralight text-white leading-tight">
                    From <span className="italic">Capturing</span> Life to Telling Stories.
                  </h2>
                  <div className="text-gray-300 font-serif text-xl leading-relaxed space-y-6">
                    <p>
                      When I, Sandeep, stepped into this legacy in 2013, I didn't just bring new cameras; I brought a new lens on life.
                      The industry was shifting from static poses to cinematic narratives. We realized that people didn't just want a photo of their wedding—they wanted to feel the vibration of the sangeet and the quiet breath of the pithi ceremony every time they looked at our work.
                    </p>
                    <p>
                      We traded the old tech for 4K sensors, drone perspectives, and edit-suites that allowed us to paint with light.
                      The struggle was real—adapting a traditional business to a high-tech future required shedding our old skin.
                      But the gain was immeasurable. We transformed from a local studio into a premium production house, capturing over 450 unique stories across the Heartland.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Narrative Part 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="max-w-2xl mx-auto space-y-10">
                <h2 className="text-5xl md:text-7xl font-serif font-extralight italic text-amber-100">The Modern Bridge</h2>
                <p className="text-gray-400 font-serif text-2xl leading-relaxed italic">
                  "Today, we stand at the intersection of two worlds. We carry the discipline of the film era—the patience, the precision, the respect for the frame—into the limitless world of modern digital cinema. We are not just photographers; we are custodians of your legacy."
                </p>
                <div className="pt-10">
                  <img
                    src="https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1776875238/172A8205_frz2hg.jpg"
                    alt="Modern Cinematic Frame"
                    className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Section & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center py-32 space-y-24 border-t border-gray-900/50"
          >
            {/* Main Statement */}
            <div className="max-w-3xl mx-auto px-4">
              <Sparkles className="w-6 h-6 text-amber-500/50 mx-auto mb-8" />
              <h2 className="font-serif text-3xl md:text-5xl font-extralight text-white leading-tight tracking-wide">
                "We don't just capture images. We archive <span className="italic text-amber-100/90">the atmosphere</span> of your most defining moments."
              </h2>
              <p className="mt-8 font-script text-3xl md:text-4xl text-amber-500/70 lowercase opacity-80">
                the joy you missed while living it.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-5xl mx-auto px-6">
              <div className="space-y-4">
                <div className="text-5xl md:text-7xl font-serif font-extralight text-white tabular-nums tracking-tighter">
                  <NumberCounter target={650} suffix="+" className="gap-1.5" />
                </div>
                <div className="h-px w-8 bg-amber-500/40 mx-auto"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">Stories Told</p>
              </div>

              <div className="space-y-4">
                <div className="text-5xl md:text-7xl font-serif font-extralight text-white tabular-nums tracking-tighter">
                  <NumberCounter target={25} suffix="+" />
                </div>
                <div className="h-px w-8 bg-amber-500/40 mx-auto"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">Years of Legacy</p>
              </div>

              <div className="space-y-4">
                <div className="text-5xl md:text-7xl font-serif font-extralight text-white tabular-nums tracking-tighter">
                  <NumberCounter target={25000} suffix="+" />
                </div>
                <div className="h-px w-8 bg-amber-500/40 mx-auto"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">Hours Coordinated</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Founders Footer Note */}
      <section className="bg-zinc-950 py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <img
              src="https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772443109/WhatsApp_Image_2026-02-26_at_8.22.48_PM_q5yqwq.jpg"
              className="w-30 h-30 rounded-full grayscale mb-6"
              alt="Satish"
            />
            <h4 className="text-xl font-serif uppercase tracking-widest text-white">Satish Khurana</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Started from the very small beginnings in 1995. My journey was never about the tools, but about the eyes that see the soul of a moment.
            </p>
          </div>
          <div className="space-y-4 md:text-left">
            <img
              src="https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772443109/WhatsApp_Image_2026-02-26_at_8.22.48_PM_q5yqwq.jpg"
              className="w-30 h-30 rounded-full grayscale mb-6 float-right md:float-none"
              alt="Sandeep"
            />
            <h4 className="text-xl font-serif uppercase tracking-widest clear-both text-white">Sandeep Khurana</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Merging commerce with creativity since 2013. My goal is to ensure that India’s heritage is preserved with modern cinematic excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

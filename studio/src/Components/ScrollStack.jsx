import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import ScrollReveal from "./ScrollReveal";
import ScrollFloat from "./ScrollFloat";

/* ================= CARD COMPONENT ================= */

export const ScrollStackItem = ({ children }) => (
  <div className="scroll-stack-card bg-linear-to-b from-gray-500 via-gray-800 to-black rounded-4xl shadow-xl p-6 w-screen h-100 md:h-80 lg:h-90 xl:h-130 2xl:h-160  2xl:w-430 flex flex-col justify-center">
    {children}
  </div>
);

/* ================= MAIN STACK ================= */

const ScrollStack = ({ children, onComplete }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);
  const completedRef = useRef(false);

  /* 🔥 Scroll Update Logic */
  const update = useCallback(() => {
    if (!sectionRef.current) return;

    const scrollTop = window.scrollY;
    const height = window.innerHeight;
    const sectionTop = sectionRef.current.offsetTop;

    cardsRef.current.forEach((card, i) => {
      const cardTop = card.offsetTop + sectionTop;

      const start = cardTop - height * 0.3 - i * 40;
      const end = cardTop - height * 0.1;

      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - start) / (end - start)),
      );

      const scale = 1 - progress * (1 - (0.85 + i * 0.04));

      const translateY =
        scrollTop >= start ? scrollTop - cardTop + height * 0.3 + i * 40 : 0;

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    });

    /* ✅ Completion detection */
    const lastCard = cardsRef.current[cardsRef.current.length - 1];
    if (!lastCard) return;

    const lastTop = lastCard.offsetTop + sectionTop;
    const finishPoint = lastTop - height * 0.2;

    if (scrollTop >= finishPoint && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }

    if (scrollTop < sectionTop + 50 && completedRef.current) {
      completedRef.current = false;
    }
  }, [onComplete]);

  /* 🔥 Setup Lenis */
  useLayoutEffect(() => {
    cardsRef.current = Array.from(
      sectionRef.current.querySelectorAll(".scroll-stack-card"),
    );

    cardsRef.current.forEach((card, i) => {
      if (i < cardsRef.current.length - 1) {
        card.style.marginBottom = "100px";
      }
      card.style.willChange = "transform";
    });

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    lenis.on("scroll", update);

    const raf = (t) => {
      lenis.raf(t);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
    };
  }, [update]);

  return (
    <section
      ref={sectionRef}
      className="relative h-580 md:h-530 lg:h-600 xl:h-780 2xl:h-950 bg-[#060010] flex flex-col items-center py-15 xl:py-25 -z-50"
    >
      <div className=" sticky top-1 lg:top-15 xl:top-18 mb-10 lg:mb-20 xl:mb-30">
        <span className="text-lg md:text-2xl lg:text-4xl font-love-light text-red-600 md:tracking-wide xl:tracking-widest text-balance text-center">
        <ScrollFloat
          animationDuration={2}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.04}
        >
          We are Professional
        </ScrollFloat>
      </span>
      <span className=" w-screen text-lg md:text-2xl lg:text-4xl font-cormorant text-white  md:tracking-wide xl:tracking-widest text-balance text-center">
        <ScrollFloat
          animationDuration={2}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.04}
        >
          Wedding Photography & Cinematic Videography Services
        </ScrollFloat>
      </span>
      </div>
      {children}
    </section>
  );
};

export default ScrollStack;

import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({ children }) => (
  <div className="scroll-stack-card bg-white rounded-2xl shadow-xl p-6 w-400 h-200">
    {children}
  </div>
);

const ScrollStack = ({ children, onComplete }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);
  const completedRef = useRef(false);

  const update = useCallback(() => {
    const scrollTop = window.scrollY;
    const height = window.innerHeight;
    const sectionTop = sectionRef.current.offsetTop;

    cardsRef.current.forEach((card, i) => {
      const cardTop = card.offsetTop + sectionTop;
      const start = cardTop - height * 0.3 - i * 40;
      const end = cardTop - height * 0.1;

      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - start) / (end - start))
      );

      const scale = 1 - progress * (1 - (0.85 + i * 0.04));
      const translateY =
        scrollTop >= start
          ? scrollTop - cardTop + height * 0.3 + i * 40
          : 0;

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    });

    /* 🔥 Detect completion */
    const lastCard = cardsRef.current[cardsRef.current.length - 1];
    const lastTop = lastCard.offsetTop + sectionTop;
    const finishPoint = lastTop - height * 0.2;

    if (scrollTop >= finishPoint && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }

    if (scrollTop < sectionTop + 50 && completedRef.current) {
      completedRef.current = false;
    }
  }, []);

  useLayoutEffect(() => {
    cardsRef.current = Array.from(
      sectionRef.current.querySelectorAll(".scroll-stack-card")
    );

    cardsRef.current.forEach((card, i) => {
      if (i < cardsRef.current.length - 1) card.style.marginBottom = "120px";
      card.style.willChange = "transform";
    });

    const lenis = new Lenis({ smoothWheel: true, lerp: 0.1 });
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[220vh] bg-gray-700 flex flex-col items-center py-40"
    >
      {children}
    </section>
  );
};

export default ScrollStack;

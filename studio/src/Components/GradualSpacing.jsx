import { AnimatePresence, motion, useInView } from "framer-motion";
import React from "react";

export function GradualSpacing({ text = "Gradual Spacing", className = "" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.06, // 🔥 smoother stagger
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block font-bold tracking-tight ${className}`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

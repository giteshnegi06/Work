import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function ScrollBlur() {
  const containerRef = useRef(null)

  // Track scroll progress of container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Convert scroll progress → blur
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  )

  return (
    <div ref={containerRef} className="h-[200vh] bg-gray-100">
      <motion.div
        style={{ filter }}
        
      />
    </div>
  )
}

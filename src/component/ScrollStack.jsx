import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollStack Component
 * Apple-like smooth stacking scroll animation
 */
const ScrollStack = ({
  children,
  itemDistance = 300,
  stackGap = 100,
  scaleFactor = 0.85,
  stackPosition = "30%",
  className = "",
  useWindowScroll = true,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: useWindowScroll ? undefined : ref,
    offset: ["start start", "end end"],
  });

  const items = React.Children.toArray(children);
  const totalItems = items.length;

  return (
    <div ref={ref} className={`relative ${className}`} style={{ perspective: 1200 }}>
      <div
        className="sticky"
        style={{
          top: stackPosition,
          height: "80vh",
        }}
      >
        {items.map((child, index) => {
          const start = index / totalItems;
          const end = (index + 1) / totalItems;

          // Motion transformations for scroll effect
          const y = useTransform(scrollYProgress, [start, end], [itemDistance, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [scaleFactor, 1]);
          const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);

          // Depth blur (older cards slightly blurred)
          const blur = useTransform(scrollYProgress, [start, end], ["6px", "0px"]);

          // Subtle parallax light that follows top card
          const glowOpacity = useTransform(scrollYProgress, [start, end], [0.1, 0.4]);
          const zIndex = totalItems - index;

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                transformOrigin: "center",
                y,
                scale,
                opacity,
                zIndex,
                filter: blur && `blur(${blur}) drop-shadow(0 10px 30px rgba(0,0,0,0.25))`,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
                style={{ opacity: glowOpacity }}
              />
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;

export const ScrollStackItem = ({ children }) => (
  <div className="w-full h-[80vh]">{children}</div>
);

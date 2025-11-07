// TechStrip.jsx
import { motion } from "framer-motion";
import { useState } from "react";

// Default brand colors
const defaultBrandColors = {
  Zendesk: { primary: "#03363D", glow: "rgba(3, 54, 61, 0.6)" },
  Gorgias: { primary: "#F15A24", glow: "rgba(241, 90, 36, 0.6)" },
  Loop: { primary: "#3A86FF", glow: "rgba(58, 134, 255, 0.6)" },
};

function TechLogo({ name, Icon, colors }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col items-center gap-3 py-4 flex-shrink-0 cursor-pointer relative"
      style={{
        transform: isHovered
          ? 'perspective(1000px) translateZ(50px) scale(1.15)'
          : 'perspective(1000px) translateZ(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        zIndex: isHovered ? 50 : 1, // Ensured high z-index
      }}
    >
      <div className="relative">
        {/* Inner Glow (the blur-xl div) */}
        <motion.div
          className="absolute inset-0 rounded-2xl blur-xl opacity-0"
          style={{ backgroundColor: colors.glow }}
          animate={{ opacity: isHovered ? 0.3 : 0, scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon Container */}
        <motion.div
          className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl will-change-transform"
          animate={{
            boxShadow: isHovered
              ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${colors.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)`
              : '0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
            y: isHovered ? -8 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Glass Shine */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Icon itself */}
          <motion.div
            animate={{ scale: isHovered ? 1.2 : 1, filter: isHovered ? `drop-shadow(0 4px 12px ${colors.glow})` : 'none' }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Icon className="text-2xl md:text-3xl relative z-10" style={{ color: isHovered ? colors.primary : '#f4f4f5' }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Text Label */}
      <motion.span
        className="text-xs md:text-sm font-medium text-zinc-300 whitespace-nowrap"
        animate={{ color: isHovered ? colors.primary : '#d4d4d8', y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.span>

      {/* REMOVED: The outer border/glow ring that was causing the unwanted border effect */}
    </motion.div>
  );
}

export default function TechStrip({ tech, brandColors = {}, className = "" }) {
  const mergedColors = { ...defaultBrandColors, ...brandColors };
  const marqueeItems = [...tech, ...tech, ...tech];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 40s linear infinite; will-change: transform; }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="marquee-mask relative z-10 py-6">
        <div className="flex marquee-track w-max">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
              {marqueeItems.map(({ name, Icon }, i) => (
                <TechLogo
                  key={`${name}-${loop}-${i}`}
                  name={name}
                  Icon={Icon}
                  colors={mergedColors[name] || { primary: "#ffffff", glow: "rgba(255,255,255,0.4)" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

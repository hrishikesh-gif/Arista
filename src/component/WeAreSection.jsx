import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WeAreSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  // Minimal floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 text-center overflow-hidden"
      style={{
        background: '#0a0118',
        '--glow-x': '50%',
        '--glow-y': '50%',
        '--glow-intensity': '0',
        '--border-color': '#2e1a4e',
        '--background-dark': '#0a0118'
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Subtle floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            x: [`${particle.x}vw`, `${particle.x + 5}vw`, `${particle.x}vw`],
            y: [`${particle.y}vh`, `${particle.y - 10}vh`, `${particle.y}vh`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Small eyebrow text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 uppercase mb-4 sm:mb-6 md:mb-8 font-light"
        >
           We Are
        </motion.p>

        {/* Main Title - Clean and Bold */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-5 md:mb-6 text-white tracking-tight leading-tight"
        >
          Arista Systems
        </motion.h1>

        {/* Subtle accent line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          className="h-[1.5px] sm:h-[2px] bg-white/80 mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{ 
            maxWidth: window.innerWidth < 640 ? '80px' : '120px' 
          }}
        />

        {/* Tagline - Simple and Elegant */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-300 font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-wide px-4"
        >
          Passionate about unifying art, tech, and storytelling.
        </motion.p>

        {/* Description with better spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto font-light px-4"
        >
          A renowned end-to-end IT and web service facilitator based in India.
          <br className="hidden sm:block" />
          We bring together a passionate team of professionals with years of experience
          <br className="hidden md:block" />
          and diverse expertise across multiple domains.
        </motion.p>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTextVisible(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className=" w-full max-w-[100vw] bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col items-center justify-center relative overflow-hidden"style={{minHeight:"117vh"}}>

      {/* Left Section - Text */}
      <div className="z-40 xl:w-[50vw] w-full xl:text-left text-center xl:pl-[6vw] px-[8vw] py-[8vh] xl:py-0 flex flex-col xl:items-start items-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5
          }}
          className="font-bold z-10 mb-[2vh] relative leading-none"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}
        >
          <span
            className={`relative inline-block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent whitespace-nowrap ${
              isTextVisible ? 'animate-shiny' : ''
            }`}
          >
            Arista Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5
          }}
          className="text-purple-200 mx-auto xl:mx-0 leading-relaxed mt-[2vh]"
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            maxWidth: '90vw'
          }}
        >
          Driving growth through tailored technology,{' '}
          <span className="xl:block">design and digital solutions</span>
        </motion.p>
      </div>

      {/* Right Section - Spline */}
      <div 
        className="xl:w-[50vw] w-full flex items-center justify-center relative xl:h-screen"
        style={{ height: 'clamp(55vh, 65vw, 100vh)' }}
      >
        <div 
          className="w-full h-full flex items-center justify-center relative"
          style={{
            transform: 'scale(clamp(0.85, 1.8vw, 1.2))',
            transformOrigin: 'center center'
          }}
        >
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/hxM0sBc2LnZZiRRk/scene.splinecode"
          />
        </div>
      </div>

      {/* Tailwind Animation Classes */}
      <style jsx>{`
        @keyframes shiny-sweep {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }

        .animate-shiny {
          background-size: 200% 100%;
          animation: shiny-sweep 3s ease-in-out infinite;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        /* Ensure no horizontal overflow */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
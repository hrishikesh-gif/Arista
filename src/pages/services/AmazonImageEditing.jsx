import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import ServiceCard from "../../component/ServiceCard";
import Footer from "../../component/Footer";
import BusinessCTA from "../../component/BusinessCTA"
import { MessageSquare, Clock, Brain,Heart,BrainCircuit, HeartHandshake,Clock3} from 'lucide-react';
import {
  SiOpenai,
  SiAmazon,
  SiGoogle,
} from "react-icons/si";



const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const TypewriterText = ({ text, speed = 20, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // reset when text changes
    setIndex(0);

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className={`${className} whitespace-pre-wrap text-pretty`}
    >
      {/* always use a slice from the original string */}
      {text.slice(0, index)}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-white/70 ml-1 align-middle"
      />
    </motion.div>
  );
};

const CustomerService = () => {
  const techStack = [
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Amazon Seller Central", Icon: SiAmazon },
 
  { name: "Google AI Studio", Icon: SiGoogle },
 
];
  const serviceFeatures = [
    {
      
      title: "Amazon Image",
      subtitle: "Editing & Optimization",
      description: "Images are the first thing shoppers notice. Poor-quality visuals or dull listings can cost clicks and sales, even if your product is excellent. We enhance every image to meet Amazon’s strict requirements and maximize impact."
    },
    {
      
      title: "Visual Storytelling",
      subtitle: "with A+ Content",
      description: "Transform product pages into immersive, persuasive experiences. Our layouts combine high-quality images, infographics, and text modules to highlight features, benefits, and use cases, making your listings informative, professional, and ready to convert."
    },
    {
      
      title: "Custom &",
      subtitle: " Storefront Build",
      description: "Your Amazon Storefront is your brand’s digital shop window. We craft visually appealing storefronts that reflect your brand identity, showcase your catalog, and guide shoppers through a smooth buying journey. A professional storefront builds trust, encourages repeat visits, and increases sales."
    },
    {
      
      title: "Asset",
      subtitle: "Optimization",
      description: "All visuals and content are optimized to meet Amazon’s specifications, ensuring fast loading, high clarity, and maximum visual impact. We refine images, videos, banners, and graphics so your listings shine."
    },
    {
      
      title: "Brand Registry",
      subtitle: "Essentials",
      description: "Lay a solid foundation with Amazon Brand Registry. We guide you through registration, protect your brand, secure exclusive content, and unlock enhanced marketing tools to boost visibility and credibility.With our integrated approach, your Amazon presence becomes a powerful sales tool, combining visual perfection, engaging content, and a compelling brand story to increase trust, engagement, and conversions."
    }

   ];
  return (
    <>
      {/* FIX 1: Changed 'xl:min-h-screen' to '2xl:min-h-screen'. 
          Standard 1280px laptops will now scroll naturally, removing the gap. */}
      <div className="relative w-full min-h-[auto] 2xl:min-h-screen overflow-hidden font-[Poppins,sans-serif]">
        <DarkVeil />

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          // FIX 2: Updated inner container to match. 
          // - Used 'xl:py-36' for balanced laptop padding.
          // - Reserved '2xl' styles for keeping the hero look on huge screens.
          className="relative z-[9] flex flex-col justify-center xl:justify-start items-start
                     w-full 
                     min-h-[auto] 2xl:min-h-screen
                     px-6 md:px-14 lg:px-20
                     pt-32 pb-20 xl:py-36 2xl:pt-44 2xl:pb-0
                     md:max-w-[90%] lg:max-w-[80%] xl:max-w-[85%] 2xl:max-w-[75%]"
        >
          <motion.h1
            variants={textVariant(0.1)}
            className="text-white font-bold leading-tight text-left text-balance
                       text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl "
          >
           Amazon Storefront & Brand Setup
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug
                       mt-4 sm:mt-6
                       text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
          >
            Elevate Your Amazon Presence with A+ Content, Storefronts & Brand Story
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Your Amazon listings deserve more than just product photos and descriptions, they need a compelling story. Our Amazon A+ Content, Storefront, and Brand Story Setup services help your brand stand out, engage shoppers, and drive higher conversions through professional visual storytelling."
              className="text-white/90 font-light leading-relaxed text-left
                         text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl"
              speed={25}
            />
          </div>

          <motion.button
            variants={textVariant(0.7)}
            className="mt-6 sm:mt-8 md:mt-10 px-8 py-4 2xl:px-10 2xl:py-5 bg-white text-black font-semibold
                       rounded-lg hover:bg-gray-100 transition-all duration-300
                       text-base sm:text-lg md:text-lg lg:text-xl 2xl:text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Don’t settle for ordinary listings!"
                    description="Transform your Amazon presence with expert A+ Content, custom storefronts, and compelling brand stories."
                    buttonText="Showcase Your Brand Like A Pro"
                    imageUrl="\images\CreativeProduction.avif"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

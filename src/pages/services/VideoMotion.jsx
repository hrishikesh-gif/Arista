import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";
import { Link } from 'react-router-dom';
import { MessageSquare, Clock, Brain,Heart,BrainCircuit, HeartHandshake,Clock3} from 'lucide-react';
import {
  SiOpenai,
  SiAmazon,
  SiGoogle,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
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

const VideoMotion = () => {
  const techStack = [
  { name: "Figma", Icon: SiFigma},
  { name: "Adobe Photoshop", Icon: SiAdobephotoshop },
   { name: "Adobe InDesign", Icon: SiAdobeindesign },
    { name: "Adobe Illustrator", Icon: SiAdobeillustrator },
 
  { name: "Google AI Studio", Icon: SiGoogle },
 
];
  const serviceFeatures = [
    {
      
      title: "Reels & Social",
      subtitle: "Media Videos",
      description: "In today’s fast-scrolling world, static images aren’t enough. Our Video & Motion Content services help your brand capture attention, engage audiences, and drive conversions with dynamic visuals tailored for social media and e-commerce."
    },
    {
      
      title: "Product ",
      subtitle: "Demo Editing",
      description: "A strong product demo can turn curiosity into purchase. We edit your footage to create clear, visually compelling demonstrations that highlight the features, functionality, and benefits of your products. Every cut, angle, and transition is designed to communicate value effectively, helping viewers understand why your product stands out and encouraging them to take action."
    },
    {
      
      title: "Short-Form",
      subtitle: "Creative Editing",
      description: "Short-form content demands precision, creativity, and energy. From transitions and motion graphics to sound design and pacing, we transform raw footage into polished, shareable videos that grab attention immediately. Whether it’s a promotional snippet, campaign teaser, or social media reel, our edits ensure your videos are dynamic, professional, and optimized for maximum impact."
    },
    {
      
      title: "Why",
      subtitle: "Choose Us",
      description: "Our team combines creativity and technical expertise to deliver videos that reflect your brand identity while driving results. Whether it’s a product launch, promotional campaign, or social content, we ensure every second of your video makes an impact."
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
           Video & Motion Content
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl

"
          >
           Bring Your Brand to Life with Engaging Videos!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="In today’s fast-scrolling world, static images aren’t enough. Our Video & Motion Content services help your brand capture attention, engage audiences, and drive conversions with dynamic visuals tailored for social media and e-commerce."
              className="text-white/90 font-light leading-relaxed text-left text-base md:text-lg lg:text-lg 2xl:text-xl
"
              speed={25}
            />
          </div>
<Link to="/contact">
          <motion.button
            variants={textVariant(0.7)}
            className="mt-6 sm:mt-8 md:mt-10 py-[11px] px-[18px] md:py-3 md:px-[21px] bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base lg:text-base 2xl:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Let's Talk
          </motion.button>
            </Link>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Your audience scrolls fast!"
                    description="Make every second count. From social media reels to product demos, we create videos that capture attention, engage viewers, and drive results. Don’t let mediocre content hold your brand back"
                    buttonText="Turn Views Into Customer"
                    imageUrl="\images\CreativeProduction.avif"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default VideoMotion;

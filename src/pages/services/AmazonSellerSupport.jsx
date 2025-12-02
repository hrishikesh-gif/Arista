import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA"
import Footer from "../../component/Footer";
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
      
      title: "Seller Central",
      subtitle: "Support",
      description: "Navigating Seller Central can be overwhelming. From account setup and management to policy updates and technical glitches, our team provides hands-on support so you don’t get stuck in the system. We ensure your account stays active, functional, and stress-free."
    },
    {
      
      title: "ASIN Merge",
      subtitle: "& Fix",
      description: "Duplicate listings and broken variations can confuse buyers and hurt your rankings. We specialize in merging ASINs, fixing catalog errors, and organizing your listings the right way. The result? A clean, professional storefront that drives consistent sales."
    },
    {
      
      title: "Compliance",
      subtitle: "Assistance",
      description: "Amazon has strict rules, and even minor missteps can lead to costly suspensions. We help you stay compliant with Amazon’s policies, product restrictions, and category requirements so your account remains safe and your sales uninterrupted."
    },
    {
      
      title: "Listing",
      subtitle: "QC (Quality Check)",
      description: "Your listings are your digital storefront. We review and refine titles, bullet points, images, and descriptions to meet Amazon’s standards and improve visibility. Optimized listings not only pass approval but also attract more clicks and conversions."
    },
    {
      
      title: "Order Issue",
      subtitle: "Resolution",
      description: `Late deliveries, cancellations, or negative feedback can damage your seller reputation. Our team steps in to resolve order-related issues quickly and professionally, keeping your customers satisfied and your seller rating strong.
      With expert guidance, you’ll save time, reduce errors, and maximize your Amazon sales performance.`
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
            className="text-white font-bold leading-tight text-left text-balance text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl
"
          >
            Amazon Seller Support
          </motion.h1>

          
          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Running an Amazon store comes with challenges, from fixing listing errors to handling customer issues. Our Amazon Seller Support services are designed to keep your operations smooth and compliant so you can focus on growth, not problems."
              className="text-white/90 font-light leading-relaxed text-left text-base md:text-lg lg:text-lg 2xl:text-xl
"
              speed={25}
            />
          </div>

          <motion.button
            variants={textVariant(0.7)}
            className="mt-6 sm:mt-8 md:mt-10 py-[11px] px-[18px] md:py-3 md:px-[21px] bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base lg:text-base 2xl:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LET'S TALK
          </motion.button>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Don’t let small issues cost you big sales!"
                    description="Partner with us for Amazon Seller Support that protects your account, enhances your listings, and keeps your business running without interruptions."
                    buttonText="FIX MY AMAZON ISSUES"
                    imageUrl="\images\CreativeProduction.avif"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

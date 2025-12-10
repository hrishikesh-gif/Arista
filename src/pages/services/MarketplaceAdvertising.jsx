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

const MarketplaceAdvertising = () => {
  const techStack = [
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Amazon Seller Central", Icon: SiAmazon },
 
  { name: "Google AI Studio", Icon: SiGoogle },
 
];
  const serviceFeatures = [
    {
      title: "Sponsored Ads",
      subtitle: "Management",
      description: "We create and manage Sponsored Product, Sponsored Brand, and Sponsored Display ads that put your products in front of the right audience. Our campaigns are tailored to your goals, whether it’s driving sales, building brand awareness, or launching new products."
    },
    {
      title: "Campaign",
      subtitle: "Structuring",
      description: "Proper campaign structure is the backbone of Amazon PPC success. We organize campaigns by product category, match type, and target audience to ensure efficient budget allocation and maximum ad relevance. This improves click-through rates, lowers wasted spend, and strengthens overall campaign performance."
    },
    {
      
      title: "Bid ",
      subtitle: "Optimization",
      description: "Every cent counts in Amazon advertising. We continuously adjust bids based on performance data, competitive analysis, and keyword trends to maximize return on ad spend (ROAS) while keeping your advertising cost of sales (ACOS) under control."
    },
    {
      title: "ROAS Improvement &",
      subtitle: "ACOS Reduction",
      description: "Our data-driven approach focuses on increasing profitability. By identifying high-converting keywords, pausing low-performing campaigns, and reallocating budgets strategically, we improve ROAS and reduce ACOS, turning your ad spend into measurable revenue growth."
    },
    {
      title: "Analytics-Driven",
      subtitle: "Refinement",
      description: `Amazon PPC is never set-and-forget. We monitor campaigns daily, analyze performance metrics, and refine targeting, creatives, and bidding strategies. This continuous improvement ensures your ads adapt to market trends and consistently deliver results.
      
      With our Marketplace Advertising services, your Amazon campaigns become more efficient, more profitable, and more impactful, giving you a competitive edge and sustainable growth.`
    }

   ];
  return (
    <>
      {/* FIX 1: Changed 'xl:min-h-screen' to '2xl:min-h-screen'. 
          Standard 1280px laptops will now scroll naturally, removing the gap. */}
      <div className="
       relative w-full overflow-hidden font-[Poppins,sans-serif]
       min-h-[60vh]
       xl:min-h-[61vh]
       2xl:min-h-[61vh]
       min-[1700px]:min-h-[61vh]
       min-[1900px]:min-h-[61vh]
       min-[3000px]:min-h-[61vh]
     ">
     
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
                     min-h-[auto] 2xl:min-h-[61vh]
                     px-6 md:px-14 lg:px-20
                     pt-32 pb-20 xl:py-36 2xl:pt-44 2xl:pb-0
                     md:max-w-[90%] lg:max-w-[80%] xl:max-w-[85%] 2xl:max-w-[75%]"
        >
          <motion.h1
            variants={textVariant(0.1)}
            className="text-white font-bold leading-tight text-left text-balance text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl
"
          >
           Marketplace Advertising (Amazon PPC)
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Maximize Your Sales with Expert Amazon PPC Management
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Selling on Amazon is competitive, and the right advertising strategy can make or break your sales. Our Marketplace Advertising services help you run high-performing Sponsored Ads campaigns that increase visibility, boost revenue, and deliver measurable results."
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
                    title="Stop wasting ad spend on ineffective campaigns!"
                    description="Turn Clicks Into Conversions TodayPartner with us to optimize your Amazon PPC strategy, boost sales, and maximize ROI."
                    buttonText="OPTIMIZE MY AMAZON ADS NOW"
                    imageUrl="\images\CTA img\Inner\inner_image.webp"
                    altText="Optimize My Amazone Ads Now"
                />
      <Footer />
    </>
  );
};

export default MarketplaceAdvertising;

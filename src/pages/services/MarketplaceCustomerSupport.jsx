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

const MarketplaceCustomerSupport = () => {
  const techStack = [
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Amazon Seller Central", Icon: SiAmazon },
 
  { name: "Google AI Studio", Icon: SiGoogle },
 
];
  const serviceFeatures = [
    {
      title: "Review",
      subtitle: "Management",
      description: "Customer reviews can make or break your sales. We monitor, respond to, and manage reviews professionally, addressing concerns promptly while highlighting positive feedback. This protects your seller reputation and encourages buyer confidence."
    },
    {
      title: "Returns &",
      subtitle: "Refunds Handling",
      description: "Efficiently managing returns and refunds is crucial to maintaining high seller ratings. Our team ensures smooth processing, communicates with buyers clearly, and minimizes negative impacts on your account, keeping both customers and marketplaces satisfied."
    },
    {
      title: "Buyer",
      subtitle: " Communication",
      description: "Prompt, professional communication improves customer satisfaction and reduces disputes. We handle inquiries, complaints, and product-related questions across marketplaces, ensuring every buyer receives timely and helpful responses."
    },
    {
      title: "Marketplace",
      subtitle: "Policy Navigation",
      description: "Each platform has unique rules and standards. We help you navigate Amazon, Walmart, eBay, and other marketplace policies to avoid suspensions, account issues, or penalties, keeping your operations compliant and smooth."
    },
    {
      title: "Proactive",
      subtitle: "Problem Resolution",
      description: `From late shipments to product issues, we address problems quickly and effectively. By resolving issues before they escalate, we protect your seller metrics and ensure buyers remain happy, loyal, and more likely to return.
      
      With our Marketplace Customer Support, you’ll improve customer satisfaction, maintain excellent seller ratings, and focus on growing your business while we handle the day-to-day customer interactions.`
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
           Marketplace Customer Support
          </motion.h1>

          

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Reliable Marketplace Customer Support That Protects Your Reputation!"
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
                    title="Keep Your Customers Happy & Your Ratings High Don’t let support issues hurt your sales!"
                    description="Partner with us to manage reviews, returns, refunds, and buyer communication across all marketplaces."
                    buttonText="GET MARKETPLACE SUPPORT NOW"
                    imageUrl="\images\CTA img\Inner\inner_image.webp"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default MarketplaceCustomerSupport;

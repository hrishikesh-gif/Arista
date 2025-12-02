import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";
import { MessageSquare, Clock, Brain, Heart, BrainCircuit, HeartHandshake, Clock3 } from 'lucide-react';

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
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ];
  const serviceFeatures = [
    {
      
      title: "Chargebacks Made",
      subtitle: "Easy",
      description: "Chargebacks can feel overwhelming, but we make them simple. Whether it’s a credit card dispute or a marketplace issue on Amazon or Walmart, we jump in fast. We analyze the situation, gather the key facts, and present your case effectively, giving you the best chance to win your money back."
    },
    {
     
      title: "All the Paperwork",
      subtitle: "Covered",
      description: "The paperwork side of disputes can be a nightmare. That’s why we handle it all. From receipts and shipping info to customer communications and transaction history, we organize everything you need so your case is clear, thorough, and ready to win, every single time."
    },
    {
      
      title: "Stop Fraud",
      subtitle: "in Its Tracks",
      description: "Fraud can drain your revenue fast. Our team investigates suspicious charges, verifies transactions, and disputes unauthorized payments. By catching fraud early and taking swift action, we protect your business from losses and maintain your credibility with customers."
    },
    {
      
      title: "Recover Lost",
      subtitle: "Funds",
      description: "Lost refunds don’t have to stay lost. We actively pursue refund recovery, whether it’s from chargebacks or fraudulent disputes. Our goal is to bring your money back into your account quickly so you can focus on growing your business."
    },
    {
      
      title: "Prevent Future",
      subtitle: "Headaches",
      description: "The best way to handle disputes is to prevent them. We help you identify risky transactions, monitor trends, and refine your policies to reduce future chargebacks. By staying proactive, your business avoids unnecessary losses and keeps operations running smoothly."
    },
    {
      
      title: "Why Choose",
      subtitle: "Us",
      description: `
      • Smooth handling of credit card & marketplace disputes. 
      • Organized, battle-ready documentation. 
      • Fast refund recovery. 
      • Fraud detection & prevention. 
      • Trusted for Amazon, Walmart, and beyond.`
    },
    
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
            Chargeback & Dispute Resolution
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Win More, Lose Less!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Chargebacks and disputes can hit your business hard, from lost revenue to damaged reputation. Our Chargeback & Dispute Resolution services are designed to help you navigate credit card chargebacks, Amazon and Walmart disputes, and fraud cases efficiently, ensuring you recover funds while minimizing future risks."
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
      <ServiceCard
        features={serviceFeatures}
        accentColor="purple"
        showButton={true}
        buttonText="Read More"
        onButtonClick={(feature, index) => handleClick(feature)}
      />
      <BusinessCTA 
                    title="Protect your revenue now!"
                    description="Our team is eager to assist you. Reach out through your preferred channel, and let us show you the Arista difference."
                    buttonText="GET OUR EXPERTS ON YOUR SIDE NOW !"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import CasestudySection from "../../component/CasestudySection";
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

const LogisticsReconciliation = () => {
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ];
  const serviceFeatures = [
    {
      title: "B2B Invoice Reconciliation ",
      subtitle: "& Charge Validation",
      description: "We meticulously audit B2B invoices to spot discrepancies, invalid shipping charges, customs duties, and weight-based errors. By reconciling every line item, we ensure your costs match contracts and agreements, preventing overpayments and financial leaks. Every shipment is accounted for, giving you complete control over logistics expenses."
    },
    {
      title: "Shipment &",
      subtitle: "Carrier Monitoring",
      description: "Tracking shipments across multiple carriers can be a nightmare, but we simplify it. From over 15 carriers worldwide, we monitor deliveries, exceptions, and returns. We handle claims, container creation, SLA monitoring, and turnaround tracking, making sure shipments reach their destination on time while minimizing operational headaches."
    },
    {
      title: "Trade & ",
      subtitle: "Compliance Cost Management",
      description: "Global shipping comes with complex compliance rules and multi-currency charges. We verify customs entries, map charge types, apply correct cost codes in your ERP, and reconcile charges across borders. Our approach ensures your trade operations comply with regulations while optimizing costs, avoiding penalties, and keeping global logistics transparent."
    },
    
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
            Logistics Reconciliation & Charge Verification
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Master Your Logistics Expenses with Confidence
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Logistics costs can be complicated, unpredictable, and full of hidden charges. From shipping invoices to customs duties and courier costs, small errors add up fast, eating into your margins and slowing down operations. Our Logistics Reconciliation & Charge Verification service ensures every charge is accurate, every shipment is tracked, and compliance is never an afterthought. With us handling the details, you save money, reduce disputes, and keep your logistics running smoothly."
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
        
      />
      <BusinessCTA 
                    title="Stop letting hidden charges drain your profits!"
                    description="Take control of your logistics, verify every cost, and optimize your operations today."
                    buttonText="VERIFY LOGISTICS CHARGES NOW!"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
               <CasestudySection/>
      <Footer />
    </>
  );
};

export default LogisticsReconciliation;

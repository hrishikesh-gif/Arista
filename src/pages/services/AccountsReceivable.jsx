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
      
      title: "Customer",
      subtitle: "Follow-Ups",
      description: "We handle proactive follow-ups with your customers, ensuring invoices are paid on time without straining relationships. Friendly reminders, quick resolution of queries, and consistent communication keep your accounts receivable healthy and predictable."
    },
    {
      
      title: "Customer",
      subtitle: "Statements",
      description: "We generate accurate, easy-to-understand statements for your customers, summarizing invoices, payments, and outstanding balances. This transparency reduces confusion, prevents disputes, and encourages timely payments."
    },
    {
      
      title: "Reconciliation",
      subtitle: "of Payments",
      description: "Our team carefully reconciles every payment received against the invoices, ensuring that your records are precise and up-to-date. Any discrepancies are flagged and resolved quickly, so your accounts reflect the real picture at all times."
    },
    {
      
      title: "Reporting Delays",
      subtitle: "and Insights",
      description: "We provide timely reports on delayed or pending payments, giving you a clear view of cash flow trends. With actionable insights, you can plan better, prioritize follow-ups, and make informed financial decisions to strengthen your business."
    },
    {
      
      title: "Why Choose Our",
      subtitle: "AR Support",
      description: `
      • Keep your cash flow steady and predictable 
      • Reduce late payments and improve collections 
      • Maintain strong customer relationships 
      • Gain accurate, real-time reporting for smarter decisions 
      • Free your team to focus on strategic growth, not chasing payments`
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
            Accounts Receivable Support
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Stay on Top of Payments, Improve Cash Flow, and Keep Customers Happy!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Managing accounts receivable can be challenging—late payments, missing invoices, and reconciliation issues can eat up time and affect your cash flow. Our Accounts Receivable Support ensures your payments are tracked, reconciled, and reported accurately, so your business always knows where it stands financially."
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
                    title="Don’t let delayed payments affect your business!"
                    description="Let our team manage follow-ups, reconcile accounts, and deliver clear reports—so you can focus on growth, not on paperwork."
                    buttonText="GET YOUR RECEIVABLES UNDER CONTROL TODAY"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

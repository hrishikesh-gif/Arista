import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import Footer from "../../component/Footer";
import BusinessCTA from "../../component/BusinessCTA"
import { Link } from 'react-router-dom';

import { MessageSquare, Clock, Brain,Heart,BrainCircuit, HeartHandshake,Clock3} from 'lucide-react';

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

const FinanceReconciliation = () => {
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ]; 
  const serviceFeatures = [
    {
      
      title: "How We Make",
      subtitle: "Reconciliation Quick",
      description: "Free your team from tedious tasks. Outsourcing your account reconciliation ensures faster, error-free results while giving you peace of mind. Our streamlined process leverages automation and expert review to ensure accuracy and timeliness effortlessly for all stakeholders."
    },
    {
      
      title: "AI-Powered",
      subtitle: "Efficiency",
      description: "We utilize industry-leading automation tools to handle invoices efficiently. These systems capture key details and organize them into clean columns in seconds. What used to take 10–15 minutes manually now takes just 2 minutes, enabling faster turnaround, fewer mistakes, and smooth financial flow."
    },
    {
    
      title: "Team",
      subtitle: "Verification",
      description: "Technology is powerful, but human eyes keep it reliable. Our experts carefully check invoice data against receipts before reconciliation. This balance of AI and team oversight gives you accuracy you can trust, every single time."
    },
    {
      
      title: "Accounts",
      subtitle: "Payable Services",
      description: "We manage your accounts payable so your business stays on top of bills and vendor payments. Our team ensures invoices are processed quickly, verified accurately, and paid on time. With AI-assisted automation and human oversight, you reduce errors, avoid late fees, and maintain strong vendor relationships."
    },
    {
      
      title: "Accounts",
      subtitle: "Receivable Support",
      description: "Managing incoming payments can be challenging. Our accounts receivable support ensures invoices are sent promptly, payments are tracked accurately, and overdue accounts are followed up on efficiently. We help improve cash flow, reduce late payments, and provide clear reporting so you always know what’s coming in."
    },
    {
     
      title: "Continuous",
      subtitle: "Improvements",
      description: "We continually refine and optimize our reconciliation process to deliver even greater speed and precision. By integrating industry-standard tools and intelligent workflows, we help you achieve real-time insights, timely reporting, and stronger financial control."
    },
    {
      
      title: "The",
      subtitle: "Result?",
      description: "A streamlined reconciliation process that saves hours, reduces stress, and keeps your stakeholders confident in your numbers."
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
          Account Reconciliation
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Reconcile Smarter, Not Harder
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Manual reconciliation slows your business down. With our account reconciliation services, what used to take 10–15 minutes per invoice now takes just 2 minutes. Our AI-powered automation tools extract and organize invoice details automatically, while our team verifies them for complete accuracy."
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
            LET'S TALK
          </motion.button>
            </Link>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Don’t let slow processes hold you back!"
                    description="Outsource your account reconciliation services today and save hours every week. Faster, smarter, AI-assisted finance management is just a click away."
                    buttonText="CUT RECONCILATION TIME NOW"
                    imageUrl="\images\tp.avif"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default FinanceReconciliation;

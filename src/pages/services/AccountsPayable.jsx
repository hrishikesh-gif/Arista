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
      
      title: "Invoice",
      subtitle: "Verification",
      description: "We double-check every invoice to make sure the numbers, terms, and details are spot-on before anything gets processed. This way, you avoid costly mistakes, duplicate payments, and awkward disputes with vendors. Plus, we make sure everything follows your company rules and industry standards, so you always have a clear, trustworthy record."
    },
    {
      
      title: "PO",
      subtitle: "Matching",
      description: "Every invoice is carefully matched with its corresponding purchase order. If something doesn’t add up, we flag it immediately and get it sorted, no stress, no delays. This keeps your finances tight, your approvals in check, and your cash flow predictable."
    },
    {
      
      title: "Vendor Portal Entry",
      subtitle: "& Follow-Ups",
      description: "We handle vendor portal entries like pros, keeping your records accurate and up-to-date. On top of that, we do timely follow-ups so nothing falls through the cracks. Need to resolve an issue with a vendor? We’ve got it covered, keeping relationships smooth and your operations running without hiccups."
    },
    {
      
      title: "Accounts",
      subtitle: "Payable Reporting",
      description: "We give you clear, actionable insights into your payables. Track outstanding invoices, see payment timelines, and monitor vendor performance. With this info at your fingertips, you can spot issues fast, make smarter decisions, and keep your financials in perfect shape."
    },
    {
      
      title: "Enhanced Efficiency",
      subtitle: "and Cost Savings",
      description: "Streamlining or outsourcing your AP process can save your team serious time and resources. Less manual work, fewer mistakes, faster payments, it all adds up to better cash flow and more room for your team to focus on bigger-picture financial goals."
    },
    {
      
      title: "Technology-Driven",
      subtitle: "Accuracy",
      description: "We use smart AP tools to automate invoice processing, PO matching, and reporting. This means fewer errors, faster approvals, and secure records. Real-time dashboards let you see everything at a glance and forecast liabilities accurately, so your AP process isn’t just smooth, it’s smart."
    },
    {
      
      title: "Why Choose",
      subtitle: "Our AP Services",
      description: `
      • Reduce errors and avoid duplicate payments. 
      • Maintain strong vendor relationships. 
      • Save time and free up your team for higher-value work. 
      • Ensure compliance and transparent financial reporting. 
      • Leverage technology for accuracy and efficiency.`
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
            className="text-white font-bold leading-tight text-left text-balance text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl"
          >
            Accounts Payable Services
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl"
          >
            Streamline Your Payables, Minimize Errors, Maximize Efficiency!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Managing accounts payable can be time-consuming and prone to errors if not handled systematically. Our Accounts Payable Services ensure every invoice is verified, every purchase order (PO) matches accurately, and vendor relationships stay smooth, all while keeping your financial data organized and actionable."
              className="text-white/90 font-light leading-relaxed text-left text-base md:text-lg lg:text-lg 2xl:text-xl"
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
                    title="Don’t let AP management slow down your business!"
                    description="Get Started Now. Let our team streamline your processes, keep your records accurate, and ensure timely payments."
                    buttonText="TAKE CONTROL OF YOUR PAYABLES TODAY"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

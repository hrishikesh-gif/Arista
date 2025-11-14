import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA"
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
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className={`${className} whitespace-pre-wrap text-pretty`} // ✅ FIXED
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-white/70 ml-1 align-middle"
      />
    </motion.p>
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
      icon: MessageSquare,
      title: "Billing",
      subtitle: "Accuracy",
      description: "When it comes to lead generation, even small billing errors can add up to thousands of wasted dollars over time. That’s why we meticulously review every invoice line by line to make sure the charges match the leads you actually received. If we spot overcharges, double billing, or hidden fees, we flag them right away and push back on the vendor. The result? You only pay for what’s accurate, and not a penny more."
    },
    {
      icon: Clock,
      title: "Invalid",
      subtitle: "Lead Refunds",
      description: "Not every lead is worth paying for. Sometimes you get duplicates, spam inquiries, wrong numbers, or irrelevant leads that never should’ve been billed in the first place. Instead of letting them slide, our team disputes these with vendors like Elocal, Service Direct, and other lead providers to make sure you get credit back for the invalid ones. This protects your marketing budget and ensures you’re only investing in legitimate opportunities that could actually convert."
    },
    {
      icon: Heart,
      title: "Call & PPC",
      subtitle: "Lead Tracking",
      description: "If you’re paying for calls or PPC leads, you deserve to know where they’re coming from and whether they’re delivering real value. We track every single call and click-based lead across platforms, verifying its origin and checking if it matches the billing details. This transparency allows you to see which platforms are driving quality leads and which ones are draining your spend. In short, you’ll know exactly where your money is working, and where it’s being wasted."
    },
    {
      icon: BrainCircuit,
      title: "Escalation",
      subtitle: "Workflows",
      description: "Sometimes, vendors don’t respond quickly or refuse to process refunds on invalid leads. That’s where our escalation workflows kick in. We take your dispute up the chain, moving it through the right departments and pressing for resolution until it’s settled. This structured process increases your chances of winning disputes, recovering refunds faster, and holding vendors accountable. You’ll never feel stuck or ignored, we fight until the issue is resolved."
    },
    {
      icon: Clock3,
      title: "Why",
      subtitle: "It Matters",
      description: "Every invalid lead left unchecked is lost money. By reconciling your leads and auditing your portals, you’re not just protecting your budget, you’re building a more efficient growth engine. Think of it as turning wasted spend back into revenue."
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
            Lead Reconciliation & Portal Auditing
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug
                       mt-4 sm:mt-6
                       text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
          >
            Stop Wasting Money on Bad Leads, Get Every Dollar Accounted For!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="  Every lead you pay for should be a real opportunity, not a dead end. Unfortunately, billing errors, invalid leads, and missed refunds can drain your marketing budget. Our Lead Reconciliation & Portal Auditing service makes sure you’re only paying for what’s real, accurate, and worth your money."
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
                    title="Unlock Hidden Profitability in Your Amazon Channel"
                    description="Leverage our expertise to audit your vendor operations, reduce fees, and drive sustainable margin growth."
                    buttonText="SCHEDULE A CONSULTATION"
                    imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

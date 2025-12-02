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
      title: "KPI",
      subtitle: "Tracking",
      description: "We focus on what really matters: your key performance indicators. From operational efficiency to financial health, we help you track the metrics that drive growth. You’ll always know what’s working, what needs attention, and where to focus your efforts."
    },
    {
      title: "Dashboard",
      subtitle: "Creation",
      description: "No more digging through spreadsheets or waiting for reports. We design interactive, easy-to-read dashboards using Tableau, Power BI, and Snowflake. With intuitive visuals, filters, and drill-down features, you can see the full picture or zoom into details, whenever you need."
    },
    {
      title: "Data Extraction &",
      subtitle: "Integration",
      description: "We pull data from all your sources, clean it, and consolidate it so your dashboards reflect the most accurate, up-to-date information. Multiple systems? No problem. We make sure everything works together seamlessly, giving you a single source of truth."
    },
    {
      title: "Weekly &",
      subtitle: "Quarterly Reporting",
      description: "Stay ahead with reports that actually help. Weekly updates keep teams aligned, while detailed quarterly reports give leadership the insights they need for strategic planning. We highlight trends, spot risks, and turn raw numbers into actionable recommendations."
    },
    {
      title: "Actionable Insights",
      subtitle: "That Drive Growth",
      description: "We don’t just show numbers, we tell you what they mean. By analyzing patterns, comparing historical performance, and spotting bottlenecks, our dashboards help you take action before issues become problems. From improving efficiency to increasing revenue, the insights are yours to act on immediately."
    },
    {
      title: "Automation &",
      subtitle: "Efficiency",
      description: "Manual reporting is time-consuming and error-prone. Our automated dashboards and reporting systems save hours of work every week, reduce mistakes, and give your team more time to focus on strategy and execution."
    },
    {
      title: "Why Choose Our Reporting &",
      subtitle: "Dashboard Services",
      description: `
      • Get real-time, easy-to-read insights at a glance 
      • Track KPIs that truly impact your business 
      • Reduce manual work and avoid errors 
      • Consolidate multiple data sources into one actionable view 
      • Make confident, informed decisions faster`
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
            Reporting & Dashboard Creation
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Turn Your Data into Clear Insights and Smarter Decisions!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Data is everywhere, but numbers alone don’t tell a story. Our Reporting & Dashboard Creation services make your data easy to understand, actionable, and visually engaging. Whether it’s tracking performance, monitoring KPIs, or spotting trends, we give you the tools to make smarter business decisions, fast."
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
                    title="Stop guessing and start knowing!"
                    description="Let us build dashboards and reports that not only show your numbers but also help you understand what to do next. Your business deserves insights that actually drive results."
                    buttonText="GET YOUR RESULTS NOW!"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

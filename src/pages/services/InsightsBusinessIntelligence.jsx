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
      title: "Pattern",
      subtitle: "Detection",
      description: "We dig deep into your data to uncover trends and recurring patterns that might not be obvious at first glance. Whether it’s seasonal sales fluctuations, customer buying habits, or operational bottlenecks, identifying these patterns early helps you anticipate outcomes and make proactive decisions. By acting on these insights, you can optimize workflows, improve inventory planning, and spot potential issues before they become costly problems."
    },
    {
      title: "Forecasting",
      
      description: "Using advanced analytics, we forecast your future performance across sales, revenue, customer behavior, and operational needs. Accurate forecasting gives you a roadmap to plan effectively, allocate resources efficiently, and prepare for market changes. Imagine knowing ahead of time when demand will spike, where revenue streams might slow, or which products need more attention, our forecasting helps you stay one step ahead of the competition."
    },
    {
      title: "Gap",
      subtitle: "Analysis",
      description: "We identify areas where your business could improve, whether it’s processes, customer engagement, or revenue streams. By pinpointing these gaps early, you can implement targeted strategies to enhance efficiency, reduce operational risks, and seize untapped opportunities. Gap analysis also allows you to benchmark performance, optimize resource allocation, and ensure your business stays aligned with strategic goals."
    },
    {
      title: "Executive",
      subtitle: "Insights",
      description: "We craft insights specifically for leadership teams, focusing on the metrics that truly drive business performance. Our visualizations are clear, concise, and actionable, allowing executives to make decisions without drowning in data. From board reports to strategic dashboards, we translate complex numbers into meaningful recommendations that highlight risks, opportunities, and next steps for business growth."
    },
    {
      title: "Growth Opportunities",
      subtitle: "from Data",
      description: "Data alone isn’t enough, you need insights that point the way forward. Our analysis identifies areas for growth, whether it’s entering new markets, improving product offerings, or streamlining operations. We help you leverage your data to uncover new revenue streams, enhance customer experiences, and make decisions that produce measurable results. With our guidance, your business can turn insights into action and action into growth."
    },
    {
      title: "Why Choose",
      subtitle: "Our BI Services",
      description: `
      • Detect patterns and trends before they impact your business 
      • Forecast accurately to make confident strategic decisions 
      • Identify gaps and inefficiencies for continuous improvement 
      • Provide executives with actionable, easy-to-understand insights 
      • Unlock growth opportunities hidden in your data.`
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
              Insights & Business Intelligence
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Turn Your Data into Strategic Decisions and Growth Opportunities!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="In today’s competitive world, raw data isn’t enough. You need actionable insights to spot trends, identify gaps, and make decisions that drive growth. Our Insights & Business Intelligence services transform complex data into clear, meaningful insights that empower your business to move faster and smarter."
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
                    title="Don’t let valuable insights stay buried in spreadsheets!"
                    description="Let our team transform your data into clear, actionable intelligence, so you can make decisions that drive growth, efficiency, and long-term success."
                    buttonText="MAKE YOUR DATA WORK HARDER FOR YOU"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

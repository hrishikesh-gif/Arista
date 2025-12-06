import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";
import CasestudySection from "../../component/CasestudySection";
import {  useNavigate } from 'react-router-dom'; // Add useNavigate
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

const FulfillmentOperations = () => {
   // Initialize navigation hook
  const navigate = useNavigate(); 
  
  // Define route mapping for features with buttons
  const featureRoutes = {
    "Professional Photo Editing & Retouching": "/services/photo-editing-retouching",
    "Custom Designs That Captivate": "/services/custom-designs",
    "Video & Motion Content That Engages": "/services/video-motion-content",
    "Website Design That Converts": "/services/website-design",
  };
  
  // Click handler for routing
  const handleClick = (feature) => {
    const fullTitle = `${feature.title} ${feature.subtitle}`.trim();
    const targetRoute = featureRoutes[fullTitle];

    if (targetRoute) {
      navigate(targetRoute);
    } else {
      console.warn(`No route defined for feature: ${fullTitle}`);
      navigate("/services");
    }
  };
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ];
  const serviceFeatures = [
    {
      title: "Order Flow",
      subtitle: "Monitoring",
      description: "We track every order from initiation to delivery, ensuring no step is overlooked. Real-time monitoring identifies bottlenecks and delays early, letting your team take proactive action. This reduces errors, improves accuracy, and keeps operations running smoothly."
    },
    {
      title: "Cancellation",
      subtitle: "Management",
      description: "We review orders cancelled due to lack of inventory and update the website accordingly. This proactive approach minimizes future cancellations, reduces customer dissatisfaction, and ensures product availability is accurately reflected online."
    },
    {
     
      title: "Power BI/Tableau",
      subtitle: "Dashboards",
      description: "Interactive dashboards transform raw data into clear, actionable insights. With Power BI and Tableau, you can track KPIs, monitor performance trends, and make data-driven decisions that improve fulfillment efficiency and business outcomes."
    },
    {
      
      title: "Anomaly",
      subtitle: "Detection",
      description: "Our system flags irregularities instantly, whether it’s delayed shipments, inventory mismatches, or process errors, allowing you to resolve issues before they escalate. Early detection prevents costly disruptions and keeps operations reliable."
    },
    {
     
      title: "TAT & ETA",
      subtitle: "Tracking",
      description: "We ensure turnaround times (TAT) and estimated arrival times (ETA) stay on track. Accurate tracking strengthens reliability, meets delivery promises, and enhances customer satisfaction, giving your business a competitive advantage."
    },
    {
     
      title: "Replenishment",
      subtitle: "Planning",
      description: "By analyzing demand trends and sales cycles, we optimize inventory replenishment to reduce stockouts and overstock costs. Efficient planning keeps your supply chain balanced, responsive, and prepared for fluctuating demand."
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
            Fulfillment Operations & Reporting
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Stop losing time and money on fulfillment mishaps!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Managing fulfillment isn’t just shipping orders, it’s having full control and visibility over your supply chain. From order to delivery, every movement, delay, or discrepancy matters. Our Fulfillment Operations & Reporting monitors order flow in real-time, tracks TAT and ETA, detects anomalies before they become costly, and uses Power BI and Tableau dashboards to turn data into actionable insights. Smart replenishment planning keeps inventory balanced, warehouses efficient, and operations smooth, reliable, and fully optimized."
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
                    title="Act before inefficiencies cost you more!"
                    description="Optimize your operations, monitor orders in real-time, and make smarter inventory decisions with our Fulfillment Operations & Reporting. Every second counts, and every mistake costs!"
                    buttonText="DON'T LET FULFILLMENT SLOW YOU DOWN."
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
                <CasestudySection/>
      <Footer />
    </>
  );
};

export default FulfillmentOperations;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import Footer from "../../component/Footer";
import BusinessCTA from "../../component/BusinessCTA"
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate
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

const DataReporting = () => {
  // Initialize navigation hook
  const navigate = useNavigate(); 
  
  // Define route mapping for features with buttons
  const featureRoutes = {
    "Professional Photo Editing & Retouching": "/services/reporting-dashboard",
    "Insights & Business Intelligence": "/services/insights-business-intelligence",

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
      
      title: "Why Reporting &",
      subtitle: "Insights Matter",
      description: `
      • Without proper reporting, you’re making blind decisions. 
      • Delayed or wrong reports can cost you money. 
      • Insights at the right time help you stay ahead of competition. 
      
      That’s where our business analysis and reporting services give you the edge.`,
       showButton: false // No button
    },
    {
      
      title: "Reporting &",
      subtitle: "Dashboard Creation",
      description: "We create custom dashboards that show your data in a clear, visual way. These dashboards allow you to track KPIs, monitor trends, and make decisions quickly. Instead of flipping through spreadsheets, you can see your business at a glance. Our reporting tools are interactive, easy to use, and updated in real-time, giving you instant access to the numbers that matter most.",
       showButton: true // No button
    },
    {
      
      title: "Insights &",
      subtitle: "Business Intelligence",
      description: "Raw data is meaningless without interpretation. Our business intelligence services turn your data into actionable insights. We analyze trends, spot opportunities, and identify risks. This helps you plan smarter, optimize operations, and predict outcomes. With our insights, you don’t just see numbers, you understand what they mean for your business growth.",
       showButton: true // No button
    },
    {
      
      title: "Our Approach:",
      subtitle: "AI Meets Human Expertise",
      description: `In Analytics, our team leverages AI tools like ChatGPT and Grok to: 

      • Extract insights from raw data instantly 
      • Interpret SQL queries quickly and correctly 
      • Generate accurate Excel formulas without errors 
      
      This AI + expert approach saves time, reduces mistakes, and ensures accuracy. You get reports that are fast, reliable, and ready for decision-making.`,
       showButton: false // No button
    },
    {
      
      title: "What We",
      subtitle: "Deliver",
      description: `
      • Business Dashboards– Clear visuals for faster decision 
      • Custom Reports– Tailored to your goals and KPI 
      • Data Cleaning- No more confusion from messy data 
      • Forecasting- Use data trends to plan your next move 
      • Actionable Insights– Not just numbers, but strategies 
      
      With our data analytics reporting services, you get more than reports—you get a roadmap.`,
       showButton: false // No button
    },
    {
      
      title: "Why Choose",
      subtitle: "Arista?",
      description: `
      • We mix technology + human intelligence. 
      • Proven experience with different industries. 
      • Transparent reporting style—no jargon, only clarity. 
      • AI-powered workflows that save time and boost accuracy. `,
       showButton: false // No button
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
         Data, Reporting & Insights
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
           Turn Your Raw Data Into Business Power
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Are you drowning in spreadsheets but still unsure what’s really happening in your business? Every business collects data, but only a few use it the right way. With our data analysis services, we help you see the real story behind numbers. From sales to customer behavior, we turn scattered data into clear insights that guide growth."
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
            MAKE DECISIONS LIKE A BOSS
          </motion.button>
            </Link>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
      <ServiceCard 
  features={serviceFeatures} 
  accentColor="purple"
  showButton={true}
  buttonText="Read More"
  onButtonClick={handleClick}
/>

        <BusinessCTA 
                    title="Why let competitors stay ahead?"
                    description="Every report you delay costs you opportunities.Your business already collects valuable data every single day. But without the right analysis and reporting, those numbers remain just numbers."
                    buttonText="TURN NUMBERS INTO POWER"
                    imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default DataReporting;

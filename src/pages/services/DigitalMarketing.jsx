import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";

import { Link, useNavigate } from 'react-router-dom';
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
   // Initialize navigation hook
  const navigate = useNavigate(); 
  
  // Define route mapping for features with buttons
  const featureRoutes = {
    "Search Engine Optimization (SEO)": "/services/seo",
    "Pay-Per-Click Advertising (PPC)": "/services/ppc-paid-media",
    "Social Media Marketing (SMM)": "/services/social-media",
    "Email Marketing": "/services/email-marketing",
    "Conversion Rate Optimization (CRO)": "/services/cro",
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
      
      title: "Search Engine",
      subtitle: "Optimization (SEO)",
      description: "Getting found on Google is no longer optional, it’s essential. Our SEO services focus on improving your website’s ranking with advanced tools, keyword research, and proven strategies. The goal is simple: drive more traffic, attract the right audience, and build long-term visibility for your business.",
       showButton: true // HAS BUTTON
    },
    {
      
      title: "Social Media",
      subtitle: "Marketing (SMM)",
      description: "Your customers live on social media, and your brand should too. We manage and grow your presence on platforms like Instagram, Facebook, LinkedIn, and more. Every post, campaign, and strategy is backed by data, ensuring your content not only looks good but also connects with the people who matter most.",
       showButton: true // HAS BUTTON
    },
    {
      
      title: "Pay-Per-Click",
      subtitle: "Advertising (PPC)",
      description: "Sometimes, you need results now, and that’s exactly what PPC delivers. Our campaigns are designed for immediate impact, putting your business in front of ready-to-buy customers across platforms like Google, Bing, Amazon, Walmart, and eBay. Whether it’s search ads that capture intent, marketplace ads that drive product sales, or display campaigns that boost visibility, we make sure your brand shows up where it matters most. With smarter targeting, continuous optimization, and data-driven adjustments, every dollar is spent wisely, no wasted budget, just measurable ROI.",
       showButton: true // HAS BUTTON
    },
    {
      
      title: "Email",
      subtitle: "Marketing",
      description: "Email is still one of the most powerful tools for customer engagement. We create personalized campaigns that nurture relationships, build trust, and turn leads into loyal, returning customers. From automation to tailored messaging, your audience stays engaged at every step.",
       showButton: true // HAS BUTTON
    },
    {
      
      title: "Conversion",
      subtitle: "Rate Optimization (CRO)",
      description: "Turning visitors into customers is just as important as getting them to your site. Our CRO services test landing page variants, optimize CTAs, and review funnel performance to maximize conversions. Through experiment-based scaling, multichannel attribution, and low-cost viral experiments, we ensure every visitor has the best chance to convert—boosting ROI without increasing traffic spend.",
       showButton: true // HAS BUTTON
    },
    {
      
      title: "Affiliate",
      subtitle: "Marketing",
      description: "Why grow alone when you can build a network that works for you? Our affiliate marketing solutions connect your brand with trusted partners, expanding your reach and boosting revenue. With clear tracking and management, you’ll know exactly where your growth is coming from.",
       showButton: false // No button
    },
    {
      
      title: "Amazon",
      subtitle: "Marketplace Services",
      description: "Selling on Amazon can be overwhelming, but we make it easy. From optimized product listings and storefront management to running ad campaigns that drive sales, we take care of everything. The result? A store that performs better, looks sharper, and sells more.",
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
            Digital Marketing
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
           Digital Marketing Powered by AI Innovation
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="At Arista Systems, we go beyond ordinary marketing. As a leading digital marketing company in India, we combine human creativity with the power of AI to deliver strategies that not only look good on paper but also drive measurable results. Whether you’re looking to build your offshore team in India, or need complete IT services in India, our approach ensures your business grows smarter and faster."
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
            SEE HOW FAST WE CAN GROW YOU!
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
        onButtonClick={(feature, index) => handleClick(feature)}
      />
      <BusinessCTA 
                    title="Don’t let your competitors stay ahead!"
                    description="It’s time to work with Arista Systems, the trusted digital marketing company in India that brings measurable growth with modern tools and strategies."
                    buttonText="LET'S BUILD YOUR GROWTH ENGINE TODAY"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

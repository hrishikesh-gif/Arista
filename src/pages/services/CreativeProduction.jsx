import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import Footer from "../../component/Footer";
import BusinessCTA from "../../component/BusinessCTA"
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
   // Initialize navigation hook
  const navigate = useNavigate(); 
  
  // Define route mapping for features with buttons
  const featureRoutes = {
    "Professional Photo Editing & Retouching": "/services/photo-editing",
    "Custom Designs That Captivate": "/services/design-services",
    "Video & Motion Content That Engages": "/services/video-motion",
   "Website Design That Converts That Converts": "/services/website-design",
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

      title: "What We",
      subtitle: "Do:",
      description: "We provide a wide range of creative services to help your brand stand out. From photo editing and retouching to video content and website design, we cover it all. Our team focuses on quality and detail. We work to bring your ideas to life in a clear and professional way.",
      showButton: false// HAS BUTTON
    },
    {

      title: "Professional Photo",
      subtitle: "Editing & Retouching",
      description: "Flawless photos drive credibility and engagement. With Arista’s Photo Retouching, your images achieve consistent quality, enhanced details, and natural tones, ensuring your brand leaves a lasting impression. From portrait retouching to e-commerce product enhancement, we provide scalable, high-quality editing solutions for retailers, photographers, and agencies worldwide. Every image is meticulously refined to deliver maximum visual impact.",
      showButton: true // HAS BUTTON
    },
    {

      title: "Custom Designs",
      subtitle: "That Captivate",
      description: "Our Creative Design Services bring your brand to life with visually compelling solutions. From logo design and website banners to emailers, digital flyers, brochures, and complete branding guidelines, we craft cohesive, eye-catching designs that elevate your brand identity and engage your audience across all touchpoints.",
      showButton: true // HAS BUTTON
    },
    {

      title: "Video & Motion",
      subtitle: "Content That Engages",
      description: "Static images aren’t enough. We produce motion graphics and video content that tell your story in seconds. Quick turnarounds, creative transitions, and AI-assisted editing ensure your content stands out online.",
      showButton: true // HAS BUTTON
    },
    {

      title: "Website Design That Converts",
      subtitle: "That Converts",
      description: "Your website is your digital shopfront. With our outsourced creative design services, we create user-friendly, visually appealing sites that attract visitors and turn them into customers. AI helps us test layouts, generate design variations, and streamline workflow.",
      showButton: true // HAS BUTTON
    },
    {

      title: "Why Outsource Creative",
      subtitle: "Design Services?",
      description: "Save time. Reduce costs. Gain access to experts. Outsourcing to Arista Systems means faster delivery, higher-quality designs, and fresh perspectives. We stay on top of trends so you don’t have to.",
      showButton: false// HAS BUTTON
    },
    {
      // The original description has been updated to use \n characters 
      // for formatting and includes 'options' instead of 'option'
      title: "Our AI",
      subtitle: "Advantage",
      description: `AI isn’t just a tool, it’s part of our workflow. We use it to:
      
   • Create product-specific backgrounds quickly
  • Brainstorm new ideas for campaign
 • Edit, resize, and generate multiple design options
      • Stay consistent while improving quality
      
      This gives you smarter, more original visuals with faster turnaround times`,
      showButton: false // HAS BUTTON
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
            Creative Production
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Creative Production That Speaks for Your Brand
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Looking to make your brand stand out? Our creative design services in India bring ideas to life, fast. From bold visuals to engaging designs, we make your brand impossible to ignore."
              className="text-white/90 font-light leading-relaxed text-left text-base md:text-lg lg:text-lg 2xl:text-xl
"
              speed={25}
            />
          </div>

          <Link to="/contact"> {/* Change 'to' value to the defined route: /contact */}
            <motion.button
              variants={textVariant(0.7)}
              className="mt-6 sm:mt-8 md:mt-10 py-[11px] px-[18px] md:py-3 md:px-[21px] bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base lg:text-base 2xl:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I WANT A CREATIVE EDGE
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
        title="Take Your Brand From Ordinary to Unforgettable!"
        description="Stop waiting and start standing out. Our creative design services in India give you faster, smarter, and more original visuals, ready to impress your audience now."
        buttonText="LET'S CREATE MAGIC NOW"
        imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"

      />
      <Footer />
    </>
  );
};

export default CustomerService;
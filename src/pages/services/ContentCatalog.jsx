import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";

import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate


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
    "Product Content & Catalog Accuracy": "/services/product-content-catalog",
    "Website Content Migration & Management": "/services/content-migration",
    "404 Cleanup & Categorization Structure": "/services/404-cleanup",
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
      
      title: "Product Content &",
      subtitle: "Catalog Accuracy",
      description: "Accuracy is everything. A customer finding the wrong size, missing specifications, or outdated pricing is a customer you may never get back. Our Product Content & Catalog Accuracy service ensures every detail is correct. We validate data using AI tools and human checks, so your catalog builds trust instead of doubt. This makes your products easy to find and purchase, and protects your brand reputation.",
      showButton: true // HAS BUTTON
    },
    {
      
      title: "Website Content Migration &",
      subtitle: "Management",
      description: "Moving content between platforms can be stressful. Most businesses worry about data loss or downtime. With our Website Content Migration & Management, we handle everything behind the scenes. Whether it’s thousands of products or a few updates, your website stays live, clean, and consistent. The process is smooth, secure, and stress-free, giving you a worry-free migration experience.",
      showButton: true // HAS BUTTON
    },
    {
      
      title: "404 Cleanup &",
      subtitle: "Categorization Structure",
      description: "Broken links and messy categories hurt customer experience and sales. Our 404 Cleanup & Categorization Structure fixes these issues and prevents them from happening again. We use AI-driven categorization to place every product where it belongs, making it easy for customers to find what they want. A clear structure keeps shoppers happy and improves conversions.",
      showButton: true // HAS BUTTON
    },
    {
      
      title: "Why Arista",
      subtitle: "is Different",
      description: `Plenty of companies offer catalog management. But very few combine: 
      
      • AI efficiency for scraping, formatting, background cleanups, and categorization, 
      • Human expertise to refine details and ensure accuracy, 
      • Business understanding that goes beyond just “fixing” content, we align it with sales and  growth. 
      
      That’s the difference. We don’t just manage data. We help you unlock the full potential of your catalog.`,
      showButton: false // HAS BUTTON
    },
    {
      
      title: "The Cost",
      subtitle: "of Waiting",
      description: "Every day your catalog stays unorganized, you lose sales. Customers leave. Search engines rank you lower. Competitors get ahead. The fix isn’t complicated, it just needs the right team. We’re here to make sure your content never holds your business back again.",
      showButton: false // HAS BUTTON
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
           Content & Catalog Management
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
          Organized Content. Seamless Catalogs. More Conversions.
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Every business struggles with messy content at some point, broken links, missing product details, duplicate data, or confusing categories. Customers notice these mistakes instantly, and it hurts sales. At Arista, we understand these challenges better than anyone because fixing them is what we do every single day.

Our Content & Catalog Management services don’t just clean up your data. We make sure your products look professional, accurate, and ready to sell. With the power of AI-backed tools and human expertise, we give your business a catalog that actually works for you."
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
            I WANT SMARTER CONTENT
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
                    title="Turn Messy Content Into Measurable Growth!"
                    description="Your catalog is your brand’s first impression. Messy or outdated content loses sales and trust. Arista turns chaos into clarity with AI and expert oversight to attract customers, boost conversions, and grow your business."
                    buttonText="PROTECT MY BRAND REPUTATION"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

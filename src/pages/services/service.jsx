import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";
import { Link,useNavigate } from "react-router-dom";
import CasestudySection from "../../component/CasestudySection";

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
  "Web App Development": "/services/website-development",
  "Digital": "/services/digital-marketing",
  "Content ": "/services/content-catalog",  // Keep the space if it's in your title
  "Reporting &": "/services/data-reporting",
  "IT & Customer ": "/services/customer-experience",
  "Architectural & ": "/services/architectural-3d",
  "Amazon & ": "/services/amazon-marketplace",
  "Creative Production": "/services/creative-production",
  "Operations & ": "/services/operations-fulfillment",
  "Finance & ": "/services/finance-reconciliation",
  "Quality ": "/services/quality-assurance",
};
  
  // Click handler for routing
 const handleClick = (feature) => {
  const targetRoute = featureRoutes[feature.title];

  if (targetRoute) {
    navigate(targetRoute);
  } else {
    console.warn(`No route defined for feature: ${feature.title}`);
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
      title: "Web App Development",
      subtitle: "Development",
      description: "Beautiful, functional, and built to convert. Whether it’s Shopify, WordPress, Magento, or a custom platform, we design and develop websites and apps that look great and perform even better. Every project is built with the user in mind, ensuring fast load times, seamless navigation, and features that turn visitors into customers.",
      showButton: true// HAS BUTTON
    },
    {
      title: "Digital",
      subtitle: "Marketing",
      description: "SEO, social media, PPC, email marketing, we turn clicks into customers, likes into leads, and campaigns into measurable revenue. From strategy to execution, our digital marketing solutions are tailored to your business goals. We don’t just run campaigns; we track performance, optimize continuously, and make sure your marketing dollars actually drive results.",
      showButton: true // HAS BUTTON
    },
    {
      title: "Content ",
      subtitle: "Management",
      description: "Keep your website fresh, fast, and flawless with CMS solutions that are simple to manage but powerful in results. We make updating your site effortless, while ensuring your content stays optimized for search engines, looks great across devices, and supports your business objectives every step of the way.",
      showButton: true // HAS BUTTON
    },
    {
      title: "Reporting &",
      subtitle: "Analytics",
      description: "We don’t guess, we measure. Using tools like Google Analytics, Tableau, and Advanced Excel, we turn complex data into clear, actionable insights. Track your website performance, monitor campaign results, and make data-driven decisions that improve efficiency, ROI, and overall business growth.",
      showButton: true // HAS BUTTON
    },
    {
      title: "IT & Customer ",
      subtitle: "Support",
      description: "Remote support, chat, email, and call handling, we keep your systems running smoothly and your customers happy. Our team provides fast, reliable IT and customer support solutions, ensuring your employees stay productive and your clients receive the help they need without delays or frustration.",
      showButton: true // HAS BUTTON
    },
    {
      title: "Architectural & ",
      subtitle: "Interior Design",
      description: "Yes, we go beyond digital. From detailed construction drawings to high-quality 3D renders, we create spaces that inspire and function perfectly. Our design solutions combine creativity, precision, and practicality, helping clients visualize their dream spaces and bringing those ideas to life efficiently and beautifully.",
      showButton: true // HAS BUTTON
    },
    {
      title: "Amazon & ",
      subtitle: " Marketplace Management",
      description: "We handle everything your eCommerce business needs to thrive across platforms like Amazon, Walmart, and eBay. From Seller Central support and ASIN merges to listing QC, compliance checks, and order issue resolution, we’ve got it covered. Our team manages white background and lifestyle images, infographics, and optimized visuals that meet strict marketplace standards. We also specialize in building brand storefronts, enhancing Brand Story sections, and running ad campaigns focused on ROAS improvement, ACOS reduction, and data-driven growth. Plus, we take care of reviews, refunds, and buyer communication to maintain your reputation and customer trust.",
      showButton: true // HAS BUTTON
    },
    {
      title: "Creative Production",
      subtitle: "Production",
      description: "Whether it’s product photography, social reels, or short-form video content, our creative production team turns visuals into conversion tools. We handle apparel and footwear shoots, flat lays, dust cleanup, model retouching, and lifestyle imagery that reflects your brand identity. On the video side, we produce reels, product demos, and social clips that engage instantly and make your products stand out.",
      showButton: true // HAS BUTTON
    },
     {
      title: "Operations & ",
      subtitle: "Fulfillment Support",
      description: "Our operations team ensures your backend runs with accuracy and consistency. We monitor order flow, track TAT and ETAs, detect anomalies, and build dashboards using Power BI or Tableau. From replenishment planning to inventory reconciliation across B2B portals, we handle mismatches, shortage reports, and shrinkage audits with precision. We also oversee shipment tracking across multiple carriers, manage claims and returns, and handle customs verification, courier costs, and multi-currency charge reconciliations to ensure complete trade and compliance visibility.",
      showButton: true // HAS BUTTON
    },
     {
      title: "Finance & ",
      subtitle: "Reconciliation",
      description: "Stay financially organized and stress-free. We handle invoice verification, PO matching, vendor portal entries, follow-ups, and AP reporting with accuracy. Our team also manages customer statements, payment reconciliations, and reporting delays, ensuring every financial record stays clean, consistent, and up-to-date.",
      showButton: true // HAS BUTTON
    },
     {
      title: "Quality ",
      subtitle: "Assurance",
      description: "We maintain your brand’s credibility through a structured QA process that covers development, content, and image specifications. Every deliverable is checklist-tested, client-reviewed, and refined through our bug-tracking system. From website audits to visual QA, we make sure nothing goes live until it meets our highest standards.",
      showButton: true // HAS BUTTON
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
           Expertise
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
          We Know What We’re Doing. And You’ll Love Working With Us!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="We’re Arista Systems. Not your average IT and digital agency. We mix creativity, tech, and strategy into solutions that actually work. From building sleek websites to optimizing your digital footprint, we make sure your business doesn’t just survive, it thrives. And the best part? We make it easy, approachable, and maybe even a little fun."
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
            LET'S BUILD SOMETHING AMAZING!
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
        // onButtonClick={(feature, index) => handleClick(feature)}
      />
      <BusinessCTA 
                    title="Ready to Experience Exceptional Support?"
                    description="Our team is eager to assist you. Reach out through your preferred channel, and let us show you the Arista difference."
                    buttonText="Let's Talk"
                    imageUrl="\images\CTA img\Outer\webdevelopment_outer_image.webp"
                    altText="Let's Talk"
                />
                <CasestudySection />
      <Footer />
    </>
  );
};

export default CustomerService;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";
import { Link } from 'react-router-dom';
import CasestudySection from "../../component/CasestudySection";
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
      title: "Design & Layout ",
      subtitle: "That Never Misses",
      description: `
      • Fully responsive on mobile, tablet, and desktop. 
      • Consistent fonts, colors, and spacing. 
      • Optimized images and banners. 
      • Sticky headers back-to-top buttons for smooth navigation. 
      • Multi-language and multi-currency support for global reach. 
      
      First impressions stick. A messy layout loses customers, fast.`
    },
    {
      title: "Homepage & Navigation",
      subtitle: "That Converts",
      description: `
      • Clear logo and search bar with auto-suggestions. 
      • Featured banners and products with clickable CTAs. 
      • Smooth animations and dark mode support. 
      
      Smart auto-suggestions and predictive layouts reduce bounce rates.`
    },
    {
      title: "Product Pages",
      subtitle: "That Sell",
      description: `
      • PLP (Product Listing Page): Filters, sorting, stock alerts, quick-add to cart. 
      • PDP (Product Detail Page): High-res images, 360° view, reviews, social share, cross-sell recommendations. 
      
      Trigger: Don’t let your products sit unnoticed, every detail matters.`
    },
    {
      title: "Search, Cart & Checkout,",
      subtitle: "Flawless Every Time",
      description: `
      • Search bar with auto-suggestions highlighted results. 
      • Guest checkout and multiple payment methods. 
      • Clear cart, coupon codes, and order summary. 
      • Instant email SMS confirmations. 
      
      A confusing checkout loses sales. Our QA makes it seamless.`
    },
    {
      title: "User Account",
      subtitle: "& Customer Engagement",
      description: `
      • Easy login, profile management, and order tracking. 
      • Personalized recommendations and wishlists. 
      • Push notifications, referral programs, and loyalty rewards. 
      
      Recommendations powered by user behavior insights.`
    },
    {
      title: "Performance & Accessibility,",
      subtitle: "Speed Meets Inclusion",
      description: `
      • Fast loading (<3 seconds). 
      • Image/video optimization & CDN support. 
      • Proper color contrast, alt text, ARIA labels. 
      • Minimized scripts, proper caching, mobile-first design. 
      
      Slow or inaccessible sites lose users immediately.`
    },
    {
      title: "SEO & Visibility,",
      subtitle: "Make Sure They Find You",
      description: `
      • Unique meta titles descriptions. 
      • SEO-friendly URLs and schema markup. 
      • Canonical tags, sitemaps, and social metadata. 
      • 301 redirects for broken links. 
      
      A beautiful site doesn’t sell if it can’t be found.`
    },
    {
      title: "Testing & Post -",
      subtitle: "Launch Care",
      description: `
      • Cross-browser and cross-device testing. 
      • Error handling and functional checks. 
      • Regular updates, backups, and performance monitoring. 
      
      Automated testing flags issues before humans notice them.`
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
            Quality Assurance
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Your website deserves more than “just working.”
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Our Quality Assurance (QA) process ensures your website performs flawlessly across every page, device, and interaction. With AI-powered testing, we identify and resolve issues proactively, delivering a seamless experience your users can trust."
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
            GET YOUR SITE CHECKED TODAY
          </motion.button>
            </Link>
        </motion.div>
      </div>

      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
      <ServiceCard
        features={serviceFeatures}
        accentColor="purple"
        // showButton={true}
        buttonText="Read More"
        onButtonClick={(feature, index) => handleClick(feature)}
      />
      <BusinessCTA 
                    title="Don’t Let Your Site Hold You Back!"
                    description="Every glitch is a lost customer. Every delay is lost revenue. Our QA ensures your website performs perfectly, looks flawless, and converts visitors into buyers."
                    buttonText="SECURE YOUR QA AUDIT NOW"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
                <CasestudySection/>
      <Footer />
    </>
  );
};

export default CustomerService;

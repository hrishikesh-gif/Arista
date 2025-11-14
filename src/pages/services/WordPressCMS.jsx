import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA"
import Footer from "../../component/Footer";
import { MessageSquare, Clock, Brain,Heart,BrainCircuit, HeartHandshake,Clock3} from 'lucide-react';
import {
  SiOpenai,
  SiAmazon,
  SiGoogle,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeillustrator,
} from "react-icons/si";



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

const DesignServices = () => {
  const techStack = [
  { name: "Figma", Icon: SiFigma},
  { name: "Adobe Photoshop", Icon: SiAdobephotoshop },
   { name: "Adobe InDesign", Icon: SiAdobeindesign },
    { name: "Adobe Illustrator", Icon: SiAdobeillustrator },
 
  { name: "Google AI Studio", Icon: SiGoogle },
 
];
  const serviceFeatures = [
    {
      icon: MessageSquare,
      title: "Website Development",
      subtitle: "That Works",
      description: "We design and develop websites tailored to your business goals. Whether it’s a lead generation site, an eCommerce store, or a content-rich blog, we ensure every website is visually appealing, easy to navigate, and optimized for conversions."
    },
    {
      icon: Clock,
      title: "Blogs &",
      subtitle: "Content Pages",
      description: "Content drives engagement and traffic. We build and structure pages that showcase your content effectively, making it easy for visitors to read, explore, and interact with your brand."
    },
    {
      icon: Heart,
      title: "Plugin Integration &",
      subtitle: "Functionality",
      description: "Extend your site’s capabilities with the right plugins. From SEO tools to payment gateways, we integrate plugins that enhance functionality without compromising performance or security."
    },
    {
      icon: Heart,
      title: "Performance &",
      subtitle: "Security Tuning",
      description: "Extend your site’s capabilities with the right plugins. From SEO tools to payment gateways, we integrate plugins that enhance functionality without compromising performance or security."
    },
    {
      icon: Heart,
      title: "Scalable",
      subtitle: "Architecture",
      description: "Extend your site’s capabilities with the right plugins. From SEO tools to payment gateways, we integrate plugins that enhance functionality without compromising performance or security."
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
           WordPress / CMS Development
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug
                       mt-4 sm:mt-6
                       text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
          >
          Build Fast, Secure, and Scalable Websites That Convert
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="  Your website is more than just a digital presence—it’s a tool to attract leads, engage customers, and drive sales. Our WordPress and CMS development services help businesses create websites that look great, perform flawlessly, and grow with your goals. From blogs and content pages to full-scale eCommerce sites, we make websites that work for you."
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

export default DesignServices;

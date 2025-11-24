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

const WebsiteDesign = () => {
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
      title: "Our",
      subtitle: "Approach",
      description: "We believe in a collaborative design process that begins with understanding your business goals, target audience, and brand identity. Our team of expert designers and developers work closely with you to create a website that reflects your vision and meets your objectives."
    },
    {
      icon: Clock,
      title: "Custom",
      subtitle: "Website Design",
      description: "We specialize in creating custom website designs that are tailored to reflect your brand identity and resonate with your target audience. Every website is crafted with a focus on aesthetics, usability, and functionality. From intuitive navigation to visually engaging layouts, we ensure your site not only looks great but also provides a seamless experience that encourages users to stay, explore, and take action."
    },
    {
      icon: Heart,
      title: "eCommerce ",
      subtitle: "Website Design",
      description: "We build high-conversion online stores on Shopify, WooCommerce, and other platforms. Our eCommerce designs focus on seamless navigation, engaging visuals, and optimized performance to boost sales and enhance user experience."
    },
    {
      icon: Heart,
      title: "Corporate &",
      subtitle: "Portfolio Websites",
      description: "We design professional corporate and portfolio websites that build credibility and highlight your brand’s strengths. Each site is clean, responsive, and tailored to showcase your work with impact."
    },
    {
      icon: Heart,
      title: "Logo &",
      subtitle: "Banner Design",
      description: "A strong visual identity starts with a memorable logo and impactful banners. Our team creates unique logos and banners that capture the essence of your brand and leave a lasting impression. Each design is thoughtfully crafted to convey your brand’s personality, ensuring consistency across all your digital and marketing platforms."
    },
    {
      icon: Heart,
      title: "Infographics &",
      subtitle: "Emailers",
      description: "Communicating complex information in a clear and engaging way is crucial for brand engagement. We design informative infographics and email templates that are visually appealing and easy to understand. Whether it’s for marketing campaigns, product launches, or corporate communications, our designs help convey your message effectively while keeping your audience engaged."
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
           Website Design Services
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug
                       mt-4 sm:mt-6
                       text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
          >
          Get Digital Experiences That Convert
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="  Arista Systems can be your trusted partner for website design services in India, delivering solutions that combine creativity, technology, and strategy. From startups to established global brands, we frame responsive, high-performing websites customized to your audience. Our offshore website design team ensures timely delivery, cost efficiency, and scalable designs that boost engagement, drive conversions, and elevate your digital presence. Whether you need a corporate site, an eCommerce store, or custom landing pages, we convert your ideas into digital experiences that make a real business impact."
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
                    title="A stunning website isn’t just about looks!"
                    description="It’s about turning visitors into customers. Let us craft a website that reflects your brand, engages users, and drives real results."
                    buttonText="Your Website Deserve To Stand Out"
                    imageUrl="\images\CreativeProduction.avif"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default WebsiteDesign;

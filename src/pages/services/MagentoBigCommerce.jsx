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
      
      title: "Store Migration ",
      subtitle: "Made Easy",
      description: "Moving to a new platform can feel risky, but we make it smooth and secure. We transfer all your products, customer information, order history, and settings carefully. Our team ensures there’s no downtime, no data loss, and minimal disruption to your business. By the time we’re done, your store is fully functional and ready for sales."
    },
    {
      
      title: "Customization That",
      subtitle: "Fits Your Brand",
      description: "Every store is unique, and your platform should reflect your brand’s personality. We customize themes, create new features, and build custom modules tailored to your needs. Whether it’s a special checkout process, a product filter, or a loyalty program, we ensure your store works exactly how you want it—simple for customers, powerful for your business."
    },
    {
      
      title: "Multi-Store Setup",
      subtitle: "& Management",
      description: "Expanding to new markets or regions? We help you set up multiple stores under one platform. Manage pricing, inventory, and shipping easily from a single dashboard. Each store can have its own design, language, or currency, giving your customers a localized shopping experience while keeping your operations smooth and centralized."
    },
     {
      
      title: "ERP &",
      subtitle: "Third-Party Integration",
      description: "Your store works best when all your systems talk to each other. We integrate ERP systems, payment gateways, CRM tools, shipping solutions, and more. This ensures real-time data flow, accurate reporting, and automated processes, saving you time and reducing errors across your business."
    },
     {
      
      title: "Backend Logic &",
      subtitle: "Performance Optimization",
      description: "A store isn’t just about looks—it needs to run flawlessly. We handle backend logic, optimize database queries, speed up loading times, and ensure your checkout is seamless. The result: happier customers, more conversions, and a store that can handle high traffic without slowing down."
    },
     {
      
      title: "Security & ",
      subtitle: "Updates",
      description: "Online stores are prime targets for cyber threats. We implement security best practices, regular updates, and backups to protect your data, customers, and business reputation. You get peace of mind knowing your store is safe, compliant, and always up to date."
    },
     {
      
      title: "Scalable Solutions ",
      subtitle: "for Growth",
      description: "Your business will grow, and your store should be ready. We build scalable architecture so your store can handle more products, traffic, and orders without glitches. Whether you plan to sell locally or globally, your platform can expand with you."
    },
     {
      
      title: "Expert Support",
      subtitle: "& Maintenance",
      description: "We don’t just build and leave. Our team provides ongoing support and maintenance to fix issues, implement new features, and ensure your store keeps running smoothly. You get a partner who’s with you at every stage of your eCommerce journey."
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
          Magento, BigCommerce & Custom CMS
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
          We Build, Customize, and Scale Your Online Stores!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Running an online store shouldn’t be complicated. Whether you’re using Magento, BigCommerce, or a custom CMS, we make it simple, fast, and reliable. From migrations and multi-store setups to backend logic and ERP integration, our team handles everything so you can focus on growing your business. With us, your online store isn’t just functional—it’s built to convert visitors into customers."
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
            MAKE MY STORE WORK SMARTER
          </motion.button>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Everything Your Online Store Needs—Under One Roof"
                    description="From Magento and BigCommerce to custom CMS solutions, we build, customize, and scale your store so it works perfectly for your business. Fast, secure, and designed to convert visitors into customers."
                    buttonText="LAUNCH MY STORE NOW"
                    imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default DesignServices;

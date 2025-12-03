import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import Footer from "../../component/Footer";
import { MessageSquare, Clock, Brain, Heart, BrainCircuit, HeartHandshake, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      
      title: "Supercharge Your Support with Chat,",
      subtitle: "Email & Voice",
      description: `Your customers expect quick, accurate, and friendly responses. Our customer support service outsourcing includes:

• Chat Support: Instant replies for real-time problem-solving.
• Email Support: Clear, detailed responses to every query.
• Call Support: Professional assistance to resolve issues fast.

AI helps agents reply faster with the right tone. Companies that outsource customer service with Arista see happier customers and stronger loyalty.`
    },
    {
      
      title: "Protect Your Business with Chargeback",
      subtitle: "& Dispute Resolution",
      description: "Chargebacks and disputes can cost time, money, and reputation. Our Chargeback & Dispute Resolution service reviews transactions carefully and resolves issues promptly. With AI assistance from ChatGPT, we draft professional, empathetic messages that retain trust. Businesses using our customer support service outsourcing gain peace of mind and protect revenue."
    },
    {
      
      title: "Stay Organized with Lead Reconciliation",
      subtitle: "& Portal Auditing",
      description: "Accurate lead tracking is crucial. Our Lead Reconciliation & Portal Auditing service keeps records clean, audits portals, and streamlines sales pipelines. AI helps summarize complex data, create reports quickly, and communicate updates clearly. Outsourcing this to us allows your sales team to focus on converting leads into loyal customers."
    },
    {
      
      title: "Why Your Business",
      subtitle: "Needs Arista Systems",
      description: `Partnering with a top customer service outsourcing company ensures:

      • Faster, empathetic responses for happier customers, 
      • Reduced costs without sacrificing quality, 
      • AI-assisted efficiency supporting human judgment, 
      • Expertise in chats, emails, calls, disputes, and leads. 
      
      Every moment your customers wait is a moment they might go elsewhere. Companies that outsource customer service with Arista see measurable results, higher satisfaction, stronger retention, and real growth.`
    },
  ];

  const handleClick = (feature) => {
    // Handle button click logic here
    console.log("Feature clicked:", feature);
  };

  return (
    <>
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
            Customer Experience & Support
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Boost Your Business with Smarter Customer Support Services
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Excellent support can make or break your brand. Arista Systems offers customer support outsourcing services that connect with customers at the right time. Working with a trusted customer service outsourcing company ensures your customers feel heard, valued, and supported.

We also use AI tools. It helps our team understand emotions behind queries, draft precise responses, and maintain empathy, making every interaction build trust."
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
              BOOST CUSTOMER LOYALTY TODAY
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
        title="Don't Let Poor Support Cost You Customers"
        description="Upgrade to AI-powered, empathetic customer support today and watch your satisfaction scores soar."
        buttonText="START PROTECTING YOUR BUSINESS NOW"
        imageUrl="\images\CS.avif"
        altText="Let's Talk"
      />
      <Footer />
    </>
  );
};

export default CustomerService;
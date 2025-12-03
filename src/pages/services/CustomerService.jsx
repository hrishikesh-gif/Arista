import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import Footer from "../../component/Footer";
import BusinessCTA from "../../component/BusinessCTA"
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

const CustomerService = () => {
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ]; 
  const serviceFeatures = [
    {
      
      title: "Multichannel",
      subtitle: "Assistance",
      description: "We understand that every customer has their preferred way to reach out, which is why we offer support across email, live chat, and voice calls. Whether it's a quick question about a product, a concern about an order, or a detailed return request, our team ensures that every interaction is seamless and convenient, meeting your customers wherever they are."
    },
    {
      
      title: "Rapid Response",
      subtitle: "Times",
      description: "Time is valuable, both for you and your customers. That's why our team is trained to provide swift, accurate responses to every inquiry. From simple order updates to more complex troubleshooting, we prioritize efficiency without compromising quality, ensuring that your customers receive the answers they need quickly."
    },
    {
      
      title: "Empathetic",
      subtitle: "Service",
      description: "Customer support is more than problem-solving; it's about building trust. Our team approaches every interaction with empathy and understanding, actively listening to customer concerns and responding in a professional, caring manner. This human touch fosters loyalty and creates a positive experience at every touchpoint."
    },
    {
      
      title: "Scalable",
      subtitle: "Solutions",
      description: "Business peaks, holidays, and promotional campaigns often lead to higher volumes of inquiries. Our customer service solutions are fully scalable, designed to handle seasonal surges without any drop in service quality. This ensures your operations run smoothly, no matter how busy it gets."
    },
    {
      
      title: "24/7",
      subtitle: "Availability",
      description: "Customer needs don’t follow a 9-to-5 schedule, and neither do we. Our support team is available around the clock, ready to assist your customers whenever they reach out. Whether it’s an urgent shipping issue in the middle of the night or a return request over the weekend, we’re always on call."
    },
    {
      
      title: "Expert",
      subtitle: "Platform",
      description: "We leverage industry-leading tools like Zendesk and Gorgias to streamline communication, track inquiries, and manage customer relationships efficiently. These platforms allow our team to provide organized, professional, and consistent support, while giving you clear insights into performance and trends."
    },
    {
      
      title: "High Customer ",
      subtitle: "Satisfaction",
      description: "Delivering excellent service is at the heart of what we do, and it shows. Our focus on responsiveness, empathy, and efficiency is reflected in our consistently high CSAT scores, ensuring that your customers feel valued and heard every time they interact with us."
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
            Customer Service
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Fast, Friendly, and Always There When You Need Us!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="We believe in delivering more than just products; we provide peace of mind. Our customer service team is dedicated to resolving your orders, shipping inquiries, and returns across email, chat, and voice channels. Whether it's a quick question or a complex issue, we're here to help with empathy and efficiency."
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
            SUPPORT THAT'S ON CALL-POINT!
          </motion.button>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Ready to Experience Exceptional Support?"
                    description="Our team is eager to assist you. Reach out through your preferred channel, and let us show you the Arista difference."
                    buttonText="LET'S TALK"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

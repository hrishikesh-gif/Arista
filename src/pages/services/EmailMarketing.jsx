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

const CustomerService = () => {
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ]; 
  const serviceFeatures = [
    {
      icon: MessageSquare,
      title: "Targeted Campaigns",
      subtitle: "That Convert",
      description: "We understand that every customer has their preferred way to reach out, which is why we offer support across email, live chat, and voice calls. Whether it's a quick question about a product, a concern about an order, or a detailed return request, our team ensures that every interaction is seamless and convenient, meeting your customers wherever they are."
    },
    {
      icon: Clock,
      title: "Engaging Content",
      subtitle: "& Design",
      description: "Time is valuable, both for you and your customers. That's why our team is trained to provide swift, accurate responses to every inquiry. From simple order updates to more complex troubleshooting, we prioritize efficiency without compromising quality, ensuring that your customers receive the answers they need quickly."
    },
    {
      icon: Heart,
      title: "Automation",
      subtitle: "& Smart Campaigns",
      description: "Customer support is more than problem-solving; it's about building trust. Our team approaches every interaction with empathy and understanding, actively listening to customer concerns and responding in a professional, caring manner. This human touch fosters loyalty and creates a positive experience at every touchpoint."
    },
    {
      icon: BrainCircuit,
      title: "Platforms",
      subtitle: "We Work On",
      description: "Business peaks, holidays, and promotional campaigns often lead to higher volumes of inquiries. Our customer service solutions are fully scalable, designed to handle seasonal surges without any drop in service quality. This ensures your operations run smoothly, no matter how busy it gets."
    },
    {
      icon:  Clock3,
      title: "Performance Tracking",
      subtitle: "& Optimization",
      description: "Customer needs don’t follow a 9-to-5 schedule, and neither do we. Our support team is available around the clock, ready to assist your customers whenever they reach out. Whether it’s an urgent shipping issue in the middle of the night or a return request over the weekend, we’re always on call."
    },
    {
      icon: Brain,
      title: "Cost-Effective",
      subtitle: "Engagement",
      description: "We leverage industry-leading tools like Zendesk and Gorgias to streamline communication, track inquiries, and manage customer relationships efficiently. These platforms allow our team to provide organized, professional, and consistent support, while giving you clear insights into performance and trends."
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
            Email Marketing
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug
                       mt-4 sm:mt-6
                       text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
          >
           Turn Emails into Revenue
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="  Email marketing is more than sending newsletters, it’s about connecting with your Your emails are sitting unread, while your competitors are winning customers.” In the chaos of online marketing, reaching the right audience at the right time is tougher than ever. That’s where we step in. As a trusted email marketing company in India, we craft campaigns that get opened, read, and acted upon. Our email marketing services in India help you engage potential customers, nurture leads, and grow your business, quickly, efficiently, and cost-effectively."
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

export default CustomerService;

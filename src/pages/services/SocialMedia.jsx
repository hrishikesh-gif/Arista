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
      
      title: "Platforms We",
      subtitle: "Excel On",
      description: `We manage social media with ease, staying on top of trends and what works best for your audience. Our experts handle: 
      
      • Facebook: Engage, advertise, and grow a loyal community 
      • Instagram: Visual storytelling that converts followers into leads 
      • Twitter: Share timely updates and spark conversations 
      • LinkedIn: Build authority and generate B2B leads.`
    },
    {
      
      title: "Creative Campaigns",
      subtitle: "& Strategies",
      description: "We don’t just post content, we craft campaigns that deliver. Our SMM experts create tailored strategies that match your goals, attract the right audience, and increase engagement. From eye-catching visuals to persuasive messaging, every campaign is designed to perform."
    },
    {
      
      title: "Branding &",
      subtitle: "Awareness",
      description: "Social media is the perfect place to make your brand memorable. We enhance your online presence through consistent branding, storytelling, and visuals that stick. Our social media marketing services in India help build trust, awareness, and a recognizable voice across platforms."
    },
    {
      
      title: "Lead Web",
      subtitle: "Generation & Sales",
      description: "Turning followers into customers is our specialty. We design campaigns focused on conversions, targeting your ideal audience to generate qualified leads. Every ad, post, and strategy is aligned with your business objectives to maximize ROI."
    },
    {
      
      title: "Analytics &",
      subtitle: "Reporting",
      description: "We track everything that matters. Our team provides detailed analytics and data reports, so you can see what’s working, what needs improvement, and how your social media marketing efforts are impacting your business growth."
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
          Social Media Marketing
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
           Turn Followers into Customers with Social Media Marketing
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="If your audience isn’t talking about you online, are you even visible?” Social media marketing isn’t just posting pretty pictures, it’s about strategy, engagement, and real results. As a leading social media marketing company, we help businesses capture attention, build a loyal following, and turn clicks into customers. Our social media marketing services in India boost your brand presence, increase traffic, and connect you with the right audience, all while keeping your campaigns fresh, creative, and on-trend."
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
            BOOST MY SOCIAL MEDIA
          </motion.button>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Stop posting and start performing!"
                    description="Partner with a top social media marketing company and use our social media marketing services in India to engage your audience, expand reach, and turn followers into customers, fast!"
                    buttonText="LET'S TALK"
                    imageUrl="\images\CTA img\Inner\inner_image.webp"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

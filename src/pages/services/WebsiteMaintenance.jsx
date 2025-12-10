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
      
      title: "Homepage &",
      subtitle: "Banner Updates",
      description: "Your homepage is your first impression, and first impressions matter. A stale homepage or old banners can make visitors leave instantly. We update your homepage and banners regularly to showcase new arrivals, promotions, and seasonal campaigns, so your brand looks alive, professional, and trustworthy at all times."
    },
    {
      
      title: "Collection Refresh",
      subtitle: "& Product Organization",
      description: "Your collections are your products’ spotlight. If they’re outdated or disorganized, potential buyers can’t find what they want and simply leave. We refresh collections, reorganize categories, and highlight trending items, making your site irresistible and easy to shop from."
    },
    {
      
      title: "Promo Code Setup",
      subtitle: "& Campaign Management",
      description: "Every promotion is an opportunity to convert visitors into loyal customers. Failed or mismanaged promo codes cost money, trust, and momentum. We handle promo code setup, testing, and scheduling perfectly, so every discount works, every campaign hits its target, and every visitor feels compelled to buy."
    },
     {
      
      title: "Journal & ",
      subtitle: "Content Updates",
      description: "Content is credibility. Outdated blogs, announcements, or guides make your brand feel inactive. We update your journal, blogs, and content pages consistently, ensuring your audience trusts you, engages with your brand, and keeps coming back for more."
    },
     {
      
      title: "Timely Product",
      subtitle: "Rollouts",
      description: "Launching a product late or with errors can cost you weeks of sales and customer confidence. We manage every product rollout with precision, images, descriptions, pricing, categories, all go live exactly on time. Your audience sees a professional, seamless experience that builds trust and drives revenue."
    },
     {
      
      title: "Performance Monitoring &",
      subtitle: "Optimization",
      description: "Slow pages, broken links, or glitches frustrate visitors instantly. We monitor your website continuously, fix issues immediately, and optimize for speed and responsiveness, so customers stay, explore, and buy without hesitation."
    },
     {
      
      title: "Security &",
      subtitle: "Updates",
      description: "Every unpatched vulnerability is a risk, your customers’ trust, your revenue, and your reputation are at stake. We handle updates, security patches, and backups proactively, keeping your website safe and your brand credible."
    },
     {
      
      title: "Analytics &",
      subtitle: "Insights",
      description: "Without insights, you’re guessing, and guessing costs money. We track traffic, engagement, and conversions, providing actionable reports. You’ll know exactly what’s working, what isn’t, and how to maximize every opportunity to sell and grow."
    },
     {
      
      title: "Full-Service",
      subtitle:  "Support",
      description: "Imagine never worrying about your website again. That’s what we offer. Every update, campaign, and launch is handled by our expert team. You focus on your business, while we ensure your store always looks perfect, works flawlessly, and converts visitors into paying customers."
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
          Website Maintenance & Product Launch Ops
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
          Website Maintenance & Product Launch Services You Can’t Afford to Ignore!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Every second your website is outdated, slow, or missing updates, you’re losing customers, and revenue. A neglected homepage, outdated collections, failed promotions, or delayed product launches can silently drive your audience to competitors. With our Website Maintenance & Product Launch Operations, we ensure your store is always ready, engaging, and performing at its best. Don’t risk losing customers when the solution is in front of you."
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
            LET'S TALK
          </motion.button>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Your website is the face of your business!"
                    description="Outdated pages, promos, or delays cost customers and sales. We handle updates, banners, collections, promos, journals, and launches, keeping your store alive, perfect, and selling."
                    buttonText="DON'T LEAVE YOUR BUSINESS TO CHANCE"
                    imageUrl="\images\CTA img\Inner\inner_image.webp"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default DesignServices;

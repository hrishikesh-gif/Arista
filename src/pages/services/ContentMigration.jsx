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
      
      title: "Full-Site Content",
      subtitle: "Migration",
      description: "Moving your website to a new platform can feel overwhelming, but we make it completely hassle-free. We transfer every page, blog post, image, and piece of content from your existing website to your new platform, whether it’s Shopify, Webflow, WordPress, or another CMS. Nothing is left behind, and we maintain the structure so your site stays organized and professional. This ensures that all your products, articles, and media continue to work perfectly, with no broken layouts or missing sections. A smooth migration means your website is fully functional from day one, giving visitors a seamless experience."
    },
    {
      
      title: "Redirects &",
      subtitle: "Error Cleanup",
      description: "Broken links, missing pages, or 404 errors can frustrate visitors and hurt your search rankings. During migration, we carefully identify all old URLs and set up proper redirects so your traffic never gets lost. We also clean up errors, broken links, and duplicate content, ensuring that your website runs smoothly. By maintaining all redirects correctly, we preserve your SEO value and make sure search engines understand the changes, so your website continues to attract traffic without interruption."
    },
    {
      
      title: "Structured Copy",
      subtitle: "Rewrite",
      description: "Old or messy website content can confuse visitors and reduce engagement. We review all your existing copy and rewrite it in a structured, clear, and readable way. Each page gets properly formatted headings, bullet points, and organized text that guides visitors through your website effortlessly. We also make sure the copy is optimized for search engines, so your website ranks better while keeping it easy to read for humans. Clean, structured content improves user experience, builds trust, and encourages visitors to take action."
    },
    {
      
      title: "SEO &",
      subtitle: "Traffic Preservation",
      description: "One of the biggest risks during a website migration is losing your hard-earned search rankings and organic traffic. We take every step to preserve your SEO, including keeping proper meta titles, descriptions, headings, and URLs. All technical SEO elements are maintained, and any necessary adjustments are made so that search engines recognize your new site without penalty. This ensures that your website continues to appear in search results, attracting the same audience you had before, as well as potential new visitors, without losing momentum."
    },
    
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
            className="text-white font-bold leading-tight text-left text-balance text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl
"
          >
           Content Migration & Management
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
             Move Your Website Content Safely, Smoothly, and Without Losing Traffic 
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Switching platforms or updating your website can be tricky. One wrong step, and you could lose valuable content, SEO rankings, or even customers. We handle full-site content migration and management so you don’t have to worry. From moving all your pages and media to cleaning up errors, fixing redirects, and rewriting structured copy, we make sure your website works perfectly on its new platform."
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
                    title="Don’t risk losing your content, traffic, or customers!"
                    description="Let our experts move your website safely, fix errors, and rewrite your content for clarity and SEO. Keep your site fully functional and ready to grow from day one."
                    buttonText="SEAMLESS WEBISTE MIGRATION STARTS HERE"
                    imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

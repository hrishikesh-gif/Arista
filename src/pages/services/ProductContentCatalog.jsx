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
      title: "Product",
      subtitle: "Copywriting",
      description: "Your product descriptions are the first thing customers read, and they can make or break a sale. We write product copy that is simple, clear, and persuasive. Every description explains the product’s features, benefits, and why it’s perfect for the customer. We make sure your descriptions are easy to read, highlight important points, and answer the questions a buyer might have before making a purchase. Good copy doesn’t just describe, it convinces and converts"
    },
    {
      title: "Meta Tags &",
      subtitle: "SEO Content",
      description: "Being visible online is just as important as having great products. Every product in your catalog gets a unique meta title, description, and relevant keywords. This helps search engines like Google understand your products and show them to the right people. Optimized meta tags and SEO content increase your chances of ranking higher in search results, bringing more visitors to your website. The more people see your products, the higher the chance they will buy."
    },
    {
      title: "Taxonomy &",
      subtitle: "Filters",
      description: "A well-organized catalog is easier for customers to browse and shop. We structure your products into categories and subcategories that make sense, and set up filters so buyers can quickly narrow down their choices. Whether a customer wants to filter by size, color, price, or features, our setup ensures they can find exactly what they need without confusion. A smooth shopping experience keeps customers happy and encourages them to buy more."
    },
    {
      title: "Size Charts &",
      subtitle: "Variation Mapping",
      description: "Many sales are lost because customers can’t tell which size or variation will fit them best. We create accurate size charts for every product and map all product variations, colors, sizes, styles, or models. This makes it easy for customers to select the right option and reduces the risk of returns or complaints. When shoppers trust the product information, they are more likely to complete the purchase."
    },
    {
      title: "Product Specs &",
      subtitle: "Details",
      description: "Customers want to know everything about a product before buying. We ensure that every detail, dimension, material, weight, feature, and specification, is correct and easy to understand. Accurate product information builds trust and confidence, reducing the number of questions, complaints, or returns. A complete product profile makes your store look professional and reliable, which keeps customers coming back."
    },
    {
      title: "Catalog SEO",
      subtitle: "Content Writing",
      description: "A strong catalog needs more than just product descriptions. We create SEO-friendly content for category pages, product listings, and your entire catalog. This includes writing content that helps search engines understand your products and increases your website’s organic traffic. Good SEO content not only improves rankings but also makes your catalog more readable and engaging for customers, encouraging them to explore and buy more products."
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
           Product Content & Catalog Accuracy
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Make Your Product Catalog Accurate, Clear, and Ready to Sell
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Your online store can have the best products, but if your product details are messy or confusing, customers will leave. We make sure every product in your catalog is correct, clear, and easy to find. From writing product descriptions to mapping variations, adding size charts, and optimizing for search engines, we handle it all. A clean, accurate catalog not only improves customer experience but also boosts sales and reduces returns."
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
      <ServiceCard
        features={serviceFeatures}
        accentColor="purple"
        // showButton={true}
        buttonText="Read More"
        onButtonClick={(feature, index) => handleClick(feature)}
      />
      <BusinessCTA 
                    title="Stop losing customers to messy details!"
                    description="Let us make your catalog clear, complete, and ready to sell. Accurate product information builds trust, improves conversions, and keeps buyers coming back."
                    buttonText="BOOST YOUR SALES"
                    imageUrl="\images\CS.avif"
                    altText="Let's Talk"
                />
      <Footer />
    </>
  );
};

export default CustomerService;

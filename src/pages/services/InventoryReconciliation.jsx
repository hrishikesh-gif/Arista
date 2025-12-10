import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import BusinessCTA from "../../component/BusinessCTA";
import CasestudySection from "../../component/CasestudySection";
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

const InventoryReconciliation = () => {
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ];
  const serviceFeatures = [
    {
      title: "Order",
      subtitle: "Management",
      description: "We oversee the complete order lifecycle for our B2B partners, ensuring smooth and accurate operations. From creating purchase orders for consignments across various regions to managing inventory through B2B platforms, every step is carefully handled. We monitor order progress, provide timely updates, and ensure fulfillment happens on schedule. This organized approach reduces errors, keeps operations predictable, and strengthens partner confidence and satisfaction."
    },
    {
      title: "B2B Inventory",
      subtitle: "Mismatch Resolution",
      description: "Discrepancies between warehouses, transfers, and retailer records can disrupt operations and slow down your business. We dive deep into your inventory data, identify mismatches, and resolve them efficiently. By ensuring your B2B inventory always reflects reality, we remove the guesswork and reduce operational errors, giving you peace of mind and confidence in your stock levels."
    },
    {
      title: "Operations",
      subtitle: "Management",
      description: "We ensure accurate, efficient, and on-time warehouse and fulfillment operations. Shipments are tracked, Advance shipment Notification tickets created, and 3PL orders monitored. Receiving and ERP reconciliation verify quantities and flag discrepancies. Container management keeps stock aligned. Inventory, replenishment, and stock movements prevent shortages or overstocking. Real-time dashboards, exception alerts, and system sync reduce errors and improve visibility. Every order is captured, tracked, and reconciled for reliable fulfillment across warehouses and stores."
    },
    {
      title: "Transfer",
      subtitle: "Matching",
      description: "Every shipment sent or received needs to be accounted for—and we make sure nothing slips through the cracks. Our transfer matching process verifies shipments at every stage, minimizing errors, reducing delays, and keeping your inventory records consistent across all locations. This level of precision ensures that your supply chain runs smoothly and efficiently."
    },
    {
      title: "Retailer",
      subtitle: "Portals",
      description: "Managing multiple retailer portals can be overwhelming, with different platforms, formats, and update schedules. We streamline the process, keeping stock levels, orders, and communications synchronized. This ensures your data is always accurate and your retailers stay informed, reducing miscommunications and missed opportunities."
    },
    {
      title: "Shortage",
      subtitle: "Reporting",
      description: "Stockouts can hit your sales and customer satisfaction hard. Our shortage reporting system flags gaps before they become critical. By providing timely insights, you can act quickly to replenish inventory, avoid lost sales, and maintain a seamless supply chain—keeping both your business and your retail partners happy."
    },
    {
      title: "Shrinkage",
      subtitle:"Audits",
      description: "Losses due to theft, misplacement, or process errors are more common than you think. Our shrinkage audits pinpoint where stock is disappearing and why. By addressing the root causes, we help prevent future inventory leaks, safeguard your products, and protect your bottom line."
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
            Inventory Reconciliation & Retail Ops and Order Management
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Focus on growing your business rather than chasing numbers!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
            <TypewriterText
              text="Ever feel like your inventory has a mind of its own? Mismatched numbers, lost transfers, or missing stock can turn smooth operations into a constant headache. Our Inventory Reconciliation & Retail Operations service takes the guesswork out of your inventory, making sure your stock is always accurate and your retail operations run like clockwork."
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
        
      
      />
      <BusinessCTA 
                    title="Keep your retail operations flawless!"
                    description="Every mismatch, delay, and untracked shipment is silently costing you money. Don’t let inventory errors, shortages, or shrinkage drain your profits and slow your operations. Take control now, streamline your stock, reconcile your orders!"
                    buttonText="NO MORE INVENTORY DRAMA!"
                    imageUrl="\images\CTA img\Inner\inner_image.webp"
                    altText="Let's Talk"
                />
                 <CasestudySection/>
      <Footer />
    </>
  );
};

export default InventoryReconciliation;

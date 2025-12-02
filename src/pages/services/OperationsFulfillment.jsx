import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "../../ReactBits/darkveil";
import TechStrip from "../../component/TechStrip";
import { FiMessageCircle, FiRepeat } from "react-icons/fi";
import { SiZendesk } from "react-icons/si";
import ServiceCard from "../../component/ServiceCard";
import Footer from "../../component/Footer";
import BusinessCTA from "../../component/BusinessCTA"
import { Link } from 'react-router-dom';
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

const OperationsFulfillment = () => {
  const techStack = [
    { name: "Zendesk", Icon: SiZendesk },
    { name: "Gorgias", Icon: FiMessageCircle },
    { name: "Loop", Icon: FiRepeat },
  ]; 
  const serviceFeatures = [
    {
      title: "Fulfillment Operations",
      subtitle: "& Reporting",
      description: `We provide end-to-end visibility into your fulfillment flow with real-time dashboards and reporting tools.

      • Order Flow Monitoring:Track every step of the order lifecycle to identify bottlenecks and exceptions. 
      • Advanced Dashboards & Reporting:Power BI and Tableau dashboards turn complex data into clear visuals and insightful reports, giving you a complete picture of your fulfillment performance. 
      • Anomaly Detection:Spot inconsistencies early before they impact customers. 
      • TAT & ETA Tracking:Ensure on-time delivery with accurate turnaround and arrival estimates.
       • Replenishment Planning:Anticipate demand and avoid stockouts with data-backed planning.`
    },
    {
      title: "Inventory Reconciliation",
      subtitle: " & Retail Ops",
      description: `Keep your inventory records aligned across platforms and retail partners. 
      
      • Mismatch Resolution: Identify and correct B2B inventory discrepancies. 
      • Transfer Matching: Track goods transfers seamlessly across regions. 
      • Retailer Portal Management: Streamline updates and shortage reporting. 
      • Shrinkage Audits: Detect and minimize losses due to shrinkage or errors.`
    },
    {
      title: "Logistics Reconciliation",
      subtitle: "& Charge Verification",
      description: `Control logistics costs and stay compliant with international trade requirements. 
      
      • Invoice Reconciliation: Validate B2B invoices for accuracy. 
      • Shipping Charge Audits: Flag invalid courier or customs charges. 
      • Cost Validation: Check weight-based shipping costs and duties. 
      • Shipment Monitoring: Track with 15+ carriers, monitor SLAs, and manage exceptions. 
      • Claims & Returns: Handle claim filing, return requests, and container creation. 
      • Global Compliance: Manage customs entry verification, charge mapping, ERP cost codes, and multi-currency reconciliation. `
    },
    {
      title: "Order",
      subtitle: "Management",
      description: `We streamline the order lifecycle, from purchase creation to final fulfillment.
      
      • B2B Purchase Orders: Generate and manage orders across different regions. 
      • Progress Tracking: Monitor every stage and provide regular updates. 
      • Inventory Oversight: Ensure accuracy across B2B platforms. 
      • Error Reduction: Minimize delays and mistakes with proactive monitoring. 
      • Partner Satisfaction: Keep fulfillment predictable and partnerships strong.`
    },
    {
      title: "Operations",
      subtitle: "Management",
      description: `Our Warehouse Operations Management helps your warehouse run fast and smooth.
      
      • Purchase Order Entry: Record and validate purchase orders in the system to ensure all product details and quantities are correct. 
      • Shipment Tracking & ASN Management: Monitor shipments, create ASN tickets, and confirm received quantities against original orders. 
      • Inventory Reconciliation: Cross-check warehouse inventory with internal systems and partner platforms to maintain data accuracy. 
      • Replenishment Management: Manage stock transfers between warehouses, stores, and fulfillment centers to balance supply and demand. 
      • Exception Handling: Identify and flag issues such as over-receiving, shortages, or mismatches for quick resolution.`
    },
    {
      title: "Why",
      subtitle: "Choose Us?",
      description: `• Accuracy-driven approach powered by analytics. 
      • Cost savings through early detection and validation. 
      • End-to-end visibility across fulfillment, logistics, and compliance. 
      • Scalable solutions that grow with your business.`
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
            className="text-white font-bold leading-tight text-left text-balance text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl
"
          >
          Operations Fulifillment Support
          </motion.h1>

          <motion.h3
            variants={textVariant(0.3)}
            className="text-white font-light text-left text-balance leading-snug mt-4 sm:mt-6 text-xl md:text-xl lg:text-xl 2xl:text-2xl
"
          >
            Smooth Operations, Zero Headaches!
          </motion.h3>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"> 
            <TypewriterText
              text="Seamless supply chain operations are key to business success. Our Supply Chain Operations & Fulfillment Support ensures accurate inventory, efficient order management, smooth logistics, and reliable reporting. Using advanced tools and real-time monitoring, we help reduce errors, cut costs, and deliver a better customer experience."
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
            LET'S TALK
          </motion.button>
            </Link>
        </motion.div>
      </div>
      
      <TechStrip tech={techStack} className="mt-0 md:mt-12 lg:mt-20 xl:mt-0 2xl:mt-32" />
        <ServiceCard features={serviceFeatures} accentColor="purple" />
        <BusinessCTA 
                    title="Don’t let mistakes eat your margin!"
                    description="Every missed order, inventory error, or delayed shipment is money lost. Take control of your operations now and watch efficiency, and profits, skyrocket."
                    buttonText="STOP GUESSING AND START WINNING"
                    imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    altText="Consulting Team Collaboration"
                />
      <Footer />
    </>
  );
};

export default OperationsFulfillment;

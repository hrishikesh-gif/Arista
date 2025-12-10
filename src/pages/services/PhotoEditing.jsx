import { FaFigma, FaWordpress, FaShopify, FaMagento, FaReact, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import {
  FiPhone,
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiHeadphones,
  FiSearch,
  FiDollarSign,
  FiPenTool,
} from "react-icons/fi";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../component/Footer";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const tech = [
  { name: "Figma", Icon: FaFigma },
  { name: "WordPress", Icon: FaWordpress },
  { name: "Shopify", Icon: FaShopify },
  { name: "Magento", Icon: FaMagento },
  { name: "React", Icon: FaReact },
];

const capabilities = [
  { title: "Call Support", Icon: FiHeadphones },
  { title: "Pay Per Click", Icon: FiDollarSign },
  { title: "Search Engine\nOptimization", Icon: FiSearch },
  { title: "Photoshop", Icon: SiAdobephotoshop },
  { title: "Illustrator", Icon: SiAdobeillustrator },
  { title: "Graphic Design", Icon: FiPenTool },
];

// Before-After data with images
const beforeAfterProjects = [
  {
    id: 1,
    before: "/api/placeholder/600/400",
    after: "/api/placeholder/600/400",
    title: "E-commerce Website Redesign",
    description: "Transformed outdated design into modern, conversion-focused experience",
    metrics: { conversion: "+45%", bounce: "-32%", speed: "+60%" }
  },
  {
    id: 2,
    before: "/api/placeholder/600/400",
    after: "/api/placeholder/600/400",
    title: "Mobile App UI/UX",
    description: "Complete mobile app redesign with enhanced user journey",
    metrics: { conversion: "+38%", bounce: "-28%", speed: "+45%" }
  },
  {
    id: 3,
    before: "/api/placeholder/600/400",
    after: "/api/placeholder/600/400",
    title: "Brand Identity Design",
    description: "Complete brand overhaul with new visual identity system",
    metrics: { conversion: "+52%", bounce: "-41%", speed: "+55%" }
  },
  {
    id: 4,
    before: "/api/placeholder/600/400",
    after: "/api/placeholder/600/400",
    title: "Dashboard Interface",
    description: "Complex data dashboard simplified with intuitive design",
    metrics: { conversion: "+61%", bounce: "-35%", speed: "+70%" }
  }
];

function SectionHeader({ overline, highlight }) {
  return (
    <h3 className="text-[22px] md:text-3xl font-semibold tracking-tight">
      <span className="text-zinc-200">{overline} </span>
      <span className="text-purple-400">{highlight}</span>
    </h3>
  );
}

// Before-After Slider Component
function BeforeAfterSlider({ project, isActive }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <motion.div
      className={`relative w-[350px] h-[350px] rounded-2xl overflow-hidden cursor-col-resize border-2 border-purple-500/30 ${isActive ? 'ring-4 ring-purple-500/50' : 'opacity-70'
        }`}
      onMouseMove={handleMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      whileHover={{ scale: isActive ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-purple-900 to-violet-800 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/80 text-sm">Original Design</p>
          </div>
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-900 to-emerald-800 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/80 text-sm">Our Redesign</p>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5">
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Percentage Indicator */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
        {Math.round(sliderPosition)}%
      </div>

      {/* Project Info */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-xl">
        <h4 className="text-white font-semibold">{project.title}</h4>
        <p className="text-white/70 text-sm mt-1">{project.description}</p>
      </div>
    </motion.div>
  );
}

// Interactive Before-After Slider for Product Editing Section
function ProductEditingSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <motion.div
      className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden border-2 border-purple-500/30 cursor-col-resize"
      onMouseMove={handleMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* AFTER Image (Comes first) */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/shoes-after.webp)` }}
        >
          {/* After Label - Top Right Corner */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            After
          </div>
        </div>
      </div>

      {/* BEFORE Image (Revealed by slider) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/shoes-before.webp)` }}
        >
          {/* Before Label - Top Left Corner */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            Before
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-8 bg-white rounded-md shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5">
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Virtual Apparel Visualization Slider Component
function VirtualApparelSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <motion.div
      className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden border-2 border-purple-500/30 cursor-col-resize"
      onMouseMove={handleMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* AFTER Image - AI Generated Model */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/pant-after.webp)` }}
        >
          {/* After Label - Top Right Corner */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            After
          </div>
        </div>
      </div>

      {/* BEFORE Image - Flat Lay Product */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/pant-before.webp)` }}
        >
          {/* Before Label - Top Left Corner */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            Before
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-8 bg-white rounded-md shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5">
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Background Removal Slider Component
function BackgroundRemovalSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <motion.div
      className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden border-2 border-purple-500/30 cursor-col-resize"
      onMouseMove={handleMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* AFTER Image - Clean Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/bero-after.webp)` }}
        >
          {/* After Label - Top Right Corner */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            After
          </div>
        </div>
      </div>

      {/* BEFORE Image - Original with Dust/Imperfections */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/bero-before.webp)` }}
        >
          {/* Before Label - Top Left Corner */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            Before
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-8 bg-white rounded-md shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5">
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Liquify & Model Retouch Slider Component
function LiquifyModelRetouchSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <motion.div
      className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden border-2 border-purple-500/30 cursor-col-resize"
      onMouseMove={handleMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* AFTER Image - Retouched Model */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/jacket-after.webp)` }}
        >
          {/* After Label - Top Right Corner */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            After
          </div>
        </div>
      </div>

      {/* BEFORE Image - Original Model */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/images/jacket-before.webp)` }}
        >
          {/* Before Label - Top Left Corner */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            Before
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-8 bg-white rounded-md shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5">
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Updated photo editing images for the iPhone mockup with ONLY the requested images
const mockupImages = [
  {
    id: 1,
    title: "E-commerce Product Editing",
    description: "Professional product enhancement & optimization",
    image: "/images/shoes-static.webp",
    icon: "🛍️",
    type: "E-commerce"
  },
  {
    id: 2,
    title: "Virtual Apparel Visualization",
    description: "AI-powered model imagery for fashion",
    image: "/images/apparel-static.webp",
    icon: "👗",
    type: "Fashion"
  },
  {
    id: 3,
    title: "Background Removal & Dust Cleanup",
    description: "Clean, professional product presentation",
    image: "/images/bero-static.jpg",
    icon: "✨",
    type: "Cleanup"
  },
  {
    id: 4,
    title: "Liquify & Model Retouch",
    description: "Professional model enhancement",
    image: "/images/jacket-static.webp",
    icon: "💫",
    type: "Retouch"
  }
];

// Enhanced iPhone Mockup with Sliding Images Animation
function InteractiveiPhoneMockup() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animation for sliding images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mockupImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = mockupImages[currentImageIndex];

  return (
    <motion.div
      className="relative will-3d flex justify-center items-center sm:mt-16 lg:ml-16"
      initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
    >
      {/* Decreased iPhone size from w-80 to w-64 and height accordingly */}
      <div className="relative w-56 sm:w-64 h-[480px] sm:h-[520px]">
        {/* iPhone Body with metallic finish */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[40px] p-2 shadow-2xl">
          {/* Screen Bezel */}
          <div className="w-full h-full bg-black rounded-[34px] overflow-hidden relative border-2 border-gray-800">

            {/* Dynamic Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">

              {/* Simplified Status Bar - Removed time */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm flex justify-end items-center px-6">
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-white/90 rounded-sm" />
                  <div className="w-3 h-2 bg-white/90 rounded-sm" />
                  <div className="w-2 h-2 bg-white/90 rounded-sm" />
                </div>
              </div>

              {/* Sliding Images Animation - Decreased image container size */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                {/* Decreased max-w and max-h for smaller images */}
                <div className="relative w-full h-full max-w-[200px] sm:max-w-[220px] max-h-[350px] sm:max-h-[380px] rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage.id}
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                      initial={{
                        opacity: 0,
                        scale: 1.1,
                        x: 300
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        x: -300
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Image Container with Background Image */}
                      <div
                        className="w-full h-full flex flex-col items-center justify-center relative p-4"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${currentImage.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

                        {/* Smaller Icon */}
                        <motion.div
                          className="text-4xl sm:text-5xl mb-3 relative z-10"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          {currentImage.icon}
                        </motion.div>

                        {/* Smaller Image Title */}
                        <motion.h3
                          className="text-white text-base sm:text-lg font-bold text-center mb-1 relative z-10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {currentImage.title}
                        </motion.h3>

                        {/* Smaller Image Description */}
                        <motion.p
                          className="text-white/90 text-xs sm:text-sm text-center mb-3 relative z-10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {currentImage.description}
                        </motion.p>

                        {/* Type Badge */}
                        <motion.div
                          className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 relative z-10"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <span className="text-white text-xs font-medium">
                            {currentImage.type}
                          </span>
                        </motion.div>

                        {/* Progress Dots */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                          {mockupImages.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                ? 'bg-white scale-125'
                                : 'bg-white/60'
                                }`}
                            />
                          ))}
                        </div>

                        {/* Image border and shadow */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-2xl" />

                        {/* Gradient Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 rounded-2xl" />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>

        {/* iPhone Details - Adjusted positions for smaller size */}
        <div className="absolute left-0 top-24 w-1 h-16 bg-gray-700 rounded-l-sm" />
        <div className="absolute right-0 top-24 w-1 h-16 bg-gray-700 rounded-r-sm" />
        <div className="absolute left-0 top-44 w-1 h-10 bg-gray-700 rounded-l-sm" />
        <div className="absolute right-0 top-44 w-1 h-10 bg-gray-700 rounded-r-sm" />

        {/* Dynamic Reflective Glow */}
        <motion.div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.4)",
              "0 0 40px rgba(168, 85, 247, 0.6)",
              "0 0 60px rgba(168, 85, 247, 0.4)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating elements around iPhone - Adjusted positions and sizes */}
      <motion.div
        className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-violet-500/30 rounded-full blur-xl"
        animate={{ y: [0, 15, 0], scale: [1, 0.7, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1
    }
  }),
};

const float = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
};

const slideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

export default function CustomerServices() {
  const [activeProject, setActiveProject] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-rotate projects
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % beforeAfterProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  return (
    <div className="w-full bg-[#0b0b0b] text-white overflow-hidden">
      {/* Enhanced animations and 3D effects */}
      <style>{`
  @keyframes ringPulse { 0% { transform: scale(1); opacity:.12 } 70% { opacity:.06 } 100% { transform: scale(1.15); opacity:0 } }
  .pulse-ring::after { content:""; position:absolute; inset:-6px; border-radius:9999px; border:1px solid rgba(255,255,255,0.18); animation: ringPulse 2.2s ease-out infinite; }
  .will-3d { transform-style: preserve-3d; perspective: 900px; }
  @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
  .shimmer { background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent); background-size: 1000px 100%; animation: shimmer 2s infinite; }
  
  /* Custom CSS for 540px breakpoint */
  @media (min-width: 540px) {
    .hero-layout {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 2rem !important;
    }
    .hero-content {
      order: 1 !important;
      text-align: left !important;
      padding-top: 0 !important;
    }
    .hero-iphone {
      order: 2 !important;
      justify-content: flex-end !important;
      margin-top: 0 !important;
    }
    .hero-button {
      justify-content: flex-start !important;
    }
    .hero-text {
      text-align: left !important;
    }
    /* Significantly increased gap between header and content for 540px breakpoint */
    .hero-title {
      margin-bottom: 3rem !important;
    }
    .hero-subtitle {
      margin-bottom: 2rem !important;
    }
    .hero-description {
      margin-bottom: 3rem !important;
    }
  }

  /* NEW: Increased gap specifically for 560px to 874px breakpoint */
  @media (min-width: 537px) and (max-width: 874px) {
  .hero-section {
      min-height: 120vh !important;
    }
      .hero-content {
      padding-top: 6rem !important;
    }
    .hero-title {
      margin-bottom: 4rem !important;
    }
    .hero-subtitle {
      margin-bottom: 3rem !important;
    }
    .hero-description {
      margin-bottom: 4rem !important;
    }
  }

  @media (min-width: 768px) {
    .hero-title {
      margin-bottom: 3rem !important;
    }
    .hero-subtitle {
      margin-bottom: 2rem !important;
    }
    .hero-description {
      margin-bottom: 3rem !important;
    }
      
  }

  /* NEW: Increased height and spacing for 1046px to 1146px breakpoint */
  @media (min-width: 1023px) and (max-width: 1171px) {
    .hero-section {
      min-height: 120vh !important;
    }
    .hero-content {
      padding-top: 6rem !important;
    }
    .hero-title {
      margin-bottom: 3.5rem !important;
    }
    .hero-subtitle {
      margin-bottom: 2.5rem !important;
    }
    .hero-description {
      margin-bottom: 3.5rem !important;
    }
  }

  @media (min-width: 1024px) {
    .hero-layout {
      gap: 4rem !important;
    }
    .hero-title {
      margin-bottom: 2rem !important;
    }
    .hero-subtitle {
      margin-bottom: 1.5rem !important;
    }
    .hero-description {
      margin-bottom: 2.5rem !important;
    }
  }
`}</style>

      {/* Enhanced HERO with responsive layout for all devices */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-purple-950 to-purple-900 pb-0">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-16 flex flex-col hero-layout sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Content - Top on mobile, Left side on tablet and desktop */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pt-20 hero-content sm:pt-0 lg:pt-0 order-1 sm:order-1 lg:order-1"
          >

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[80px] leading-[1.05] font-bold mb-8 sm:mb-12 lg:mb-8 text-center hero-text sm:text-left lg:text-left hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Photo Editing & Retouching
              </span>
            </motion.h1>

            <motion.p
              className="text-sm tracking-[0.25em] text-purple-300 uppercase mb-6 sm:mb-8 lg:mb-6 text-center hero-text sm:text-left lg:text-left hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transforming Images Into Perfect Visuals
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl leading-8 sm:leading-9 text-zinc-300 mb-8 sm:mb-12 lg:mb-10 max-w-2xl text-center hero-text sm:text-left lg:text-left hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Your product photos are often the first impression your customers get. Our Photo Editing & Retouching service ensures every image is polished, professional, and sales-ready, helping your brand stand out in a crowded marketplace.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center hero-button sm:justify-start lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/contact">
              <motion.a
                href="#showcase"
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-2xl shadow-purple-500/25 ring-1 ring-purple-400/40 hover:from-purple-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[.98] transition"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                >
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <span className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition" aria-hidden />
                  <span className="absolute -left-8 top-1/2 h-[200%] w-16 -translate-y-1/2 rotate-12 bg-white/60 blur-md opacity-0 group-hover:opacity-30 group-hover:translate-x-[120%] transition-all duration-700" aria-hidden />
                </span>
                <HiOutlineChatBubbleLeftRight className="text-xl" />
                LET'S TALK
              </motion.a>
                </Link>
            </motion.div>
          </motion.div>

          {/* iPhone Mockup - Bottom on mobile, Right side on tablet and desktop */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 hero-iphone sm:order-2 lg:order-2 flex justify-center sm:justify-end lg:justify-end mt-8 sm:mt-0 lg:mt-0"
          >
            <InteractiveiPhoneMockup />
          </motion.div>
        </div>
      </section>

      {/* SECTION: PROFESSIONAL PRODUCT EDITING */}
      <section className="relative py-20 bg-gradient-to-b from-[#0b0b0b] to-purple-900/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Mobile: Column layout, Tablet & Desktop: Grid layout */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-12 items-center">
            {/* Static Image - Left side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 sm:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
                <img
                  src="/images/shoes-static.webp"
                  alt="Professional Product Editing Services"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full blur-lg"
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-violet-500/30 rounded-full blur-lg"
                animate={{ y: [0, 10, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Content - Right side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 order-1 sm:order-2"
            >
              {/* Title */}
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  E-commerce
                </span>
                <br />
                <span className="text-white">
                  Product Editing
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-zinc-300 leading-8 sm:leading-9 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We bring your e-com product images like apparel or footwear to life by enhancing every detail, from color accuracy to fabric texture. Our editing process ensures that each product looks vibrant, true-to-life, and ready to captivate your customers. Whether it's highlighting intricate stitching, refining material texture, or adjusting shadows for depth, we make every product pop on screen.
              </motion.p>

              {/* Interactive Before/After Slider */}
              <motion.div
                className="mt-6 flex justify-center sm:justify-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center sm:text-left">See the Transformation</h3>
                  <ProductEditingSlider />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: VIRTUAL APPAREL VISUALIZATION */}
      <section className="relative py-20 bg-gradient-to-b from-[#0b0b0b] to-purple-900/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Mobile: Column layout, Tablet & Desktop: Grid layout */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-12 items-center">
            {/* Content - Left side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8 order-1 sm:order-1"
            >
              {/* Title */}
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Virtual Apparel
                </span>
                <br />
                <span className="text-white">
                  Visualization
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-zinc-300 leading-8 sm:leading-9 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Bring your apparel to life with AI-generated model imagery that fits your brand's style.
                We use advanced AI and photo editing to showcase your products on lifelike models without
                the need for photoshoots. Whether you need clean flat lays or lifestyle visuals, we craft
                every image to blend aesthetics with functionality, helping your products stand out and
                convert better.
              </motion.p>

              {/* Interactive Before/After Slider */}
              <motion.div
                className="mt-8 flex justify-center sm:justify-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center sm:text-left">See the Transformation</h3>
                  <VirtualApparelSlider />
                </div>
              </motion.div>
            </motion.div>

            {/* Static Image - Right side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 sm:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
                <img
                  src="/images/apparel-static.webp"
                  alt="Virtual Apparel Visualization"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>



              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full blur-lg"
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-500/30 rounded-full blur-lg"
                animate={{ y: [0, 10, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: BACKGROUND REMOVAL & DUST CLEANUP */}
      <section className="relative py-20 bg-gradient-to-b from-[#0b0b0b] to-purple-900/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Mobile: Column layout, Tablet & Desktop: Grid layout */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-12 items-center">
            {/* Static Image - Left side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 sm:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
                <img
                  src="/images/bero-static.jpg"
                  alt="Background Removal & Dust Cleanup Services"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>

                {/* Content Overlay */}

              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full blur-lg"
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-violet-500/30 rounded-full blur-lg"
                animate={{ y: [0, 10, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Content - Right side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8 order-1 sm:order-2"
            >
              {/* Title */}
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Background Removal
                </span>
                <br />
                <span className="text-white">
                  & Dust Cleanup
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-zinc-300 leading-8 sm:leading-9 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Clean visuals are critical for e-commerce success. Our team removes distracting backgrounds
                and eliminates dust, scratches, spots or unwanted imperfections, delivering images that
                focus solely on your product. This ensures a polished, professional look that works
                seamlessly across websites, catalogs, and marketing materials.
              </motion.p>

              {/* Interactive Before/After Slider */}
              <motion.div
                className="mt-8 flex justify-center sm:justify-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center sm:text-left">See the Transformation</h3>
                  <BackgroundRemovalSlider />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: LIQUIFY & MODEL RETOUCH */}
      <section className="relative py-20 bg-gradient-to-b from-[#0b0b0b] to-purple-900/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Mobile: Column layout, Tablet & Desktop: Grid layout */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-12 items-center">
            {/* Content - Left side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8 order-1 sm:order-1"
            >
              {/* Title */}
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Liquify & Model
                </span>
                <br />
                <span className="text-white">
                  Retouch
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-zinc-300 leading-8 sm:leading-9 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Model images require precision and subtlety. Our retouching includes gentle liquify adjustments,
                skin smoothing, and feature refinement while maintaining natural appearance. We enhance the
                overall presentation without compromising authenticity, giving your models a flawless,
                professional finish that resonates with customers.
              </motion.p>

              {/* Interactive Before/After Slider */}
              <motion.div
                className="mt-8 flex justify-center sm:justify-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center sm:text-left">See the Transformation</h3>
                  <LiquifyModelRetouchSlider />
                </div>
              </motion.div>
            </motion.div>

            {/* Static Image - Right side on tablet and desktop */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 sm:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
                <img
                  src="/images/jacket-static.webp"
                  alt="Liquify & Model Retouch Services"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>



              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full blur-lg"
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-500/30 rounded-full blur-lg"
                animate={{ y: [0, 10, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <BusinessCTA 
                    title="Ready to See Results from Your Ads?"
                    description="Stop guessing and start growing. Partner with a reliable PPC company in India, use our pay-per-click services in India, and outsource PPC management to experts who know how to drive clicks, leads, and sales for US businesses."
                    buttonText="LAUNCH MY PPC CAMPAIGN NOW!"
                    imageUrl="\images\CTA img\Inner\inner_image.webp"
                    altText="Consulting Team Collaboration"
                />

      <Footer />
    </div>
  );
}
import React, { useRef, useEffect, useState } from "react";
import Footer from "../component/Footer";
import Testimonials from "../component/Testimonial";
import BusinessCTA from "../component/BusinessCTA";
import MagicBentoCustom from "../component/MagicBentoCustom";
import WeAreSection from "../component/WeAreSection";

// --- UI Helper Components ---

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const MotionDiv = ({
  children,
  className,
  initial,
  whileInView,
  transition,
  whileHover,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getStyle = () => {
    let style = {};
    if (initial && !isVisible) {
      style = {
        opacity: initial.opacity ?? 1,
        transform: `translateX(${initial.x || 0}px) translateY(${initial.y || 0}px) scale(${initial.scale || 1}) rotate(${initial.rotate || 0}deg)`,
      };
    }
    if (whileInView && isVisible) {
      style = {
        opacity: whileInView.opacity ?? 1,
        transform: `translateX(${whileInView.x || 0}px) translateY(${whileInView.y || 0}px) scale(${whileInView.scale || 1}) rotate(${whileInView.rotate || 0}deg)`,
        transition: transition
          ? `all ${transition.duration}s ease-out ${transition.delay || 0}s`
          : "all 0.5s ease-out",
      };
    }
    if (whileHover && isHovered) {
      style = { ...style, transform: `${style.transform} scale(${whileHover.scale || 1})` };
    }
    return style;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

// --- Main About Page ---
const About = () => {
  return (
    <div
      className="bg-[#0a0118] text-white min-h-screen w-full overflow-x-hidden relative"
    >
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none z-0" />
      
      {/* Minimal grid pattern */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Subtle floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 8 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 4 + Math.random() * 3,
        })).map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ${particle.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            50% {
              transform: translateY(-40px) translateX(20px);
              opacity: 0.4;
            }
          }
        `}
      </style>

      <div className="relative z-10 w-full">
        {/* --- HERO SECTION --- */}
<div className="w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 md:py-32">
  <div
    className="flex flex-col lg:flex-row items-start justify-between gap-12 sm:gap-16 md:gap-20 lg:gap-10 w-full max-w-[1400px] mx-auto"
    id="banner"
  >
    {/* Left Side: Title & Text */}
    <MotionDiv
      className="w-full lg:w-[70%] flex flex-col justify-start 
                 text-center lg:text-left items-center lg:items-start"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                   font-bold tracking-tight leading-[1.2] text-center lg:text-left"
      >
        <div className="text-white mb-2 sm:mb-3">Hello,</div>

        <div className="text-transparent bg-clip-text 
                        bg-gradient-to-r from-teal-300 to-green-400">
          we’re Arista Systems
        </div>
      </h1>

      <p
        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl 
                   text-gray-300 leading-relaxed max-w-2xl font-light 
                   text-center lg:text-left"
      >
        We build digital destinations that grab attention, amplify your story,
        and wow every visitor, because you deserve a team that gets it, delivers
        it, and makes it effortless.
      </p>
    </MotionDiv>

    {/* Right Side: Stats */}
    <MotionDiv
      className="w-full lg:w-[30%] flex flex-col 
                 items-center lg:items-end text-center lg:text-right 
                 gap-6 sm:gap-8 md:gap-10"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {[
        { end: 150, label: "Projects Till Date" },
        { end: 75, label: "Happy Customers" },
        { end: 6, label: "Countries Served" },
      ].map((stat, index) => (
        <div key={index} className="flex flex-col items-center lg:items-end">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md mb-1">
            <CountUp end={stat.end} duration={3} />
            {stat.end === 6 ? "" : "+"}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </MotionDiv>
  </div>
</div>
{/* --- End Hero Section --- */}


        {/* Placeholder sections - replace with your actual components */}
        <div className="w-full">
          <WeAreSection/>
        </div>

        <div className="w-full ">
          <MagicBentoCustom />
        </div>

        <div className="w-full"style={{
            background: '#0a0118',
            '--glow-x': '50%',
            '--glow-y': '50%',
            '--glow-intensity': '0',
            '--border-color': '#2e1a4e',
            '--background-dark': '#0a0118'
          }}
         >
          <BusinessCTA />
        </div>

        <div className="w-full">
           <Testimonials />
        </div>

        <div className="w-full">
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
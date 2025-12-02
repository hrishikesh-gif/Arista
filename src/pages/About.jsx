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
      className="bg-black text-white min-h-screen w-full overflow-x-hidden relative"
      style={{ background: "linear-gradient(to bottom, #000000 0%, #1e0a3c 50%, #000000 100%)" }}
    >

      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30vw] h-[30vw] bg-blue-900/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      {/* Grid Texture */}
      <div
        className="fixed inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 w-full">

        {/* --- HERO SECTION --- */}
        <div className="w-full px-6 md:px-12 lg:px-12 pt-48 md:pt-64 pb-20">
          <div
            className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full"
            id="banner"
          >
            {/* Left Side: Title & Text */}
            <MotionDiv
              className="w-full lg:w-[75%] flex flex-col justify-start text-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                <div className="text-white mb-2">Hello,</div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 lg:whitespace-nowrap">
                  we're Arista Systems
                </div>
              </h1>

              <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-light">
                We build digital destinations that grab attention, amplify your story,
                and wow every visitor, because you deserve a team that gets it, delivers
                it, and makes it effortless.
              </p>
            </MotionDiv>

            {/* Right Side: Stats */}
            {/* UPDATED: Removed top padding and added negative margin (lg:-mt-12) to pull it up */}
            <MotionDiv
              className="w-full lg:w-[25%] flex flex-col items-start lg:items-end gap-12 lg:text-right lg:-mt-12"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {[
                {
                  end: 150,
                  label: "Projects Till Date",
                  color: "text-white",
                  delay: 0,
                },
                {
                  end: 75,
                  label: "Happy Customers",
                  color: "text-white",
                  delay: 0.2,
                },
                {
                  end: 6,
                  label: "Countries Served",
                  color: "text-white",
                  delay: 0.4,
                },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-start lg:items-end">
                  <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-md mb-1">
                    <CountUp end={stat.end} duration={3} />
                    {stat.end === 6 ? "" : "+"}
                  </h2>
                  <p className="text-lg text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>
        {/* --- End Hero Section --- */}

        <div className="w-full">
          <WeAreSection/>
        </div>
         
         <div className="w-full">
          <MagicBentoCustom />
        </div>

        <div 
          className="w-full"
          style={{
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

        <div className="w-full mb-0">
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
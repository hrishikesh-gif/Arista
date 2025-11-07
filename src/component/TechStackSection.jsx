import React, { useState, useEffect, useRef } from "react";
import {
  FaWordpress,
  FaShopify,
  FaHeadset,
  FaSearch,
  FaMousePointer,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiMagento,
} from "react-icons/si";

const TechStacksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState("20s"); // default desktop
  const sectionRef = useRef(null);

  const techStacks = [
    [
      { name: "WordPress", icon: FaWordpress, color: "from-blue-600 to-blue-800" },
      { name: "Shopify", icon: FaShopify, color: "from-green-600 to-green-800" },
      { name: "SEO", icon: FaSearch, color: "from-orange-500 to-red-600" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "from-blue-600 to-purple-600" },
      { name: "Pay Per Click", icon: FaMousePointer, color: "from-green-500 to-teal-600" },
      { name: "Magento", icon: SiMagento, color: "from-orange-600 to-red-700" },
    ],
    [
      { name: "Call Support", icon: FaHeadset, color: "from-purple-600 to-pink-600" },
      { name: "Illustrator", icon: SiAdobeillustrator, color: "from-orange-500 to-yellow-600" },
      { name: "Figma", icon: SiFigma, color: "from-purple-500 to-pink-500" },
      { name: "Magento", icon: SiMagento, color: "from-orange-600 to-red-700" },
      { name: "Pay Per Click", icon: FaMousePointer, color: "from-green-500 to-teal-600" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "from-blue-600 to-purple-600" },
    ],
  ];

  // Dynamic scroll speed (React only, no breakpoints)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setScrollSpeed("8s");
      else if (window.innerWidth < 768) setScrollSpeed("12s");
      else setScrollSpeed("20s");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setIsVisible(true)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white overflow-hidden py-16 flex flex-col items-center justify-center w-full"
      style={{
       minHeight:"50vh" ,
        background:
          "linear-gradient(to bottom, #000000 0%, #000000 20%, #2d0b57 80%, #000000 100%)",
      }}
    >
      {/* Background glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span
              className={`inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              } animate-[shimmer_3s_linear_infinite]`}
              style={{ backgroundSize: "200% auto" }}
            >
              Building Future-Ready Solutions with Proven Tech Stacks
            </span>
          </h2>
        </div>

        {/* Tech Stack Rows */}
        <div className="space-y-10">
          {/* Row 1 - Left Scroll */}
          <div className="relative overflow-hidden py-6">
            <div
              className="flex animate-[scrollLeft_var(--speed)_linear_infinite]"
              style={{ "--speed": scrollSpeed }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 min-w-max px-4">
                  {techStacks[0].map((tech, j) => (
                    <div
                      key={`${tech.name}-${i}-${j}`}
                      className={`group cursor-pointer transform transition-all duration-700 ${
                        isVisible
                          ? "translate-y-0 opacity-100 scale-100"
                          : "translate-y-8 opacity-0 scale-95"
                      }`}
                    >
                      <div className="relative w-36 h-36 sm:w-40 sm:h-40 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                        ></div>
                        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 group-hover:border-white/30 transition-all group-hover:shadow-lg">
                            <tech.icon className="text-2xl sm:text-3xl text-white group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="text-sm sm:text-base font-semibold text-gray-300 group-hover:text-white transition-colors mt-3">
                            {tech.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right Scroll */}
          <div className="relative overflow-hidden py-6">
            <div
              className="flex animate-[scrollRight_var(--speed)_linear_infinite]"
              style={{ "--speed": scrollSpeed }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 min-w-max px-4">
                  {techStacks[1].map((tech, j) => (
                    <div
                      key={`${tech.name}-${i}-${j}`}
                      className={`group cursor-pointer transform transition-all duration-700 ${
                        isVisible
                          ? "translate-y-0 opacity-100 scale-100"
                          : "translate-y-8 opacity-0 scale-95"
                      }`}
                    >
                      <div className="relative w-36 h-36 sm:w-40 sm:h-40 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                        ></div>
                        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 group-hover:border-white/30 transition-all group-hover:shadow-lg">
                            <tech.icon className="text-2xl sm:text-3xl text-white group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="text-sm sm:text-base font-semibold text-gray-300 group-hover:text-white transition-colors mt-3">
                            {tech.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
      </div>

      {/* Tailwind Keyframes via arbitrary values */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default TechStacksSection;

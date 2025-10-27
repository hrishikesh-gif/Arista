import React, { useState, useEffect, useRef } from "react";
import {
  FaReact,
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
  const [visibleItems, setVisibleItems] = useState([]);
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef(null);

  const fullText = "Building Future-Ready Solutions with Proven Tech Stacks";

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

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, itemId])]);
            }, parseInt(itemId) * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".tech-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-900 via-black to-purple-900 py-20 overflow-hidden">
      {/* About Section Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              backgroundColor: "white",
              opacity: 0.1 + Math.random() * 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(0px, 0px) rotate(0deg)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Typewriter Effect */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-pulse text-white">|</span>
          </h2>
        </div>

        {/* Tech Stacks with Infinite Looping Scrolling */}
        <div className="space-y-16">
          {/* Row 1 - Infinite Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll-left">
              {/* Duplicate content for seamless infinite scroll */}
              {[...Array(6)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-12 min-w-max px-8">
                  {techStacks[0].map((tech, techIndex) => {
                    const itemId = `0-${techIndex}`;
                    const uniqueKey = `0-${techIndex}-${duplicateIndex}`;
                    const isVisible = visibleItems.includes(itemId);

                    return (
                      <div
                        key={uniqueKey}
                        data-item-id={itemId}
                        className={`tech-item group cursor-pointer transform transition-all duration-700 flex-shrink-0 ${
                          isVisible
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-16 opacity-0 scale-95"
                        }`}
                      >
                        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}></div>

                          <div className="relative z-10 text-center">
                            <div className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 group-hover:border-white/30 transition-all duration-500">
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 animate-spin-slow`}></div>
                              <tech.icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 animate-ping`}></div>
                            </div>

                            <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                              {tech.name}
                            </h3>

                            <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>
                          </div>

                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <div className="ripple-effect"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Infinite Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll-right">
              {/* Duplicate content for seamless infinite scroll */}
              {[...Array(6)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-12 min-w-max px-8">
                  {techStacks[1].map((tech, techIndex) => {
                    const itemId = `1-${techIndex}`;
                    const uniqueKey = `1-${techIndex}-${duplicateIndex}`;
                    const isVisible = visibleItems.includes(itemId);

                    return (
                      <div
                        key={uniqueKey}
                        data-item-id={itemId}
                        className={`tech-item group cursor-pointer transform transition-all duration-700 flex-shrink-0 ${
                          isVisible
                            ? "translate-y-0 opacity-100 scale-100"
                            : "translate-y-16 opacity-0 scale-95"
                        }`}
                      >
                        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}></div>

                          <div className="relative z-10 text-center">
                            <div className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 group-hover:border-white/30 transition-all duration-500">
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 animate-spin-slow`}></div>
                              <tech.icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 animate-ping`}></div>
                            </div>

                            <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                              {tech.name}
                            </h3>

                            <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>
                          </div>

                          <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <div className="ripple-effect"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Custom Styles */}
      <style>{`
        @keyframes infinite-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes infinite-scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-infinite-scroll-left {
          animation: infinite-scroll-left 45s linear infinite;
        }
        .animate-infinite-scroll-right {
          animation: infinite-scroll-right 50s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .ripple-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .tech-item:active .ripple-effect {
          width: 200px;
          height: 200px;
        }
        
        /* Pause animation on hover */
        .animate-infinite-scroll-left:hover,
        .animate-infinite-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStacksSection;
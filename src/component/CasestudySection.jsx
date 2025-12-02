// components/CasestudySection.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define defaultStories (NOW WITH pageName FIELD)
const defaultStories = [
  {
    id: 1,
    title: "Amazon Marketplace Management",
    pageName: "grossprofit",
    image: "/images/ohnuts-cs-thumb1.png",
    color: "from-pink-400/20 to-purple-400/20",
    bgTint: "bg-purple-500/20",
    rightContent: {
      heading:
        "From Concept To Market: We Engineer Projects For Superior Performance",
      stats: {
        left: { value: "+28.5% YoY", label: "Units sold" },
        right: { value: "38.2% to 32.2%", label: "ACoS reduced" },
      },
    },
  },
  {
    id: 2,
    title: "Google Ads - PPC",
    pageName: "Glendale",
    image: "/images/glendale-cs-thumb.webp",
    color: "from-blue-400/20 to-cyan-400/20",
    bgTint: "bg-blue-500/20",
    rightContent: {
      heading:
        "From Concept To Market: We Engineer Projects For Superior Performance",
      stats: {
        left: { value: "+287%", label: "Revenue Growth" },
        right: { value: "+163%", label: "ROAS Improvement" },
      },
    },
  },
  {
    id: 3,
    title: "Logistics - Supply Chain",
    pageName: "Kith",
    image: "/images/kith-cs-new.png",
    color: "from-green-400/20 to-emerald-400/20",
    bgTint: "bg-green-500/20",
    rightContent: {
      heading:
        "From Concept To Market: We Engineer Projects For Superior Performance",
      stats: {
        left: { value: "$15M+", label: "Value Reconciled" },
        right: { value: "4,000+", label: "Invoices Processed" },
      },
    },
  },
  {
    id: 4,
    title: "Marketplace Management - Amazon",
    pageName: "AmazonSalesGrowth",
    image: "/images/halolux-cs-new.png",
    color: "from-orange-400/20 to-red-400/20",
    bgTint: "bg-orange-500/20",
    rightContent: {
      heading:
        "From Concept To Market: We Engineer Projects For Superior Performance",
      stats: {
        left: { value: "+388%", label: "Revenue Growth" },
        right: { value: "+465%", label: "Units Sold Growth" },
      },
    },
  },
];

const CasestudySection = ({
  stories = defaultStories,
  className = "",
  autoRotate = false,
  rotationInterval = 5000,
}) => {
  const [activeStory, setActiveStory] = useState(0);

  // Screen State
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false); // 768 - 1023
  const [isLaptopRange, setIsLaptopRange] = useState(false); // 1024 - 1366
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsLaptopRange(width >= 1024 && width <= 1366);
      setIsDesktop(width > 1366);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (!autoRotate || stories.length <= 1) return;
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, stories.length]);

  // ----------- layout helpers -----------------

  const isStackedLayout = isMobile || isTablet; // mobile + tablet will be vertical

  const getCardPosition = (index) => {
    const diff = index - activeStory;

    const centerX = 50;
    const centerY = 50;

    const xOffset = isMobile ? 10 : isTablet ? 15 : isLaptopRange ? 18 : 25;
    const yOffset = isMobile ? 8 : isTablet ? 12 : isLaptopRange ? 15 : 20;

    let x = centerX;
    let y = centerY;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;

    const activeScale = isTablet || isLaptopRange ? 0.85 : 1;
    const sideScale = isTablet || isLaptopRange ? 0.55 : 0.65;

    if (diff === 0) {
      scale = isMobile ? 0.7 : activeScale;
      opacity = 1;
      zIndex = 30;
    } else if (diff === -1 || diff === 1) {
      x = centerX + diff * xOffset;
      y = centerY + diff * yOffset;
      scale = isMobile ? 0.5 : sideScale;
      opacity = isMobile ? 0.2 : 0.35;
      zIndex = 15;
    } else if (diff === -2 || diff === 2) {
      x = centerX + diff * (xOffset * 1.8);
      y = centerY + diff * (yOffset * 1.8);
      scale = sideScale * 0.7;
      opacity = 0.15;
      zIndex = 10;
    } else {
      x = centerX + diff * xOffset;
      y = centerY + diff * yOffset;
      scale = 0.3;
      opacity = 0;
      zIndex = 5;
    }

    return {
      left: `${x}%`,
      top: `${y}%`,
      scale,
      opacity,
      zIndex,
    };
  };

  const getCardDimensions = () => {
    if (isLaptopRange) return { width: "260px", height: "180px" };
    if (isTablet) return { width: "16rem", height: "11.5rem" };
    if (isMobile) return { width: "19rem", height: "15rem" };
    return { width: "20rem", height: "14rem" };
  };

  const getGlassMorphismStyle = () => {
    if (isLaptopRange) {
      return { height: "450px", width: "90%" };
    }
    // on tablet we fill the wrapper so it uses full width
    if (isTablet) {
      return { height: "80%", width: "100%" };
    }
    return {};
  };

  const getNavSectionStyle = () => {
    if (isLaptopRange) {
      return { marginTop: "60px" };
    }
    if (isTablet) {
      return { marginTop: "40px" };
    }
    return {};
  };

  const getNavItemStyle = () => {
    if (isLaptopRange) {
      return { minHeight: "80px" };
    }
    if (isTablet) {
      return { minHeight: "70px" };
    }
    return {};
  };

  const cardDimensions = getCardDimensions();
  const glassStyle = getGlassMorphismStyle();
  const navSectionStyle = getNavSectionStyle();
  const navItemStyle = getNavItemStyle();

  const handleStoryClick = (index) => setActiveStory(index);
  const handleStoryHover = (index) => {
    if (!isMobile) setActiveStory(index);
  };

  // routing
  const activeStoryPageName = stories[activeStory]?.pageName;
  const readCaseStudyPath = `/casestudies/${activeStoryPageName}`;

  const StatsDisplay = ({ stats }) => (
    <div className="flex items-center">
      <div className="flex-1 pr-4 md:pr-6 lg:pr-8">
        <div
          className={`bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold ${
            isMobile || isTablet || isLaptopRange ? "text-2xl" : "text-4xl"
          } mb-2`}
        >
          {stats.left.value}
        </div>
        <div className={`${isMobile ? "text-xs" : "text-sm"} text-gray-300`}>
          {stats.left.label}
        </div>
      </div>

      <div className="w-px bg-purple-500 mx-2 md:mx-4 h-12" />

      <div className="flex-1 pl-4 md:pl-6 lg:pl-8">
        <div
          className={`bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold ${
            isMobile || isTablet || isLaptopRange ? "text-2xl" : "text-4xl"
          } mb-2`}
        >
          {stats.right.value}
        </div>
        <div className={`${isMobile ? "text-xs" : "text-sm"} text-gray-300`}>
          {stats.right.label}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @media (min-width: 1024px) and (max-width: 1366px) {
          .min-h-screen {
            min-height: 900px !important;
          }
          .laptop-hide-desc {
            display: none;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .min-h-screen {
            min-height: 800px !important;
          }
        }

        @media (min-width: 1367px) {
          .min-h-screen {
            min-height: 100vh !important;
          }
        }

        @keyframes bubbleFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1.1);
          }
          50% {
            transform: translateY(-5px) translateX(-5px) scale(0.9);
          }
          75% {
            transform: translateY(-8px) translateX(3px) scale(1.05);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          20% {
            transform: translateY(-8px) translateX(4px) scale(1.2);
          }
          40% {
            transform: translateY(-12px) translateX(-3px) scale(0.8);
          }
          60% {
            transform: translateY(-6px) translateX(6px) scale(1.1);
          }
          80% {
            transform: translateY(-10px) translateX(-2px) scale(0.9);
          }
        }
      `}</style>

      <div
        className={`relative w-full bg-black overflow-hidden min-h-screen ${className}`}
      >
        {/* MAIN FLEX */}
        <div
          className={`flex ${
            isStackedLayout ? "flex-col" : "flex-row"
          } w-full min-h-screen items-center`}
        >
          {/* LEFT SIDE - cards */}
          <div
            className={`relative ${
              isStackedLayout
                ? "w-full max-w-xl my-10 h-[420px] "
                : "w-1/2"
            } flex items-center justify-center`}
          >
            <div
              className={`relative ${
                isStackedLayout ? "w-11/12 h-full" : "w-[90%] h-[95%]"
              } backdrop-blur-none rounded-2xl border border-white/5 shadow-2xl overflow-hidden transition-colors duration-700 ${
                stories[activeStory]?.bgTint || "bg-purple-500/20"
              }`}
              style={glassStyle}
            >
              {/* Case Studies label */}
              <div className="absolute z-10 top-6 left-6">
                <div className="text-white font-bold text-xl">Case Studies</div>
              </div>

              {/* Picture cards */}
              <div className="absolute inset-0" style={{ zIndex: 1 }}>
                {stories.map((story, index) => {
                  const position = getCardPosition(index);
                  const diff = index - activeStory;

                  return (
                    <div
                      key={story.id}
                      className="absolute transition-all duration-500 ease-out cursor-pointer"
                      style={{
                        left: position.left,
                        top: position.top,
                        transform: `translate(-50%, -50%) scale(${position.scale})`,
                        opacity: position.opacity,
                        zIndex: position.zIndex,
                        pointerEvents: diff === 0 || isMobile ? "auto" : "none",
                      }}
                      onClick={() => handleStoryClick(index)}
                      onMouseEnter={() => handleStoryHover(index)}
                    >
                      <div
                        className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                          diff === 0
                            ? "ring-4 ring-white/50 shadow-white/30 hover:shadow-white/40"
                            : "ring-0"
                        }`}
                        style={cardDimensions}
                      >
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            story.color
                          } ${
                            diff === 0 ? "opacity-20" : "opacity-50"
                          } transition-opacity duration-300`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* nav list */}
              <div
                style={{
                  zIndex: 2,
                  position: "relative",
                  marginTop: isLaptopRange || isTablet ? "60px" : "80px",
                  ...navSectionStyle,
                }}
              >
                {stories.map((story, index) => (
                  <div key={story.id} className="last:pb-0">
                    <div
                      className={`relative ${
                        isMobile
                          ? "px-4 py-3"
                          : isTablet
                          ? "px-6 py-4"
                          : "px-8 py-6"
                      } cursor-pointer transition-all duration-300 ${
                        activeStory === index
                          ? "bg-white/10 border-l-4 border-white scale-[1.02]"
                          : "hover:bg-white/5 border-l-4 border-transparent"
                      }`}
                      style={navItemStyle}
                      onMouseEnter={() => handleStoryHover(index)}
                      onClick={() => handleStoryClick(index)}
                    >
                      <div className="flex items-center justify-between h-full">
                        <div className="flex-1">
                          <h3
                            className={`font-bold transition-all duration-300 ${
                              activeStory === index
                                ? "text-white"
                                : "text-gray-300"
                            } ${
                              isLaptopRange || isTablet ? "text-lg" : "text-xl"
                            }`}
                          >
                            {story.title}
                          </h3>

                          {/* description (desktop only) */}
                          {!isMobile && !isTablet && !isLaptopRange && (
                            <p
                              className={`text-sm mt-2 transition-all duration-300 ${
                                activeStory === index
                                  ? "text-gray-300 opacity-100"
                                  : "text-gray-500 opacity-0"
                              }`}
                            >
                              {story.description}
                            </p>
                          )}
                        </div>

                        <div
                          className={`ml-4 transition-all duration-300 ${
                            activeStory === index
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 translate-x-4"
                          }`}
                        >
                          <div className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center w-10 h-10">
                            <svg
                              className="text-white w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {index < stories.length - 1 && (
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - content */}
          <div
            className={`flex items-center justify-center ${
              isStackedLayout ? "w-full pb-10" : "w-1/2"
            }`}
          >
            <div
              className={`${
                isStackedLayout
                  ? "w-11/12 max-w-xl px-4"
                  : isLaptopRange || isTablet
                  ? "w-[85%]"
                  : "w-[70%]"
              }`}
            >
              <h1
                className={`bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-bold leading-tight ${
                  isLaptopRange || isTablet ? "text-3xl mb-8" : "text-5xl mb-16"
                }`}
              >
                Case Studies
              </h1>

              <h3
                className={`font-bold text-white leading-tight ${
                  isLaptopRange || isTablet ? "text-xl mb-6" : "text-3xl mb-14"
                }`}
              >
                {stories[activeStory]?.rightContent?.heading}
              </h3>

              <div className="mb-8">
                <StatsDisplay
                  stats={stories[activeStory]?.rightContent?.stats}
                />
              </div>

              <div
                className={`flex ${
                  isMobile ? "flex-col space-y-4" : "space-x-4"
                }`}
              >
                <Link
                  to={readCaseStudyPath}
                  className={`group relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white ${
                    isTablet ? "px-6 py-3" : "px-8 py-4"
                  } rounded-2xl font-bold transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden min-w-0 flex-1 border-0 shadow-2xl flex items-center justify-center`}
                >
                  <span className="relative z-20 transition-all duration-300 group-hover:tracking-wider text-lg">
                    Read Case Study
                  </span>
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1200 delay-100"></div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-700 -z-10"></div>
                </Link>

                <button
                  className={`group relative bg-transparent text-white ${
                    isTablet ? "px-6 py-3" : "px-8 py-4"
                  } rounded-2xl font-bold transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden min-w-0 flex-1 border-0`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-[2px]">
                    <div className="w-full h-full rounded-2xl bg-black"></div>
                  </div>
                  <Link to="/case-studies">
                    <span className="relative z-20 transition-all duration-300 group-hover:tracking-wider text-lg">
                      View All
                    </span>
                  </Link>
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                      className="absolute w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        top: "15%",
                        left: "20%",
                        animation: "particleFloat 4s infinite",
                      }}
                    ></div>
                    <div
                      className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"
                      style={{
                        top: "65%",
                        left: "30%",
                        animation: "particleFloat 5s infinite 1s",
                      }}
                    ></div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-indigo-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-700 -z-10"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasestudySection;

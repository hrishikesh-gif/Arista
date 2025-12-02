import React, { useRef, useEffect, useState } from 'react';
import { Settings, MessageCircle, Users, Shield, Award } from 'lucide-react';

const DEFAULT_GLOW_COLOR = '132, 0, 255';

const philosophyItems = [
  {
    id: 1,
    icon: Settings,
    title: "AI-Powered Solutions",
    description: "Leveraging cutting-edge artificial intelligence to automate and optimize your e-commerce operations.",
    label: "Insights",
    gradient: "132, 0, 255",
    features: []
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "360° Communication",
    description: "Seamless multi-channel communication ensuring you're always connected with your customers and team.",
    label: "Overview",
    gradient: "14, 165, 233",
    features: []
  },
  {
    id: 3,
    icon: Users,
    title: "Flexible Offshore Teams",
    description: "Scalable teams that adapt to your needs, providing expertise exactly when and where you need it.",
    label: "Teamwork",
    gradient: "249, 115, 22",
    features: [
      "Dedicated team members",
      "Flexible scaling options",
    ]
  },
  {
    id: 4,
    icon: Shield,
    title: "Transparent Processes",
    description: "Complete visibility into operations with real-time reporting and open communication channels.",
    label: "Efficiency",
    gradient: "16, 185, 129",
    features: [
      "Real-time reporting",
      "Open communication",
    ]
  },
  {
    id: 5,
    icon: Award,
    title: "Expert Professionals",
    description: "Highly skilled specialists with proven track records in e-commerce excellence and innovation.",
    label: "Connectivity",
    gradient: "236, 72, 153",
    features: []
  },
  {
    id: 6,
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security protocols protecting your business data and customer information.",
    label: "Protection",
    gradient: "99, 102, 241",
    features: []
  }
];

const updateCardGlowProperties = (card, mouseX, mouseY, glow) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
};

const GlobalSpotlight = ({ gridRef, enabled = true }) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${DEFAULT_GLOW_COLOR}, 0.15) 0%,
        rgba(${DEFAULT_GLOW_COLOR}, 0.08) 15%,
        rgba(${DEFAULT_GLOW_COLOR}, 0.04) 25%,
        rgba(${DEFAULT_GLOW_COLOR}, 0.02) 40%,
        rgba(${DEFAULT_GLOW_COLOR}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.philosophy-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside = rect && 
        e.clientX >= rect.left && e.clientX <= rect.right && 
        e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll('.philosophy-card');

      if (!mouseInside) {
        spotlightRef.current.style.opacity = '0';
        cards.forEach(card => {
          card.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const proximity = 150;
      const fadeDistance = 225;
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - 
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity);
      });

      spotlightRef.current.style.left = `${e.clientX}px`;
      spotlightRef.current.style.top = `${e.clientY}px`;

      const targetOpacity = minDistance <= proximity ? 0.8 :
        minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;

      spotlightRef.current.style.opacity = targetOpacity.toString();
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      spotlightRef.current?.remove();
    };
  }, [gridRef, enabled]);

  return null;
};

const PhilosophySection = () => {
  const gridRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>
        {`
          .philosophy-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --border-color: #2e1a4e;
            --background-dark: #0a0118;
          }

          .philosophy-card::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(300px circle at var(--glow-x) var(--glow-y),
              rgba(var(--card-gradient), calc(var(--glow-intensity) * 0.8)) 0%,
              rgba(var(--card-gradient), calc(var(--glow-intensity) * 0.4)) 30%,
              transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .philosophy-card:hover::after {
            opacity: 1;
          }

          .philosophy-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(46, 26, 78, 0.3);
          }

          .card-grid {
            grid-template-columns: 1fr;
          }

          @media (min-width: 600px) {
            .card-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .card-grid {
              grid-template-columns: repeat(4, 1fr);
            }

            .card-grid > div:nth-child(1) {
              grid-column: 1;
              grid-row: 1;
            }

            .card-grid > div:nth-child(2) {
              grid-column: 2;
              grid-row: 1;
            }

            .card-grid > div:nth-child(3) {
              grid-column: 3 / span 2;
              grid-row: 1;
            }

            .card-grid > div:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2;
            }

            .card-grid > div:nth-child(5) {
              grid-column: 3;
              grid-row: 2;
            }

            .card-grid > div:nth-child(6) {
              grid-column: 4;
              grid-row: 2;
            }
          }
        `}
      </style>

      <GlobalSpotlight gridRef={gridRef} enabled={true} />

      <div className="philosophy-section min-h-screen bg-[#0a0118] p-6 md:p-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-16">
              Our Philosophy
            </h1>
            
            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {/* Mission Card */}
              <div 
                className="philosophy-card group relative"
                style={{ '--card-gradient': '132, 0, 255' }}
              >
                <div className="relative bg-[#0f0820] rounded-2xl p-8 border border-[#2e1a4e] transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                  <p className="text-gray-400 text-base leading-relaxed">
                    To provide customized e-commerce services through a dedicated offshore team, consistently exceeding expectations in quality and communication, and empowering businesses to thrive in the digital landscape.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div 
                className="philosophy-card group relative"
                style={{ '--card-gradient': '14, 165, 233' }}
              >
                <div className="relative bg-[#0f0820] rounded-2xl p-8 border border-[#2e1a4e] transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Our vision is to become the leading offshore partner for e-commerce businesses across the globe by delivering customized, high-quality digital solutions that simplify operations, accelerate growth, and empower brands to achieve long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {          /* Bento Grid */}
          <div ref={gridRef} className="card-grid grid gap-4 auto-rows-[220px]">
            {philosophyItems.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === item.id;
              
              return (
                <div
                  key={item.id}
                  className="philosophy-card group relative"
                  style={{ '--card-gradient': item.gradient }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full bg-[#0f0820] rounded-2xl p-6 border border-[#2e1a4e] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-3 relative z-10">
                      <span className="text-sm text-gray-400">{item.label}</span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col relative z-10">
                      <div className="mb-3">
                        <Icon 
                          className={`w-8 h-8 transition-all duration-300`}
                          style={{ 
                            color: isHovered ? `rgb(${item.gradient})` : '#9ca3af',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                          }}
                          strokeWidth={1.5} 
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      
                      {/* Feature List */}
                      {item.features && item.features.length > 0 && (
                        <ul className="space-y-2 mt-auto">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                              <svg 
                                className="w-4 h-4 flex-shrink-0" 
                                style={{ color: `rgb(${item.gradient})` }}
                                fill="none" 
                                strokeWidth="2" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhilosophySection;
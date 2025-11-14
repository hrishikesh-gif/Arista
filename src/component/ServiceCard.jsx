import React, { useState, useEffect, useRef } from 'react';

// ServiceCard Component - Reusable features section
export default function ServiceCard({ features, accentColor = "emerald" }) {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const accentColors = {
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    purple: "text-purple-600",
    pink: "text-pink-400",
    orange: "text-orange-400",
    green: "text-green-400"
  };

  return (
    <div className="w-full bg-black text-white py-16 md:py-24 px-6 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            ref={el => sectionRefs.current[index] = el}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              visibleSections.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Left side - Title with icon */}
            <div className="flex items-center gap-4">
              <div className={`flex-shrink-0 transition-all duration-700 delay-100 ${
                visibleSections.includes(index) 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-75 -rotate-12'
              }`}>
                {feature.icon && (
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Icon */}
                    <feature.icon 
                      className="w-16 h-16 text-gray-700 relative z-10 group-hover:text-puple-400 transition-colors duration-500" 
                      strokeWidth={1} 
                    />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-700 delay-300 ${
                visibleSections.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`}>
                <h2 className="text-4xl md:text-5xl font-light">
                  <span className={accentColors[accentColor] || accentColors.emerald}>
                    {feature.title}
                  </span>{" "}
                  {feature.subtitle && <span className="text-white">{feature.subtitle}</span>}
                </h2>
              </div>
            </div>

            {/* Right side - Description */}
            <div className={`transition-all duration-700 delay-500 ${
              visibleSections.includes(index) 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-4'
            }`}>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Divider line (except for last item) */}
            {index < features.length - 1 && (
              <div className="md:col-span-2 border-t border-gray-800 mt-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
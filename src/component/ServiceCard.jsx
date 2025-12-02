import React, { useState, useEffect, useRef } from 'react';

export default function ServiceCard({ 
  features, 
  accentColor = "emerald",
  // New optional button props - won't affect existing usage
  showButton = false,
  buttonText = "Learn More",
  onButtonClick,
  buttonClassName = ""
}) {
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
    emerald: { text: "text-emerald-400", border: "border-emerald-400", hover: "hover:bg-emerald-400" },
    blue: { text: "text-blue-400", border: "border-blue-400", hover: "hover:bg-blue-400" },
    purple: { text: "text-purple-400", border: "border-purple-400", hover: "hover:bg-purple-400" },
    pink: { text: "text-pink-400", border: "border-pink-400", hover: "hover:bg-pink-400" },
    orange: { text: "text-orange-400", border: "border-orange-400", hover: "hover:bg-orange-400" },
    green: { text: "text-green-400", border: "border-green-400", hover: "hover:bg-green-400" }
  };

  const colorConfig = accentColors[accentColor] || accentColors.emerald;

  return (
    <div className="w-full bg-black text-white py-16 md:py-24 px-6 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {features.map((feature, index) => {
          // Check if this specific feature should show a button
          // Priority: feature.showButton > component-level showButton
          const shouldShowButton = feature.showButton !== undefined 
            ? feature.showButton 
            : showButton;

          return (
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
                      <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <feature.icon 
                        className="w-16 h-16 text-gray-700 relative z-10 group-hover:text-purple-400 transition-colors duration-500" 
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
                    <span className={colorConfig.text}>
                      {feature.title}
                    </span>{" "}
                    {feature.subtitle && <span className="text-white">{feature.subtitle}</span>}
                  </h2>
                </div>
              </div>

              {/* Right side - Description and optional button */}
              <div className={`transition-all duration-700 delay-500 ${
                visibleSections.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              }`}>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Optional Button - Shows based on individual feature or component-level setting */}
                {shouldShowButton && (
                  <button
                    onClick={() => onButtonClick && onButtonClick(feature, index)}
                    className={`px-6 py-3 bg-transparent border rounded-lg hover:text-white transition-all duration-300 ${colorConfig.border} ${colorConfig.text} ${colorConfig.hover} ${buttonClassName}`}
                  >
                    {buttonText}
                  </button>
                )}
              </div>

              {/* Divider line */}
              {index < features.length - 1 && (
                <div className="md:col-span-2 border-t border-gray-800 mt-8" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
import React, { useState, useEffect, useRef } from "react";
import Footer from "../component/Footer.jsx";

export default function Careers() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const positions = [
    {
      category: "Development",
      title: "Senior PHP Developer",
      type: "Full Time",
      experience: "5-7 years experience",
      description:
        "Designing, coding and implementation of complex web based applications. Mentoring teams of junior& mid level PHP developers. Working with cross-functional team. Client Communication. Bringing new technology trends",
    },
    {
      category: "Design",
      title: "Senior Graphics Designer",
      type: "Full Time",
      experience: "5-7 years experience",
      description:
        "Designing, coding and implementation of complex web based applications. Mentoring teams of junior& mid level PHP developers. Working with cross-functional team. Client Communication. Bringing new technology trends",
    },
    {
      category: "Development",
      title: "Front End Developer",
      type: "Full Time",
      experience: "2-7 years experience",
      description:
        "Designing, coding and implementation of complex web based applications. Mentoring teams of junior& mid level PHP developers. Working with cross-functional team. Client Communication. Bringing new technology trends",
    },
    {
      category: "Development",
      title: "Senior Shopify Developer",
      type: "Full Time",
      experience: "5-7 years experience",
      description:
        "Designing, coding and implementation of complex web based applications. Mentoring teams of junior& mid level PHP developers. Working with cross-functional team. Client Communication. Bringing new technology trends",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          animation: slideInFromLeft 1s ease-out forwards;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .hero-text {
          animation: fadeInUp 1s ease-out 0.5s forwards;
          opacity: 0;
        }

        .hero-cta {
          animation: fadeInUp 1s ease-out 0.7s forwards;
          opacity: 0;
        }

        .section-visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        .link-hover {
          transition: all 0.3s ease;
        }

        .link-hover:hover {
          transform: translateX(5px);
        }
      `}</style>

      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight hero-title">
            <span className="bg-gradient-to-r from-cyan-400 to-yellow-300 bg-clip-text text-transparent">
              Join Us
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 hero-subtitle">
            Welcome to Aristo Systems where innovation meets opportunity.
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed hero-text">
            As a leading digital experience agency, we're a community of
            passionate professionals and craftspeople dedicated to pushing
            boundaries and achieving excellence. This happens through not only
            the work we do but through those we work with.
          </p>

          <a
            href="#open-positions"
            className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium underline underline-offset-4 hero-cta"
          >
            View Open Position
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values-section"
        ref={(el) => (sectionRefs.current["values-section"] = el)}
        className="px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`mb-16 ${
              visibleSections["values-section"]
                ? "section-visible"
                : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our diverse team thrives on collaboration, reactivity,
              <br />
              and continuous growth.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Working at Aristo Systems means being part of an environment where
              strategic thinking meets modern technology. Every project is an
              opportunity to innovate, and your unique skills shape our
              collective success.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meaningful Work
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              From crafting intuitive user experiences to developing robust
              digital platforms, we empower our team members to leave their mark
              on meaningful projects and diverse industries.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exceeding Expectations
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Aristo Systems, we believe in fostering an environment where
              creativity flourishes, skills are regularly developed, and every
              team member has the opportunity to contribute to game-changing
              digital experiences.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-600">
             
            </h3>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="open-positions"
        ref={(el) => (sectionRefs.current["open-positions"] = el)}
        className="px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-blue-400 ${
              visibleSections["open-positions"]
                ? "section-visible"
                : "opacity-0"
            }`}
          >
            Open Positions
          </h2>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 border border-slate-700 rounded-lg p-8 card-hover ${
                  visibleSections["open-positions"]
                    ? "section-visible"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: visibleSections["open-positions"]
                    ? `${index * 0.1}s`
                    : "0s",
                }}
              >
                <div className="mb-4">
                  <p className="text-blue-400 text-sm font-medium mb-2">
                    {position.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>• {position.type}</span>
                    <span>• {position.experience}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <button className="border border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-400 hover:text-white transition-all duration-300 font-medium">
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>

          {/* Future Openings */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not a match for any of our current opportunities
              <br />
              but still want to be kept in mind for future
              <br />
              openings?
            </h3>
            <p className="text-gray-300 mb-8">
              Send us an email at{" "}
              <a
                href="mailto:hr@aristosystems.in"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                hr@aristasystems.in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    
    </div>
  );
}

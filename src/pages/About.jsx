import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Footer from "../component/Footer"

// Simplified GSAP-like animation function
const animateProperty = (obj, prop, target, duration, callback) => {
  const start = obj[prop];
  const startTime = Date.now();

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / (duration * 1000), 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubic

    obj[prop] = start + (target - start) * eased;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (callback) {
      callback();
    }
  };

  animate();
};

function Model() {
  const modelRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("demon_bee_full_texture.glb");
  const { clock } = useThree();
  const floatOffset = useRef(0);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [scene, animations]);

  useEffect(() => {
    if (scene) {
      scene.position.set(0.5, -1, 0);
      scene.rotation.set(0, 1.5, 0);
      window.beeModel = scene;
    }
  }, [scene]);

  useFrame((state) => {
    if (mixerRef.current) {
      mixerRef.current.update(0.02);
    }

    // Gentle floating animation
    if (scene) {
      floatOffset.current += 0.01;
      scene.position.y += Math.sin(floatOffset.current) * 0.002;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.8} />;
}

const ModelCanvas = () => {
  const [currentSection, setCurrentSection] = useState("banner");

  const arrPositionModel = [
    {
      id: "banner",
      position: { x: 0.5, y: -1, z: 0 },
      rotation: { x: 0, y: 1.5, z: 0 },
    },
    {
      id: "intro",
      position: { x: -2.5, y: -0.5, z: -3 },
      rotation: { x: 0.3, y: 0.8, z: 0 },
    },
    {
      id: "description",
      position: { x: 2.5, y: -0.5, z: -3 },
      rotation: { x: 0.2, y: -0.8, z: 0 },
    },
    {
      id: "contact",
      position: { x: -1, y: 0, z: -1 },
      rotation: { x: 0.4, y: 0.6, z: 0 },
    },
  ];

  const modelMove = () => {
    const sections = document.querySelectorAll(".section");
    let newCurrentSection = "banner";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        newCurrentSection = section.id;
      }
    });

    if (newCurrentSection !== currentSection && window.beeModel) {
      setCurrentSection(newCurrentSection);

      const position_active = arrPositionModel.findIndex(
        (val) => val.id === newCurrentSection
      );

      if (position_active >= 0) {
        const coords = arrPositionModel[position_active];
        const duration = 2;

        // Animate position
        ["x", "y", "z"].forEach((axis) => {
          animateProperty(
            window.beeModel.position,
            axis,
            coords.position[axis],
            duration
          );
        });

        // Animate rotation
        ["x", "y", "z"].forEach((axis) => {
          animateProperty(
            window.beeModel.rotation,
            axis,
            coords.rotation[axis],
            duration
          );
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.beeModel) {
        modelMove();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 13],
          fov: 10,
          near: 0.1,
          far: 1000,
        }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.5} color={0xffffff} />
        <directionalLight
          intensity={1.2}
          color={0xffffff}
          position={[500, 500, 500]}
        />
        <pointLight intensity={0.8} color={0x00ffff} position={[-5, 5, 5]} />
        <spotLight
          intensity={0.5}
          color={0x00ff88}
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={0.5}
        />
        <Model />
      </Canvas>
    </div>
  );
};

// CountUp component simulation
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

// Motion div component
const MotionDiv = ({
  children,
  className,
  initial,
  whileInView,
  transition,
  whileHover,
  whileTap,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getStyle = () => {
    let style = {};

    if (initial && !isVisible) {
      style = {
        opacity: initial.opacity ?? 1,
        transform: `
          translateX(${initial.x || 0}px)
          translateY(${initial.y || 0}px)
          scale(${initial.scale || 1})
          rotate(${initial.rotate || 0}deg)
        `,
      };
    }

    if (whileInView && isVisible) {
      style = {
        opacity: whileInView.opacity ?? 1,
        transform: `
          translateX(${whileInView.x || 0}px)
          translateY(${whileInView.y || 0}px)
          scale(${whileInView.scale || 1})
          rotate(${whileInView.rotate || 0}deg)
        `,
        transition: transition
          ? `all ${transition.duration}s ease-out`
          : "all 0.5s ease-out",
      };
    }

    if (whileHover && isHovered) {
      style = {
        ...style,
        transform: `${style.transform} scale(${whileHover.scale || 1})`,
      };
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

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden relative">
      {/* Background grid effect */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <ModelCanvas />

      <div className="px-8 md:px-20">
        {/* Top Section */}
        <div
          className="section min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
          id="banner"
        >
          <MotionDiv
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              <span className="text-cyan-400">Hello,</span> <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                we're Arista Systems
              </span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
              We produce immersive digital destinations that amplify voices,
              turn heads, and wow visitors.
            </p>
          </MotionDiv>

          <MotionDiv
            className="flex-1 flex flex-col items-center gap-10 md:gap-16"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full flex flex-col gap-12 text-center md:text-right relative z-[150]">
              {[
                {
                  end: 150,
                  label: "Projects Till Date",
                  color: "cyan-400",
                  delay: 0,
                },
                {
                  end: 75,
                  label: "Happy Customers",
                  color: "green-400",
                  delay: 0.2,
                },
                {
                  end: 6,
                  label: "Countries Served",
                  color: "cyan-300",
                  delay: 0.4,
                },
              ].map((stat, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: stat.delay }}
                  className="relative"
                >
                  <div
                    className="absolute inset-0 blur-xl opacity-20"
                    style={{
                      background: `radial-gradient(circle, var(--tw-gradient-from) 0%, transparent 70%)`,
                    }}
                  ></div>
                  <h2
                    className={`text-5xl md:text-7xl font-bold text-${stat.color} relative`}
                  >
                    <CountUp end={stat.end} duration={3} />
                    {stat.end === 6 ? "" : "+"}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 mt-2">
                    {stat.label}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>

        {/* Middle Section */}
        <MotionDiv
          className="section mt-32 text-center relative z-10"
          id="intro"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-green-300 to-yellow-400 bg-clip-text text-transparent">
              We are
            </span>
          </h1>
          <p className="mt-8 text-2xl md:text-4xl font-medium text-gray-200 leading-relaxed">
            passionate about unifying art, tech, and storytelling
          </p>

          <p className="mt-12 max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-loose">
            Arista Systems Pvt. Ltd. is a renowned end-to-end IT and web service
            facilitator based in India. We have a zealous team of professionals
            holding years of experience and expertise in different domains.
          </p>

          <h2 className="mt-24 text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Philosophy
          </h2>
        </MotionDiv>

        {/* Description Section */}
        <MotionDiv
          className="section mt-32 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative z-10"
          id="description"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            border: "1px solid rgba(0, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 255, 255, 0.1)",
          }}
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold leading-snug mb-8">
              Handcrafting custom <br />
              websites that transcend utility <br />
              and functionality.
            </h2>

            <button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              style={{
                boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0, 191, 255, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0, 191, 255, 0.3)";
              }}
            >
              <span>✉️</span> LET'S TALK
            </button>
          </div>

          <MotionDiv
            className="flex-1 flex justify-center"
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="absolute inset-0  rounded-lg blur-xl  opacity-30"></div>
              <img
                src="/images/websiteDevlopment.webp"
                alt="3D Sphere"
                className="rounded-lg shadow-2xl relative z-10"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 255, 255, 0.3)",
                }}
              />
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Testimonials Section */}
        <MotionDiv
          className="section mt-32 relative z-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Take a look at how our clients enthusiastically recount their
              journeys, showcasing how our cutting-edge solutions have
              revolutionized their brand online.
            </p>

            <MotionDiv
              className="mt-12 text-left rounded-2xl p-8 md:p-10 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%)",
                border: "1px solid rgba(0, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-green-400 rounded-l-2xl"></div>

              <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed mb-6">
                "Take a deep dive into the tales of triumph from our web design
                agency in Los Angeles. Our clients enthusiastically recount
                their journeys, showcasing how our cutting-edge web design
                solutions have revolutionized their brand online."
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 pt-6 border-t border-gray-700">
                <p className="text-cyan-400 font-semibold text-xl">
                  Driana Millet
                </p>
                <p className="text-gray-400">
                  Assistant Global Director of Marketing
                </p>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* CTA Section */}
        {/* <MotionDiv
          className="section mt-40 text-center relative py-24 z-10"
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0 rounded-full"></div>

          <h1 className="text-4xl md:text-6xl font-bold mb-12 relative">
            Turn ideas into measurable results.
          </h1>

          <button
            className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-2xl relative overflow-hidden transition-all duration-300"
            style={{
              boxShadow: "0 0 40px rgba(0, 191, 255, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 0 60px rgba(0, 191, 255, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(0, 191, 255, 0.4)";
            }}
          >
            GET A CUSTOM QUOTE TODAY
          </button>
        </MotionDiv> */}

        {/* Footer */}
        {/* <footer className="bg-black py-20 border-t border-gray-800 mt-24 relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
                Arista
              </h2>
              <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                Infotech Tower, Ground Floor, South Ambazari Rd,
                <br /> Gayatri Nagar IT Park, Nagpur, Maharashtra 440022
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 px-4 py-2 rounded text-sm">
                  Shopify Partner
                </span>
                <span className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 px-4 py-2 rounded text-sm">
                  Shopify Expert
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                SERVICES
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Creative Production
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Website Development
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Digital Marketing
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Finance & Reconciliation
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Amazon & Marketplace Management
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Customer Experience & Support
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                QUICK LINKS
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Services
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  About
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Work
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Information Security Policy
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                GET IN TOUCH
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors">
                  (+91) 702-8001-906
                </li>
                <li className="hover:text-cyan-400 transition-colors">
                  (+91) 917-829-8442
                </li>
                <li className="hover:text-cyan-400 transition-colors">
                  hr@aristasystems.in
                </li>
              </ul>
              <div className="mt-6 flex gap-4 text-2xl">
                <a href="#" className="hover:scale-125 transition-transform">
                  🌐
                </a>
                <a href="#" className="hover:scale-125 transition-transform">
                  🐦
                </a>
                <a href="#" className="hover:scale-125 transition-transform">
                  💼
                </a>
                <a href="#" className="hover:scale-125 transition-transform">
                  📷
                </a>
              </div>
            </div>
          </div>
        </footer> */}
       <div className="relative">
  <Footer />
</div>
      </div>
    </div>
  );
};

export default About;


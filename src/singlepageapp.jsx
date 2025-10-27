import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";

// Import your page components
import About from "./pages/About";
import Services from "./pages/services/index";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";

// Import Customer Service page
import CustomerService from "./pages/services/CustomerService";

// Component to handle route changes and GSAP cleanup
const RouteHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Kill all ScrollTrigger instances when route changes
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.clearScrollMemory();

    // Small delay to ensure cleanup is complete
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return children;
};

// Home Page Component (your current layout)
const HomePage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up ScrollTriggers for this component
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default function App() {
  useEffect(() => {
    // Register GSAP plugins globally
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <RouteHandler>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />

            {/* Customer Service - Testing Route */}
            <Route
              path="/services/customer-service"
              element={<CustomerService />}
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-900">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                      404 - Page Not Found
                    </h1>
                    <p className="text-gray-300">
                      The page you're looking for doesn't exist.
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </RouteHandler>
      </div>
    </Router>
  );
}

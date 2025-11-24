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
import ScrollToTop from "./component/ScrollToTop";
import ProjectSection from "./component/ProjectSection";
import ContactSection from "./component/ContactSection";
import BlogPostPage from "./pages/BlogPostPage";
import Footer from "./component/Footer";
import CasestudySection from "./component/CasestudySection";

// Import your page components
import About from "./pages/About";
import Services from "./pages/services/index";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import ContactForm from "./pages/ContactForm";

// Import all service page components
import CustomerService from "./pages/services/CustomerService";
import ChargebackDispute from "./pages/services/ChargebackDispute";
import LeadReconciliation from "./pages/services/LeadReconciliation";
import AmazonSellerSupport from "./pages/services/AmazonSellerSupport";
import AmazonImageEditing from "./pages/services/AmazonImageEditing";
import MarketplaceAdvertising from "./pages/services/MarketplaceAdvertising";
import MarketplaceCustomerSupport from "./pages/services/MarketplaceCustomerSupport";
import PhotoEditing from "./pages/services/PhotoEditing";
import VideoMotion from "./pages/services/VideoMotion";
import DesignServices from "./pages/services/DesignServices";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import SEO from "./pages/services/SEO";
import PPCPaidMedia from "./pages/services/PPCPaidMedia";
import SocialMedia from "./pages/services/SocialMedia";
import EmailMarketing from "./pages/services/EmailMarketing";
import CRO from "./pages/services/CRO";
import ShopifyDevelopment from "./pages/services/ShopifyDevelopment";
import WordPressCMS from "./pages/services/WordPressCMS";
import MagentoBigCommerce from "./pages/services/MagentoBigCommerce";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import ContentMigration from "./pages/services/ContentMigration";
import Cleanup404 from "./pages/services/Cleanup404";
import OperationsFulfillment from "./pages/services/OperationsFulfillment";
import FinanceReconciliation from "./pages/services/FinanceReconciliation";
import DataReporting from "./pages/services/DataReporting";
import TechStackSection from "./component/TechStackSection";
import ClientShowcaseSection from "./component/ClientShowcaseSection";
import Testimonials from "./component/Testimonial";

// --- Case Study Detail Pages (added) ---
import AmazonSalesGrowth from "./pages/AmazonSalesGrowth";
import Glendale from "./pages/Glendale";
import Kith from "./pages/kith"
import Grossprofit from "./pages/Grossprofit";

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
      <ScrollToTop />
      <HeroSection />
      <ContactSection />
      <ProjectSection />
      <TechStackSection />
      <Testimonials />
      <ClientShowcaseSection />
      <AboutSection />
      <CasestudySection/>
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
      <ScrollToTop />
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
             <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactForm />} />

            {/* Case Study Detail Pages */}
            <Route
              path="/casestudies/AmazonSalesGrowth"
              element={<AmazonSalesGrowth />}
            />
            <Route path="/casestudies/glendale" element={<Glendale />} />
            <Route path="/casestudies/kith" element={<Kith />} />
            <Route
              path="/casestudies/Grossprofit"
              element={<Grossprofit />}
            />

            {/* Customer Experience & Support Services */}
            <Route
              path="/services/customer-service"
              element={<CustomerService />}
            />
            <Route
              path="/services/chargeback-dispute"
              element={<ChargebackDispute />}
            />
            <Route
              path="/services/lead-reconciliation"
              element={<LeadReconciliation />}
            />

            {/* Amazon & Marketplace Management Services */}
            <Route
              path="/services/amazon-seller-support"
              element={<AmazonSellerSupport />}
            />
            <Route
              path="/services/amazon-image-editing"
              element={<AmazonImageEditing />}
            />
            <Route
              path="/services/marketplace-advertising"
              element={<MarketplaceAdvertising />}
            />
            <Route
              path="/services/marketplace-customer-support"
              element={<MarketplaceCustomerSupport />}
            />

            {/* Creative Production Services */}
            <Route path="/services/photo-editing" element={<PhotoEditing />} />
            <Route path="/services/video-motion" element={<VideoMotion />} />
            <Route
              path="/services/design-services"
              element={<DesignServices />}
            />
            <Route
              path="/services/website-design"
              element={<WebsiteDesign />}
            />

            {/* Digital Marketing Services */}
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/ppc-paid-media" element={<PPCPaidMedia />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route
              path="/services/email-marketing"
              element={<EmailMarketing />}
            />
            <Route path="/services/cro" element={<CRO />} />

            {/* Website Development Services */}
            <Route
              path="/services/shopify-development"
              element={<ShopifyDevelopment />}
            />
            <Route path="/services/wordpress-cms" element={<WordPressCMS />} />
            <Route
              path="/services/magento-bigcommerce"
              element={<MagentoBigCommerce />}
            />
            <Route
              path="/services/website-maintenance"
              element={<WebsiteMaintenance />}
            />

            {/* Content & Catalog Management Services */}
            <Route
              path="/services/content-migration"
              element={<ContentMigration />}
            />
            <Route path="/services/404-cleanup" element={<Cleanup404 />} />

            {/* Other Services */}
            <Route
              path="/services/operations-fulfillment"
              element={<OperationsFulfillment />}
            />
            <Route
              path="/services/finance-reconciliation"
              element={<FinanceReconciliation />}
            />
            <Route
              path="/services/data-reporting"
              element={<DataReporting />}
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

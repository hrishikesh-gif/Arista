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
import Services from "./pages/services/service";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import ContactForm from "./pages/ContactForm";

// Import existing service page components
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

// --- Case Study Detail Pages ---
import AmazonSalesGrowth from "./pages/AmazonSalesGrowth";
import Glendale from "./pages/Glendale";
import Kith from "./pages/kith";
import Grossprofit from "./pages/Grossprofit";

// ===== NEW SERVICE CATEGORY PAGES TO CREATE =====
// You'll need to create these page components in your pages/services folder
// These are placeholders - replace with actual imports once you create the files

// Category Pages (Main service category pages)
import CreativeProduction from "./pages/services/CreativeProduction";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import AmazonMarketplace from "./pages/services/AmazonMarketplace";
import CustomerExperience from "./pages/services/CustomerExperience";
import ContentCatalog from "./pages/services/ContentCatalog";
import QualityAssurance from "./pages/services/QualityAssurance";
import Architectural3D from "./pages/services/Architectural3D";

// New Sub-Service Pages (that don't exist yet)
import AmazonStorefrontBrand from "./pages/services/AmazonStorefrontBrand";
import ProductContentCatalog from "./pages/services/ProductContentCatalog";
import FulfillmentOperations from "./pages/services/FulfillmentOperations";
import InventoryReconciliation from "./pages/services/InventoryReconciliation";
import LogisticsReconciliation from "./pages/services/LogisticsReconciliation";
import AccountsPayable from "./pages/services/AccountsPayable";
import AccountsReceivable from "./pages/services/AccountsReceivable";
import ReportingDashboard from "./pages/services/ReportingDashboard";
import InsightsBusinessIntelligence from "./pages/services/InsightsBusinessIntelligence";

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
      <ContactSection />
      <ProjectSection />
      <TechStackSection />
      <Testimonials />
      <ClientShowcaseSection />
      <AboutSection />
      <CasestudySection />
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
          <ScrollToTop />
          <Routes>
            {/* ========== MAIN PAGES ========== */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactForm />} />

            {/* ========== CASE STUDY DETAIL PAGES ========== */}
            <Route path="/casestudies/AmazonSalesGrowth" element={<AmazonSalesGrowth />} />
            <Route path="/casestudies/glendale" element={<Glendale />} />
            <Route path="/casestudies/kith" element={<Kith />} />
            <Route path="/casestudies/Grossprofit" element={<Grossprofit />} />

            {/* ========== SERVICE CATEGORY PAGES (NEW) ========== */}
            {/* Uncomment these once you create the corresponding page components */}
            <Route path="/services/creative-production" element={<CreativeProduction />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/amazon-marketplace" element={<AmazonMarketplace />} />
            <Route path="/services/customer-experience" element={<CustomerExperience />} />
            <Route path="/services/content-catalog" element={<ContentCatalog />} />
            {/* Operations & Fulfillment already exists below */}
            {/* Finance & Reconciliation already exists below */}
            {/* Data, Reporting already exists below */}
            <Route path="/services/quality-assurance" element={<QualityAssurance />} />
            <Route path="/services/architectural-3d" element={<Architectural3D />} />

            {/* ========== CREATIVE PRODUCTION SERVICES ========== */}
            <Route path="/services/photo-editing" element={<PhotoEditing />} />
            <Route path="/services/video-motion" element={<VideoMotion />} />
            <Route path="/services/design-services" element={<DesignServices />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />

            {/* ========== WEBSITE DEVELOPMENT SERVICES ========== */}
            <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
            <Route path="/services/wordpress-cms" element={<WordPressCMS />} />
            <Route path="/services/magento-bigcommerce" element={<MagentoBigCommerce />} />
            <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />

            {/* ========== DIGITAL MARKETING SERVICES ========== */}
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/ppc-paid-media" element={<PPCPaidMedia />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/cro" element={<CRO />} />

            {/* ========== AMAZON & MARKETPLACE MANAGEMENT SERVICES ========== */}
            <Route path="/services/amazon-seller-support" element={<AmazonSellerSupport />} />
            {/* NEW: Amazon Storefront & Brand Setup */}
            <Route path="/services/amazon-storefront-brand" element={<AmazonStorefrontBrand />} />
            <Route path="/services/marketplace-advertising" element={<MarketplaceAdvertising />} />
            <Route path="/services/marketplace-customer-support" element={<MarketplaceCustomerSupport />} />
            {/* Note: AmazonImageEditing route removed as it's not in new structure */}

            {/* ========== CUSTOMER EXPERIENCE & SUPPORT SERVICES ========== */}
            <Route path="/services/customer-service" element={<CustomerService />} />
            <Route path="/services/chargeback-dispute" element={<ChargebackDispute />} />
            <Route path="/services/lead-reconciliation" element={<LeadReconciliation />} />

            {/* ========== CONTENT & CATALOG MANAGEMENT SERVICES ========== */}
            {/* NEW: Product Content & Catalog Accuracy */}
            <Route path="/services/product-content-catalog" element={<ProductContentCatalog />} />
            <Route path="/services/content-migration" element={<ContentMigration />} />
            <Route path="/services/404-cleanup" element={<Cleanup404 />} />

            {/* ========== OPERATIONS & FULFILLMENT SUPPORT SERVICES ========== */}
            {/* Main category page already exists */}
            <Route path="/services/operations-fulfillment" element={<OperationsFulfillment />} />
            {/* NEW SUB-SERVICES: */}
            <Route path="/services/fulfillment-operations" element={<FulfillmentOperations />} />
            <Route path="/services/inventory-reconciliation" element={<InventoryReconciliation />} />
            <Route path="/services/logistics-reconciliation" element={<LogisticsReconciliation />} />

            {/* ========== FINANCE & RECONCILIATION SERVICES ========== */}
            {/* Main category page already exists */}
            <Route path="/services/finance-reconciliation" element={<FinanceReconciliation />} />
            {/* NEW SUB-SERVICES: */}
            <Route path="/services/accounts-payable" element={<AccountsPayable />} />
            <Route path="/services/accounts-receivable" element={<AccountsReceivable />} />

            {/* ========== DATA, REPORTING & INSIGHTS SERVICES ========== */}
            {/* Main category page already exists */}
            <Route path="/services/data-reporting" element={<DataReporting />} />
            {/* NEW SUB-SERVICES: */}
            <Route path="/services/reporting-dashboard" element={<ReportingDashboard />} />
            <Route path="/services/insights-business-intelligence" element={<InsightsBusinessIntelligence />} />

            {/* ========== 404 PAGE ========== */}
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
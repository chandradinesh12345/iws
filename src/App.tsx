import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// ✅ service pages
import WebDesign from "./pages/servicespages/WebDesign";
import SoftwareDevelopment from "./pages/servicespages/SoftwareDevelopment";
import MobileApps from "./pages/servicespages/MobileApps";
import DigitalMarketing from "./pages/servicespages/DigitalMarketing";
import SurveyWebsite from "./pages/servicespages/SurveyWebsite";
import ITConsulting from "./pages/servicespages/ITConsulting";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/iws">
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* SERVICES (Parent) */}
          <Route path="/services" element={<Services />}>
            <Route path="web-design" element={<WebDesign />} />
            <Route path="software-development" element={<SoftwareDevelopment />} />
            <Route path="mobile-apps" element={<MobileApps />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="survey-website" element={<SurveyWebsite />} />
            <Route path="it-consulting" element={<ITConsulting />} />
          </Route>


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

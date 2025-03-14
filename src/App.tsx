
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import AppDevelopment from "./pages/AppDevelopment";
import CrmSoftware from "./pages/CrmSoftware";
import CyberSecurity from "./pages/CyberSecurity";
import SeoMarketing from "./pages/SeoMarketing";
import MsmeTechSupport from "./pages/MsmeTechSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton variant="floating">Chat with us</WhatsAppButton>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/crm-software" element={<CrmSoftware />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/seo-marketing" element={<SeoMarketing />} />
          <Route path="/services/msme-tech-support" element={<MsmeTechSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

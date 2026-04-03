import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import WhyPayFlow from "@/components/WhyPayFlow";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero with functional buttons */}
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <WhyPayFlow />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
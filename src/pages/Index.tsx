import { ResizableNavbar } from "@/components/ResizableNavbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CounterSection } from "@/components/CounterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { BlogSection } from "@/components/BlogSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
//import { VideoTestimonials } from "@/components/VideoTestimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <AboutSection />
        
        <TechStackSection />
        <CounterSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useState, useCallback } from "react";
import PagePreloader from "@/components/PagePreloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import DroneSection from "@/components/DroneSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import WhatsAppBot from "@/components/WhatsAppBot";

const PRELOADER_KEY = "akairos_preloaded";

const Index = () => {
  const [preloaderDone, setPreloaderDone] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(PRELOADER_KEY) === "1";
  });

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem(PRELOADER_KEY, "1");
    setPreloaderDone(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {!preloaderDone && <PagePreloader onComplete={handlePreloaderComplete} />}

      <div className={`transition-opacity duration-700 ${preloaderDone ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main role="main">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <DroneSection />
          <AboutSection />
          <ProjectsSection />
          <CTASection />
          <ClientsSection />
        </main>
        <Footer />
        <WhatsAppBot />
      </div>
    </div>
  );
};

export default Index;

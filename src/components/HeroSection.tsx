import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${loaded ? "scale-100" : "scale-110"}`}
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 lg:pt-40">
        <div className="max-w-2xl">
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="w-10 h-0.5 bg-primary" />
            <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">
              Proyectos & Servicios
            </p>
          </div>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Excelencia en{" "}
            <span className="text-primary">Construcción</span>{" "}
            e Impermeabilización
          </h1>
          <p
            className={`text-primary-foreground/70 font-body text-lg leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Compromiso, agilidad y calidad en cada proyecto. Arquitectos e ingenieros al servicio de su edificación.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Nuestros Servicios
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-4 rounded hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Features row */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 delay-[1100ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {["Profesionales certificados", "Materiales de primera", "Garantía en servicios"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-primary-foreground/80 text-sm font-body">
                <CheckCircle className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats overlay */}
      <div className={`absolute bottom-0 right-0 hidden lg:flex transition-all duration-700 delay-[1200ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="bg-primary text-primary-foreground p-8 min-w-[200px]">
          <span className="text-5xl font-heading font-bold block">10+</span>
          <span className="text-sm font-body opacity-80 mt-1 block">Años de Experiencia</span>
        </div>
        <div className="bg-navy text-primary-foreground p-8 min-w-[200px]">
          <span className="text-5xl font-heading font-bold block">150+</span>
          <span className="text-sm font-body opacity-80 mt-1 block">Proyectos Completados</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

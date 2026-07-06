import { Phone, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10" ref={ref}>
        <div className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">¿Necesita nuestros servicios?</p>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
            ¿Cómo podemos ayudarle?
          </h2>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Si está interesado en alguna de nuestras soluciones y/o servicios, le invitamos a contactarnos y con gusto agendaremos una cita para hablar de negocios.
          </p>
        </div>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 scroll-hidden stagger-2 ${isVisible ? "scroll-visible" : ""}`}>
          <a
            href="https://wa.me/+573507318986"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            Contáctenos
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:a.riverakairos@gmail.com"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-4 rounded hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
          >
            Escríbanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

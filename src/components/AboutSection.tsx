import aboutImg from "@/assets/about-team.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative scroll-hidden-left ${isVisible ? "scroll-visible-x" : ""}`}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={aboutImg}
                alt="Equipo de trabajo Akairos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden lg:block shadow-xl">
              <span className="text-4xl font-heading font-bold block">10+</span>
              <span className="text-sm font-body opacity-90">Años de Experiencia</span>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary rounded-lg hidden lg:block -z-10" />
          </div>

          {/* Text side */}
          <div className={`scroll-hidden-right ${isVisible ? "scroll-visible-x" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">Sobre nosotros</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Compromiso y Excelencia en Cada Proyecto
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Somos una compañía que se caracteriza por su compromiso, en especial con nuestros valiosos clientes. En nuestro equipo, encontrará la combinación perfecta de agilidad y excelencia en la entrega de servicios.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Contamos con un talentoso grupo de profesionales conformado por arquitectos e ingenieros, cuyo conocimiento y experiencia son pilares fundamentales para garantizar la excelencia en la prestación de nuestros servicios.
            </p>

            <ul className="space-y-3 mb-8">
              {["Profesionales certificados", "Materiales de primera calidad", "Garantía en todos los servicios", "Atención personalizada"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-body text-sm">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Conózcanos
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

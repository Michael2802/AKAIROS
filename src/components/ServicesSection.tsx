import { useState } from "react";
import { Droplets, Building2, Layers, Wrench, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Droplets,
    title: "Impermeabilización",
    description:
      "Servicios para cubiertas, fachadas, tanques de agua, jardineras y fosos de ascensor, protegiendo su edificio o estructura.",
    details: {
      intro:
        "Protegemos su infraestructura contra filtraciones y humedad utilizando los sistemas más avanzados del mercado, garantizando durabilidad y resistencia a largo plazo.",
      items: [
        "Impermeabilización de cubiertas planas e inclinadas",
        "Tratamiento de fachadas y muros exteriores",
        "Impermeabilización de tanques de agua potable",
        "Jardineras, terrazas y áreas verdes",
        "Fosos de ascensor y sótanos",
        "Membranas asfálticas, poliuretánicas y cementicias",
      ],
      benefit: "Garantía hasta 10 años según el sistema aplicado.",
    },
  },
  {
    icon: Building2,
    title: "Obras Civiles",
    description:
      "Construcción civil, mantenimiento locativo, adecuación de espacios y pintura profesional.",
    details: {
      intro:
        "Ejecutamos proyectos de construcción y remodelación con altos estándares de calidad, cumpliendo cronogramas y presupuestos.",
      items: [
        "Construcción y ampliaciones",
        "Mantenimiento locativo preventivo y correctivo",
        "Adecuación y remodelación de espacios",
        "Pintura interior y exterior profesional",
        "Reparación de estructuras de concreto",
        "Acabados arquitectónicos",
      ],
      benefit: "Equipo de arquitectos e ingenieros certificados.",
    },
  },
  {
    icon: Layers,
    title: "Pisos Industriales",
    description:
      "Aplicación de pisos epóxicos y poliuretanos de alta calidad para mejorar la durabilidad de sus superficies.",
    details: {
      intro:
        "Soluciones de pisos de alto desempeño para industrias, bodegas, parqueaderos y zonas de alto tráfico.",
      items: [
        "Pisos epóxicos autonivelantes",
        "Recubrimientos de poliuretano resistentes a químicos",
        "Pisos antideslizantes para zonas húmedas",
        "Demarcación y señalización industrial",
        "Pulido y brillado de concreto",
        "Reparación de juntas y grietas",
      ],
      benefit: "Resistencia a impactos, químicos y alto tráfico vehicular.",
    },
  },
  {
    icon: Wrench,
    title: "Ornamentación",
    description:
      "Amplia gama de opciones ornamentales para embellecer y fortalecer su entorno.",
    details: {
      intro:
        "Diseñamos y fabricamos elementos ornamentales en metal que combinan seguridad y estética para su propiedad.",
      items: [
        "Rejas y puertas de seguridad",
        "Pasamanos y barandas decorativas",
        "Cerramientos perimetrales",
        "Estructuras metálicas a medida",
        "Pérgolas y cubiertas livianas",
        "Mantenimiento y pintura anticorrosiva",
      ],
      benefit: "Diseños personalizados según su proyecto.",
    },
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);

  const active = selected !== null ? services[selected] : null;

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">Lo que hacemos</p>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Soluciones integrales para la protección y mejora de su infraestructura
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-background border border-border rounded-lg p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 scroll-hidden-scale stagger-${i + 1} ${isVisible ? "scroll-visible-scale" : ""}`}
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{service.description}</p>
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="inline-flex items-center gap-1 text-primary text-sm font-semibold font-body hover:gap-2 transition-all"
              >
                Más info <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <active.icon className="w-7 h-7 text-primary" />
                </div>
                <DialogTitle className="text-2xl font-heading">{active.title}</DialogTitle>
                <DialogDescription className="font-body text-base leading-relaxed pt-2">
                  {active.details.intro}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <h4 className="font-heading font-semibold text-foreground mb-3">¿Qué incluye?</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {active.details.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-body text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm font-body text-foreground">
                  <span className="font-semibold text-primary">Beneficio: </span>
                  {active.details.benefit}
                </p>
              </div>

              <a
                href="#contacto"
                onClick={() => setSelected(null)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded hover:bg-primary/90 transition-all"
              >
                Solicitar cotización
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;

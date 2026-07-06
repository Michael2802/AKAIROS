import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

import conjuntoInticaya from "@/assets/projects/conjunto-inticaya.jpg";
import srChicharron from "@/assets/projects/sr-chicharron.jpg";
import kyronFarmaceutical from "@/assets/projects/kyron-farmaceutical.jpg";
import torcoroma from "@/assets/projects/torcoroma.jpg";
import kentuckyfriedchicken from "@/assets/projects/KFC.jpg";
import escuelaColRehabilitacion from "@/assets/projects/escuela-col-rehabilitacion.jpg.jpg";

const projects = [
  {
    image: conjuntoInticaya,
    title: "Conjunto Inticaya",
    category: "Impermeabilización",
    description: "Impermeabilización de tanque con materiales de alta calidad y técnicas especializadas.",
  },
  {
    image: srChicharron,
    title: "Sr. Chicharrón",
    category: "Obras Civiles",
    description: "Diseño arquitectónico, selección de materiales y planificación de la construcción.",
  },
  {
    image: kyronFarmaceutical,
    title: "Kyron Farmaceutical",
    category: "Pisos Epóxicos",
    description: "Aplicación de pisos epóxicos de alta durabilidad para entornos industriales.",
  },
  {
    image: torcoroma,
    title: "Torcoroma",
    category: "Mantenimiento",
    description: "Programa de mantenimiento completo con inspecciones y reparaciones.",
  },
  {
    image: kentuckyfriedchicken,
    title: "kentucky fried chicken",
    category: "Impermeabilización",
    description: "Impermeabilización de placa de concreto con materiales de primera calidad.",
  },
  {
    image: escuelaColRehabilitacion,
    title: "Escuela Col. Rehabilitación",
    category: "Impermeabilización",
    description: "Impermeabilización de placa para asegurar la durabilidad de la institución.",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proyectos" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">Nuestro portafolio</p>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Proyectos Realizados
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Conozca algunos de nuestros trabajos más destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-lg overflow-hidden bg-background border border-border hover:shadow-xl transition-all duration-500 scroll-hidden-scale stagger-${i + 1} ${isVisible ? "scroll-visible-scale" : ""}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded">
                {project.category}
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
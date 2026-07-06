import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Consulta y diagnóstico", desc: "Evaluamos su proyecto e identificamos las necesidades específicas de impermeabilización u obra." },
  { num: "02", title: "Diseño y planificación", desc: "Seleccionamos materiales, técnicas y elaboramos un plan de trabajo detallado." },
  { num: "03", title: "Ejecución profesional", desc: "Nuestro equipo de arquitectos e ingenieros ejecuta el proyecto con los más altos estándares." },
  { num: "04", title: "Entrega y garantía", desc: "Verificamos la calidad final y entregamos con garantía total de satisfacción." },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? "scroll-visible" : ""}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">Cómo trabajamos</p>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Nuestro Proceso
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-500 group scroll-hidden stagger-${i + 1} ${isVisible ? "scroll-visible" : ""}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-foreground text-background text-sm font-bold font-body rounded">
                  {step.num}
                </span>
                <span className="text-muted-foreground/30 text-2xl font-bold font-body uppercase">PASO</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
              {/* Left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

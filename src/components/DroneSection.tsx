import droneImg from "@/assets/drone-inspection.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Plane, Camera, Eye, FileSearch, ShieldCheck, ArrowUpRight } from "lucide-react";

const features = [
  { icon: Eye, title: "Inspección en altura", desc: "Acceso visual a fachadas y cubiertas sin andamios." },
  { icon: Camera, title: "Video 4K & fotos HD", desc: "Registro detallado con cámaras profesionales." },
  { icon: FileSearch, title: "Visita preliminar", desc: "Diagnóstico previo para cotizar con precisión." },
  { icon: ShieldCheck, title: "Seguro y rápido", desc: "Sin riesgos para personal en alturas." },
];

const DroneSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="drones" className="relative py-24 bg-navy overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative scroll-hidden-left ${isVisible ? "scroll-visible-x" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/20">
              <img
                src={droneImg}
                alt="Inspección aérea con dron en fachada de edificio"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-body font-semibold shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
                </span>
                EN VIVO · 4K
              </div>

              {/* Bottom stat */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-primary-foreground">
                <div>
                  <p className="text-xs font-body opacity-70 uppercase tracking-widest">Altitud</p>
                  <p className="text-2xl font-heading font-bold">85m</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-body opacity-70 uppercase tracking-widest">Cobertura</p>
                  <p className="text-2xl font-heading font-bold">360°</p>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-2xl hidden lg:block -z-10" />
          </div>

          {/* Content */}
          <div className={`scroll-hidden-right ${isVisible ? "scroll-visible-x" : ""}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-6">
              <Plane className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-body font-semibold tracking-widest uppercase">
                Nuevo Servicio
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Inspecciones aéreas con{" "}
              <span className="text-primary">drones</span>
            </h2>

            <p className="text-primary-foreground/70 font-body text-lg leading-relaxed mb-8">
              Revisamos el estado de su obra, fachada o cubierta con vuelos profesionales de dron.
              Ideal como <span className="text-primary-foreground font-semibold">visita preliminar</span> antes
              de cotizar o para hacer <span className="text-primary-foreground font-semibold">seguimiento del avance</span> de obra.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-primary-foreground font-heading font-semibold text-base mb-1">
                      {f.title}
                    </h4>
                    <p className="text-primary-foreground/60 text-sm font-body leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Agendar inspección con dron
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneSection;

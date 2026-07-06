import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Importa aquí las imágenes de tus clientes (ajusta rutas/nombres según tus archivos reales)

import kfcLogo from "@/assets/clients/KFC.png";
import rotorrLogo from "@/assets/clients/Rotorr.png";
import siglalogo from "@/assets/clients/Sigla.png";
import chicharronLogo from "@/assets/clients/SrChicharron.png";
import grupo7logo from "@/assets/clients/Grupo7.png";
import uniLogo from "@/assets/clients/uni.png";
import sanjoseLogo from "@/assets/clients/sanjose.png";

import pintucoLogo from "@/assets/Providers/Pintuco.png";
import BasfLogo from "@/assets/Providers/Basf.png";
import fiberglassLogo from "@/assets/Providers/Fiberglass.png";
import ToxementLogo from "@/assets/Providers/Toxement.png";
import TexsaLogo from "@/assets/Providers/Texsa.png";
import SikaLogo from "@/assets/Providers/Sika.webp";
import danosaLogo from "@/assets/Providers/Danosa.png";
import coronaLogo from "@/assets/Providers/Corona.png";




// Si tienes logos de proveedores, impórtalos igual, por ejemplo:
// import pintucoLogo from "@/assets/providers/pintuco.png";

type Logo = { name: string; image?: string; style?: string };

const clients: Logo[] = [
  { name: "KFC", image: kfcLogo },
  { name: "Sr. Chicharrón", image: chicharronLogo },
  { name: "rotorrLogo", image: rotorrLogo },
  { name: "siglaLogo", image: siglalogo },
  { name: "grupo7Logo", image: grupo7logo },
  { name: "UniversidadLogo", image: uniLogo },
  { name: "sanjoseLogo", image: sanjoseLogo },
  
  
];

const providers: Logo[] = [
  { name: "pintucoLogo", image: pintucoLogo },
  { name: "BasfLogo", image: BasfLogo },
  { name: "FiberglassLogo", image: fiberglassLogo },
  { name: "ToxementLogo", image: ToxementLogo },
  { name: "TexsaLogo", image: TexsaLogo },
  { name: "SikaLogo", image: SikaLogo },
  { name: "DanosaLogo", image: danosaLogo },
  { name: "CoronaLogo", image: coronaLogo },
];

const MarqueeRow = ({ items, direction = "left" }: { items: Logo[]; direction?: "left" | "right" }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative group">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className={`flex gap-6 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-card border border-border rounded-xl px-8 py-6 flex items-center justify-center h-28 w-52 hover:border-primary/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="max-h-16 max-w-full object-contain transition-all duration-300"
              />
            ) : (
              <span className={`text-2xl ${item.style}`}>{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const clientsAnim = useScrollAnimation();
  const providersAnim = useScrollAnimation();

  return (
    <section id="clientes" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Clients */}
        <div className="mb-20" ref={clientsAnim.ref}>
          <div className={`text-center mb-12 scroll-hidden ${clientsAnim.isVisible ? "scroll-visible" : ""}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">Confían en nosotros</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Nuestros Clientes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Empresas que han confiado en nuestra experiencia y calidad profesional</p>
          </div>
          <MarqueeRow items={clients} direction="left" />
        </div>

        {/* Providers */}
        <div ref={providersAnim.ref}>
          <div className={`text-center mb-12 scroll-hidden ${providersAnim.isVisible ? "scroll-visible" : ""}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <p className="text-primary font-body text-sm tracking-widest uppercase font-semibold">Trabajamos con los mejores</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Proveedores</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Materiales de primera calidad de marcas líderes en el mercado</p>
          </div>
          <MarqueeRow items={providers} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Newsletter bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl font-bold tracking-wider">AKAIROS</span>
          </div>
          <p className="text-primary-foreground/60 font-body text-sm text-center">
            Proyectos & Servicios — Compromiso, agilidad y excelencia en cada obra.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded hover:bg-primary/90 transition-colors"
          >
            Cotizar
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Sobre la Empresa</h4>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed mb-4">
              Somos una compañía comprometida con la excelencia en la prestación de servicios de construcción e impermeabilización.
            </p>
            <p className="text-primary font-body text-sm font-semibold">Desde 2013</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Clientes", href: "#clientes" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/60 text-sm font-body hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Dirección</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Phone */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Teléfonos</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body">+57 350 731 8986</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60 text-sm font-body">a.riverakairos@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Akairos SAS. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/40 text-xs font-body hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-primary-foreground/40 text-xs font-body hover:text-primary transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

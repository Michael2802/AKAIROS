import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Drones", href: "#drones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop changes on scroll; mobile stays solid for readability.
  const desktopSolid = scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — only when solid on desktop */}
      <div
        className={`hidden md:block text-xs font-body transition-all duration-300 overflow-hidden ${
          desktopSolid
            ? "bg-navy text-primary-foreground/70 max-h-10"
            : "bg-transparent text-primary-foreground/80 max-h-10"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-10 px-4 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Lun - Sáb / 8am - 6pm
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Bogotá, Colombia
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto: a.riverakairos@gmail.com" className="hover:text-primary transition-colors">
              a.riverakairos@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 bg-background border-b border-border shadow-sm ${
          desktopSolid
            ? "lg:bg-background/95 lg:backdrop-blur-md lg:border-border lg:shadow-sm"
            : "lg:bg-transparent lg:backdrop-blur-0 lg:border-transparent lg:shadow-none"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span
              className={`font-heading text-2xl font-bold tracking-[0.2em] transition-colors ${
                desktopSolid ? "text-foreground" : "text-foreground lg:text-primary-foreground"
              }`}
            >
              AKAIROS
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-body font-medium hover:text-primary transition-colors uppercase tracking-wide ${
                    desktopSolid ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 rounded hover:bg-primary/90 transition-colors"
            >
              Cotizar
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div
              className={`flex items-center gap-3 border-l pl-4 transition-colors ${
                desktopSolid ? "border-border" : "border-primary-foreground/20"
              }`}
            >
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p
                  className={`text-xs font-body transition-colors ${
                    desktopSolid ? "text-muted-foreground" : "text-primary-foreground/70"
                  }`}
                >
                  Llámenos
                </p>
                <p
                  className={`text-sm font-semibold font-body transition-colors ${
                    desktopSolid ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  +57 350 731 8986
                </p>
              </div>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-foreground z-[60]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile fullscreen menu */}
        <div
          className={`lg:hidden fixed inset-0 top-16 bg-background transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-6 py-8 h-full flex flex-col">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-xl font-heading font-semibold text-foreground hover:text-primary transition-colors py-4 border-b border-border"
                  >
                    {link.label}
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pb-12 space-y-4">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-4 rounded w-full"
              >
                Cotizar ahora
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +57 350 731 8986
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

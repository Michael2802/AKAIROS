import { useEffect, useState } from "react";

const PagePreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => setPhase("reveal"), 300);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 900);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  if (phase === "done") return null;

  // Stadium grass green + world cup vibe
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy overflow-hidden transition-all duration-700 ${
        phase === "reveal" ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      {/* Stadium field lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-56 border-2 border-l-0 border-white" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-56 border-2 border-r-0 border-white" />
      </div>

      {/* Confetti flags */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl animate-bounce"
            style={{
              left: `${(i * 8.5) % 100}%`,
              top: `${(i * 13) % 80}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${1.5 + (i % 3) * 0.3}s`,
            }}
          >
            {["🇨🇴", "⚽", "🏆", "🎉"][i % 4]}
          </span>
        ))}
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* Logo + soccer ball */}
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            progress > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="text-4xl animate-spin" style={{ animationDuration: "2s" }}>
              ⚽
            </span>
          </div>
          <div>
            <span className="text-primary-foreground font-heading text-3xl font-bold tracking-widest block leading-none">
              AKAIROS
            </span>
            <span className="text-primary text-[11px] font-body tracking-[0.3em] uppercase">
              Construyendo el Mundial 2026
            </span>
          </div>
        </div>

        {/* Trophy line */}
        <div
          className={`flex items-center gap-2 text-primary-foreground/80 text-sm font-body transition-all duration-700 ${
            progress > 30 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xl">🏆</span>
          <span>Calidad de campeones en cada proyecto</span>
          <span className="text-xl">🏆</span>
        </div>

        {/* Progress bar - shaped like a field */}
        <div className="w-72 relative">
          <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-green-500 via-primary to-yellow-400 rounded-full transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-xs">
                ⚽
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-primary-foreground/50 text-xs font-body tracking-widest uppercase">
              {progress < 100 ? "Calentando motores" : "¡Listos para jugar!"}
            </p>
            <span className="text-primary font-body text-xs font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Tagline reveal */}
        <p
          className={`text-primary-foreground/60 text-sm font-body tracking-wider text-center max-w-xs transition-all duration-500 ${
            progress > 50 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Como una selección campeona, en Akairos jugamos en equipo por tu obra ⚽🇨🇴
        </p>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30 transition-all duration-700 ${progress > 20 ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30 transition-all duration-700 ${progress > 40 ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30 transition-all duration-700 ${progress > 60 ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30 transition-all duration-700 ${progress > 80 ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
};

export default PagePreloader;

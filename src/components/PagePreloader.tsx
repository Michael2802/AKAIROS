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
      const t = setTimeout(() => setPhase("reveal"), 400);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 800);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden transition-all duration-700 ${
        phase === "reveal" ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0C1A2A 1px, transparent 1px), linear-gradient(to bottom, #0C1A2A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating accents */}
      <span className="absolute top-[22%] left-[18%] text-primary text-2xl animate-pulse">+</span>
      <span
        className="absolute bottom-[26%] left-[22%] w-2 h-2 rounded-full bg-red-500 animate-pulse"
        style={{ animationDelay: "0.4s" }}
      />
      <span
        className="absolute top-[28%] right-[20%] w-3 h-3 rounded-full border-2 border-primary animate-pulse"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="relative flex flex-col items-center gap-10">
        {/* Isometric blueprint scene */}
        <div className="relative w-[320px] h-[240px]">
          <svg
            viewBox="0 0 320 240"
            className="w-full h-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <clipPath id="blueprint-clip">
                {/* Rolled paper shape */}
                <path d="M40 180 L40 130 Q40 120 50 118 L240 90 Q250 88 255 96 L275 130 Q280 138 272 142 L80 195 Q68 200 60 195 Z" />
              </clipPath>
            </defs>

            {/* Blueprint paper (bottom) */}
            <g className="animate-[fadeIn_0.6s_ease-out_0.1s_both]">
              {/* Paper roll left curl */}
              <path
                d="M40 180 Q30 175 32 165 L34 128 Q36 118 46 118 L50 118 L50 175 Q50 185 40 180 Z"
                fill="#F3F5F8"
                stroke="#0C1A2A"
                strokeWidth="1.5"
              />
              {/* Main paper */}
              <path
                d="M50 118 L240 90 Q252 88 258 98 L278 132 Q283 142 273 146 L82 200 Q70 204 62 198 L44 178 Q38 170 44 165 L50 118 Z"
                fill="#FAFBFD"
                stroke="#0C1A2A"
                strokeWidth="1.5"
              />
              {/* Right paper curl */}
              <path
                d="M258 98 Q268 96 272 104 L288 134 Q292 142 284 144 L278 132 Q283 142 273 146 L268 138 Z"
                fill="#EEF1F5"
                stroke="#0C1A2A"
                strokeWidth="1.5"
              />

              {/* Blueprint lines - drawn with clip */}
              <g clipPath="url(#blueprint-clip)" stroke="#0C1A2A" strokeWidth="1.2" fill="none">
                <path
                  d="M90 155 L90 125 L180 108 L180 138 Z"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  style={{ animation: "drawLine 1.2s ease-out 0.6s forwards" }}
                />
                <path
                  d="M130 148 L130 118"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  style={{ animation: "drawLine 0.6s ease-out 1.4s forwards" }}
                />
                <path
                  d="M110 152 L110 122 M150 144 L150 114"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  style={{ animation: "drawLine 0.6s ease-out 1.6s forwards" }}
                />
                <rect
                  x="195"
                  y="105"
                  width="30"
                  height="18"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  style={{ animation: "drawLine 0.8s ease-out 1.2s forwards" }}
                />
              </g>
            </g>

            {/* Dashed measurement outline */}
            <path
              d="M80 100 L200 78 L215 92 L95 115 Z"
              fill="none"
              stroke="#0C1A2A"
              strokeWidth="1"
              strokeDasharray="4 3"
              className="animate-[fadeIn_0.5s_ease-out_0.5s_both]"
            />

            {/* Hard hat */}
            <g
              className="animate-[floatY_2.4s_ease-in-out_infinite]"
              style={{ transformOrigin: "90px 70px" }}
            >
              {/* Brim */}
              <ellipse cx="90" cy="82" rx="42" ry="10" fill="#FAFBFD" stroke="#0C1A2A" strokeWidth="1.5" />
              {/* Dome */}
              <path
                d="M58 82 Q60 50 90 46 Q120 50 122 82 Z"
                fill="#FAFBFD"
                stroke="#0C1A2A"
                strokeWidth="1.5"
              />
              {/* Ridge */}
              <path d="M90 46 L90 82" stroke="#0C1A2A" strokeWidth="1.2" fill="none" />
              <path d="M72 50 Q90 62 108 50" stroke="#0C1A2A" strokeWidth="1.2" fill="none" />
              {/* Shadow band */}
              <path d="M58 80 Q90 88 122 80" stroke="#0C1A2A" strokeWidth="1" fill="none" opacity="0.6" />
            </g>

            {/* Blue set-square (ruler triangle) */}
            <g
              className="animate-[floatY_2.4s_ease-in-out_infinite]"
              style={{ animationDelay: "0.4s", transformOrigin: "230px 60px" }}
            >
              <path
                d="M195 40 L265 40 Q272 40 272 47 L272 78 Q272 82 268 80 L192 44 Q188 42 195 40 Z"
                fill="hsl(var(--primary))"
                stroke="#0C1A2A"
                strokeWidth="1.5"
              />
              <path
                d="M205 48 L258 48 Q262 48 262 52 L262 72 Q262 74 259 72 L204 51 Q201 49 205 48 Z"
                fill="none"
                stroke="#FAFBFD"
                strokeWidth="1"
                opacity="0.7"
              />
              {/* Tick marks */}
              <g stroke="#FAFBFD" strokeWidth="1" opacity="0.8">
                <line x1="215" y1="42" x2="215" y2="46" />
                <line x1="225" y1="42" x2="225" y2="46" />
                <line x1="235" y1="42" x2="235" y2="46" />
                <line x1="245" y1="42" x2="245" y2="46" />
                <line x1="255" y1="42" x2="255" y2="46" />
              </g>
            </g>

            {/* Pencil - drawing on blueprint */}
            <g style={{ transformOrigin: "180px 110px" }}>
              <g className="animate-[pencilDraw_2.4s_ease-in-out_infinite]">
                {/* Body */}
                <path
                  d="M155 90 L215 80 L220 92 L160 102 Z"
                  fill="#FAFBFD"
                  stroke="#0C1A2A"
                  strokeWidth="1.5"
                />
                {/* Grip stripe */}
                <path d="M200 82 L215 80 L220 92 L205 94 Z" fill="hsl(var(--primary))" stroke="#0C1A2A" strokeWidth="1.2" />
                {/* Metal ferrule */}
                <path d="M198 83 L200 82 L205 94 L203 94 Z" fill="#0C1A2A" />
                {/* Tip */}
                <path d="M155 90 L145 102 L160 102 Z" fill="#FAFBFD" stroke="#0C1A2A" strokeWidth="1.5" />
                {/* Lead */}
                <path d="M148 100 L145 102 L152 101 Z" fill="#0C1A2A" />
                {/* Eraser dot (red) */}
                <circle cx="217" cy="86" r="1.6" fill="#EF4444" />
              </g>
            </g>
          </svg>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-navy font-heading text-3xl font-bold tracking-[0.25em]">
              AKAIROS
            </span>
          </div>
          <span className="text-navy/50 text-[10px] font-body tracking-[0.4em] uppercase">
            Proyectos &amp; Servicios
          </span>
        </div>

        {/* Progress */}
        <div className="w-64">
          <div className="h-[3px] bg-navy/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-navy/50 text-[10px] font-body tracking-[0.3em] uppercase">
              {progress < 100 ? "Trazando planos" : "Listo"}
            </p>
            <span className="text-navy/70 font-body text-[10px] tracking-widest">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pencilDraw {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-8px, 4px) rotate(-2deg); }
          50% { transform: translate(6px, -2px) rotate(1deg); }
          75% { transform: translate(-4px, 3px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default PagePreloader;
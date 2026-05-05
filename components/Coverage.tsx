const routes = [
  { from: "Lagos", to: "Abuja", time: "8–12 hrs" },
  { from: "Lagos", to: "Port Harcourt", time: "6–8 hrs" },
  { from: "Lagos", to: "Kano", time: "14–18 hrs" },
  { from: "Abuja", to: "Enugu", time: "4–6 hrs" },
  { from: "Lagos", to: "Ibadan", time: "1.5–3 hrs" },
  { from: "Lagos", to: "Warri", time: "6–8 hrs" },
];

const cities = [
  "Lagos",
  "Abuja",
  "Kano",
  "Port Harcourt",
  "Ibadan",
  "Enugu",
  "Kaduna",
  "Jos",
  "Benin City",
  "Warri",
  "Owerri",
  "Calabar",
  "Maiduguri",
  "Sokoto",
  "Ilorin",
  "Onitsha",
  "Abeokuta",
  "Uyo",
  "Asaba",
  "Akure",
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <div className="font-heading text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-3">
            Where We Operate
          </div>
          <h2
            className="font-display leading-none tracking-wider"
            style={{ fontSize: "clamp(2rem, 10vw, 6rem)" }}
          >
            NATIONWIDE <span className="gold-text">REACH</span>
          </h2>
        </div>

        {/* Map + Routes stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* ── Nigeria Map ── */}
          <div
            className="w-full rounded-lg p-5 sm:p-7"
            style={{
              background: "rgba(201,168,76,0.03)",
              border: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <svg
              viewBox="0 0 320 340"
              fill="none"
              className="w-full max-w-xs mx-auto sm:max-w-sm lg:max-w-none"
              style={{ display: "block" }}
            >
              <path
                d="M60 40 L80 20 L140 15 L200 20 L250 40 L280 80 L290 130 L285 180 L270 220 L260 250 L240 280 L210 310 L180 330 L160 335 L140 330 L110 310 L85 280 L65 250 L50 220 L35 180 L30 130 L40 80 Z"
                fill="rgba(201,168,76,0.06)"
                stroke="rgba(201,168,76,0.3)"
                strokeWidth="1.5"
              />
              <line
                x1="60"
                y1="100"
                x2="280"
                y2="100"
                stroke="rgba(201,168,76,0.08)"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="160"
                x2="280"
                y2="160"
                stroke="rgba(201,168,76,0.08)"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="220"
                x2="270"
                y2="220"
                stroke="rgba(201,168,76,0.08)"
                strokeWidth="1"
              />
              <line
                x1="100"
                y1="30"
                x2="100"
                y2="310"
                stroke="rgba(201,168,76,0.08)"
                strokeWidth="1"
              />
              <line
                x1="160"
                y1="20"
                x2="160"
                y2="335"
                stroke="rgba(201,168,76,0.08)"
                strokeWidth="1"
              />
              <line
                x1="220"
                y1="30"
                x2="220"
                y2="295"
                stroke="rgba(201,168,76,0.08)"
                strokeWidth="1"
              />

              {/* Route lines */}
              <line
                x1="90"
                y1="200"
                x2="165"
                y2="135"
                stroke="rgba(201,168,76,0.25)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <line
                x1="90"
                y1="200"
                x2="230"
                y2="240"
                stroke="rgba(201,168,76,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="165"
                y1="135"
                x2="215"
                y2="75"
                stroke="rgba(201,168,76,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <line
                x1="165"
                y1="135"
                x2="190"
                y2="195"
                stroke="rgba(201,168,76,0.15)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />

              {/* Lagos pulse rings */}
              <circle cx="90" cy="200" r="20" fill="rgba(201,168,76,0.04)" />
              <circle cx="90" cy="200" r="12" fill="rgba(201,168,76,0.08)" />
              <circle cx="90" cy="200" r="5" fill="var(--gold)" />
              <text
                x="100"
                y="204"
                fontSize="10"
                fill="rgba(201,168,76,0.85)"
                fontFamily="sans-serif"
                fontWeight="600"
              >
                Lagos
              </text>

              <circle cx="165" cy="135" r="4" fill="rgba(201,168,76,0.7)" />
              <text
                x="172"
                y="139"
                fontSize="9"
                fill="rgba(201,168,76,0.65)"
                fontFamily="sans-serif"
              >
                Abuja
              </text>

              <circle cx="215" cy="75" r="3.5" fill="rgba(201,168,76,0.5)" />
              <text
                x="222"
                y="79"
                fontSize="9"
                fill="rgba(201,168,76,0.5)"
                fontFamily="sans-serif"
              >
                Kano
              </text>

              <circle cx="230" cy="240" r="3.5" fill="rgba(201,168,76,0.5)" />
              <text
                x="238"
                y="244"
                fontSize="9"
                fill="rgba(201,168,76,0.5)"
                fontFamily="sans-serif"
              >
                PHC
              </text>

              <circle cx="145" cy="215" r="3" fill="rgba(201,168,76,0.4)" />
              <text
                x="152"
                y="219"
                fontSize="9"
                fill="rgba(201,168,76,0.4)"
                fontFamily="sans-serif"
              >
                Ibadan
              </text>

              <circle cx="190" cy="195" r="3" fill="rgba(201,168,76,0.4)" />
              <text
                x="197"
                y="199"
                fontSize="9"
                fill="rgba(201,168,76,0.4)"
                fontFamily="sans-serif"
              >
                Enugu
              </text>
            </svg>

            <p className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase text-center mt-4">
              All 36 States + FCT
            </p>
          </div>

          {/* ── Routes + Cities ── */}
          <div className="w-full">
            <h3 className="font-display text-2xl sm:text-3xl gold-text tracking-wider mb-4">
              POPULAR ROUTES
            </h3>
            <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
              {routes.map((r) => (
                <div
                  key={`${r.from}-${r.to}`}
                  className="flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-sm"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-heading text-sm text-[var(--chalk)] whitespace-nowrap">
                      {r.from}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="h-px w-5 sm:w-8 bg-[var(--gold)] opacity-40" />
                      <div className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-60" />
                      <div className="h-px w-5 sm:w-8 bg-[var(--gold)] opacity-40" />
                    </div>
                    <span className="font-heading text-sm text-[var(--chalk)] whitespace-nowrap">
                      {r.to}
                    </span>
                  </div>
                  <span
                    className="font-heading text-[10px] sm:text-xs px-2.5 py-1 rounded-full whitespace-nowrap ml-2 shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      color: "var(--gold)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    {r.time}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-xl sm:text-2xl gold-text tracking-wider mb-3 sm:mb-4">
              CITIES WE SERVE
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="font-heading text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "var(--mist)",
                  }}
                >
                  {c}
                </span>
              ))}
              <span
                className="font-heading text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "var(--gold)",
                }}
              >
                + More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

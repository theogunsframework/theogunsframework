const fleet = [
  {
    name: "Enclosed Carrier",
    type: "Car Transport",
    capacity: "Up to 4 vehicles",
    range: "Nationwide",
    desc: "Premium enclosed transport for luxury and high-value vehicles. Maximum protection from elements and road debris.",
  },
  {
    name: "Open Flatbed",
    type: "Multi-Vehicle",
    capacity: "Up to 8 vehicles",
    range: "Nationwide",
    desc: "Cost-effective open transport for standard cars and light vehicles. GPS-monitored every mile.",
  },
  {
    name: "Heavy Haulage Truck",
    type: "Interstate Freight",
    capacity: "Up to 30 tonnes",
    range: "All 36 States",
    desc: "Heavy-duty freight trucks for commercial cargo, machinery, and bulk goods interstate.",
  },
  {
    name: "Luxury Sedan",
    type: "Airport Hire",
    capacity: "1–3 passengers",
    range: "Lagos & Abuja",
    desc: "Mercedes-class executive sedans with professional chauffeurs for airport transfers and VIP hire.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-32 bg-[var(--carbon)] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="font-heading text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-4">Our Assets</div>
          <h2 className="font-display text-6xl lg:text-8xl text-[var(--chalk)] tracking-wider">
            THE <span className="gold-text">FLEET</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {fleet.map((f, i) => (
            <div
              key={f.name}
              className="card-hover rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
            >
              {/* Top accent */}
              <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[var(--gold)] to-transparent opacity-40" />

              {/* Vehicle illustration area */}
              <div
                className="flex items-center justify-center py-10"
                style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 100%)" }}
              >
                <svg width="120" height="70" viewBox="0 0 120 70" fill="none">
                  {i === 0 && (
                    <>
                      <rect x="5" y="30" width="110" height="30" rx="4" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.2" />
                      <path d="M20 30 L30 12 L90 12 L100 30Z" fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.25)" strokeWidth="1.2" />
                      <circle cx="28" cy="60" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.08)" />
                      <circle cx="92" cy="60" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.08)" />
                      <rect x="32" y="15" width="20" height="13" rx="2" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                      <rect x="58" y="15" width="20" height="13" rx="2" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <rect x="2" y="25" width="116" height="8" rx="2" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.2" />
                      <rect x="10" y="10" width="25" height="15" rx="2" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                      <rect x="42" y="10" width="25" height="15" rx="2" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                      <rect x="74" y="10" width="25" height="15" rx="2" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                      <circle cx="20" cy="55" r="10" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                      <circle cx="60" cy="55" r="10" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                      <circle cx="100" cy="55" r="10" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <rect x="2" y="20" width="80" height="36" rx="3" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.2" />
                      <rect x="82" y="30" width="36" height="26" rx="3" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.35)" strokeWidth="1.2" />
                      <rect x="88" y="34" width="16" height="12" rx="2" fill="rgba(201,168,76,0.12)" />
                      <circle cx="20" cy="56" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                      <circle cx="60" cy="56" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                      <circle cx="100" cy="56" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <rect x="8" y="30" width="104" height="28" rx="6" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.2" />
                      <path d="M25 30 L38 14 L80 14 L93 30Z" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.25)" strokeWidth="1.2" />
                      <rect x="40" y="18" width="16" height="10" rx="2" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                      <rect x="62" y="18" width="16" height="10" rx="2" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.2)" strokeWidth="1" />
                      <circle cx="30" cy="58" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                      <circle cx="90" cy="58" r="9" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.06)" />
                      <rect x="10" y="36" width="8" height="5" rx="1" fill="rgba(232,201,122,0.4)" />
                    </>
                  )}
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-display text-xl gold-text tracking-wide">{f.name}</div>
                    <div className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase mt-0.5">{f.type}</div>
                  </div>
                </div>

                <p className="font-heading text-sm text-[var(--mist)] leading-relaxed mb-5">{f.desc}</p>

                <div className="flex flex-wrap gap-2">
                  <span
                    className="font-heading text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", color: "var(--gold)" }}
                  >
                    {f.capacity}
                  </span>
                  <span
                    className="font-heading text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--mist)" }}
                  >
                    {f.range}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

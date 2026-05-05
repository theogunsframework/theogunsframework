"use client"
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const services = [
  {
    id: "01", title: "Car Logistics", short: "Car Transport",
    description: "We transport your car safely from door to door across Nigeria. Whether it's a luxury sedan, SUV, or family car, our enclosed and open carriers ensure zero damage during transit.",
    features: ["Door-to-door delivery", "Enclosed & open transport", "GPS tracking", "Full insurance coverage"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="22" width="40" height="18" rx="3" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" />
        <path d="M10 22 L15 10 L33 10 L38 22Z" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" />
        <circle cx="14" cy="40" r="5" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
        <circle cx="34" cy="40" r="5" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
        <rect x="16" y="13" width="7" height="7" rx="1" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <rect x="25" y="13" width="7" height="7" rx="1" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "02", title: "Motorbike Logistics", short: "Bike Transport",
    description: "Specialized motorbike transport with custom-built securing systems. From dispatch bikes to premium motorcycles — transported with expert care and delivered intact.",
    features: ["Custom securing rig", "Anti-scratch padding", "Nationwide reach", "Flexible pickup slots"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <circle cx="12" cy="36" r="7" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.08)" />
        <circle cx="36" cy="36" r="7" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="rgba(201,168,76,0.08)" />
        <path d="M12 36 L20 20 L28 20 L36 36" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" fill="none" />
        <path d="M20 20 L24 12 L32 12 L28 20" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" />
        <circle cx="12" cy="36" r="3" fill="rgba(201,168,76,0.2)" />
        <circle cx="36" cy="36" r="3" fill="rgba(201,168,76,0.2)" />
      </svg>
    ),
  },
  {
    id: "03", title: "Interstate Transportation", short: "Interstate Haulage",
    description: "Reliable interstate haulage for commercial goods, machinery, and cargo. Our fleet of modern trucks covers all 36 states with timely delivery guarantees.",
    features: ["36-state coverage", "Temperature control options", "Bulk cargo capacity", "Dedicated freight manager"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <rect x="2" y="22" width="30" height="18" rx="2" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" />
        <rect x="32" y="28" width="14" height="12" rx="2" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" />
        <circle cx="10" cy="40" r="4" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
        <circle cx="24" cy="40" r="4" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
        <circle cx="40" cy="40" r="4" stroke="rgba(201,168,76,0.6)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
      </svg>
    ),
  },
  {
    id: "04", title: "Airport Hire", short: "Airport Hire",
    description: "Premium airport transfers with meet-and-greet service, professional drivers, and luxury vehicles. Never miss a flight or wait at arrivals again.",
    features: ["Meet & greet service", "Flight monitoring", "Luxury fleet", "Corporate accounts"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <path d="M6 30 L42 18 L44 22 L24 30 L22 40 L18 40 L19 30 L8 34Z" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="44" y1="40" x2="4" y2="40" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "05", title: "Goods Importation", short: "Importation",
    description: "End-to-end importation handling — from procurement, sea/air freight, customs clearance, to last-mile delivery at your doorstep in Nigeria.",
    features: ["Customs clearance", "Sea & air freight", "Procurement support", "Duty optimization"],
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="20" width="40" height="24" rx="2" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" />
        <path d="M14 20 L14 12 L34 12 L34 20" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" fill="rgba(201,168,76,0.05)" />
        <rect x="18" y="28" width="12" height="10" rx="1" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <path d="M20 8 L24 4 L28 8" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="24" y1="4" x2="24" y2="12" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-[var(--carbon)]">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="font-heading text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-3">What We Offer</div>
          <h2 className="font-display leading-none tracking-wider" style={{ fontSize: "clamp(3rem, 12vw, 6rem)" }}>
            <span className="text-[var(--chalk)]">OUR </span>
            <span className="gold-text">SERVICES</span>
          </h2>
        </div>

        {/* ─── MOBILE: Accordion ─── */}
        <div className="lg:hidden space-y-3">
          {services.map((s, i) => (
            <div key={s.id}
              className="rounded-sm overflow-hidden"
              style={{ border: `1px solid ${mobileOpen === i ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.06)"}`, background: "rgba(255,255,255,0.02)" }}>
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0">{s.icon}</div>
                  <div>
                    <div className="font-display text-sm gold-text tracking-wider">{s.id}</div>
                    <div className="font-heading text-base text-[var(--chalk)] font-600">{s.title}</div>
                  </div>
                </div>
                <ChevronDown
                  size={18}
                  className="text-[var(--gold)] shrink-0 transition-transform duration-300"
                  style={{ transform: mobileOpen === i ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>

              {mobileOpen === i && (
                <div className="px-5 pb-5 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                  <p className="font-heading text-sm text-[var(--mist)] leading-relaxed mt-4 mb-5">{s.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 p-3 rounded-sm" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}>
                        <div className="w-1 h-1 rounded-full bg-[var(--gold)] mt-1.5 shrink-0" />
                        <span className="font-heading text-xs text-[var(--chalk)] leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="btn-gold inline-flex items-center gap-2 px-5 py-3 rounded-sm text-xs w-full justify-center">
                    Book This Service <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ─── DESKTOP: Tabs + Panel ─── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-2 mb-4">
            {services.map((s, i) => (
              <button key={s.id} onClick={() => setActive(i)}
                className={`text-left p-4 rounded-sm transition-all duration-300 border ${active === i ? "bg-[rgba(201,168,76,0.1)] border-[rgba(201,168,76,0.4)]" : "border-transparent hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.03)]"}`}>
                <div className={`font-display text-lg mb-1 ${active === i ? "gold-text" : "text-[var(--mist)]"}`}>{s.id}</div>
                <div className={`font-heading text-sm ${active === i ? "text-[var(--chalk)]" : "text-[var(--mist)]"}`}>{s.short}</div>
              </button>
            ))}
          </div>
          <div className="glass rounded-lg p-10 lg:p-14 transition-all duration-500" style={{ border: "1px solid rgba(201,168,76,0.15)", minHeight: 340 }} key={active}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">{services[active].icon}</div>
                <h3 className="font-display text-5xl gold-text tracking-wider mb-4">{services[active].title}</h3>
                <p className="font-heading text-[var(--mist)] leading-relaxed text-lg mb-8">{services[active].description}</p>
                <a href="#contact" className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm">
                  Book This Service <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {services[active].features.map((f) => (
                  <div key={f} className="p-5 rounded-sm" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                    <div className="w-1 h-1 rounded-full bg-[var(--gold)] mb-3" />
                    <div className="font-heading text-sm text-[var(--chalk)] leading-snug">{f}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

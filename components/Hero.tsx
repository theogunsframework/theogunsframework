"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Shield, Clock } from "lucide-react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0A0A0B] via-[#0f0f12] to-[#0A0A0B]" />

      <div
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-16">
        {/* Headline — scales fluidly */}
        <h1
          className="font-display leading-[0.88] tracking-wider mb-5 animate-slide-up"
          style={{
            fontSize: "clamp(4rem, 10vw, 7.5rem)",
            animationDelay: "0.2s",
          }}
        >
          <span className="block text-[var(--chalk)]">MOVE</span>
          <span className="block gold-text">ANYTHING</span>
          <span className="block text-[var(--chalk)]">ANYWHERE</span>
        </h1>

        <p
          className="font-heading text-[var(--mist)] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-8 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          Premium car & motorbike logistics, interstate transportation, airport
          hire, and importation across Nigeria — with precision and trust.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 mb-10 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#services"
            className="btn-gold px-7 py-3.5 rounded-sm text-sm flex items-center justify-center gap-2"
          >
            Explore Services <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="btn-outline px-7 py-3.5 rounded-sm text-sm text-center"
          >
            Get a Quote
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex gap-6 sm:gap-10 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { num: "500+", label: "Vehicles Moved" },
            { num: "36", label: "States Covered" },
            { num: "99%", label: "On-time Rate" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl sm:text-3xl gold-text">
                {s.num}
              </div>
              <div className="font-heading text-[9px] sm:text-xs tracking-widest text-[var(--mist)] uppercase mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile trust badges row */}
        <div
          className="flex gap-3 mt-8 lg:hidden animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { icon: Shield, label: "Fully Insured" },
            { icon: Clock, label: "24/7 Tracking" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 glass px-3 py-2 rounded-sm"
              style={{ border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <Icon size={13} className="text-[var(--gold)]" />
              <span className="font-heading text-[10px] text-[var(--chalk)] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop card — hidden on mobile */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-105">
          <div
            className="glass card-hover rounded-lg p-8 animate-float"
            style={{ border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <div className="flex justify-center mb-6">
              <svg width="280" height="140" viewBox="0 0 280 140" fill="none">
                <rect
                  x="30"
                  y="70"
                  width="220"
                  height="50"
                  rx="8"
                  fill="rgba(201,168,76,0.08)"
                  stroke="rgba(201,168,76,0.3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M70 70 L90 35 L190 35 L210 70Z"
                  fill="rgba(201,168,76,0.06)"
                  stroke="rgba(201,168,76,0.25)"
                  strokeWidth="1.5"
                />
                <rect
                  x="95"
                  y="42"
                  width="38"
                  height="22"
                  rx="3"
                  fill="rgba(201,168,76,0.1)"
                  stroke="rgba(201,168,76,0.2)"
                  strokeWidth="1"
                />
                <rect
                  x="143"
                  y="42"
                  width="38"
                  height="22"
                  rx="3"
                  fill="rgba(201,168,76,0.1)"
                  stroke="rgba(201,168,76,0.2)"
                  strokeWidth="1"
                />
                <circle
                  cx="80"
                  cy="120"
                  r="20"
                  fill="rgba(30,30,35,1)"
                  stroke="rgba(201,168,76,0.4)"
                  strokeWidth="2"
                />
                <circle
                  cx="80"
                  cy="120"
                  r="10"
                  fill="rgba(201,168,76,0.15)"
                  stroke="rgba(201,168,76,0.3)"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="120"
                  r="20"
                  fill="rgba(30,30,35,1)"
                  stroke="rgba(201,168,76,0.4)"
                  strokeWidth="2"
                />
                <circle
                  cx="200"
                  cy="120"
                  r="10"
                  fill="rgba(201,168,76,0.15)"
                  stroke="rgba(201,168,76,0.3)"
                  strokeWidth="1"
                />
                <rect
                  x="32"
                  y="80"
                  width="12"
                  height="8"
                  rx="2"
                  fill="rgba(232,201,122,0.6)"
                />
                <line
                  x1="0"
                  y1="140"
                  x2="280"
                  y2="140"
                  stroke="rgba(201,168,76,0.1)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="95"
                  x2="25"
                  y2="95"
                  stroke="rgba(201,168,76,0.3)"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="105"
                  x2="18"
                  y2="105"
                  stroke="rgba(201,168,76,0.2)"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="font-heading text-xs text-[var(--mist)] uppercase tracking-widest mb-1">
                  Active Shipment
                </div>
                <div className="font-display text-2xl gold-text">
                  Lagos → Abuja
                </div>
              </div>
              <div className="glass-dark px-3 py-1.5 rounded-full">
                <span className="font-heading text-xs text-green-400 tracking-wide">
                  ● In Transit
                </span>
              </div>
            </div>
          </div>
          <div
            className="absolute -top-5 -right-5 glass rounded-lg p-3"
            style={{ border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <Shield size={18} className="text-[var(--gold)] mb-1" />
            <div className="font-heading text-xs text-[var(--chalk)]">
              Fully Insured
            </div>
          </div>
          <div
            className="absolute -bottom-5 -left-5 glass rounded-lg p-3"
            style={{ border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <Clock size={18} className="text-[var(--gold)] mb-1" />
            <div className="font-heading text-xs text-[var(--chalk)]">
              24/7 Tracking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

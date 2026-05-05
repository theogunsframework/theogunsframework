"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Oluwafemi",
    role: "CEO, Femi Auto Dealers — Lagos",
    quote:
      "I've been using Doguns Tech Framework to ship cars from Lagos to Abuja for over a year. Not a single scratch. Their enclosed carriers are top-tier and the GPS tracking gives me peace of mind every time.",
    stars: 5,
  },
  {
    name: "Ngozi Eze",
    role: "Director, Eze Imports Ltd — Enugu",
    quote:
      "We import goods from China and the US regularly. Doguns handles our customs clearance and last-mile delivery seamlessly. The process that used to take weeks now takes days. Incredible team.",
    stars: 5,
  },
  {
    name: "Emeka Okonkwo",
    role: "General Manager, Pinnacle Logistics — Abuja",
    quote:
      "Their interstate haulage service is simply unmatched in Nigeria. Reliable, professional, and cost-effective. We moved our entire machinery fleet for our new factory with zero issues.",
    stars: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "Travel Coordinator, Northern Hotels Group — Kano",
    quote:
      "The airport hire service is exceptional. Our VIP guests are always impressed — spotless vehicles, punctual drivers, and that meet-and-greet service adds a real luxury touch.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-32 bg-[var(--carbon)] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="font-heading text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-4">Client Voices</div>
        <h2 className="font-display text-6xl lg:text-8xl text-[var(--chalk)] tracking-wider mb-20">
          WHAT THEY <span className="gold-text">SAY</span>
        </h2>

        {/* Testimonial card */}
        <div
          className="rounded-lg p-10 lg:p-16 mb-10 relative"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.15)" }}
          key={index}
        >
          {/* Quote mark */}
          <div
            className="font-display text-9xl absolute top-4 left-8 opacity-10 gold-text leading-none pointer-events-none"
            aria-hidden
          >
            &quot;
          </div>

          <div className="flex justify-center mb-6">
            {[...Array(t.stars)].map((_, i) => (
              <Star key={i} size={18} className="text-[var(--gold)]" fill="var(--gold)" />
            ))}
          </div>

          <blockquote className="font-heading text-xl lg:text-2xl text-[var(--chalk)] leading-relaxed mb-8 relative z-10">
            &quot;{t.quote}&quot;
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="font-heading font-700 text-[var(--chalk)] text-base">{t.name}</div>
            <div className="font-heading text-sm text-[var(--mist)] mt-1">{t.role}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === index ? 24 : 6,
                  height: 6,
                  background: i === index ? "var(--gold)" : "rgba(201,168,76,0.2)",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

import { Shield, Zap, MapPin, Headphones, Award, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "Every shipment covered end-to-end. Your assets are protected from pickup to final delivery.",
  },
  {
    icon: Zap,
    title: "Express Dispatch",
    desc: "Same-day and next-day dispatch options available for urgent logistics needs.",
  },
  {
    icon: MapPin,
    title: "36-State Coverage",
    desc: "We reach every state in Nigeria — from megacities to remote towns — with equal reliability.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated account managers and round-the-clock support for real-time updates and peace of mind.",
  },
  {
    icon: Award,
    title: "Certified Handlers",
    desc: "Our drivers and logistics personnel are trained, vetted, and certified to handle your cargo professionally.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. Get instant quotes and pay only for what you need.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left sticky */}
          <div className="lg:sticky lg:top-32">
            <div className="font-heading text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-4">Our Difference</div>
            <h2 className="font-display text-6xl lg:text-8xl text-[var(--chalk)] tracking-wider leading-none mb-8">
              WHY<br />
              <span className="gold-text">OGUNS</span>
            </h2>
            <p className="font-heading text-[var(--mist)] text-lg leading-relaxed max-w-md mb-10">
              We're not just another logistics company. We're a tech-powered framework built on precision, accountability, and the relentless pursuit of zero-damage deliveries.
            </p>
            <div
              className="rounded-sm p-6"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="font-display text-4xl gold-text mb-2">₦0</div>
              <div className="font-heading text-sm text-[var(--mist)]">Damage claims in the last 200 deliveries</div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="card-hover rounded-sm p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p.icon size={22} className="text-[var(--gold)] mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-base font-700 text-[var(--chalk)] mb-2">{p.title}</h3>
                <p className="font-heading text-sm text-[var(--mist)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

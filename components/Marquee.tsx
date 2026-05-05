export default function Marquee() {
  const items = [
    "Car Logistics", "●", "Motorbike Transport", "●", "Interstate Haulage", "●",
    "Airport Hire", "●", "Goods Importation", "●", "Nationwide Coverage", "●",
    "Same-Day Dispatch", "●", "Real-Time Tracking", "●",
  ];

  return (
    <div
      className="border-y py-4 overflow-hidden"
      style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
    >
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-6 font-heading text-sm tracking-widest uppercase ${
              item === "●" ? "text-[var(--gold)]" : "text-[var(--mist)]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

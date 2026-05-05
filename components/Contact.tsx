"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="font-heading text-xs tracking-[0.3em] text-[var(--gold)] uppercase mb-4">Reach Out</div>
          <h2 className="font-display text-6xl lg:text-8xl text-[var(--chalk)] tracking-wider">
            GET IN <span className="gold-text">TOUCH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <p className="font-heading text-[var(--mist)] text-lg leading-relaxed mb-10 max-w-md">
              Ready to move your vehicle, ship your goods, or book an executive transfer? Our team responds within 2 hours.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Phone, label: "Call / WhatsApp", value: "+234 816 179 4799" },
                { icon: Mail, label: "Email Us", value: "whyalwaysthatboy20@gmail.com" },
                { icon: MapPin, label: "Head Office", value: "Lagos State" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-2">
                  <div
                    className="w-7 h-7 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <c.icon size={15} className="text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase mb-0.5">{c.label}</div>
                    <div className="font-heading text-sm text-[var(--chalk)]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business hours */}
            <div
              className="rounded-sm p-6"
              style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <div className="font-heading text-xs text-[var(--gold)] tracking-widest uppercase mb-4">Business Hours</div>
              <div className="space-y-2">
                {[
                  { day: "Mon – Fri", hours: "7:00 AM – 9:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 7:00 PM" },
                  { day: "Sunday", hours: "Emergency Dispatch Only" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="font-heading text-sm text-[var(--mist)]">{h.day}</span>
                    <span className="font-heading text-sm text-[var(--chalk)]">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            className="rounded-lg p-8 lg:p-10"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.15)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-pulse-gold"
                  style={{ background: "rgba(201,168,76,0.15)", border: "2px solid rgba(201,168,76,0.4)" }}>
                  <Send size={24} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-display text-3xl gold-text tracking-wider mb-3">MESSAGE SENT</h3>
                <p className="font-heading text-[var(--mist)] max-w-xs leading-relaxed">
                  Thank you! Our team will reach out within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase block mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-sm font-heading text-sm text-[var(--chalk)] outline-none transition-all duration-300 focus:border-[rgba(201,168,76,0.5)]"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      placeholder="Adebayo Oluwaseun"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase block mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-sm font-heading text-sm text-[var(--chalk)] outline-none transition-all duration-300 focus:border-[rgba(201,168,76,0.5)]"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      placeholder="+234 80X XXX XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase block mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-sm font-heading text-sm text-[var(--chalk)] outline-none transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase block mb-2">Service Required</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-sm font-heading text-sm text-[var(--chalk)] outline-none transition-all duration-300"
                    style={{ background: "rgba(26,26,31,1)", border: "1px solid rgba(255,255,255,0.08)" }}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="car">Car Logistics</option>
                    <option value="motorbike">Motorbike Transport</option>
                    <option value="interstate">Interstate Transportation</option>
                    <option value="airport">Airport Hire</option>
                    <option value="importation">Goods Importation</option>
                  </select>
                </div>
                <div>
                  <label className="font-heading text-xs text-[var(--mist)] tracking-widest uppercase block mb-2">Message / Details</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-sm font-heading text-sm text-[var(--chalk)] outline-none transition-all duration-300 resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    placeholder="Describe your logistics need — pickup location, destination, dates..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-gold w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2">
                  Send Request <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

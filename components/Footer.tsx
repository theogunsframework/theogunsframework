import { Phone, Mail, MapPin, Globe, Share2, Link, Users } from "lucide-react";

const services = [
  "Car Logistics",
  "Motorbike Transport",
  "Interstate Haulage",
  "Airport Hire",
  "Goods Importation",
];
const quickLinks = [
  "About Us",
  "Careers",
  "Press",
  "Privacy Policy",
  "Terms of Service",
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-10"
      style={{
        background: "var(--carbon)",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="font-display text-3xl tracking-widest gold-text">
                OGUNS
              </div>
              <div className="font-heading text-xs tracking-[0.3em] text-[var(--mist)] uppercase">
                Tech Framework
              </div>
            </div>
            <p className="font-heading text-sm text-[var(--mist)] leading-relaxed max-w-xs mb-6">
              Nigeria&apos;s premier logistics and mobility platform. Moving
              vehicles, goods, and people — with precision, safety, and trust.
            </p>
            <div className="flex gap-3">
              {[Globe, Share2, Link, Users].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300 hover:border-[rgba(201,168,76,0.4)]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--mist)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-heading text-xs text-[var(--gold)] tracking-[0.2em] uppercase mb-5">
              Services
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-heading text-sm text-[var(--mist)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading text-xs text-[var(--gold)] tracking-[0.2em] uppercase mb-5">
              Contact
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <a href="tel:+2348034567890" className="flex items-start gap-2">
                  <Phone
                    size={14}
                    className="text-[var(--gold)] mt-0.5 shrink-0"
                  />
                  <span className="font-heading text-sm text-[var(--mist)]">
                    +234 816 179 4799
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <a
                  href="mailto:whyalwaysthatboy20@gmail.com"
                  className="flex items-start gap-2"
                >
                  <Mail
                    size={14}
                    className="text-[var(--gold)] mt-0.5 shrink-0"
                  />
                  <span className="font-heading text-sm text-[var(--mist)]">
                    whyalwaysthatboy20@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="text-[var(--gold)] mt-0.5 shrink-0"
                />
                <span className="font-heading text-sm text-[var(--mist)]">
                  20 Balogun Street, Lagos State, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="font-heading text-xs text-[var(--mist)] opacity-60">
            © {new Date().getFullYear()} Oguns Tech Framework Ltd. All rights
            reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            {quickLinks.slice(-2).map((l) => (
              <a
                key={l}
                href="#"
                className="font-heading text-xs text-[var(--mist)] hover:text-[var(--gold)] transition-colors duration-300 opacity-60 hover:opacity-100"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

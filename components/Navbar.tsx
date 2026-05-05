"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,11,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-widest gold-text">OGUNS</span>
          <span className="font-heading text-[10px] tracking-[0.3em] text-[var(--mist)] uppercase">Tech Framework</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-heading text-sm tracking-wide text-[var(--mist)] hover:text-[var(--gold)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="btn-gold px-6 py-2.5 text-sm rounded-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[var(--gold)] p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden glass-dark border-t border-[rgba(201,168,76,0.1)]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-heading text-base tracking-wide text-[var(--chalk)] hover:text-[var(--gold)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold px-6 py-3 text-sm rounded-sm text-center mt-2">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

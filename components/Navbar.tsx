"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/lib/AppContext";
import { supportedLocales } from "./Icons";

const navLinks = [
  { key: "about", href: "#about", num: "01" },
  { key: "skills", href: "#skills", num: "02" },
  { key: "projects", href: "#projects", num: "03" },
  { key: "contact", href: "#contact", num: "04" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === "en" ? "vi" : "en");
  const otherLocale = locale === "en" ? "VN" : "EN";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-paper/75 border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tightest text-ink"
        >
          LTK<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                <span className="font-mono text-[10px] text-ink/30 group-hover:text-accent transition-colors">
                  {link.num}
                </span>
                <span>{t.nav[link.key as keyof typeof t.nav]}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-ink/20 font-mono text-[11px] tracking-widest hover:bg-ink hover:text-paper hover:border-ink transition-all"
            aria-label="Toggle language"
          >
            <span className="text-ink/40">{locale.toUpperCase()}</span>
            <span>/</span>
            <span>{otherLocale}</span>
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-paper/95 backdrop-blur-md border-t border-ink/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-3 font-display text-2xl font-semibold text-ink"
              >
                <span className="font-mono text-xs text-ink/40">{link.num}</span>
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-ink/10">
            <div className="flex items-center gap-2">
              {supportedLocales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLocale(l.code);
                    setMobileOpen(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-full border font-mono text-[11px] tracking-widest transition-all ${
                    locale === l.code
                      ? "bg-ink text-paper border-ink"
                      : "border-ink/20 text-ink/70 hover:border-ink"
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

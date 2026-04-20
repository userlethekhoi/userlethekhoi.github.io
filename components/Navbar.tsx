"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { supportedLocales } from "./Icons";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, locale, setLocale, profile } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-slate-800 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
        >
          {profile.displayName}
        </a>

        {/* Desktop nav */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer border border-slate-200 rounded-full px-3 py-1.5 bg-white hover:border-indigo-300"
              aria-label="Switch language"
            >
              <span>{supportedLocales.find((l) => l.code === locale)?.flag}</span>
              <span className="hidden sm:inline text-xs">{locale === "en" ? "EN" : "VI"}</span>
              <span className="text-xs">▼</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-50">
                {supportedLocales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLocale(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-colors duration-150 cursor-pointer ${
                      locale === l.code
                        ? "bg-indigo-50 text-indigo-700 font-medium"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                    {locale === l.code && <span className="ml-auto text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-4 pt-2 flex flex-col gap-3 list-none m-0 bg-white border-t border-slate-100">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100 mt-1">
              {supportedLocales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLocale(l.code);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full border cursor-pointer transition-colors duration-150 ${
                    locale === l.code
                      ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 text-slate-500 hover:border-indigo-300"
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}

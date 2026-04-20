"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SocialIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const { profile, t, locale } = useApp();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  const contactNote = locale === "vi" ? profile.contactNoteVi : profile.contactNote;

  return (
    <section id="contact" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          variants={item}
          className="text-xs font-semibold tracking-widest uppercase text-slate-400"
        >
          {t.contact.label}
        </motion.span>

        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight"
        >
          {t.contact.title}
        </motion.h2>

        <motion.p variants={item} className="text-base text-slate-500 mb-10 max-w-lg leading-relaxed">
          {contactNote}
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Social */}
          <motion.div variants={item} className="flex-shrink-0 space-y-6">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
                {t.contact.findMeOnline}
              </p>
              <div className="space-y-3">
                {/* Gmail */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                >
                  <SocialIcon label="Gmail" size={18} />
                  {profile.email}
                </a>
                {/* Hotmail */}
                <a
                  href={`mailto:${profile.hotmail}`}
                  className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  <SocialIcon label="Hotmail" size={18} />
                  {profile.hotmail}
                </a>
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                  >
                    <SocialIcon label={s.label} size={16} />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={item} className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-500">
                    {t.contact.namePlaceholder}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400
                      transition-all duration-200 placeholder-slate-300"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-500">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400
                      transition-all duration-200 placeholder-slate-300"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-500">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg resize-none
                    focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400
                    transition-all duration-200 placeholder-slate-300"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="self-start px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer
                    transition-all duration-200 hover:scale-105 hover:bg-indigo-700
                    disabled:opacity-60 disabled:cursor-not-allowed
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                >
                  {loading ? t.contact.sending : t.contact.sendBtn}
                </button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-600"
                  >
                    {t.contact.success}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.fullName}. {t.footer.rights}
        </p>
        <p className="text-xs text-slate-400">
          {t.footer.credit} · {profile.footerText}
        </p>
      </motion.footer>
    </section>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

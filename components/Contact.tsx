"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SocialIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const { profile, t, locale } = useApp();

  const contactNote = locale === "vi" ? profile.contactNoteVi : profile.contactNote;

  return (
    <section id="contact" className="relative px-5 sm:px-6 py-20 md:py-36">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-ink/10 pt-12"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-12">
            <span className="section-label">› 04 / {t.contact.label}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </motion.div>

          <motion.h2
            variants={item}
            className="font-display font-bold text-[clamp(2.75rem,10vw,8rem)] leading-[0.95] tracking-tightest text-ink mb-10"
          >
            Let&apos;s build
            <br />
            something{" "}
            <em className="not-italic relative inline-block">
              <span className="relative z-10 text-accent italic">great.</span>
              <span className="absolute -inset-x-2 bottom-2 h-3 bg-mint/70 -z-0 rounded-sm" />
            </em>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-ink/60 leading-relaxed max-w-2xl mb-14"
          >
            {contactNote ||
              "Have an idea, a role, or just want to say hi? Drop a line — I reply to every message."}
          </motion.p>

          {/* Big email CTA */}
          <motion.a
            variants={item}
            href={`mailto:${profile.email}`}
            className="group inline-flex items-baseline gap-3 font-display font-semibold text-3xl md:text-5xl tracking-tightest text-ink mb-16"
          >
            <span className="text-accent">→</span>
            <span className="relative">
              {profile.email}
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </span>
          </motion.a>

          {/* Social row */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-2 md:gap-3 mb-20"
          >
            <span className="section-label mr-3">{t.contact.findMeOnline}</span>
            {[
              { label: "Gmail", url: `mailto:${profile.email}` },
              ...(profile.hotmail ? [{ label: "Hotmail", url: `mailto:${profile.hotmail}` }] : []),
              ...profile.socials.map((s) => ({ label: s.label, url: s.url })),
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/15 text-sm text-ink/80 hover:bg-ink hover:text-paper hover:border-ink transition-all"
              >
                <SocialIcon label={s.label} size={15} />
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-ink/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-display font-bold text-lg text-ink">
              LTK<span className="text-accent">.</span>
            </span>
            <p className="font-mono text-[11px] tracking-widest uppercase text-ink/40">
              © {new Date().getFullYear()} {profile.fullName}
            </p>
          </div>
          <p className="font-mono text-[11px] tracking-widest uppercase text-ink/40">
            {t.footer.credit} · Crafted with ☕ + Tailwind
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

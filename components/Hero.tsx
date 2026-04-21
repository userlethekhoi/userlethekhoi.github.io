"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  const { profile, t, locale } = useApp();
  const bio = locale === "vi" ? profile.bioVi : profile.bio;
  const title = locale === "vi" ? profile.titleVi : profile.title;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Text column */}
        <div className="md:col-span-3 space-y-7">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/60">
              {t.hero.hello} · {locale === "vi" ? "Đang nhận dự án" : "Available for work"}
            </span>
          </motion.div>

          <motion.h1
            custom={0.12}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display font-bold text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tightest text-ink"
          >
            Hi, I&apos;m
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-ink">{profile.displayName}</span>
              <svg
                aria-hidden
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute left-0 right-0 -bottom-2 w-full h-3 text-accent"
              >
                <path
                  d="M2 14 C 60 4, 140 16, 298 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            custom={0.24}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-xl md:text-2xl text-ink/80 max-w-xl leading-snug"
          >
            {title}
          </motion.p>

          <motion.p
            custom={0.32}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base md:text-lg text-ink/60 max-w-xl leading-relaxed"
          >
            {bio}
          </motion.p>

          <motion.div
            custom={0.42}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 pt-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper rounded-full font-medium text-sm hover:bg-accent transition-all duration-300 hover:gap-3"
            >
              {t.hero.viewMore}
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/20 rounded-full font-medium text-sm hover:border-ink hover:bg-ink/5 transition-all"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </div>

        {/* Avatar column with offset pastel block */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="md:col-span-2 relative max-w-sm mx-auto md:mx-0 w-full"
        >
          <div className="absolute inset-0 bg-mint rounded-[2.5rem] translate-x-5 translate-y-5 -z-10" />
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-peach -z-10" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink/5 aspect-[4/5] shadow-soft">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-8xl font-bold text-ink/20">
                {profile.displayName?.[0] ?? "K"}
              </span>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-paper border border-ink/10 rounded-2xl px-4 py-2.5 shadow-soft">
            <p className="font-mono text-[10px] text-ink/50 uppercase tracking-widest">
              Based in
            </p>
            <p className="font-display font-semibold text-sm text-ink">
              {profile.location || "Vietnam"}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute left-6 bottom-6 items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-ink/40 rotate-[-90deg] origin-left"
      >
        <span className="block w-8 h-px bg-ink/30" />
        Scroll to explore
      </motion.div>
    </section>
  );
}

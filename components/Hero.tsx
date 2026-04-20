"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  const { profile, t, locale } = useApp();
  const bio = locale === "vi" ? profile.bioVi : profile.bio;
  const title = locale === "vi" ? profile.titleVi : profile.title;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-4xl mx-auto
        bg-gradient-to-b from-white to-slate-50"
    >
      <motion.p
        custom={0.1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-sm font-medium text-slate-400 tracking-wide uppercase mb-4"
      >
        {t.hero.hello}
      </motion.p>

      <motion.h1
        custom={0.25}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 tracking-tight leading-none mb-6"
      >
        {profile.displayName}.
      </motion.h1>

      <motion.p
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-xl sm:text-2xl font-medium text-slate-600 mb-6 leading-snug"
      >
        {title}
      </motion.p>

      <motion.p
        custom={0.55}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-base text-slate-500 leading-relaxed max-w-xl mb-10"
      >
        {bio}
      </motion.p>

      <motion.div custom={0.7} initial="hidden" animate="visible" variants={fadeUp}>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full cursor-pointer
            transition-transform duration-200 hover:scale-105 hover:bg-indigo-700
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
        >
          {t.hero.viewMore}
          <span aria-hidden="true">↓</span>
        </a>
      </motion.div>
    </section>
  );
}

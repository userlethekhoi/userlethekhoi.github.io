"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SocialIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { profile, t, locale } = useApp();

  const facts: { label: string; value: string }[] = [
    { label: t.about.nationality, value: locale === "vi" ? profile.nationalityVi : profile.nationality },
    { label: t.about.birthYear, value: profile.birthYear },
    { label: t.about.hometown, value: locale === "vi" ? profile.hometownVi : profile.hometown },
    { label: t.about.location, value: profile.location },
    { label: t.about.timezone, value: profile.timezone },
    { label: "Email", value: profile.email },
  ];

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-ink/10 pt-12"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <span className="section-label">› 01 / {t.about.label}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-7 space-y-6">
              <motion.h2
                variants={item}
                className="font-display font-bold text-4xl md:text-6xl tracking-tightest leading-[1.05] text-ink"
              >
                {t.about.title}{" "}
                <span className="text-ink/30">—</span>{" "}
                <span className="text-accent">craft</span>,{" "}
                <span className="italic font-display">care</span>, and curiosity.
              </motion.h2>

              <motion.p variants={item} className="text-lg text-ink/70 leading-relaxed max-w-2xl">
                I design and build websites, apps, productivity tools, and iOS
                solutions. I care deeply about craft — writing code that is
                clean, performant, and a joy to maintain.
              </motion.p>

              <motion.p variants={item} className="text-lg text-ink/70 leading-relaxed max-w-2xl">
                Over the past years, I&apos;ve built everything from marketing
                sites and SaaS dashboards to custom tooling and automation
                scripts. I&apos;m particularly drawn to the intersection of
                engineering and design.
              </motion.p>

              <motion.p variants={item} className="text-lg text-ink/70 leading-relaxed max-w-2xl">
                When I&apos;m not at my desk, I&apos;m exploring new
                technologies, refining workflows, or working on personal
                projects. Always open to interesting collaborations.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center gap-5 pt-4">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-ink/60 hover:text-accent transition-colors"
                  >
                    <SocialIcon label={s.label} size={16} />
                    <span className="link-underline">{s.label}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.aside
              variants={item}
              className="md:col-span-5 md:border-l md:border-ink/10 md:pl-12"
            >
              <h3 className="section-label mb-5">Quick facts</h3>
              <dl className="divide-y divide-ink/10">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="grid grid-cols-[auto_1fr] items-baseline gap-4 py-3"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-ink/40 whitespace-nowrap">
                      {f.label}
                    </dt>
                    <dd className="text-sm text-ink/80 text-right font-medium truncate">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

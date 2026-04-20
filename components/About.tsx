"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SocialIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
    <span className="text-xs font-medium text-slate-400 w-24 flex-shrink-0">{label}</span>
    <span className="text-sm text-slate-700">{value}</span>
  </div>
);

export default function About() {
  const { profile, t, locale } = useApp();

  return (
    <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
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
          {t.about.label}
        </motion.span>

        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-10 tracking-tight"
        >
          {t.about.title}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Info grid */}
          <div className="flex-1 space-y-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <InfoRow label={t.about.nationality} value={locale === "vi" ? profile.nationalityVi : profile.nationality} />
            <InfoRow label={t.about.birthYear} value={profile.birthYear} />
            <InfoRow label={t.about.hometown} value={locale === "vi" ? profile.hometownVi : profile.hometown} />
            <InfoRow label={t.about.location} value={profile.location} />
            <InfoRow label={t.about.timezone} value={profile.timezone} />
            <InfoRow label="Email" value={profile.email} />

            {/* Social links */}
            <div className="pt-4 mt-2">
              <p className="text-xs font-medium text-slate-400 mb-3">Social</p>
              <div className="flex flex-wrap gap-3">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                    title={s.label}
                  >
                    <SocialIcon label={s.label} size={16} />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="flex-1 space-y-5">
            <motion.p
              variants={item}
              className="text-base text-slate-600 leading-relaxed"
            >
              I am a developer and designer specializing in websites, applications,
              productivity tools, and iOS solutions. I care deeply about craft —
              writing code that is clean, performant, and a joy to maintain.
            </motion.p>
            <motion.p
              variants={item}
              className="text-base text-slate-600 leading-relaxed"
            >
              Over the past years, I have built everything from marketing sites
              and SaaS dashboards to custom tooling and automation scripts. I am
              particularly drawn to the intersection of engineering and design.
            </motion.p>
            <motion.p
              variants={item}
              className="text-base text-slate-600 leading-relaxed"
            >
              When I am not at my desk, I am exploring new technologies,
              refining workflows, or working on personal projects. I am always
              open to interesting collaborations — feel free to reach out.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

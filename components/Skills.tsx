"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SkillIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  const { profile, t, locale } = useApp();

  const groups: { label: string; labelVi: string; names: string[] }[] = [
    {
      label: t.skills.groups.core,
      labelVi: "Core Web",
      names: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python"],
    },
    {
      label: t.skills.groups.mobile,
      labelVi: "Mobile & Native",
      names: ["React Native", "Objective-C"],
    },
    {
      label: t.skills.groups.systems,
      labelVi: "Systems",
      names: ["C", "C++", "Linux", "Ubuntu"],
    },
    {
      label: t.skills.groups.css,
      labelVi: "CSS Enhancers",
      names: ["SASS", "Tailwind CSS", "Bootstrap"],
    },
    {
      label: t.skills.groups.tools,
      labelVi: "Tools",
      names: ["Node.js", "NPM", "Git", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="relative px-5 sm:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-ink/10 pt-10 md:pt-12"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="section-label">› 02 / {t.skills.label}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </motion.div>

          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tightest leading-[1.05] text-ink mb-12 md:mb-16 max-w-3xl"
          >
            Tools &amp; technologies <br className="hidden sm:block" />
            I&apos;ve been{" "}
            <span className="text-accent italic font-display">tinkering</span>{" "}
            with.
          </motion.h2>

          <div className="space-y-10 md:space-y-12">
            {groups.map((g) => {
              const skills = profile.skills.filter((s) => g.names.includes(s.name));
              if (!skills.length) return null;
              return (
                <motion.div key={g.label} variants={item}>
                  {/* Group label */}
                  <div className="flex items-center gap-3 mb-4 md:mb-5">
                    <h3 className="section-label">
                      {locale === "vi" ? g.labelVi : g.label}
                    </h3>
                    <span className="h-px flex-1 bg-ink/10" />
                    <span className="font-mono text-[10px] tracking-widest text-ink/30">
                      {String(skills.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Tidy grid: 3/4/6 cols, uniform cells */}
                  <motion.div
                    variants={container}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-3"
                  >
                    {skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={item}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="group flex flex-col items-center justify-center gap-2.5 p-3 sm:p-4 rounded-2xl bg-paper border border-ink/10 hover:border-ink/40 hover:shadow-soft transition-all duration-300 aspect-square sm:aspect-auto sm:min-h-[108px]"
                      >
                        <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                          <SkillIcon name={skill.name} icon={skill.icon} size={36} />
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium text-ink/80 text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SkillIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
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
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-ink/10 pt-12"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <span className="section-label">› 02 / {t.skills.label}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </motion.div>

          <motion.h2
            variants={item}
            className="font-display font-bold text-4xl md:text-6xl tracking-tightest leading-[1.05] text-ink mb-16 max-w-3xl"
          >
            Tools &amp; technologies <br />
            I&apos;ve been <span className="text-accent italic font-display">tinkering</span> with.
          </motion.h2>

          <div className="space-y-10">
            {groups.map((g) => {
              const skills = profile.skills.filter((s) => g.names.includes(s.name));
              if (!skills.length) return null;
              return (
                <motion.div
                  key={g.label}
                  variants={item}
                  className="grid md:grid-cols-[220px_1fr] gap-5 md:gap-10 py-6 border-t border-ink/10 first:border-t-0 first:pt-0"
                >
                  <h3 className="section-label md:pt-2.5">
                    {locale === "vi" ? g.labelVi : g.label}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        variants={item}
                        className="pill group"
                      >
                        <span className="pill-svg">
                          <SkillIcon name={skill.name} icon={skill.icon} size={16} />
                        </span>
                        <span className="font-medium">{skill.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

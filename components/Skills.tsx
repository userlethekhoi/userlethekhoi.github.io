"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SkillIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const tag = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Skills() {
  const { profile, t } = useApp();

  return (
    <section id="skills" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          variants={tag}
          className="text-xs font-semibold tracking-widest uppercase text-slate-400"
        >
          {t.skills.label}
        </motion.span>

        <motion.h2
          variants={tag}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-10 tracking-tight"
        >
          {t.skills.title}
        </motion.h2>

        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={tag}
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-full
                transition-all duration-200 hover:border-indigo-300 hover:shadow-sm
                cursor-default"
            >
              <SkillIcon name={skill.name} icon={skill.icon} size={18} />
              <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700 transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

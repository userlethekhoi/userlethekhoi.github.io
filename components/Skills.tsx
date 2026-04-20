"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SkillIcon } from "./Icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const tag = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeOut" } },
};

const groupLabel = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

type SkillGroup = {
  label: string;
  labelVi: string;
  color: string;
  colorLight: string;
  iconColor: string;
  skills: { name: string; icon: string }[];
};

export default function Skills() {
  const { profile, t, locale } = useApp();

  const groups: SkillGroup[] = [
    {
      label: t.skills.groups.core,
      labelVi: "Công nghệ Web Cốt lõi",
      color: "text-orange-500",
      colorLight: "bg-orange-50",
      iconColor: "text-orange-400",
      skills: profile.skills.filter((s) =>
        ["HTML5", "CSS3", "JavaScript", "Python"].includes(s.name)
      ),
    },
    {
      label: t.skills.groups.css,
      labelVi: "Công cụ CSS Nâng cao",
      color: "text-blue-500",
      colorLight: "bg-blue-50",
      iconColor: "text-blue-400",
      skills: profile.skills.filter((s) =>
        ["SASS", "Tailwind CSS", "Bootstrap"].includes(s.name)
      ),
    },
    {
      label: t.skills.groups.tools,
      labelVi: "Công cụ Phát triển",
      color: "text-green-500",
      colorLight: "bg-green-50",
      iconColor: "text-green-400",
      skills: profile.skills.filter((s) =>
        ["Node.js", "NPM", "Git", "VS Code"].includes(s.name)
      ),
    },
    {
      label: t.skills.groups.frameworks,
      labelVi: "Framework & Khác",
      color: "text-purple-500",
      colorLight: "bg-purple-50",
      iconColor: "text-purple-400",
      skills: profile.skills.filter(
        (s) =>
          !["HTML5", "CSS3", "JavaScript", "Python", "SASS", "Tailwind CSS", "Bootstrap", "Node.js", "NPM", "Git", "VS Code"].includes(s.name)
      ),
    },
  ];

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

        <div className="space-y-10">
          {groups.map((group, gi) => {
            if (group.skills.length === 0) return null;
            return (
              <motion.div
                key={group.label}
                variants={container}
                className="relative"
              >
                {/* Group header */}
                <motion.div
                  variants={groupLabel}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className={`text-xs font-bold tracking-wider uppercase ${group.color} opacity-70`}>
                    {locale === "vi" ? group.labelVi : group.label}
                  </span>
                  <div className={`h-px flex-1 ${group.color.replace("text-", "bg-")} opacity-20`} />
                </motion.div>

                {/* Badge grid */}
                <motion.div
                  variants={container}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={tag}
                      className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-200 cursor-default ${group.colorLight} border-transparent hover:border-slate-200 hover:shadow-sm`}
                    >
                      <span className={`${group.iconColor} flex-shrink-0 flex items-center`}>
                        <SkillIcon name={skill.name} icon={skill.icon} size={16} />
                      </span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
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
    </section>
  );
}

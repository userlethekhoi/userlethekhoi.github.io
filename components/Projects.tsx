"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const { profile, t, locale } = useApp();

  return (
    <section id="projects" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          variants={card}
          className="text-xs font-semibold tracking-widest uppercase text-slate-400"
        >
          {t.projects.label}
        </motion.span>

        <motion.h2
          variants={card}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-10 tracking-tight"
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project) => {
            const title = locale === "vi" ? project.titleVi : project.title;
            const desc = locale === "vi" ? project.descriptionVi : project.description;
            const isPrivate = !project.github && !project.live;

            return (
              <motion.div
                key={project.id}
                variants={card}
                className="group flex flex-col p-6 bg-white border border-slate-200 rounded-2xl
                  transition-all duration-200 hover:border-indigo-200 hover:shadow-md
                  cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    {isPrivate ? (
                      <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                        <LockIcon />
                      </span>
                    ) : (
                      <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
                        <FolderIcon />
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-semibold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-slate-50 text-slate-500 rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer underline underline-offset-2"
                    >
                      {t.projects.github}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-300">{t.projects.private}</span>
                  )}
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer underline underline-offset-2"
                    >
                      {t.projects.liveDemo}
                    </a>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

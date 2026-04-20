"use client";

import Image from "next/image";
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
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
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
          className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-12 tracking-tight"
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.projects.map((project) => {
            const title = locale === "vi" ? project.titleVi : project.title;
            const desc = locale === "vi" ? project.descriptionVi : project.description;

            return (
              <motion.article
                key={project.id}
                variants={card}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden
                  transition-all duration-300 hover:border-indigo-200 hover:shadow-lg"
              >
                {/* Code Screenshot Image */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={`${title} code preview`}
                    fill
                    className="object-cover object-top opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Code editor overlay hint */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30" />
                  {/* Editor chrome dots */}
                  <div className="absolute top-3 left-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <GithubIcon />
                        {t.projects.github}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-slate-300">
                        <LockIcon />
                        {t.projects.private}
                      </span>
                    )}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <ExternalLinkIcon />
                        {t.projects.liveDemo}
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

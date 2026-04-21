"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useApp } from "@/lib/AppContext";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const accentBg = ["bg-mint", "bg-peach", "bg-butter", "bg-accent/20"];

export default function Projects() {
  const { profile, t, locale } = useApp();

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-ink/10 pt-12"
        >
          <motion.div variants={card} className="flex items-center gap-3 mb-10">
            <span className="section-label">› 03 / {t.projects.label}</span>
            <span className="h-px flex-1 bg-ink/10" />
          </motion.div>

          <motion.h2
            variants={card}
            className="font-display font-bold text-4xl md:text-6xl tracking-tightest leading-[1.05] text-ink mb-16 max-w-3xl"
          >
            {t.projects.title} <span className="text-ink/30">—</span> a few
            things I&apos;ve <span className="text-accent italic">shipped</span>.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {profile.projects.map((project, i) => {
              const title = locale === "vi" ? project.titleVi : project.title;
              const desc = locale === "vi" ? project.descriptionVi : project.description;
              const bg = accentBg[i % accentBg.length];

              return (
                <motion.article
                  key={project.id}
                  variants={card}
                  className="group relative bg-paper border border-ink/10 rounded-3xl p-5 md:p-6 hover:-translate-y-1.5 hover:shadow-soft hover:border-ink/30 transition-all duration-500"
                >
                  {/* Cover */}
                  <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl ${bg}`}>
                    <Image
                      src={project.image}
                      alt={`${title} preview`}
                      fill
                      className="object-cover object-top mix-blend-luminosity opacity-90 group-hover:scale-[1.04] group-hover:opacity-100 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-paper/90 backdrop-blur text-ink/70 px-2.5 py-1 rounded-full">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6 pb-1 px-1">
                    <h3 className="font-display text-2xl md:text-[1.75rem] font-semibold tracking-tight text-ink mb-3 leading-tight">
                      {title}
                    </h3>
                    <p className="text-[15px] text-ink/60 leading-relaxed mb-5 line-clamp-3">
                      {desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 bg-ink/5 text-ink/70 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-5 pt-5 border-t border-ink/10">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-accent transition-colors"
                        >
                          <GithubIcon />
                          <span className="link-underline">{t.projects.github}</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-ink/30">
                          <LockIcon />
                          {t.projects.private}
                        </span>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-accent transition-colors ml-auto"
                        >
                          <span className="link-underline">{t.projects.liveDemo}</span>
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

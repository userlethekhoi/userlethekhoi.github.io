"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { SocialIcon, supportedLocales } from "./Icons";
import { ProfileData, Skill, Project, SocialLink } from "@/lib/profileData";

// ─── Section wrapper ────────────────────────────────────────────────────────
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
        <h2 className="text-base font-semibold text-slate-800">{title}</h2>
      </div>
      <div className="p-6 space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg bg-white
        focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400
        transition-all duration-200 placeholder-slate-300"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg bg-white resize-none
        focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400
        transition-all duration-200 placeholder-slate-300"
    />
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <span className="text-sm text-slate-600">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
          checked ? "bg-indigo-600" : "bg-slate-200"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}

function SaveBtn({
  saving,
  saved,
  onClick,
}: {
  saving: boolean;
  saved: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onClick}
        disabled={saving}
        className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer
          hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-200"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
      <AnimatePresence>
        {saved && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-green-600 font-medium"
          >
            ✓ Saved
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Skill editor ───────────────────────────────────────────────────────────
function SkillRow({
  skill,
  index,
  onChange,
  onDelete,
}: {
  skill: Skill;
  index: number;
  onChange: (s: Skill) => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
      <Input
        value={skill.name}
        onChange={(v) => onChange({ ...skill, name: v })}
        placeholder="Skill name"
      />
      <div className="w-36 flex-shrink-0">
        <Input
          value={skill.icon}
          onChange={(v) => onChange({ ...skill, icon: v })}
          placeholder="Icon key"
        />
      </div>
      <button
        type="button"
        onClick={onDelete}
        className="flex-shrink-0 px-3 py-2 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-200"
      >
        ✕
      </button>
    </div>
  );
}

// ─── Project editor ────────────────────────────────────────────────────────
function ProjectRow({
  project,
  index,
  onChange,
  onDelete,
}: {
  project: Project;
  index: number;
  onChange: (p: Project) => void;
  onDelete: () => void;
}) {
  return (
    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400">Project {index + 1}</span>
        <button
          type="button"
          onClick={onDelete}
          className="px-3 py-1 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-200"
        >
          ✕ Remove
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Title (EN)">
          <Input
            value={project.title}
            onChange={(v) => onChange({ ...project, title: v })}
            placeholder="Project title"
          />
        </Field>
        <Field label="Title (VI)">
          <Input
            value={project.titleVi}
            onChange={(v) => onChange({ ...project, titleVi: v })}
            placeholder="Tiêu đề tiếng Việt"
          />
        </Field>
      </div>
      <Field label="Description (EN)">
        <Textarea
          value={project.description}
          onChange={(v) => onChange({ ...project, description: v })}
          placeholder="Short description in English"
        />
      </Field>
      <Field label="Description (VI)">
        <Textarea
          value={project.descriptionVi}
          onChange={(v) => onChange({ ...project, descriptionVi: v })}
          placeholder="Mô tả ngắn tiếng Việt"
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Field label="Tags (comma separated)">
          <Input
            value={project.tags.join(", ")}
            onChange={(v) => onChange({ ...project, tags: v.split(",").map((t) => t.trim()).filter(Boolean) })}
            placeholder="Private, Ongoing"
          />
        </Field>
        <Field label="GitHub URL">
          <Input
            value={project.github}
            onChange={(v) => onChange({ ...project, github: v })}
            placeholder="https://github.com/..."
          />
        </Field>
        <Field label="Live URL">
          <Input
            value={project.live}
            onChange={(v) => onChange({ ...project, live: v })}
            placeholder="https://..."
          />
        </Field>
      </div>
    </div>
  );
}

// ─── Social editor ─────────────────────────────────────────────────────────
function SocialRow({
  link,
  index,
  onChange,
  onDelete,
}: {
  link: SocialLink;
  index: number;
  onChange: (l: SocialLink) => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
      <div className="w-36 flex-shrink-0">
        <Input
          value={link.label}
          onChange={(v) => onChange({ ...link, label: v })}
          placeholder="Platform"
        />
      </div>
      <Input
        value={link.url}
        onChange={(v) => onChange({ ...link, url: v })}
        placeholder="https://..."
      />
      <button
        type="button"
        onClick={onDelete}
        className="flex-shrink-0 px-3 py-2 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-red-200"
      >
        ✕
      </button>
    </div>
  );
}

// ─── Main Admin Page ───────────────────────────────────────────────────────
export default function Admin() {
  const { profile, updateProfile, locale, setLocale } = useApp();
  const [draft, setDraft] = useState<ProfileData>(profile);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Sync draft when profile changes externally
  useEffect(() => {
    setDraft(profile);
  }, [profile]);

  function set<K extends keyof ProfileData>(key: K, value: ProfileData[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function handleSave() {
    setSaving(true);
    setSaved(false);
    setTimeout(() => {
      updateProfile(draft);
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 400);
  }

  const skills = draft.skills;
  const projects = draft.projects;
  const socials = draft.socials;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚙</span>
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-800">Profile Admin</h1>
              <p className="text-xs text-slate-400">Edit your profile content</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1.5">
              {supportedLocales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-full transition-all duration-200 cursor-pointer ${
                    locale === l.code
                      ? "bg-white text-slate-800 shadow-sm font-medium"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
            <SaveBtn saving={saving} saved={saved} onClick={handleSave} />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* Personal Info */}
        <Section title="👤 Personal Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Full Name">
              <Input value={draft.fullName} onChange={(v) => set("fullName", v)} placeholder="Nguyen Van A" />
            </Field>
            <Field label="Display Name (Logo)">
              <Input value={draft.displayName} onChange={(v) => set("displayName", v)} placeholder="Dora" />
            </Field>
            <Field label="Title (EN)">
              <Input value={draft.title} onChange={(v) => set("title", v)} placeholder="Developer & Designer" />
            </Field>
            <Field label="Title (VI)">
              <Input value={draft.titleVi} onChange={(v) => set("titleVi", v)} placeholder="Lập trình viên & Thiết kế" />
            </Field>
            <Field label="Bio (EN)">
              <Textarea value={draft.bio} onChange={(v) => set("bio", v)} placeholder="Your bio in English..." />
            </Field>
            <Field label="Bio (VI)">
              <Textarea value={draft.bioVi} onChange={(v) => set("bioVi", v)} placeholder="Giới thiệu bản thân..." />
            </Field>
            <Field label="Nationality (EN)">
              <Input value={draft.nationality} onChange={(v) => set("nationality", v)} placeholder="Vietnamese" />
            </Field>
            <Field label="Nationality (VI)">
              <Input value={draft.nationalityVi} onChange={(v) => set("nationalityVi", v)} placeholder="Việt Nam" />
            </Field>
            <Field label="Birth Year">
              <Input value={draft.birthYear} onChange={(v) => set("birthYear", v)} placeholder="2000" />
            </Field>
            <Field label="Hometown (EN)">
              <Input value={draft.hometown} onChange={(v) => set("hometown", v)} placeholder="Ho Chi Minh City" />
            </Field>
            <Field label="Hometown (VI)">
              <Input value={draft.hometownVi} onChange={(v) => set("hometownVi", v)} placeholder="Thành phố Hồ Chí Minh" />
            </Field>
            <Field label="Location">
              <Input value={draft.location} onChange={(v) => set("location", v)} placeholder="Vietnam" />
            </Field>
            <Field label="Timezone">
              <Input value={draft.timezone} onChange={(v) => set("timezone", v)} placeholder="GMT +7" />
            </Field>
            <Field label="Email">
              <Input value={draft.email} onChange={(v) => set("email", v)} placeholder="hello@example.com" />
            </Field>
          </div>
        </Section>

        {/* Social Links */}
        <Section title="🔗 Social Links">
          <div className="space-y-3">
            {socials.map((link, i) => (
              <SocialRow
                key={i}
                link={link}
                index={i}
                onChange={(l) => {
                  const updated = [...socials];
                  updated[i] = l;
                  setDraft((d) => ({ ...d, socials: updated }));
                }}
                onDelete={() => {
                  const updated = socials.filter((_, j) => j !== i);
                  setDraft((d) => ({ ...d, socials: updated }));
                }}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                const updated = [...socials, { label: "New Platform", url: "" }];
                setDraft((d) => ({ ...d, socials: updated }));
              }}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-indigo-600 border border-indigo-200 border-dashed rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer font-medium"
            >
              + Add Link
            </button>
          </div>
        </Section>

        {/* Skills */}
        <Section title="🛠 Skills">
          <p className="text-xs text-slate-400">
            Icon key options: react, nextjs, typescript, tailwind, framer, nodejs, python, git, figma, ios, docker, postgresql. Unknown keys show first letter fallback.
          </p>
          <div className="space-y-3">
            {skills.map((skill, i) => (
              <SkillRow
                key={i}
                skill={skill}
                index={i}
                onChange={(s) => {
                  const updated = [...skills];
                  updated[i] = s;
                  setDraft((d) => ({ ...d, skills: updated }));
                }}
                onDelete={() => {
                  const updated = skills.filter((_, j) => j !== i);
                  setDraft((d) => ({ ...d, skills: updated }));
                }}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                const updated = [...skills, { name: "New Skill", icon: "" }];
                setDraft((d) => ({ ...d, skills: updated }));
              }}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-indigo-600 border border-indigo-200 border-dashed rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer font-medium"
            >
              + Add Skill
            </button>
          </div>
        </Section>

        {/* Projects */}
        <Section title="📁 Projects">
          <div className="space-y-5">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.id || i}
                project={project}
                index={i}
                onChange={(p) => {
                  const updated = [...projects];
                  updated[i] = { ...p, id: p.id || `p${Date.now()}` };
                  setDraft((d) => ({ ...d, projects: updated }));
                }}
                onDelete={() => {
                  const updated = projects.filter((_, j) => j !== i);
                  setDraft((d) => ({ ...d, projects: updated }));
                }}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                const updated: Project[] = [
                  ...projects,
                  {
                    id: `p${Date.now()}`,
                    title: "New Project",
                    titleVi: "Dự Án Mới",
                    description: "Project description.",
                    descriptionVi: "Mô tả dự án.",
                    tags: [],
                    github: "",
                    live: "",
                    featured: false,
                    image: "https://picsum.photos/id/501/800/600",
                  },
                ];
                setDraft((d) => ({ ...d, projects: updated }));
              }}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-indigo-600 border border-indigo-200 border-dashed rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer font-medium"
            >
              + Add Project
            </button>
          </div>
        </Section>

        {/* Contact & Footer */}
        <Section title="💬 Contact & Footer">
          <div className="space-y-5 max-w-2xl">
            <Field label="Contact Note (EN)">
              <Textarea
                value={draft.contactNote}
                onChange={(v) => set("contactNote", v)}
                placeholder="Feel free to reach out..."
              />
            </Field>
            <Field label="Contact Note (VI)">
              <Textarea
                value={draft.contactNoteVi}
                onChange={(v) => set("contactNoteVi", v)}
                placeholder="Hãy liên hệ..."
              />
            </Field>
            <Field label="Footer Text">
              <Input
                value={draft.footerText}
                onChange={(v) => set("footerText", v)}
                placeholder="Built with Next.js & Tailwind CSS."
              />
            </Field>
          </div>
        </Section>

        {/* Save at bottom */}
        <div className="flex justify-end pb-8">
          <SaveBtn saving={saving} saved={saved} onClick={handleSave} />
        </div>
      </main>
    </div>
  );
}

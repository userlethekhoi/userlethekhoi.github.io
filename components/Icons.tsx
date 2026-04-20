"use client";

import { Locale } from "@/lib/locales";

// Colorful skill SVG icons keyed by icon name (Simple Icons style)
const SkillIcons: Record<string, string> = {
  // Core Web Technologies
  html5: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3l1.78 17.1L12 22l6.22-1.9L20 3H4z"/><path d="M8 7h8l-.27 4.77L12 13l-3.73-1.23L8.28 17H8"/><path d="M8 7l4.22-1 3.78 1 4-5"/></svg>`,
  css3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3l1.78 17.1L12 22l6.22-1.9L20 3H4z"/><path d="M17 8l-5 13-3.5-1-1.5-4"/><path d="M9 15.5l2-5 2 5"/></svg>`,
  javascript: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v4a2 2 0 0 0 2 2h4"/><path d="M12 14v1"/><path d="M15 11l-3 3-3-1"/></svg>`,
  python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9.5 2 9 4 9 4v3h3v1H8s-1.5 0-1.5 3 2 3.5 2 3.5h2v-3s-.5-3 3-3h3s3 .5 3 3v3s.5 3-2 3h-2s-2 .5-2 3.5 1.5 3 1.5 3h3v-3h-3v-1h3s1.5-.5 1.5-3V8.5C17 5.5 14.5 2 12 2z"/><circle cx="9.5" cy="6.5" r="1.5"/><circle cx="14.5" cy="17.5" r="1.5"/></svg>`,

  // CSS Enhancers
  sass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 3 6 3 11c0 3.3 1.7 6.2 4.3 7.9.3-1.2.8-2.3 1.5-3.3C8.1 14.8 8 13.7 8 12.5c0-2.5 1.5-4.5 3.5-5.5-.7-1.9-2-3.5-2-5.5 0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5c0 2-1.3 3.6-2 5.5 2 1 3.5 3 3.5 5.5 0 1.2-.1 2.3-.8 3.1.7 1 1.2 2.1 1.5 3.3C19.3 17.2 21 14.3 21 11c0-5-4-9-9-9z"/></svg>`,
  tailwind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  bootstrap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="1"/></svg>`,

  // Development Tools
  nodejs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><path d="M12 12v10"/><path d="M3 7l9 5 9-5"/></svg>`,
  npm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8v8H8z"/><path d="M8 8l4 4-4 4"/></svg>`,
  git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 12"/><path d="M6 9a9 9 0 0 0 9 3"/></svg>`,
  vscode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M8 17v4"/><path d="M16 17v4"/><path d="M9 7l-2 2 2 2"/><path d="M15 7l2 2-2 2"/></svg>`,

  // Frameworks & Libraries
  react: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>`,
  nextjs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 5v2"/><path d="M12 17v2"/><path d="M5.5 7.5L6.9 8.5"/><path d="M17.1 15.5L15.5 16.5"/><path d="M5.5 16.5L6.9 15.5"/><path d="M17.1 8.5L15.5 7.5"/></svg>`,
  typescript: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 15V9h4a3 3 0 0 1 0 6H7"/><path d="M14 13h3a2 2 0 0 1 0 4H14"/></svg>`,
  framer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  swift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V4z"/><path d="M8 8h8v8H8z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
  docker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h2v8H8z"/><path d="M14 8h2v8h-2z"/></svg>`,
  postgresql: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`,
  figma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>`,
};

export function SkillIcon({
  name,
  icon,
  size = 18,
}: {
  name: string;
  icon: string;
  size?: number;
}) {
  const svg = SkillIcons[icon];
  if (!svg) {
    return (
      <span
        className="inline-flex items-center justify-center rounded bg-slate-100 text-slate-600 text-xs font-bold flex-shrink-0"
        style={{ width: size + 6, height: size + 6, fontSize: size * 0.55 }}
      >
        {name[0]}
      </span>
    );
  }
  return (
    <span
      style={{ width: size, height: size, display: "inline-flex", flexShrink: 0 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

// Social icon SVGs
const SocialIcons: Record<string, string> = {
  Email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>`,
  GitHub: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.258.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-4.042-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  LinkedIn: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.756v.21C0 3.02.792 3 1.771 3h20.451C22.203 3 23 3.02 23 1.966V1.756C23 .774 22.203 0 22.222 0h.003z"/></svg>`,
  Facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  Telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
};

export function SocialIcon({
  label,
  size = 16,
}: {
  label: string;
  size?: number;
}) {
  const svg = SocialIcons[label];
  if (!svg) return null;
  return (
    <span
      style={{ width: size, height: size, display: "inline-flex", flexShrink: 0 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export const supportedLocales: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
];

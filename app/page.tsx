import Image from "next/image";
import { Background } from "@/components/Background";
import { Typewriter } from "@/components/Typewriter";
import { Send, Mail, MapPin, Globe, Clock, CalendarDays, Camera, MessageCircle, AtSign } from "lucide-react";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/userlethekhoi", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>, color: "hover:bg-zinc-800" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/coder09/", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>, color: "hover:bg-[#0A66C2]" },
    { name: "Facebook", href: "https://www.facebook.com/coder09", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, color: "hover:bg-[#1877F2]" },
    { name: "Telegram", href: "https://t.me/coder_009", icon: <Send className="w-5 h-5" />, color: "hover:bg-[#2AABEE]" },
    { name: "Instagram", href: "https://www.instagram.com/tkhoi.lee_dev?igsh=MXd4M2VjeTNveWdxcA%3D%3D&utm_source=qr", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, color: "hover:bg-[#E1306C]" },
    { name: "Threads", href: "https://www.threads.net/@tkhoi.lee_dev", icon: <AtSign className="w-5 h-5" />, color: "hover:bg-[#2A2A2A]" },
    { name: "TikTok", href: "https://www.tiktok.com/@tkhoi.lee_dev", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09Z" /></svg>, color: "hover:bg-[#ff0050]" },
    { name: "TikTok (Dev)", href: "https://www.tiktok.com/@coder_009", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09Z" /></svg>, color: "hover:bg-[#ff0050]" },
    { name: "Locket", href: "https://locket.cam/tkhoii009", icon: <Camera className="w-5 h-5" />, color: "hover:bg-[#FFB703]" },
    { name: "Zalo", href: "https://zalo.me/0989101241", icon: <MessageCircle className="w-5 h-5" />, color: "hover:bg-[#0068FF]" },
    { name: "Hotmail", href: "mailto:lethekhoi209@hotmail.com", icon: <Mail className="w-5 h-5" />, color: "hover:bg-[#0078D4]" },
    { name: "Gmail", href: "mailto:lethekhoi0533@gmail.com", icon: <Mail className="w-5 h-5" />, color: "hover:bg-[#EA4335]" },
  ];

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-12 overflow-x-hidden pt-10 sm:pt-12">
      <Background />

      <div className="w-full max-w-5xl z-10 glass rounded-[2.5rem] p-6 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
        {/* Subtle decorative glow inside the card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left Column: Image & Basic Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              {/* Circular Avatar */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-[4px] border-white/10 shadow-2xl group mx-auto lg:mx-0 shrink-0">
                <Image
                  src="https://i.pinimg.com/originals/51/e9/f5/51e9f56167e05d0be510e36ccdd68a75.jpg"
                  alt="Avatar"
                  fill
                  priority
                  className="rounded-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/20 to-transparent"></div>
                {/* Blinking green dot top-left to signify online status */}
                <div className="absolute top-[7%] left-[7%] w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-[4px] border-[#0B0B0F] shadow-[0_0_15px_rgba(34,197,94,0.7)] animate-pulse" />
              </div>

              <div className="flex flex-col gap-1 relative z-20">
                <p className="text-zinc-400 font-medium text-[16px]">Hi, I am</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-lg mb-2">
                  Le The Khoi
                </h1>
                <div className="text-lg text-zinc-300 font-medium h-[28px]">
                  I am <Typewriter texts={["a Software Engineer.", "a UI/UX Designer.", "an iOS Developer.", "a Tech Enthusiast."]} typingSpeed={90} deletingSpeed={50} delayBetweenTexts={2500} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-2">
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="p-2 rounded-full glass border border-white/5"><MapPin className="w-4 h-4 text-purple-400" /></div>
                <span className="font-medium text-[15px]">Thanh Hóa, Vietnam</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="p-2 rounded-full glass border border-white/5"><Globe className="w-4 h-4 text-cyan-400" /></div>
                <span className="font-medium text-[15px]">Vietnamese</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="p-2 rounded-full glass border border-white/5"><CalendarDays className="w-4 h-4 text-pink-400" /></div>
                <span className="font-medium text-[15px]">August 7th, 2009</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="p-2 rounded-full glass border border-white/5"><Clock className="w-4 h-4 text-amber-400" /></div>
                <span className="font-medium text-[15px]">GMT+7 Timezone</span>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3 px-2 pt-2">
              <h3 className="text-[13px] font-semibold text-zinc-400 tracking-wider uppercase">Skills & Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
                  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
                  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
                  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
                  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/white" },
                  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
                  { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
                  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
                  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
                  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
                  { name: "iOS", icon: "https://cdn.simpleicons.org/ios/white" },
                  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
                  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
                  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                  { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
                  { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
                  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" },
                  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                ].map((skill, index) => (
                  <span key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass border border-white/10 rounded-full text-zinc-300 hover:text-white transition-all cursor-default hover:bg-white/10 hover:-translate-y-0.5 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: About & Socials Bento Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-10">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Available for new opportunities
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed text-[17px]">
                <p>
                  Xin chào! I'm an independent developer and designer looking to build the next generation of digital experiences. Currently deep diving into modern web ecosystems and iOS architectures.
                </p>
                <p>
                  I've built everything from automated systems scripts to modern cross-platform applications. My philosophy revolves around clean code, elegant interfaces, and pushing the boundaries of user experience.
                </p>
                <p>
                  I enjoy solving complex architectural problems and optimizing workflows. If I am not meticulously aligning pixels or debugging, you'll probably find me researching AI trends or configuring my minimalist workspace.
                </p>
              </div>
            </div>

            <div className="space-y-6 mt-4">
              <h2 className="text-xl font-semibold text-white">Let's Connect</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3.5 rounded-2xl glass border border-white/10 
                               transition-all duration-300 ${link.color} hover:-translate-y-1 group hover:shadow-xl hover:shadow-black/20`}
                  >
                    <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </span>
                    <span className="text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-8 mb-4 text-center text-zinc-500 text-[14px] z-10 font-medium tracking-wide">
        Copyright © 2026. Design by Le The Khoi.
      </div>
    </main>
  );
}

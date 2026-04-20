// Profile data — edit this file or use /admin to update
// Supports both English and Vietnamese

export interface SocialLink {
  label: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string; // inline SVG path data
}

export interface Project {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface ProfileData {
  // Personal info
  fullName: string;
  displayName: string;
  title: string;
  titleVi: string;
  bio: string;
  bioVi: string;
  nationality: string;
  nationalityVi: string;
  birthYear: string;
  hometown: string;
  hometownVi: string;
  location: string;
  timezone: string;

  // Social
  socials: SocialLink[];
  email: string;

  // Skills
  skills: Skill[];

  // Projects
  projects: Project[];

  // Contact
  contactNote: string;
  contactNoteVi: string;
  footerText: string;
}

export const defaultProfile: ProfileData = {
  fullName: "Le The Khoi",
  displayName: "Khoi",
  title: "Developer & Designer",
  titleVi: "Lập trình viên & Thiết kế",
  bio: "I am a developer and designer of websites, applications, tools, and cheating software iOS. DM Active time: 7am to 10pm, GMT +7.",
  bioVi: "Tôi là developer và designer về websites, ứng dụng, công cụ và phần mềm hack iOS. Thời gian nhận tin nhắn: 7h sáng đến 10h tối, GMT +7.",
  nationality: "Vietnamese",
  nationalityVi: "Việt Nam",
  birthYear: "2009",
  hometown: "Thanh Hoa",
  hometownVi: "Thanh Hóa",
  location: "Vietnam",
  timezone: "GMT +7",

  socials: [
    { label: "GitHub", url: "https://github.com/kdus09" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/coder09/" },
    { label: "Facebook", url: "https://www.facebook.com/coder09" },
    { label: "Instagram", url: "https://www.instagram.com/tkhoi.lee_dev" },
    { label: "Twitter", url: "https://x.com/khoile28572" },
    { label: "TikTok", url: "https://www.tiktok.com/@tkhoi.lee_dev" },
    { label: "TikTok", url: "https://www.tiktok.com/@coder_009" },
    { label: "Telegram", url: "https://t.me/coder_009" },
  ],
  email: "lethekhoi0533@gmail.com\nlethekhoi209@hotmail.com",

  skills: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "Git", icon: "git" },
    { name: "Figma", icon: "figma" },
    { name: "iOS / Swift", icon: "ios" },
    { name: "Docker", icon: "docker" },
    { name: "PostgreSQL", icon: "postgresql" },
  ],

  projects: [
    {
      id: "p1",
      title: "Private Project Alpha",
      titleVi: "Dự Án Riêng Alpha",
      description: "An ongoing private project — details not yet disclosed. Reach out if you are interested.",
      descriptionVi: "Dự án riêng đang phát triển — chi tiết chưa được công bố. Liên hệ nếu bạn quan tâm.",
      tags: ["Private", "Ongoing"],
      github: "",
      live: "",
      featured: false,
    },
    {
      id: "p2",
      title: "Internal Tooling Suite",
      titleVi: "Bộ Công Cụ Nội Bộ",
      description: "A suite of custom internal tools built for personal workflow optimization and productivity.",
      descriptionVi: "Bộ công cụ nội bộ được xây dựng để tối ưu hóa quy trình làm việc cá nhân.",
      tags: ["Private", "Tools"],
      github: "",
      live: "",
      featured: false,
    },
    {
      id: "p3",
      title: "iOS Bypass Experiments",
      titleVi: "Thử Nghiệm Bypass iOS",
      description: "Experimental iOS tools and automation scripts for research purposes.",
      descriptionVi: "Các công cụ và script tự động hóa iOS thử nghiệm cho mục đích nghiên cứu.",
      tags: ["iOS", "Research"],
      github: "",
      live: "",
      featured: false,
    },
  ],

  contactNote:
    "Have a project in mind or just want to say hello? Feel free to reach out. I typically respond within 24 hours.",
  contactNoteVi:
    "Bạn có dự án cần hợp tác hoặc chỉ muốn trò chuyện? Hãy liên hệ. Tôi thường phản hồi trong vòng 24 giờ.",
  footerText: "Built with Next.js & Tailwind CSS.",
};

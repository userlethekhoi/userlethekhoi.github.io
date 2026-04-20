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
  image: string;
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
  bio: "A developer and designer passionate about crafting clean, performant web and mobile experiences. I specialize in building modern applications that balance beautiful design with robust engineering.",
  bioVi: "Một developer và designer đam mê tạo ra những trải nghiệm web và di động hiện đại, sạch sẽ và hiệu năng cao. Tôi chuyên xây dựng ứng dụng kết hợp giữa thiết kế đẹp và kỹ thuật vững chắc.",
  nationality: "Vietnamese",
  nationalityVi: "Việt Nam",
  birthYear: "2009",
  hometown: "Thanh Hoa",
  hometownVi: "Thanh Hóa",
  location: "Vietnam",
  timezone: "GMT +7",

  socials: [
    { label: "Email", url: "mailto:lethekhoi0533@gmail.com" },
    { label: "GitHub", url: "https://github.com/kdus09" },
    { label: "Telegram", url: "https://t.me/coder_009" },
    { label: "Facebook", url: "https://www.facebook.com/coder09" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/coder09/" },
  ],
  email: "lethekhoi0533@gmail.com",

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
      title: "Personal Portfolio",
      titleVi: "Portfolio Cá Nhân",
      description: "A modern, minimalist portfolio website showcasing my work and skills. Built with Next.js, Tailwind CSS, and Framer Motion.",
      descriptionVi: "Website portfolio hiện đại, tối giản giới thiệu công việc và kỹ năng. Xây dựng với Next.js, Tailwind CSS và Framer Motion.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/kdus09/coder009.github.io",
      live: "https://kdus09.github.io/coder009.github.io",
      featured: true,
      image: "https://picsum.photos/id/101/800/600",
    },
    {
      id: "p2",
      title: "iOS Automation Tools",
      titleVi: "Công Cụ Tự Động Hóa iOS",
      description: "A suite of automation tools for iOS devices, focusing on workflow optimization and productivity enhancement.",
      descriptionVi: "Bộ công cụ tự động hóa cho thiết bị iOS, tập trung vào tối ưu hóa quy trình làm việc.",
      tags: ["Swift", "iOS", "Automation", "Scripting"],
      github: "",
      live: "",
      featured: true,
      image: "https://picsum.photos/id/201/800/600",
    },
    {
      id: "p3",
      title: "Productivity Dashboard",
      titleVi: "Dashboard Quản Lý Công Việc",
      description: "A personal productivity dashboard with task management, time tracking, and analytics. Clean interface with real-time updates.",
      descriptionVi: "Dashboard năng suất cá nhân với quản lý công việc, theo dõi thời gian và phân tích. Giao diện sạch sẽ với cập nhật thời gian thực.",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      github: "",
      live: "",
      featured: true,
      image: "https://picsum.photos/id/301/800/600",
    },
    {
      id: "p4",
      title: "Modern Landing Page",
      titleVi: "Trang Landing Page SaaS",
      description: "A sleek, conversion-focused landing page template for SaaS products. Fully responsive with smooth animations.",
      descriptionVi: "Template landing page hiện đại, tối ưu chuyển đổi cho sản phẩm SaaS. Responsive hoàn hảo với animation mượt mà.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "",
      live: "",
      featured: true,
      image: "https://picsum.photos/id/401/800/600",
    },
  ],

  contactNote:
    "Have a project in mind or just want to say hello? Feel free to reach out. I typically respond within 24 hours.",
  contactNoteVi:
    "Bạn có dự án cần hợp tác hoặc chỉ muốn trò chuyện? Hãy liên hệ. Tôi thường phản hồi trong vòng 24 giờ.",
  footerText: "Built with Next.js & Tailwind CSS.",
};

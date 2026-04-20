// Locale strings — English and Vietnamese

export type Locale = "en" | "vi";

export interface LocaleStrings {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    language: string;
  };
  hero: {
    hello: string;
    viewMore: string;
  };
  about: {
    label: string;
    title: string;
    nationality: string;
    birthYear: string;
    hometown: string;
    location: string;
    timezone: string;
  };
  skills: {
    label: string;
    title: string;
    groups: {
      core: string;
      css: string;
      tools: string;
      frameworks: string;
    };
  };
  projects: {
    label: string;
    title: string;
    github: string;
    liveDemo: string;
    private: string;
  };
  contact: {
    label: string;
    title: string;
    findMeOnline: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    message: string;
    sendBtn: string;
    sending: string;
    success: string;
  };
  footer: {
    rights: string;
    credit: string;
  };
}

export const locales: Record<Locale, LocaleStrings> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
    },
    hero: {
      hello: "Hello, I am",
      viewMore: "View more",
    },
    about: {
      label: "About",
      title: "About me",
      nationality: "Nationality",
      birthYear: "Born",
      hometown: "From",
      location: "Location",
      timezone: "Timezone",
    },
    skills: {
      label: "Skills",
      title: "What I work with",
      groups: {
        core: "Core Web Technologies",
        css: "CSS Enhancers",
        tools: "Development Tools",
        frameworks: "Frameworks & More",
      },
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      github: "View on GitHub",
      liveDemo: "Live Demo",
      private: "Private",
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      findMeOnline: "Find me online",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Tell me about your project...",
      message: "Message",
      sendBtn: "Send Message",
      sending: "Sending...",
      success: "Message sent! I will get back to you soon.",
    },
    footer: {
      rights: "All rights reserved.",
      credit: "Designed & Developed",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      contact: "Liên hệ",
      language: "Ngôn ngữ",
    },
    hero: {
      hello: "Xin chào, tôi là",
      viewMore: "Xem thêm",
    },
    about: {
      label: "Giới thiệu",
      title: "Về tôi",
      nationality: "Quốc tịch",
      birthYear: "Sinh năm",
      hometown: "Quê quán",
      location: "Địa điểm",
      timezone: "Múi giờ",
    },
    skills: {
      label: "Kỹ năng",
      title: "Những gì tôi làm",
      groups: {
        core: "Công nghệ Web Cốt lõi",
        css: "Công cụ CSS Nâng cao",
        tools: "Công cụ Phát triển",
        frameworks: "Framework & Khác",
      },
    },
    projects: {
      label: "Dự án",
      title: "Dự án đã làm",
      github: "Xem GitHub",
      liveDemo: "Xem trực tiếp",
      private: "Riêng tư",
    },
    contact: {
      label: "Liên hệ",
      title: "Cùng làm việc",
      findMeOnline: "Tìm tôi trên",
      namePlaceholder: "Tên của bạn",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "Kể về dự án của bạn...",
      message: "Tin nhắn",
      sendBtn: "Gửi tin nhắn",
      sending: "Đang gửi...",
      success: "Đã gửi! Tôi sẽ phản hồi sớm nhất có thể.",
    },
    footer: {
      rights: "Mọi quyền được bảo lưu.",
      credit: "Thiết kế & Phát triển",
    },
  },
};

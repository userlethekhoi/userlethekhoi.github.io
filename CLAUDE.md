# CLAUDE.md — Personal Profile (GitHub Pages)

## 1. Mục tiêu dự án

Xây dựng lại trang profile cá nhân `userlethekhoi.github.io` với:

- **Giữ nguyên cấu trúc** (sections & thông tin) của trang hiện tại: Hero → About → Skills → Projects → Contact, kèm toggle ngôn ngữ EN/VN.
- **Thiết kế lại 100% giao diện**: không sao chép UI cũ. Hướng tới phong cách **modern, clean, tinh tế** — lấy cảm hứng từ `www.sketch.com__ref=godly.png` (generous whitespace, typography mạnh, pastel accents, soft shadows, micro-interactions).
- Stack: **HTML + Tailwind CSS + Vanilla JS** (static, deploy trực tiếp lên GitHub Pages).
- **Responsive hoàn hảo** trên mobile / tablet / desktop / ultrawide.

---

## 2. Cấu trúc thư mục đề xuất

```
profile/
├── index.html              # Entry chính (single-page)
├── assets/
│   ├── img/
│   │   ├── avatar.jpg      # Ảnh đại diện
│   │   ├── og-cover.png    # Open Graph preview
│   │   └── projects/       # Ảnh thumbnail project
│   ├── icons/              # SVG icons (skills, social)
│   └── favicon.svg
├── css/
│   └── styles.css          # Custom utilities ngoài Tailwind
├── js/
│   ├── main.js             # Khởi tạo, scroll, animations
│   ├── i18n.js             # Toggle EN/VN + dữ liệu dịch
│   └── data.js             # Dữ liệu projects / skills (tách khỏi DOM)
├── tailwind.config.js      # Config Tailwind + theme custom
├── package.json
└── README.md
```

> Lưu ý: build output Tailwind → `css/styles.css` (đã include cả `@tailwind base/components/utilities`).

---

## 3. Hướng dẫn setup Tailwind

```bash
npm init -y
npm install -D tailwindcss@latest
npx tailwindcss init
```

**tailwind.config.js**:

```js
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        ink: "#0B0B0F",
        paper: "#FAFAF7",
        accent: "#7C5CFF",   // violet nhẹ
        mint: "#B8F2D4",
        peach: "#FFD6B8",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20,20,40,0.12)",
      },
    },
  },
  plugins: [],
};
```

Build dev:
```bash
npx tailwindcss -i ./css/input.css -o ./css/styles.css --watch
```

Deploy GitHub Pages: push vào branch `main` → Settings → Pages → Source `/ (root)`.

---

## 4. Design system mới (khác hẳn trang cũ)

- **Palette**: nền `#FAFAF7` (paper), chữ `#0B0B0F` (ink), điểm nhấn `violet #7C5CFF` + pastel `mint/peach` cho tag & highlight.
- **Typography**: `Space Grotesk` cho heading (có weight 700), `Inter` cho body, `JetBrains Mono` cho tag tech.
- **Spacing**: generous — `py-24 md:py-32`, heading dùng `text-5xl md:text-7xl tracking-tight`.
- **Motion**: fade-up khi scroll (IntersectionObserver), hover cards có `transition-transform translate-y-[-4px]`.
- **Layout**: asymmetric grid, divider mảnh `border-t border-ink/10`, section-label kiểu `› 01 / ABOUT` ở góc trái.
- **Cursor**: custom blob cursor (optional, JS).

---

## 5. Chi tiết từng section

### 5.1 Navbar (sticky)

```html
<nav class="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-paper/70 border-b border-ink/5">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="#" class="font-display font-bold text-lg tracking-tight">LTK.</a>
    <ul class="hidden md:flex gap-8 text-sm font-medium">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="lang-toggle" class="px-3 py-1.5 rounded-full border border-ink/20 text-xs font-mono hover:bg-ink hover:text-paper transition">
      EN / VN
    </button>
  </div>
</nav>
```

### 5.2 Hero — name + title + bio + language toggle

- Layout: 2 cột desktop (text trái 60%, avatar + shape trang trí phải 40%), 1 cột mobile.
- Avatar: bo `rounded-[2rem]`, có khối pastel offset phía sau (`absolute -z-10 bg-mint rounded-[2rem] translate-x-4 translate-y-4`).
- Tên: `text-6xl md:text-8xl font-display font-bold tracking-tighter`.
- Title gạch dưới bằng đường vẽ SVG highlight màu `accent`.

```html
<section class="min-h-screen flex items-center px-6 pt-32 pb-20">
  <div class="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
    <div class="md:col-span-3 space-y-6">
      <span class="font-mono text-xs tracking-widest text-ink/60">› AVAILABLE FOR WORK</span>
      <h1 class="font-display font-bold text-6xl md:text-8xl leading-[0.95] tracking-tighter">
        Hi, I'm <br/>
        <span class="text-accent">Le The Khoi</span>.
      </h1>
      <p data-i18n="hero.bio" class="text-lg md:text-xl text-ink/70 max-w-xl leading-relaxed">
        {{BIO_SHORT}}
      </p>
      <div class="flex gap-3 pt-4">
        <a href="#projects" class="px-6 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition">View work →</a>
        <a href="#contact" class="px-6 py-3 border border-ink/20 rounded-full font-medium hover:border-ink transition">Let's talk</a>
      </div>
    </div>
    <div class="md:col-span-2 relative">
      <div class="absolute inset-0 bg-mint rounded-[2rem] translate-x-4 translate-y-4 -z-10"></div>
      <img src="assets/img/avatar.jpg" class="rounded-[2rem] w-full aspect-[4/5] object-cover shadow-soft" alt="Avatar"/>
    </div>
  </div>
</section>
```

### 5.3 About

- Section-label `› 01 / ABOUT` góc trái.
- Heading to, chia 2 cột: cột trái paragraph bio dài, cột phải info quick facts (Location, Role, Focus, Stack) dạng `<dl>` monospace.
- Nền phụ: divider trên dưới, không card.

### 5.4 Skills — phân loại

- 3 nhóm: **Languages**, **Frameworks & Tools**, **Design & Others**.
- Mỗi skill render dạng **pill** `px-4 py-2 rounded-full border border-ink/15 hover:bg-ink hover:text-paper`, kèm SVG icon nhỏ 16px.
- Layout: flex-wrap, group được tách bằng label mono bên trái (desktop 2 cột: label cố định bên trái, pills bên phải).

```html
<div class="grid md:grid-cols-[200px_1fr] gap-6 py-8 border-t border-ink/10">
  <h3 class="font-mono text-xs tracking-widest text-ink/60">LANGUAGES</h3>
  <div class="flex flex-wrap gap-2">
    <span class="pill">JavaScript</span>
    <span class="pill">TypeScript</span>
    <!-- ... -->
  </div>
</div>
```

### 5.5 Projects — card + tech

- Grid `md:grid-cols-2 gap-8`, mỗi card:
  - Ảnh cover `aspect-[4/3] rounded-2xl overflow-hidden` + hover `scale-105`.
  - Title `text-2xl font-display`.
  - Mô tả ngắn.
  - Tech tags mono nhỏ.
  - Link: Demo / GitHub (underline animation).
- Card style: `group bg-paper border border-ink/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-soft transition`.

### 5.6 Contact

- Heading khổng lồ full-width: `Let's build<br/>something <em class="text-accent not-italic">great.</em>`
- Email CTA lớn `mailto:` với underline động.
- Social icons (GitHub, LinkedIn, Facebook, Email) hàng ngang, hover đổi sang `accent`.
- Footer nhỏ: `© 2026 Le The Khoi — Made with Next.js + Tailwind`.

---

## 6. Placeholder dữ liệu

```js
// js/data.js
export const profile = {
  name: "Le The Khoi",
  title: {
    en: "Frontend Developer & UI Enthusiast",
    vn: "Lập trình viên Frontend & Người yêu UI",
  },
  bio: {
    en: "I design and build clean, accessible web experiences...",
    vn: "Tôi thiết kế và xây dựng các trải nghiệm web tinh gọn...",
  },
  avatar: "assets/img/avatar.jpg",
  location: "Ho Chi Minh City, Vietnam",
  email: "lethekhoi0533@gmail.com",
  social: {
    github: "https://github.com/ltkhoidzvcl",
    linkedin: "https://linkedin.com/in/...",
    facebook: "https://facebook.com/...",
  },
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"],
  tools: ["Git", "Figma", "VS Code", "Vercel", "Firebase"],
};

export const projects = [
  {
    title: "Project One",
    cover: "assets/img/projects/one.png",
    description: {
      en: "A short punchy description of what this project does.",
      vn: "Mô tả ngắn về dự án này.",
    },
    tech: ["React", "Tailwind", "Firebase"],
    demo: "https://...",
    repo: "https://github.com/...",
  },
  // ... placeholder thêm 3-4 item
];
```

---

## 7. i18n (EN/VN toggle)

- Lưu ngôn ngữ trong `localStorage.lang`.
- Mỗi text cần dịch gắn `data-i18n="key.path"`.
- `i18n.js` đọc object, walk DOM, thay `textContent`.
- Nút toggle hiển thị ngôn ngữ **đang sẽ chuyển sang** (nếu đang EN thì hiện `VN`).

---

## 8. Checklist hoàn thành

- [ ] Semantic HTML5 (`<header> <main> <section> <footer>`).
- [ ] Lighthouse ≥ 95 cả 4 tiêu chí.
- [ ] Meta OG + Twitter card.
- [ ] `prefers-reduced-motion` tắt animation.
- [ ] Focus states rõ ràng (a11y).
- [ ] Favicon + `robots.txt` + `sitemap.xml`.
- [ ] Test mobile 360px, tablet 768px, desktop 1440px, ultrawide 1920px.

---

## 9. Lệnh nhanh

```bash
# Dev
npx tailwindcss -i ./css/input.css -o ./css/styles.css --watch

# Serve local
npx serve .

# Deploy
git add . && git commit -m "deploy" && git push origin main
```

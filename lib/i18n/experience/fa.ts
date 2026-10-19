import type { ExperienceSection } from "../types";

// Newest first. Copy one object to add a new position.
export const experienceFa: ExperienceSection = {
  eyebrow: "سوابق کاری",
  title: "تجربه کاری من.",
  description: "مسیری که در آن رابط‌های سریع، دقیق و قابل نگهداری برای محصولات واقعی ساخته‌ام.",
  currentLabel: "مشغول به کار",
  emptyText: "سوابق کاری به‌زودی اضافه می‌شود.",
  items: [
    {
      role: "توسعه‌دهنده ارشد فرانت‌اند",
      company: "همکاری مستقل",
      period: "۱۴۰۳ — اکنون",
      location: "دورکاری",
      description: "توسعه وب‌سایت‌ها و پلتفرم‌های تحت وب برای مشتریان داخلی و خارجی؛ از معماری پروژه تا تحویل نهایی.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      current: true,
    },
    {
      role: "توسعه‌دهنده React و Next.js",
      company: "تیم محصول",
      period: "۱۴۰۱ — ۱۴۰۳",
      location: "تهران",
      description: "پیاده‌سازی رابط کاربری محصولات، ساخت کامپوننت‌های قابل استفاده مجدد و بهبود عملکرد صفحات.",
      stack: ["React", "Next.js", "React Query"],
    },
    {
      role: "توسعه‌دهنده رابط کاربری",
      company: "استودیو وب",
      period: "۱۳۹۹ — ۱۴۰۱",
      location: "تهران",
      description: "تبدیل طرح‌ها به صفحات واکنش‌گرا و دسترس‌پذیر و همکاری نزدیک با تیم طراحی.",
      stack: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],
};

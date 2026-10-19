import type { ExperienceSection } from "../types";


// Newest first. Copy one object to add a new position.
export const experienceFa: ExperienceSection = {
  eyebrow: "سوابق کاری",
  title: "تجربه کاری من.",
  description:
    "توسعه و نگهداری محصولات تحت وب، ساخت کامپوننت‌های قابل استفاده مجدد و پیاده‌سازی رابط‌های کاربری مقیاس‌پذیر با تمرکز بر کیفیت کد و تجربه کاربری.",
  currentLabel: "آخرین موقعیت شغلی",
  emptyText: "سوابق کاری به‌زودی اضافه می‌شود.",

  items: [
    {
      role: "توسعه‌دهنده فرانت‌اند",
      company: "سپیدور | هلدینگ هوش مصنوعی پارس ایرانیان",
      period: "مهر ۱۴۰۴ — تیر ۱۴۰۵",
      location: "تهران",
      description:
        "توسعه و نگهداری دو محصول سازمانی Mail و Drive با استفاده از Next.js، React و TypeScript. پیاده‌سازی فرم‌های پیچیده و اعتبارسنجی داده‌ها با React Hook Form و Zod، مدیریت وضعیت کلاینت با Zustand و مدیریت داده‌های سرور و کش با React Query. همکاری با تیم بک‌اند برای یکپارچه‌سازی APIها و توسعه یک Shared Package مبتنی بر Storybook شامل کامپوننت‌های ماژولار و قابل استفاده مجدد با هدف افزایش یکپارچگی رابط کاربری و بهبود تجربه توسعه‌دهندگان.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "shadcn/ui",
        "Zustand",
        "React Query",
        "React Hook Form",
        "Zod",
        "Storybook",
      ],
      current: false,
    },

    {
      role: "توسعه‌دهنده فرانت‌اند",
      company: "سجایانگار | شرکت دانش‌بنیان",
      period: "فروردین ۱۴۰۳ — فروردین ۱۴۰۴",
      location: "تهران",
      description:
        "طراحی و توسعه رابط کاربری پلتفرم‌های آموزشی ویژه رزمندگان با تمرکز بر تجربه کاربری، واکنش‌گرایی و عملکرد. همکاری مستمر با تیم بک‌اند در جلسات روزانه و فرآیندهای چابک (Agile)، مشارکت در تحلیل و پیاده‌سازی قابلیت‌های آموزشی محصولات سازمانی و استفاده از راهکارهای امنیتی مرتبط با سرویس‌ها و فایل‌ها.",
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Material UI",
        "API Integration",
        "Agile",
      ],
    },

    {
      role: "توسعه‌دهنده فرانت‌اند",
      company: "Peyk",
      period: "بهمن ۱۴۰۰ — دی ۱۴۰۲",
      location: "انگلستان",
      description:
        "توسعه رابط کاربری وب‌سایت شرکتی به‌صورت کاملاً واکنش‌گرا با استفاده از Bootstrap و پیاده‌سازی پنل ربات با React و WebSocket. مشارکت در توسعه رابط‌های تعاملی و ارتباط بلادرنگ میان کلاینت و سرور.",
      stack: [
        "React",
        "JavaScript",
        "Bootstrap",
        "HTML",
        "CSS",
        "WebSocket",
        "Responsive Design",
      ],
    },
  ],
};


import type { Locale } from "./config";

export type IconName =
  | "code"
  | "layout"
  | "layers"
  | "zap"
  | "pin"
  | "mail"
  | "phone"
  | "github"
  | "linkedin"
  | "telegram"
  | "file";

export type Accent = "lime" | "coral" | "sky";

export interface Project {
  readonly title: string;
  readonly category: string;
  readonly year: string;
  readonly description: string;
  readonly url: string;
  readonly image?: string;
  readonly accent: Accent;
}

export interface Post {
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
  readonly readTime: string;
  readonly tag: string;
}

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location?: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly current?: boolean;
}

export interface ExperienceSection {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly currentLabel: string;
  readonly emptyText: string;
  readonly items: readonly Experience[];
}

export interface NavItem {
  readonly path: string;
  readonly label: string;
}

export interface SocialLink {
  readonly icon: IconName;
  readonly label: string;
  readonly href: string;
}

export interface ContactItem {
  readonly icon: IconName;
  readonly label: string;
  readonly value: string;
  readonly href?: string;
  readonly ltr?: boolean;
}

export interface Service {
  readonly icon: IconName;
  readonly title: string;
  readonly description: string;
}

export interface PageMeta {
  readonly title: string;
  readonly description: string;
}

export interface PageIntroText {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly count?: string;
}

export interface ContactFormText {
  readonly title: string;
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
  readonly placeholder: string;
  readonly submit: string;
  readonly successTitle: string;
  readonly successText: string;
}

export interface Dictionary {
  readonly locale: Locale;
  readonly meta: PageMeta;
  readonly shell: {
    readonly brand: string;
    readonly homeLabel: string;
    readonly skip: string;
    readonly mainNav: string;
    readonly mobileNav: string;
    readonly openMenu: string;
    readonly cta: string;
    readonly nav: readonly NavItem[];
    readonly themeToggle: string;
    readonly backToTop: string;
    readonly languageName: string;
    readonly switchLanguage: string;
    readonly footerTitle: string;
    readonly footerHighlight: string;
    readonly footerText: string;
    readonly quickLinks: string;
    readonly contact: string;
    readonly copyright: string;
  };
  readonly profile: {
    readonly name: string;
    readonly initials: string;
    readonly role: string;
    readonly resume: string;
    readonly socialLabel: string;
    readonly aboutTitle: string;
    readonly about: readonly string[];
    readonly servicesTitle: string;
    readonly ctaPortfolio: string;
    readonly ctaContact: string;
    readonly socialLinks: readonly SocialLink[];
    readonly contactItems: readonly ContactItem[];
    readonly services: readonly Service[];
  };
  readonly common: {
    readonly readMore: string;
    readonly readArticle: string;
    readonly viewSite: string;
  };
  readonly home: {
    readonly projectsEyebrow: string;
    readonly projectsTitle: string;
    readonly projectsDescription: string;
    readonly viewAll: string;
    readonly blogEyebrow: string;
    readonly blogTitle: string;
  };
  readonly about: {
    readonly meta: PageMeta;
    readonly intro: PageIntroText;
    readonly location: string;
    readonly storyLabel: string;
    readonly storyTitle: string;
    readonly storyText: string;
    readonly storyCta: string;
    readonly skillsEyebrow: string;
    readonly skillsTitle: string;
    readonly skillsDescription: string;
    readonly skills: readonly string[];
  };
  readonly portfolio: {
    readonly meta: PageMeta;
    readonly intro: PageIntroText;
    readonly ctaTitle: string;
    readonly ctaButton: string;
  };
  readonly blog: {
    readonly meta: PageMeta;
    readonly intro: PageIntroText;
    readonly newsletterEyebrow: string;
    readonly newsletterTitle: string;
    readonly newsletterForm: string;
    readonly emailLabel: string;
    readonly emailPlaceholder: string;
    readonly subscribe: string;
  };
  readonly contact: {
    readonly meta: PageMeta;
    readonly intro: PageIntroText;
    readonly channels: string;
    readonly details: readonly (readonly [string, string])[];
    readonly form: ContactFormText;
  };
  readonly experience: ExperienceSection;
  readonly projects: readonly Project[];
  readonly posts: readonly Post[];
}

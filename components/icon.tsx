import type { IconName } from "@/lib/i18n/types";

const paths: Readonly<Record<IconName, string>> = {
  code: "M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 6l-3 12",
  layout: "M4 5h16v14H4zM4 9h16M9 9v10",
  layers: "M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4",
  zap: "M13 3L5 13h6l-1 8 8-10h-6l1-8z",
  pin: "M12 21s-6-5.6-6-11a6 6 0 1112 0c0 5.4-6 11-6 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone:
    "M7 3h3l1.5 4.5-2 1.5a11 11 0 005.5 5.5l1.5-2L21 14v3a2 2 0 01-2 2A16 16 0 015 5a2 2 0 012-2z",
  github:
    "M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
  linkedin:
    "M4 4h16v16H4zM8 10v6M8 7.5v.01M12 16v-6M12 13a2.5 2.5 0 015 0v3",
  telegram: "M21 4L3 11l6 2.5M21 4l-3 16-9-6.5M21 4L9 13.5V19l3-3.5",
  download: "M12 4v11M7 10l5 5 5-5M5 20h14",
};

interface IconProps {
  readonly name: IconName;
  readonly className?: string;
}

export function Icon({ name, className = "size-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="inline-block ltr:rotate-180">
      ←
    </span>
  );
}

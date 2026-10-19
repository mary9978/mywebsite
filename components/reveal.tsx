import type { ReactNode } from "react";

export type AosAnimation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "flip-up";

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly animation?: AosAnimation;
  readonly delay?: number;
}

export function Reveal({ children, className, animation = "fade-up", delay }: RevealProps) {
  return (
    <div className={className} data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
}

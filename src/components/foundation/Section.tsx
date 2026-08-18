import React from "react";

export type SectionPadding = "none" | "sm" | "md" | "lg" | "xl";
export type SectionBackground = "default" | "subtle" | "alternate";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padding?: SectionPadding;
  background?: SectionBackground;
  id?: string;
}

const paddingStyles: Record<SectionPadding, string> = {
  none: "py-0",
  sm: "py-s32 md:py-s48",
  md: "py-s48 md:py-s80",
  lg: "py-s80 md:py-s128",
  xl: "py-s128 md:py-s160",
};

const backgroundStyles: Record<SectionBackground, string> = {
  default: "bg-transparent",
  subtle: "bg-brand-warm dark:bg-brand-dark/30",
  alternate: "bg-brand-white dark:bg-brand-dark/80",
};

export const Section = ({
  as: Component = "section",
  padding = "md",
  background = "default",
  className = "",
  children,
  id,
  ...props
}: SectionProps) => {
  return (
    <Component
      id={id}
      className={`w-full overflow-hidden transition-colors duration-250 ${paddingStyles[padding]} ${backgroundStyles[background]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

Section.displayName = "Section";
export default Section;

import React from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "lead"
  | "body"
  | "body-sm"
  | "caption";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TypographyVariant;
}

const variantMapping: Record<TypographyVariant, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

const stylesMapping: Record<TypographyVariant, string> = {
  display: "text-display font-bold tracking-tight leading-[0.98] text-foreground",
  h1: "text-display font-bold tracking-tight leading-[0.98] text-foreground",
  h2: "text-section-heading font-semibold tracking-tight leading-[1.04] text-foreground",
  h3: "text-subheading font-semibold tracking-tight leading-[1.08] text-foreground",
  h4: "text-project-heading font-semibold tracking-tight leading-[1.1] text-foreground",
  lead: "text-body-lead font-normal leading-[1.5] text-brand-secondary max-w-[640px]",
  body: "text-body font-normal leading-[1.5] text-foreground max-w-[640px]",
  "body-sm": "text-small-text font-normal leading-relaxed text-brand-secondary",
  caption: "text-micro-label font-semibold tracking-[0.2em] uppercase text-brand-secondary",
};

export const Typography = ({
  as,
  variant = "body",
  className = "",
  children,
  ...props
}: TypographyProps) => {
  const Component = as || variantMapping[variant];
  const variantStyles = stylesMapping[variant];

  return (
    <Component className={`${variantStyles} ${className}`} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";
export default Typography;

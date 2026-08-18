import React from "react";
import NextLink from "next/link";

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: "default" | "animated" | "none";
}

export const Link = ({
  href,
  children,
  className = "",
  variant = "default",
  ...props
}: LinkProps) => {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  // V1 color system for premium links
  const baseStyles =
    "transition-editorial inline-flex items-center text-brand-secondary hover:text-brand-dark dark:hover:text-brand-warm";

  const variantStyles = {
    none: "",
    default:
      "underline underline-offset-4 decoration-brand-border hover:decoration-brand-dark dark:hover:decoration-brand-warm",
    animated:
      "relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-brand-accent dark:after:bg-brand-warm after:transition-transform after:duration-250 after:ease-out hover:after:scale-x-100",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={combinedClassName} {...props}>
      {children}
    </NextLink>
  );
};

Link.displayName = "Link";
export default Link;

import React, { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles with transition-editorial and strong typography
    const baseStyles =
      "inline-flex items-center justify-center font-semibold tracking-wide transition-editorial focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    // Rounded styling rules based on variant (text variant has no rounding)
    const roundedClass = variant === "text" ? "rounded-none" : "rounded-button";

    // Visual theme-aware color palette variants
    const variantStyles = {
      primary:
        "bg-foreground text-background hover:opacity-90 active:scale-[0.98]",
      secondary:
        "bg-transparent text-foreground border border-brand-border hover:bg-foreground/[0.04] active:scale-[0.98]",
      text: "bg-transparent text-foreground p-0 border-0 hover:opacity-80 active:translate-x-0.5",
    };

    // Responsive comfortable padding sizes
    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wider uppercase gap-1.5",
      md: "h-11 px-6 text-sm gap-2",
      lg: "h-13 px-8 text-base gap-2.5",
    };

    const isText = variant === "text";

    // Sophisticated sliding arrow for text buttons if no icon is supplied
    const defaultRightIcon = isText ? (
      <svg
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ) : null;

    const actualRightIcon = rightIcon || defaultRightIcon;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`group ${baseStyles} ${roundedClass} ${variantStyles[variant]} ${
          isText ? "" : sizeStyles[size]
        } ${className}`}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && actualRightIcon && (
          <span className="inline-flex shrink-0">{actualRightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

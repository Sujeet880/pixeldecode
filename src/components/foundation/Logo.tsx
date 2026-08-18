import React from "react";

export const Logo = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-brand-dark dark:text-brand-warm ${className}`}
      {...props}
    >
      {/* Modern minimal geometric emblem representing Pixel Decode */}
      <rect width="28" height="28" rx="6" fill="currentColor" />
      {/* Abstract geometric 'P' and 'D' using positive/negative space */}
      <path
        d="M8 8H17C18.6569 8 20 9.34315 20 11C20 12.6569 18.6569 14 17 14H8V8Z"
        fill="var(--background)"
      />
      <rect x="8" y="14" width="4" height="6" fill="var(--background)" />
      <circle cx="15.5" cy="15.5" r="2.2" fill="#1E3A5F" />
    </svg>
  );
};

Logo.displayName = "Logo";
export default Logo;

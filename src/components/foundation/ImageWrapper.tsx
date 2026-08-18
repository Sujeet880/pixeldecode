"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export interface ImageWrapperProps extends Omit<ImageProps, "className"> {
  wrapperClassName?: string;
  className?: string;
  aspectRatio?: "1:1" | "4:3" | "16:9" | "21:9" | "auto";
  hoverEffect?: "none" | "zoom" | "fade";
  radius?: "small" | "large" | "none";
}

const aspectRatios = {
  "1:1": "aspect-[1/1]",
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-[16/9]",
  "21:9": "aspect-[21/9]",
  auto: "",
};

const radiusClasses = {
  none: "rounded-none",
  small: "rounded-small-ui",
  large: "rounded-large-ui",
};

export const ImageWrapper = ({
  wrapperClassName = "",
  className = "",
  aspectRatio = "auto",
  hoverEffect = "none",
  radius = "large",
  src,
  alt,
  fill,
  width,
  height,
  ...props
}: ImageWrapperProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const hoverClasses = {
    none: "",
    zoom: "transition-transform duration-350 ease-out group-hover:scale-105",
    fade: "transition-opacity duration-350 ease-out group-hover:opacity-90",
  };

  // If using fill or custom aspect ratio, use the Next.js layout='fill' equivalent behavior
  const isFill = fill || aspectRatio !== "auto";

  return (
    <div
      className={`group relative overflow-hidden bg-brand-border/20 dark:bg-zinc-800/40 border border-brand-border/40 ${
        radiusClasses[radius]
      } ${aspectRatio !== "auto" ? aspectRatios[aspectRatio] : ""} ${wrapperClassName}`}
    >
      {/* Skeleton loader displaying until image onLoad triggers */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-brand-border/30 dark:bg-zinc-850" />
      )}

      <Image
        src={src}
        alt={alt}
        fill={isFill}
        width={isFill ? undefined : width}
        height={isFill ? undefined : height}
        onLoad={() => setIsLoaded(true)}
        className={`object-cover transition-all duration-300 ${
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        } ${hoverClasses[hoverEffect]} ${className}`}
        {...props}
      />
    </div>
  );
};

ImageWrapper.displayName = "ImageWrapper";
export default ImageWrapper;

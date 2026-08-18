import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  fluid?: boolean;
}

export const Container = ({
  as: Component = "div",
  fluid = false,
  className = "",
  children,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={`mx-auto w-full px-5 md:px-8 lg:px-12 ${
        fluid ? "max-w-full" : "max-w-[1320px]"
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

Container.displayName = "Container";
export default Container;

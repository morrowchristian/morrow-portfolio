// src/components/Container/Container.tsx
import React, { forwardRef } from "react";
import "./Container.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`container ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

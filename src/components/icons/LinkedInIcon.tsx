// src/components/icons/LinkedInIcon.tsx
import React from "react";

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.75v2.25h.07c.66-1.25 2.27-2.56 4.68-2.56C22.33 7.69 24 10.1 24 14.31V24h-5v-8c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27V24H7.5V8z"/>
  </svg>
);

export default LinkedInIcon;

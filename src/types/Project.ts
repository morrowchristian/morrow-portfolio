// src/types/Project.ts
export interface Project {
    id: string;               // Unique ID for mapping lists
    title: string;            // Project name
    summary: string;          // Short description
    techStack: string[];      // Array of technologies used
    link?: string;            // Optional link to project demo or repo
    image?: string;           // Optional image URL or path
  }
  
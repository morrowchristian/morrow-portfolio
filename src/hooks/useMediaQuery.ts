// src/hooks/useMediaQuery.ts
import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Guard for environments without window (SSR, tests)
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch(); // Initial check

    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

/* TODO (useMediaQuery)
- Add server-safe fallback for SSR environments
- Add support for multiple queries (returning an object)
- Add breakpoint tokens (e.g., "md", "lg") mapped to query strings
- Add event throttling for performance on resize
*/

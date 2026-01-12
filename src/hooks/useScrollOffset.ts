// src/hooks/useScrollOffset.ts
import { useEffect, useState } from "react";

export const useScrollOffset = (threshold = 16) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    onScroll(); // Set initial state
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isScrolled;
};

/* TODO (useScrollOffset)
- Add direction detection (scrolling up vs down)
- Add velocity detection for advanced nav behavior
- Add throttling or requestAnimationFrame for performance
- Add support for custom scroll containers
*/

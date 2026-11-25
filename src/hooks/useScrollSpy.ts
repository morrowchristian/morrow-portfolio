import { useEffect, useState } from "react";

/**
 * Scroll-spy via IntersectionObserver. The section whose band crosses the
 * middle of the viewport is active. rootMargin "-45% 0px -50% 0px" makes
 * the active zone a thin strip just above the viewport center, so the
 * highlight switches as a section's top passes the middle — not on the
 * first pixel of overlap. `refreshKey` (e.g. the route) re-queries the
 * DOM and re-observes, since the navbar stays mounted across routes
 * while the sections unmount and remount.
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  refreshKey: string = "",
): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sectionIds, refreshKey]);

  return activeId;
}

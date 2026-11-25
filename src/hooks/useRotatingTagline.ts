import { useEffect, useMemo, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1800;

/**
 * Types a phrase character by character, holds, deletes, and moves to the
 * next phrase. If the user prefers reduced motion, the first phrase is
 * shown statically with no animation at all.
 */
export function useRotatingTagline(phrases: readonly string[]): string {
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const current = phrases[index] ?? "";
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && text === current) {
      delay = HOLD_MS;
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, phrases, reducedMotion]);

  return reducedMotion ? (phrases[0] ?? "") : text;
}

import { useEffect } from "react";

interface SectionsConfig {
  id: string;
  threshold: number;
  rootMargin?: string;
}

/**
 *  Tracks which section of the page is currently in view, and updates the link accordingly using the Intersection Observer API.
 *
 * @param setActiveLink - Callback function to set the active link based on the visible section's ID.
 * @param sectionsConfig - Array of configuration objects for each section, including `id` and `threshold`, and optional `rootMargin`
 * @param manualOverride - Boolean flag to prevent automatic updates to the active link (e.g., during manual scrolling).
 *
 * @example
 * useActiveSection(setActiveLink, [
 *  {id: 'about', threshold: 0.5},
 *  {id: 'projects', threshold: 0.5},], isManuallyScrolling);
 */

export function useActiveSection(
  setActiveLink: (link: string) => void,
  sectionsConfig: SectionsConfig[],
  isManuallyScrolling: boolean
) {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionsConfig.forEach(({ id, threshold, rootMargin }) => {
      const targetSection = document.getElementById(id);
      if (!targetSection) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry && entry.isIntersecting && !isManuallyScrolling) {
            setActiveLink(id);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(targetSection);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionsConfig, setActiveLink, isManuallyScrolling]);
}
import { type MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function useParallax(
  sectionRef: React.RefObject<HTMLElement | null>,
  distance: number,
) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

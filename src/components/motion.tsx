"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ComponentType, forwardRef } from "react";

// Create a type for the motion component props
type MotionProps = HTMLMotionProps<"div">;

// Create a proper motion wrapper component
export const Motion = forwardRef<HTMLDivElement, MotionProps>((props, ref) => {
  return <motion.div ref={ref} {...props} />;
});

// Add display name for better debugging
Motion.displayName = "Motion";

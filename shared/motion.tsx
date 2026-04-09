"use client";

/**
 * Lightweight Framer Motion wrappers for scroll-triggered animations.
 * Import these in Server Components — they are the only client boundary needed.
 */

import { motion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ── FadeIn ─────────────────────────────────────────────────────────────
   Fades + slides a single element into view on scroll.
   direction: "up" | "down" | "left" | "right" | "none"
*/
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  style?: CSSProperties;
  amount?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  className,
  style,
  amount = 0.15,
}: FadeInProps) {
  const yMap = { up: 28, down: -28, left: 0, right: 0, none: 0 };
  const xMap = { up: 0, down: 0, left: 28, right: -28, none: 0 };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: yMap[direction], x: xMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerContainer + StaggerItem ─────────────────────────────────────
   Parent/child stagger: items animate in sequence as the container
   enters the viewport.
*/
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  amount?: number;
}

export function StaggerContainer({
  children,
  className,
  style,
  amount = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function StaggerItem({ children, className, style }: StaggerItemProps) {
  return (
    <motion.div className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* ── ScaleIn ─────────────────────────────────────────────────────────────
   Subtle scale + fade for cards and badges.
*/
export function ScaleIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

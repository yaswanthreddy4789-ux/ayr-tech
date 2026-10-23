"use client";

import { MotionConfig, motion, type Variants } from "motion/react";
import {
  Accessibility, ArrowUpRight, Blocks, Check, Globe, LayoutTemplate, PanelsTopLeft, Plug, RefreshCw,
  Rocket, Search, ShieldCheck, ShoppingBag, ShoppingCart, Wrench, type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Respect the visitor's reduced-motion setting for all transform animations. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const icons: Record<string, LucideIcon> = {
  layout: LayoutTemplate,
  cart: ShoppingCart,
  shopping: ShoppingBag,
  panel: PanelsTopLeft,
  refresh: RefreshCw,
  rocket: Rocket,
  wrench: Wrench,
  shield: ShieldCheck,
  accessibility: Accessibility,
  search: Search,
  plug: Plug,
  globe: Globe,
  blocks: Blocks,
  check: Check,
  arrow: ArrowUpRight,
};

export function Icon({ name, className = "size-5" }: { name: string; className?: string }) {
  const C = icons[name] ?? Globe;
  return <C className={className} aria-hidden="true" />;
}

/** Fade + rise when scrolled into view (once). */
export function Reveal({ children, delay = 0, y = 22, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } };

/** Staggered group; wrap children in <StaggerItem>. */
export function Stagger({ children, className, as = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "ul" }) {
  const Tag = as === "ul" ? motion.ul : motion.div;
  return (
    <Tag className={className} variants={group} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "li" }) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}

import type { Transition, Variants } from "framer-motion";

export const fadeUpTransition: Transition = {
  duration: 0.6,
  ease: "easeOut" as const,
};

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: fadeUpTransition,
};

export const fadeUpDelay = (delay: number): { transition: Transition } => ({
  transition: { ...fadeUpTransition, delay },
});

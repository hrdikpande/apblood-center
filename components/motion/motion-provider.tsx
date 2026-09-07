"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Centralizes prefers-reduced-motion handling for every Framer Motion
 * component in the tree. Deliberately NOT done via a per-component
 * `useReducedMotion()` branch on the `initial`/`animate` props — that hook
 * resolves differently between the SSR pass (no `window`) and the client's
 * first render, which produces a React hydration mismatch, and for
 * reduced-motion users can leave `whileInView` content permanently stuck at
 * its `initial` (invisible) state since the animation that would reveal it
 * never fires. `MotionConfig reducedMotion="user"` instead makes every
 * animation resolve straight to its end state when the OS setting is on,
 * with no SSR/client divergence.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

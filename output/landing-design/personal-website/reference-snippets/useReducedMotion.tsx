// Forrás: DavidHDev/rbp-portfolio (lib/motion.tsx), Vite + framer-motion-re
// adaptálva. Next.js "use client" direktíva törölve (nincs jelentősége
// Vite-ban), import motion/react -> framer-motion (a CLAUDE.md ezt a
// csomagnevet nevezi meg).
//
// Mit old meg: minden belépő-animáció automatikusan egyszerű,
// gyors fade-re vált, ha a látogató rendszerén be van kapcsolva a
// "csökkentett mozgás" beállítás. Ez a CLAUDE.md kemény követelménye
// (prefers-reduced-motion mindig tiszteletben tartva) -- ezt a
// segédkészletet kell használnia minden ma jóváhagyott React Bits
// komponens saját reveal/entrance animációjának is (WebThreads,
// TrueFocus, ScrollReveal, Stepper stb.), ahelyett hogy mindegyik
// külön-külön implementálná a matchMedia-ellenőrzést.

import { motion, type MotionProps, type Variants } from 'framer-motion';
import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react';

function subscribeToReducedMotion(callback: () => void): () => void {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const ReducedMotionContext = createContext<boolean>(false);

export function useReducedMotion(): boolean {
  return useContext(ReducedMotionContext);
}

export function ReducedMotionProvider({ children }: { children: ReactNode }): ReactNode {
  // Vite-ban nincs szerver-oldali render, ezért a Next.js-es
  // useSyncExternalStore szerver-snapshot ága elhagyható -- az
  // eredetiben ez a hidratáció-biztonság miatt kellett.
  const prefersReducedMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot);

  return <ReducedMotionContext.Provider value={prefersReducedMotion}>{children}</ReducedMotionContext.Provider>;
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const, // ld. consistency.md revealEasing
};

type MotionDivProps = {
  variants?: Variants;
  children?: ReactNode;
  className?: string;
} & MotionProps;

// Kész, drop-in helyettesítője egy sima motion.div-nek: automatikusan
// csökkentett animációra vált, nincs külön matchMedia-hívás minden
// szekcióban.
export function MotionDiv({ variants = fadeInUp, children, className, ...props }: MotionDivProps): ReactNode {
  const prefersReducedMotion = useReducedMotion();
  const activeVariants = prefersReducedMotion ? reducedMotionVariants : variants;
  const activeTransition = prefersReducedMotion ? { duration: 0.01 } : defaultTransition;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={activeVariants}
      transition={activeTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & MotionProps): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={prefersReducedMotion ? reducedMotionVariants : staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & MotionProps): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div variants={prefersReducedMotion ? reducedMotionVariants : fadeInUp} className={className} {...props}>
      {children}
    </motion.div>
  );
}

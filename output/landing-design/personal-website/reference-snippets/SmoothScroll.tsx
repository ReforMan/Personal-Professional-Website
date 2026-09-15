// Forrás: DavidHDev/rbp-portfolio (components/layout/smooth-scroll.tsx),
// Vite-ra adaptálva ("use client" törölve, a Next.js-specifikus
// features-config helyett egyszerű prop).
//
// Mit old meg: opcionális, oldal-szintű "puha görgetés" (Lenis) --
// DE csak akkor indul el, ha a látogató NEM kért csökkentett mozgást
// (matchMedia-ellenőrzés a legelején, korai return). A horgony-linkeket
// (href="#szekcio") elkapja, és a Lenis scrollTo-jával gördíti oda a
// natív ugrás helyett -- ez pont azt a problémát oldja meg, amitől a
// ScrollStack-nál óvtam: a smooth-scroll motor tudatosan együttműködik
// az egyoldalas site horgony-navigációjával, nem hijack-eli az egész
// görgetést vaktában.
//
// Csak akkor kell bekötni, ha a designer a globális smooth-scroll
// mellett dönt -- alapból NINCS aktiválva, ez egy opcionális enhancement.

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

const LENIS_OPTIONS = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical' as const,
  gestureOrientation: 'vertical' as const,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
};

export function SmoothScroll({ children }: { children: ReactNode }): ReactNode {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis(LENIS_OPTIONS);

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    function handleAnchorClick(e: MouseEvent): void {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (!element) return;

      e.preventDefault();
      lenis.scrollTo(element as HTMLElement, { offset: -80 }); // fix nav magassága
    }

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

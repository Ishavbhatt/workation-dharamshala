"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Shared instance so other components (e.g. the mobile menu) can pause scrolling.
let lenis = null;
export const stopScroll = () => lenis?.stop();
export const startScroll = () => lenis?.start();

const HEADER_OFFSET = () => (window.innerWidth <= 992 ? -100 : -130);

/**
 * Buttery smooth scrolling (Lenis) for mouse & trackpad.
 * - Phones keep native touch scrolling (feels best on mobile).
 * - Turned off for visitors who prefer reduced motion.
 */
export default function SmoothScroll() {
    const pathname = usePathname();

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        lenis = new Lenis({
            lerp: 0.09, // lower = smoother / slower
            wheelMultiplier: 0.9,
            autoRaf: true,
            anchors: { offset: HEADER_OFFSET() }, // smooth scroll for #links, below the sticky header
            stopInertiaOnNavigate: true,
        });

        return () => {
            lenis?.destroy();
            lenis = null;
        };
    }, []);

    // New page: start at the top (or at the #section in the URL).
    useEffect(() => {
        if (!lenis) return;
        const hash = window.location.hash;
        const target = hash ? document.querySelector(hash) : null;
        if (target) {
            lenis.scrollTo(target, { offset: HEADER_OFFSET(), immediate: true });
        } else {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return null;
}

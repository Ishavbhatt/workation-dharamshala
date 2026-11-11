"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Gentle fade-up of page blocks as they scroll into view.
 *
 * Works automatically on every page: it animates the direct children of
 * `section .container` (headings, text, images, grids). Grids with 3+ cards
 * reveal card by card. Things already on screen are shown immediately
 * (no flicker), and nothing is hidden if JavaScript is off or the visitor
 * prefers reduced motion.
 */
const SELECTOR = "section .container > *";
const STAGGER_MS = 90;

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const finish = (el) => {
            const done = () => {
                el.removeAttribute("data-reveal");
                el.classList.remove("is-revealed");
                el.style.removeProperty("--reveal-delay");
            };
            el.addEventListener("transitionend", done, { once: true });
            setTimeout(done, 2000); // safety net
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-revealed");
                    finish(entry.target);
                    observer.unobserve(entry.target);
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0 }
        );

        // Wait one frame so the new page is laid out.
        const frame = requestAnimationFrame(() => {
            const fold = window.innerHeight * 0.92;

            document.querySelectorAll(SELECTOR).forEach((block) => {
                if (block.closest("[data-reveal-skip]")) return;

                const style = getComputedStyle(block);
                const isCardGrid =
                    (style.display === "grid" || style.display === "flex") && block.children.length >= 3;
                const targets = isCardGrid ? Array.from(block.children) : [block];

                targets.forEach((el, i) => {
                    if (el.hasAttribute("data-reveal")) return;
                    if (el.getBoundingClientRect().top < fold) return; // already visible: leave it alone

                    if (isCardGrid) el.style.setProperty("--reveal-delay", `${(i % 4) * STAGGER_MS}ms`);
                    el.setAttribute("data-reveal", "");
                    observer.observe(el);
                });
            });
        });

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}

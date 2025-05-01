import { gsap } from "gsap";

export function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  tl.from(".cmp-hero__title", { y: 50, opacity: 0, duration: 1 });
  tl.from(
    ".cmp-hero__icons img",
    { scale: 0.5, opacity: 0, stagger: 0.2, duration: 0.6 },
    "-=0.5"
  );
}

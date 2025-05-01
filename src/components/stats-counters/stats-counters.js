import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initStatsCountersAnimation() {
  gsap.from(".cmp-stats-counters__item", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#stats-counters",
      start: "top 90%",
    },
  });
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initBenefitsAnimation() {
  gsap.from(".cmp-benefits__item", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#benefits",
      start: "top 85%",
    },
  });
}

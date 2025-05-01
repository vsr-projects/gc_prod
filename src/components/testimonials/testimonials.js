import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initTestimonialsAnimation() {
  gsap.from(".cmp-testimonials__item", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top 85%",
    },
  });
}

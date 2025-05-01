import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initServicesAnimation() {
  gsap.from(".cmp-services__card", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
    },
  });
}

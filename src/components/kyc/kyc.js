import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initKycAnimation() {
  gsap.from(".cmp-kyc__card", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.25,
    scrollTrigger: {
      trigger: "#kyc",
      start: "top 85%",
    },
  });
}

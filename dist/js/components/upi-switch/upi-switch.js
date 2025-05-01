import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initUpiSwitchAnimation() {
  gsap.from(".cmp-upi-switch__node", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#upi-switch",
      start: "top 85%",
    },
  });
}

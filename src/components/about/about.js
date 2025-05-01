import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initAboutAnimation() {
  gsap.from(".cmp-about__inner", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 85%",
    },
  });
}

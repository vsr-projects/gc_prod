import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initClientsLogosAnimation() {
  gsap.from(".cmp-clients-logos__grid img", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#clients-logos",
      start: "top 90%",
    },
  });
}

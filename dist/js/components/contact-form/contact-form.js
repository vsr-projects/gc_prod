import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initContactFormAnimation() {
  gsap.from(".cmp-contact-form__form", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#contact-form",
      start: "top 85%",
    },
  });
}

// Simple client-side validation + fake submit behavior
export function initContactFormSubmit() {
  const form = document.querySelector(".cmp-contact-form__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sending...";
    btn.disabled = true;
    // Simulate async submission
    setTimeout(() => {
      btn.textContent = "Sent!";
      btn.disabled = false;
      form.reset();
    }, 1000);
  });
}

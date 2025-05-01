// Ensure this runs after HTML loads
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Use our scroll-container as the scroller
  ScrollTrigger.defaults({
    scroller: ".scroll-container"
  });

  // HERO
  gsap.from("#hero h1", {
    y: 50, opacity: 0, duration: 1, ease: "power2.out"
  });
  gsap.from(".hero-icons img", {
    scale: 0.8, opacity: 0, duration: 0.8, stagger: 0.2
  });

  // ABOUT
  gsap.from("#about-us .col-md-6:first-child", {
    scrollTrigger: { trigger: "#about-us", start: "top 80%" },
    x: -100, opacity: 0, duration: 1
  });
  gsap.from("#about-us .col-md-6:last-child", {
    scrollTrigger: { trigger: "#about-us", start: "top 80%" },
    x: 100, opacity: 0, duration: 1
  });

  // STATISTICS (count-up)
  document.querySelectorAll("#statistic h1").forEach(el => {
    const end = el.getAttribute("data-target");
    gsap.fromTo(el, { innerText: 0 }, {
      innerText: end.replace(/\D/g,''), // numeric
      duration: 2,
      scrollTrigger: { trigger: el, start: "top 80%" },
      snap: { innerText: 1 },
      onUpdate: () => el.textContent = Math.ceil(el.innerText) + end.replace(/\d/g,'')
    });
  });

  // SERVICES cards
  gsap.from(".services-section .custom-card", {
    scrollTrigger: { trigger: "#services", start: "top 80%" },
    scale: 0.8, opacity: 0, duration: 1, stagger: 0.2
  });

  // PRODUCT (benefits)
  gsap.from(".product-section .benefit-card", {
    scrollTrigger: { trigger: "#product", start: "top 80%" },
    x: 100, opacity: 0, duration: 1, stagger: 0.2
  });

  // TESTIMONIALS
  gsap.from("#testimonials .testimonial", {
    scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
    scale: 0.9, opacity: 0, duration: 1
  });
  gsap.from("#testimonials .client-logos img", {
    scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
    x: -50, opacity: 0, stagger: 0.2, duration: 0.8
  });

  // CLIENTLE logos
  gsap.from("#clientle img", {
    scrollTrigger: { trigger: "#clientle", start: "top 80%" },
    scale: 0.8, opacity: 0, stagger: 0.2, duration: 0.8
  });

  // UPI SWITCH
  gsap.from("#upi-switch .media-gif", {
    scrollTrigger: { trigger: "#upi-switch", start: "top 80%" },
    scale: 0.8, opacity: 0, duration: 1
  });
  gsap.from("#upi-switch .bottom-right-icon", {
    scrollTrigger: { trigger: "#upi-switch", start: "top 80%" },
    y: 50, opacity: 0, duration: 1
  });

  // CONTACT form
  gsap.from("#contact .custom-input, #contact .btn-submit, #contact h2", {
    scrollTrigger: { trigger: "#contact", start: "top 80%" },
    y: 30, opacity: 0, stagger: 0.15, duration: 0.8
  });
});

// ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

// NAVBAR shrink on scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// HERO
gsap.from("#hero h1",       { y: 50,  opacity: 0, duration: 1, ease: "power2.out" });
gsap.from("#hero .subtitle", { y: 30,  opacity: 0, duration: 1, delay: 0.3 });
gsap.from("#hero .cta",      { scale: 0.8, opacity: 0, duration: 1, delay: 0.6 });

// ABOUT
gsap.from("#about-hero .text",  {
  scrollTrigger: { trigger: "#about-hero", start: "top 80%" },
  x: -100, opacity: 0, duration: 1
});
gsap.from("#about-hero .image", {
  scrollTrigger: { trigger: "#about-hero", start: "top 80%" },
  x:  100, opacity: 0, duration: 1
});

// STATISTICS count-up
document.querySelectorAll("#statistic .display-4").forEach(el => {
  const target = el.getAttribute('data-target').replace(/\D/g,'') || 0;
  gsap.fromTo(el, { innerText: 0 }, {
    innerText: target,
    duration: 2,
    scrollTrigger: { trigger: "#statistic", start: "top 80%" },
    snap: { innerText: 1 },
    onUpdate: () => el.textContent = Math.ceil(el.innerText).toLocaleString()
  });
});

// KEY SERVICES cards
gsap.from("#key-services .info-card", {
  scrollTrigger: { trigger: "#key-services", start: "top 80%" },
  scale: 0.8, opacity: 0, stagger: 0.15, duration: 1
});

// OUR SERVICES cards
gsap.from("#our-services .custom-card", {
  scrollTrigger: { trigger: "#our-services", start: "top 80%" },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// PRODUCT / SERVICE BENEFITS
gsap.from(".service-benefits .info-card", {
  scrollTrigger: { trigger: ".service-benefits", start: "top 80%" },
  x: 100, opacity: 0, stagger: 0.2, duration: 1
});

// TESTIMONIALS
gsap.from("#testimonials .testimonial", {
  scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
  scale: 0.9, opacity: 0, duration: 1
});
gsap.from("#testimonials .client-logos img", {
  scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
  x: -50, opacity: 0, stagger: 0.2, duration: 1
});

// CLIENTLE
gsap.from("#clientle img", {
  scrollTrigger: { trigger: "#clientle", start: "top 80%" },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
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

// CONTACT FORM
gsap.from("#contact h2, #contact .form-control, #contact .btn-submit", {
  scrollTrigger: { trigger: "#contact", start: "top 80%" },
  y: 30, opacity: 0, stagger: 0.2, duration: 1
});

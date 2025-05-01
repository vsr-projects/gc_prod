// js/script.js

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ─── Header ───────────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNavbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Hero Animations ──────────────────────────────────────────────────────────
gsap.from('#hero h1', {
  y: 80, opacity: 0, duration: 1.2, ease: 'power2.out'
});
gsap.from('#hero .hero-icons img', {
  scrollTrigger: { trigger: '#hero', start: 'top top' },
  scale: 0.5, opacity: 0, stagger: 0.15, duration: 1
});

// ─── About Section ────────────────────────────────────────────────────────────
gsap.from('#about-us .col-md-6:first-child', {
  scrollTrigger: { trigger: '#about-us', start: 'top 80%' },
  x: -100, opacity: 0, duration: 1
});
gsap.from('#about-us .col-md-6:last-child img', {
  scrollTrigger: { trigger: '#about-us', start: 'top 80%' },
  x: 100, opacity: 0, duration: 1
});

// ─── Statistics Count-Up ──────────────────────────────────────────────────────
document.querySelectorAll('#statistic .display-4').forEach(el => {
  const target = el.getAttribute('data-target');
  const numeric = parseFloat(target);
  gsap.fromTo(el, { innerText: 0 }, {
    innerText: numeric,
    duration: 2,
    scrollTrigger: { trigger: '#statistic', start: 'top 80%' },
    snap: { innerText: 1 },
    onUpdate: () => {
      el.textContent = Math.ceil(el.innerText) + (target.includes('+') ? '+' : '');
    }
  });
});

// ─── Our Services ─────────────────────────────────────────────────────────────
gsap.from('#services .custom-card', {
  scrollTrigger: { trigger: '#services', start: 'top 80%' },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// ─── Service Benefits ─────────────────────────────────────────────────────────
gsap.from('#services .benefit-card', {
  scrollTrigger: { trigger: '#services', start: 'top 60%' },
  x: 100, opacity: 0, stagger: 0.2, duration: 1
});

// ─── Testimonials ─────────────────────────────────────────────────────────────
gsap.from('#testimonials h2', {
  scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
  y: 50, opacity: 0, duration: 1
});
gsap.from('#testimonials .testimonial', {
  scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
  scale: 0.9, opacity: 0, duration: 1
});
gsap.from('#testimonials .client-logos img', {
  scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
  x: -50, opacity: 0, stagger: 0.2, duration: 1
});

// ─── Clientle Logos ──────────────────────────────────────────────────────────
gsap.from('#clientle img', {
  scrollTrigger: { trigger: '#clientle', start: 'top 80%' },
  scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
});

// ─── UPI Switch ───────────────────────────────────────────────────────────────
gsap.from('#upi-switch .media-gif', {
  scrollTrigger: { trigger: '#upi-switch', start: 'top 80%' },
  scale: 0.8, opacity: 0, duration: 1
});
gsap.from('#upi-switch .bottom-right-icon', {
  scrollTrigger: { trigger: '#upi-switch', start: 'top 80%' },
  y: 50, opacity: 0, duration: 1
});

// ─── Contact Form ─────────────────────────────────────────────────────────────
gsap.from('#contact h2, #contact input, #contact textarea, #contact button', {
  scrollTrigger: { trigger: '#contact', start: 'top 80%' },
  y: 30, opacity: 0, stagger: 0.2, duration: 1
});

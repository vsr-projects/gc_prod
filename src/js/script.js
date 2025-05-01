// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
document.getElementById('sidebarToggle').addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('show');
});
document.getElementById('sidebarClose').addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

// Hero animation
gsap.from('#hero h1', {
    y: 80, opacity: 0, duration: 1.2, ease: 'power2.out'
  });
  gsap.from('#hero .hero-icons img', {
    scrollTrigger: { trigger: '#hero', start: 'top top' },
    scale: 0.5, opacity: 0, stagger: 0.2, duration: 1
  });

  // About reveal
gsap.from("#about-us .text-center, #about-us .text-md-start", {
    scrollTrigger: { trigger: "#about-us", start: "top 80%" },
    x: -100, opacity: 0, duration: 1
  });
  gsap.from("#about-us .col-md-6.text-center img", {
    scrollTrigger: { trigger: "#about-us", start: "top 80%" },
    x: 100, opacity: 0, duration: 1
  });
  
  // Statistics count-up
document.querySelectorAll("#statistic .display-4").forEach(el => {
    const target = el.getAttribute("data-target");
    const numeric = parseFloat(target);
    gsap.fromTo(el, { innerText: 0 }, {
      innerText: numeric,
      duration: 2,
      scrollTrigger: { trigger: "#statistic", start: "top 80%" },
      snap: { innerText: 1 },
      onUpdate: () => {
        el.textContent = Math.ceil(el.innerText) + (target.includes("+") ? "+" : "");
      }
    });
  });
  

  // Services cards
gsap.from("#services .custom-card", {
    scrollTrigger: { trigger: "#services", start: "top 80%" },
    scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
  });
  
  // Service Benefits
  gsap.from("#services .benefit-card", {
    scrollTrigger: { trigger: "#services", start: "top 60%" },
    x: 100, opacity: 0, stagger: 0.2, duration: 1
  });
  
  // Testimonials
gsap.from("#testimonials h2", {
    scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
    y: 50, opacity: 0, duration: 1
  });
  gsap.from("#testimonials .testimonial", {
    scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
    scale: 0.9, opacity: 0, duration: 1
  });
  gsap.from("#testimonials .client-logos img", {
    scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
    x: -50, opacity: 0, stagger: 0.2, duration: 1
  });
  
  // Clientle logos
  gsap.from("#clientle img", {
    scrollTrigger: { trigger: "#clientle", start: "top 80%" },
    scale: 0.8, opacity: 0, stagger: 0.2, duration: 1
  });
  
  // UPI Switch
gsap.from("#upi-switch .media-gif", {
    scrollTrigger: { trigger: "#upi-switch", start: "top 80%" },
    scale: 0.8, opacity: 0, duration: 1
  });
  gsap.from("#upi-switch .bottom-right-icon", {
    scrollTrigger: { trigger: "#upi-switch", start: "top 80%" },
    y: 50, opacity: 0, duration: 1
  });
  
  // Contact Form
  gsap.from("#contact input, #contact textarea, #contact button, #contact h2", {
    scrollTrigger: { trigger: "#contact", start: "top 80%" },
    y: 30, opacity: 0, stagger: 0.2, duration: 1
  });
  
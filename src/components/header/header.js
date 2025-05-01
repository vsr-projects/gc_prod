// Sticky shrink + mobile toggle
export function initHeader() {
    const header = document.getElementById('site-header');
    const toggle = header.querySelector('.cmp-header__toggle');
  
    // Shrink on scroll
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  
    // Mobile menu toggle
    toggle.addEventListener('click', () => {
      header.classList.toggle('menu-open');
    });
  }
  
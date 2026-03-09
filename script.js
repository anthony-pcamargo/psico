/* ═══════════════════════════════
   Mari Pierami — script.js
═══════════════════════════════ */

// Nav scroll shadow
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('stuck', window.scrollY > 50);
}, { passive: true });

// Drawer mobile
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
function closeDrawer() {
  drawer.classList.remove('open');
  burger.classList.remove('open');
  document.body.style.overflow = '';
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// Scroll reveal com IntersectionObserver — robusto
if ('IntersectionObserver' in window) {
  const style = document.createElement('style');
  style.textContent = `
    .ri {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity .6s ease, transform .6s ease;
    }
    .ri.vis {
      opacity: 1;
      transform: none;
    }
    .srv-item.ri:nth-child(1){ transition-delay: .00s }
    .srv-item.ri:nth-child(2){ transition-delay: .07s }
    .srv-item.ri:nth-child(3){ transition-delay: .14s }
    .srv-item.ri:nth-child(4){ transition-delay: .21s }
    .srv-item.ri:nth-child(5){ transition-delay: .28s }
    .srv-item.ri:nth-child(6){ transition-delay: .35s }
  `;
  document.head.appendChild(style);

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.ri').forEach(el => obs.observe(el));
}

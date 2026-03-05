/* ═══════════════════════════════
   Mari Pierami — script.js
═══════════════════════════════ */

// ── Nav scroll ──
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('stuck', window.scrollY > 50);
}, { passive: true });

// ── Drawer mobile ──
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

// ── FAQ ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ── Scroll reveal ──
// Só anima se o browser suportar IntersectionObserver
if ('IntersectionObserver' in window) {
  const style = document.createElement('style');
  style.textContent = `
    .ri {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity .65s ease, transform .65s ease;
    }
    .ri.vis {
      opacity: 1;
      transform: translateY(0);
    }
    .srv-item.ri:nth-child(1){ transition-delay:.00s }
    .srv-item.ri:nth-child(2){ transition-delay:.08s }
    .srv-item.ri:nth-child(3){ transition-delay:.14s }
    .srv-item.ri:nth-child(4){ transition-delay:.20s }
    .srv-item.ri:nth-child(5){ transition-delay:.26s }
    .srv-item.ri:nth-child(6){ transition-delay:.32s }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observa todos os .ri após o DOM estar pronto
  document.querySelectorAll('.ri').forEach(el => observer.observe(el));
}

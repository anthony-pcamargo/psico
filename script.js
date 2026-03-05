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

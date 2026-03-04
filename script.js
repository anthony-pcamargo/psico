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
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.ri').forEach(el => io.observe(el));

// srv-items stagger
const sio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animationPlayState = 'running';
      e.target.classList.add('vis');
      sio.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.srv-item').forEach(el => sio.observe(el));

// ── Form ──
function submitForm() {
  const name  = document.getElementById('fn').value.trim();
  const email = document.getElementById('fe').value.trim();
  const priv  = document.getElementById('fp').checked;
  if (!name || !email) return alert('Por favor, preencha seu nome e e-mail.');
  if (!priv)           return alert('Por favor, aceite a política de privacidade.');
  document.getElementById('formWrap').style.display = 'none';
  document.getElementById('formOk').style.display   = 'block';
}

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// Lightweight, dependency-free interactions.
document.getElementById("year").textContent = new Date().getFullYear();

// Optional campaign tracking: add ?utm_source=facebook&utm_medium=social&utm_campaign=launch
// to your landing-page URL. This script records nothing and sends no analytics data.
// Store-link clicks are intentionally not sent to a third-party service.


// Real screenshot carousel: auto-advance every 3 seconds, with swipe, arrows, dots, and keyboard support.
(() => {
  const carousel = document.querySelector('.screenshot-carousel');
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll('.screenshot-slide'));
  const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
  const count = carousel.querySelector('.carousel-count');
  const prev = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let timer = null;
  let startX = null;
  let startY = null;
  let pointerDown = false;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.hidden = !active;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', String(active));
    });
    if (count) count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  function stopTimer() { if (timer) window.clearInterval(timer); timer = null; }
  function startTimer() {
    stopTimer();
    if (reduceMotion || document.hidden) return;
    timer = window.setInterval(() => show(current + 1), 3000);
  }
  function userChange(index) { show(index); startTimer(); }

  prev?.addEventListener('click', () => userChange(current - 1));
  next?.addEventListener('click', () => userChange(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => userChange(i)));
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); userChange(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); userChange(current + 1); }
  });
  carousel.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerDown = true; startX = event.clientX; startY = event.clientY;
  });
  carousel.addEventListener('pointerup', (event) => {
    if (!pointerDown || startX === null || startY === null) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    pointerDown = false; startX = null; startY = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.15) userChange(current + (dx < 0 ? 1 : -1));
  });
  carousel.addEventListener('pointercancel', () => { pointerDown = false; startX = null; startY = null; });
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', (event) => { if (!carousel.contains(event.relatedTarget)) startTimer(); });
  document.addEventListener('visibilitychange', () => document.hidden ? stopTimer() : startTimer());
  show(0);
  startTimer();
})();

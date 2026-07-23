/* global React */
/**
 * Custom cursor: dot + ring with magnetic snap on hoverable elements.
 * Vanilla DOM (no React state — runs on rAF for perf).
 * Toggles body.cursor-hover and body.cursor-text based on target.
 */
(function () {
  if (typeof window === 'undefined') return;
  if (matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let dx = mx, dy = my;
  let rx = mx, ry = my;
  let hoverTarget = null;
  let hoverRect = null;
  let mode = 'default';

  function onMove(e) {
    mx = e.clientX;
    my = e.clientY;
  }
  window.addEventListener('mousemove', onMove, { passive: true });

  const hoverableSel = 'a, button, [data-cursor="hover"], .lw-btn, .lw-nav-cta, .lw-nav-link, .lw-work-card, .lw-pill, .tweaks-toggle';
  const textSel = '[data-cursor="text"]';

  function onOver(e) {
    const t = e.target.closest(hoverableSel);
    const txt = e.target.closest(textSel);
    if (txt) {
      mode = 'text';
      document.body.classList.remove('cursor-hover');
      document.body.classList.add('cursor-text');
      hoverTarget = null;
      return;
    }
    if (t) {
      mode = 'hover';
      hoverTarget = t;
      hoverRect = t.getBoundingClientRect();
      document.body.classList.add('cursor-hover');
      document.body.classList.remove('cursor-text');
    }
  }
  function onOut(e) {
    const t = e.target.closest(hoverableSel);
    const txt = e.target.closest(textSel);
    if (txt || t) {
      mode = 'default';
      hoverTarget = null;
      document.body.classList.remove('cursor-hover', 'cursor-text');
    }
  }
  document.addEventListener('mouseover', onOver, true);
  document.addEventListener('mouseout', onOut, true);

  function tick() {
    // Magnetic snap on small hover targets (chips/buttons)
    let tx = mx, ty = my;
    if (mode === 'hover' && hoverTarget) {
      hoverRect = hoverTarget.getBoundingClientRect();
      const cx = hoverRect.left + hoverRect.width / 2;
      const cy = hoverRect.top + hoverRect.height / 2;
      const small = hoverRect.width < 220 && hoverRect.height < 80;
      if (small) {
        // Pull toward target center
        tx = mx + (cx - mx) * 0.35;
        ty = my + (cy - my) * 0.35;
      }
    }
    // Dot: lerp tight
    dx += (tx - dx) * 0.45;
    dy += (ty - dy) * 0.45;
    // Ring: lerp loose for trailing feel
    rx += (tx - rx) * 0.22;
    ry += (ty - ry) * 0.22;
    dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(tick);
  }
  tick();

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = ring.style.opacity = '1';
  });
})();

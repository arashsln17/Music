export function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const follower = document.getElementById('cursorFollower');
  if (!follower) return;

  let isInitialized = false;
  let rafId = null;

  window.addEventListener(
    'mousemove',
    (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!isInitialized) {
        follower.classList.add('is-active');
        isInitialized = true;
      }

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    },
    { passive: true }
  );

  window.addEventListener('mouseleave', () => {
    follower.classList.remove('is-active');
    isInitialized = false;
  });

  window.addEventListener('mousedown', () => {
    follower.classList.add('is-clicking');
  });

  window.addEventListener('mouseup', () => {
    follower.classList.remove('is-clicking');
  });

  // Hover detection for interactive elements
  const interactiveSelector =
    'a, button, [role="button"], input, textarea, select, .social-icon-btn, .social-tile, .primary-btn, .secondary-btn, .nav-link, .timeline-card, .clickable';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      follower.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      follower.classList.remove('is-hovering');
    }
  });
}

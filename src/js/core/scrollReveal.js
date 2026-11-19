export function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
            const w = bar.getAttribute('data-width');
            if (w) bar.style.width = w;
          });
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  document
    .querySelectorAll(
      '.feature-card, .stat-card, .timeline-card, .section-heading, .section-tag, .skill-group-card'
    )
    .forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
}

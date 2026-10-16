(() => {
  const $ = (selector) => document.querySelector(selector);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const themeBtn = $('#themeBtn');
  const syncTheme = () => {
    if (themeBtn) themeBtn.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'light'));
  };
  syncTheme();
  themeBtn?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    document.body.classList.toggle('light', next === 'light');
    try { localStorage.setItem('portfolio-theme', next); } catch (_) {}
    syncTheme();
  });
  document.body.classList.toggle('light', document.documentElement.dataset.theme === 'light');

  const burger = $('#burgerBtn');
  const menu = $('#mobileMenu');
  const backdrop = $('#mobileMenuBackdrop');
  const setMenu = (open) => {
    if (!burger || !menu || !backdrop) return;
    burger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    backdrop.hidden = !open;
    menu.classList.toggle('show', open);
    backdrop.classList.toggle('show', open);
    document.body.classList.toggle('mobile-menu-open', open);
    if (open) menu.querySelector('a')?.focus();
    else burger.focus();
  };
  burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  backdrop?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && burger?.getAttribute('aria-expanded') === 'true') setMenu(false);
  });

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const images = [...carousel.querySelectorAll('.carousel-track img')];
    const dots = [...carousel.querySelectorAll('.car-dot')];
    let current = 0;
    const show = (index) => {
      current = (index + images.length) % images.length;
      images.forEach((image, i) => image.classList.toggle('active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    };
    carousel.querySelector('.prev')?.addEventListener('click', () => show(current - 1));
    carousel.querySelector('.next')?.addEventListener('click', () => show(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  });

  document.querySelectorAll('[data-sel]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-sel]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      const mail = $('#ctaMailLink');
      const selected = button.querySelector('span')?.textContent?.trim();
      if (mail && selected) mail.href = 'mailto:z_botos@hotmail.com?subject=' + encodeURIComponent(selected);
    });
  });
  const top = $('#toTop');
  top?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' }));

  const reveals = [...document.querySelectorAll('.reveal')];
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    reveals.forEach((item) => observer.observe(item));
  } else reveals.forEach((item) => item.classList.add('in'));
})();

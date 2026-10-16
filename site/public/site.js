(() => {
  const $ = (selector) => document.querySelector(selector);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
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

  const fillMarquee = (element, items) => {
    if (!element) return;
    const fragment = document.createDocumentFragment();
    [...items, ...items].forEach((item) => {
      const label = document.createElement('span');
      label.textContent = item;
      fragment.append(label);
    });
    element.replaceChildren(fragment);
  };
  fillMarquee($('#ctaMarquee'), ['Websites', 'Booking Workflows', 'Internal Tools', 'AI-Assisted Delivery']);
  fillMarquee($('#footerMarquee'), ['Claude Code', 'GPT', 'GitHub', 'Supabase', 'Cloudflare', 'Vercel', 'Resend', 'n8n']);

  const eyes = $('#eyesGrp');
  const eyeMark = $('#eyeMark');
  if (eyes && eyeMark && !reducedMotion.matches && finePointer) {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    document.addEventListener('mousemove', (event) => {
      const rect = eyeMark.getBoundingClientRect();
      const deltaX = event.clientX - (rect.left + rect.width / 2);
      const deltaY = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(deltaX, deltaY) || 1;
      const strength = Math.min(1, distance / 260);
      targetX = (deltaX / distance) * 13 * strength;
      targetY = (deltaY / distance) * 13 * 0.55 * strength;
    });
    const moveEyes = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      eyes.setAttribute('transform', `translate(${currentX.toFixed(2)},${currentY.toFixed(2)})`);
      requestAnimationFrame(moveEyes);
    };
    requestAnimationFrame(moveEyes);
  }

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

  const profileWrap = $('#pcardWrap');
  const profileCard = $('#pcard');
  const profileGlow = $('#pcardGlow');
  if (profileWrap && profileCard && profileGlow && !reducedMotion.matches && finePointer) {
    profileWrap.addEventListener('mousemove', (event) => {
      const rect = profileWrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      profileCard.style.transform = `rotateX(${((y - 0.5) * -12).toFixed(2)}deg) rotateY(${((x - 0.5) * 14).toFixed(2)}deg)`;
      profileWrap.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      profileWrap.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
    profileWrap.addEventListener('mouseleave', () => {
      profileCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
  const holoButton = $('#holoBtn');
  holoButton?.addEventListener('click', () => {
    if (!profileWrap) return;
    const active = profileWrap.classList.toggle('holo-on');
    holoButton.classList.toggle('on', active);
    holoButton.setAttribute('aria-pressed', String(active));
    holoButton.textContent = active ? holoButton.dataset.onLabel : holoButton.dataset.offLabel;
  });

  const years = $('#statYears');
  const proof = document.querySelector('.proof');
  if (years && proof && !reducedMotion.matches) {
    let counted = false;
    const countUp = () => {
      if (counted) return;
      counted = true;
      const started = performance.now();
      const update = (now) => {
        const progress = Math.min(1, (now - started) / 1100);
        years.innerHTML = `${Math.floor(progress * 12)}<span>+</span>`;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          countUp();
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      observer.observe(proof);
    } else countUp();
  }

  const heroCanvas = $('#heroCanvas');
  if (heroCanvas && !reducedMotion.matches) {
    const context = heroCanvas.getContext('2d');
    if (context) {
      let width = 0;
      let height = 0;
      const density = Math.min(devicePixelRatio || 1, 2);
      const resize = () => {
        width = heroCanvas.clientWidth;
        height = heroCanvas.clientHeight;
        heroCanvas.width = width * density;
        heroCanvas.height = height * density;
        context.setTransform(density, 0, 0, density, 0, 0);
      };
      resize();
      addEventListener('resize', resize);
      let visible = true;
      new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0 }).observe(heroCanvas);
      const started = performance.now();
      const colors = ['rgba(255,90,60,.55)', 'rgba(198,241,53,.4)', 'rgba(255,132,104,.45)'];
      const draw = (now) => {
        if (!document.hidden && visible) {
          const time = (now - started) * 0.00045;
          context.clearRect(0, 0, width, height);
          colors.forEach((color, index) => {
            context.beginPath();
            for (let x = 0; x <= width; x += 8) {
              const y = height * 0.55 + Math.sin(x * 0.006 + time * 3 + index * 2) * (40 + index * 18) + Math.sin(x * 0.002 - time * 1.5) * 30;
              if (x === 0) context.moveTo(x, y);
              else context.lineTo(x, y);
            }
            context.strokeStyle = color;
            context.lineWidth = 2;
            context.shadowColor = color;
            context.shadowBlur = 18;
            context.stroke();
          });
          heroCanvas.dataset.effectActive = 'true';
        }
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    }
  }

  const glowCanvas = $('#glowCursor');
  if (glowCanvas && !reducedMotion.matches && finePointer) {
    const context = glowCanvas.getContext('2d');
    if (context) {
      let width = 0;
      let height = 0;
      let mouseX = -999;
      let mouseY = -999;
      let activity = 0;
      let lastMove = performance.now();
      const trail = [];
      const density = Math.min(devicePixelRatio || 1, 1.5);
      const resize = () => {
        width = innerWidth;
        height = innerHeight;
        glowCanvas.width = width * density;
        glowCanvas.height = height * density;
        context.setTransform(density, 0, 0, density, 0, 0);
      };
      resize();
      addEventListener('resize', resize);
      document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        lastMove = performance.now();
      });
      document.addEventListener('mouseleave', () => {
        mouseX = -999;
        mouseY = -999;
      });
      const draw = (now) => {
        activity += (((now - lastMove > 650) ? 0 : 1) - activity) * 0.08;
        context.clearRect(0, 0, width, height);
        if (mouseX > -500 && activity > 0.01) {
          trail.unshift({ x: mouseX, y: mouseY });
          if (trail.length > 22) trail.pop();
        } else if (trail.length) trail.pop();
        context.globalCompositeOperation = 'lighter';
        trail.forEach((point, index) => {
          const fade = 1 - index / trail.length;
          const radius = 26 * fade * activity;
          if (radius < 0.5) return;
          const base = index % 2 === 0 ? '255,90,60' : '198,241,53';
          const gradient = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
          gradient.addColorStop(0, `rgba(${base},${(0.32 * fade * activity).toFixed(3)})`);
          gradient.addColorStop(1, `rgba(${base},0)`);
          context.fillStyle = gradient;
          context.beginPath();
          context.arc(point.x, point.y, radius, 0, Math.PI * 2);
          context.fill();
        });
        context.globalCompositeOperation = 'source-over';
        if (trail.length) glowCanvas.dataset.effectActive = 'true';
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    }
  }

  const top = $('#toTop');
  const topRing = $('#toTopRing');
  if (top && topRing) {
    const ringLength = 2 * Math.PI * 23;
    topRing.style.strokeDasharray = String(ringLength);
    let ticking = false;
    const updateTop = () => {
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = max > 0 ? Math.min(1, scrollY / max) : 0;
      topRing.style.strokeDashoffset = String(ringLength * (1 - progress));
      top.classList.toggle('show', scrollY > innerHeight * 0.6);
      ticking = false;
    };
    addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateTop);
        ticking = true;
      }
    }, { passive: true });
    updateTop();
    top.addEventListener('click', () => scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' }));
  }

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

/* ============================================================
   HAMZA TAHIR BAJWA — PORTFOLIO
   Premium Interaction Layer
   ============================================================ */

(function () {
  'use strict';

  // ─── DOM Cache ───
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const nav = $('#nav');
  const navBurger = $('#navBurger');
  const mobileMenu = $('#mobileMenu');
  const backToTop = $('#backToTop');
  const cursorDot = $('#cursorDot');
  const cursorRing = $('#cursorRing');
  const contactForm = $('#contactForm');
  const formSuccess = $('#formSuccess');

  // ─── Utility ───
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ─── Custom Cursor ───
  if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    function animateCursorRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animateCursorRing);
    }
    animateCursorRing();

    // Hover effect on interactive elements
    const interactiveSelectors = 'a, button, input, textarea, .project-card, .software-chip, .work__filter, .stat-card, .contact__social, .timeline__card';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursorRing.classList.add('hovered');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursorRing.classList.remove('hovered');
      }
    });
  }

  // ─── Navigation Scroll Effect ───
  let lastScrollY = 0;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Nav background on scroll
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ─── Active Nav Link ───
  const sections = $$('section[id]');
  const navLinks = $$('[data-nav]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ─── Mobile Menu ───
  navBurger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    navBurger.classList.toggle('open');
    navBurger.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close mobile menu on link click
  $$('.mobile-menu__link, .mobile-menu__cta').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navBurger.classList.remove('open');
      navBurger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ─── Back to Top ───
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Reveal on Scroll (IntersectionObserver) ───
  if (!prefersReducedMotion) {
    const revealElements = $$('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger multiple reveals in the same viewport
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Instantly show everything if reduced motion
    $$('.reveal').forEach((el) => el.classList.add('visible'));
  }

  // ─── Work: Infinite Scroll Track Duplication ───
  const workTrack = $('#workTrack');
  if (workTrack) {
    // Clone all cards and append to create seamless loop
    const cards = [...workTrack.children];
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      workTrack.appendChild(clone);
    });
  }

  // ─── Animated Counter ───
  function animateCounters() {
    const counters = $$('[data-count]');
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.count, 10);
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(eased * target);
        counter.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Trigger counters when hero stats are visible
  const statsSection = $('.hero__stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statsObserver.observe(statsSection);
  }

  // ─── Contact Form Validation ───
  if (contactForm) {
    const fields = {
      name: { input: $('#formName'), error: $('#nameError'), validate: (v) => v.trim().length > 0 },
      email: { input: $('#formEmail'), error: $('#emailError'), validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      subject: { input: $('#formSubject'), error: $('#subjectError'), validate: (v) => v.trim().length > 0 },
      message: { input: $('#formMessage'), error: $('#messageError'), validate: (v) => v.trim().length > 0 },
    };

    // Remove error on input
    Object.values(fields).forEach(({ input }) => {
      input.addEventListener('input', () => {
        input.parentElement.classList.remove('error');
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      Object.values(fields).forEach(({ input, validate }) => {
        if (!validate(input.value)) {
          input.parentElement.classList.add('error');
          isValid = false;
        } else {
          input.parentElement.classList.remove('error');
        }
      });

      if (isValid) {
        // Simulate success
        formSuccess.classList.add('visible');
        contactForm.reset();

        setTimeout(() => {
          formSuccess.classList.remove('visible');
        }, 5000);
      }
    });
  }

  // ─── Smooth Scroll for Anchor Links ───
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = $(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── Hero Mouse Glow Follow ───
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    const hero = $('.hero');
    if (hero) {
      const glowAmber = $('.hero__glow--amber');
      const glowViolet = $('.hero__glow--violet');

      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        if (glowAmber) {
          glowAmber.style.transform = `translate(${(x - 0.5) * 40}px, ${(y - 0.5) * 40}px)`;
        }
        if (glowViolet) {
          glowViolet.style.transform = `translate(${(x - 0.5) * -30}px, ${(y - 0.5) * -30}px)`;
        }
      });
    }
  }

  // ─── Init ───
  handleScroll();
  updateActiveNav();
})();
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

  // ─── Work: Interactive Auto-Scroll ───
  const workWrapper = $('#workWrapper');
  const workTrack = $('#workTrack');
  const workPrev = $('#workPrev');
  const workNext = $('#workNext');

  if (workWrapper && workTrack) {
    // Clone cards for seamless loop
    const cards = [...workTrack.children];
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      workTrack.appendChild(clone);
    });

    let isPaused = false;
    let scrollPos = 0;
    const speed = 1.0;

    function renderScroll() {
      if (!isPaused) {
        scrollPos += speed;
        // Total scrollable distance is half the full track width (due to cloning) 
        const maxScroll = workTrack.scrollWidth / 2;
        if (scrollPos >= maxScroll) {
          scrollPos -= maxScroll;
        } else if (scrollPos < 0) {
          scrollPos += maxScroll;
        }
        workWrapper.scrollLeft = scrollPos;
      } else {
        // Sync scrollPos if user manually scrolled or dragged wrapper
        scrollPos = workWrapper.scrollLeft;
      }
      requestAnimationFrame(renderScroll);
    }
    
    let manualScrollTimeout;
    function handleManualScroll(direction) {
      isPaused = true;
      const cardWidth = $('.project-card', workTrack)?.offsetWidth || 400;
      workWrapper.scrollBy({ left: (cardWidth + 28) * direction, behavior: 'smooth' });
      
      clearTimeout(manualScrollTimeout);
      // Wait for the native smooth scroll to finish before resuming automated scroll
      manualScrollTimeout = setTimeout(() => {
        isPaused = false;
      }, 600);
    }

    if (workPrev) workPrev.addEventListener('click', () => handleManualScroll(-1));
    if (workNext) workNext.addEventListener('click', () => handleManualScroll(1));

    // Pause auto-scroll when user hovers or touches the track
    workWrapper.addEventListener('pointerenter', () => isPaused = true);
    workWrapper.addEventListener('pointerleave', () => {
      isPaused = false;
      scrollPos = workWrapper.scrollLeft;
    });

    requestAnimationFrame(renderScroll);
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

  // ─── Lightbox Modal for Media ───
  const lightbox = $('#lightbox');
  const lightboxClose = $('#lightboxClose');
  const lightboxContent = $('#lightboxContent');

  if (lightbox && lightboxClose && lightboxContent) {
    // Open Lightbox
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card[data-media]');
      if (!card) return;

      const mediaUrl = card.getAttribute('data-media');
      const mediaType = card.getAttribute('data-media-type');

      if (!mediaUrl) return;

      lightboxContent.innerHTML = '';

      if (mediaType === 'video') {
        const isEmbed = mediaUrl.includes('youtube.com') || mediaUrl.includes('youtu.be') || mediaUrl.includes('vimeo.com');
        
        if (isEmbed) {
          // Auto-convert standard YouTube watch URLs to embed format for iframe playback
          let embedUrl = mediaUrl;
          if (mediaUrl.includes('youtube.com/watch?v=')) {
            embedUrl = mediaUrl.replace('watch?v=', 'embed/');
          } else if (mediaUrl.includes('youtu.be/')) {
            embedUrl = mediaUrl.replace('youtu.be/', 'youtube.com/embed/');
          }
          
          const iframe = document.createElement('iframe');
          iframe.src = embedUrl;
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
          iframe.setAttribute('allowfullscreen', 'true');
          
          // Style iframe to maintain 16:9 ratio responsively
          iframe.style.width = '85vw';
          iframe.style.height = 'calc(85vw * 9 / 16)';
          iframe.style.maxHeight = '85vh';
          iframe.style.maxWidth = 'calc(85vh * 16 / 9)';
          lightboxContent.appendChild(iframe);
        } else {
          const video = document.createElement('video');
          video.src = mediaUrl;
          video.controls = true;
          video.autoplay = true;
          video.loop = true;
          video.setAttribute('playsinline', '');
          lightboxContent.appendChild(video);
        }
      } else {
        const img = document.createElement('img');
        img.src = mediaUrl;
        lightboxContent.appendChild(img);
      }

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    // Close Lightbox
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      // Destroy content (stops video playback)
      setTimeout(() => {
        lightboxContent.innerHTML = '';
      }, 350); 
    }

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxContent) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

  // ─── Global Background Reactive Dots ───
  const canvas = $('#bgCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const spacing = 35; // Grid spacing
    const mouse = { x: -1000, y: -1000 };
    
    // We add a scroll tracker for parallax
    let scrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    }, { passive: true });

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      initParticles();
    }

    function initParticles() {
      particles = [];
      // Create extra rows to cover parallax bleed
      const cols = Math.floor(width / spacing) + 2;
      const rows = Math.floor(height / spacing) + 8; 
      
      for (let i = 0; i < cols; i++) {
        for (let j = -4; j < rows; j++) {
          particles.push({
            ox: i * spacing,
            oy: j * spacing,
            x: i * spacing,
            y: j * spacing,
            vx: 0,
            vy: 0,
            size: 1.5,
            angle: i * 0.1 + j * 0.1
          });
        }
      }
    }

    function animateCanvas() {
      ctx.clearRect(0, 0, width, height);

      const maxDist = 220; // Radius of mouse influence
      // Parallax shift based on scroll (dots move slower than the page scrolls)
      const scrollOffset = scrollY * 0.4;

      particles.forEach((p) => {
        // Natural subtle wave
        p.angle += 0.015;
        const waveX = Math.sin(p.angle) * 3;
        const waveY = Math.cos(p.angle) * 3;

        // Visual position applied with parallax shift
        const visualOY = p.oy - scrollOffset;

        // Wrap around vertically if particles go out of frame to save memory
        let wrappedOY = visualOY;
        let wrappedJ = p.oy;
        const totalHeight = (Math.floor(height / spacing) + 12) * spacing;
        
        while (wrappedOY < -spacing * 4) {
          wrappedOY += totalHeight;
        }

        // Interaction calculation
        const dx = mouse.x - (p.ox + waveX);
        const dy = mouse.y - (wrappedOY + waveY);
        const dist = Math.sqrt(dx * dx + dy * dy);

        let forceX = 0;
        let forceY = 0;
        let targetSize = 1.5;
        let isInteracting = false;
        let force = 0;

        if (dist < maxDist) {
          isInteracting = true;
          force = (maxDist - dist) / maxDist; // 0 to 1
          const angle = Math.atan2(dy, dx);
          
          // Push away from cursor gently
          forceX = -Math.cos(angle) * force * 35;
          forceY = -Math.sin(angle) * force * 35;
          
          targetSize = 1.5 + force * 2.5; 
        }

        // Spring physics to return to base + wave
        const targetX = p.ox + waveX + forceX;
        const targetY = wrappedOY + waveY + forceY;

        p.vx += (targetX - p.x) * 0.08;
        p.vy += (targetY - p.y) * 0.08;
        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.85;
        p.vy *= 0.85;

        // Smooth sizing
        p.size += (targetSize - p.size) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (isInteracting && force > 0.05) {
          // Fade to amber accent (#FF9A3D) based on force length
          const g = Math.floor(255 - force * 101); // 255 -> 154
          const b = Math.floor(255 - force * 194); // 255 -> 61
          const a = 0.15 + force * 0.7; // 0.15 -> 0.85
          ctx.fillStyle = `rgba(255, ${g}, ${b}, ${a})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, 0.15)`;
        }
        ctx.fill();
      });

      requestAnimationFrame(animateCanvas);
    }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateCanvas();
  }

  // ─── Init ───
  handleScroll();
  updateActiveNav();
})();
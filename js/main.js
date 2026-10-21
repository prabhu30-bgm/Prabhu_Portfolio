// Main Portfolio Application - Pure Vanilla JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================
  // 1. LENIS SMOOTH SCROLL INITIALIZATION
  // =========================================================
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // =========================================================
  // 2. TOP SCROLL PROGRESS BAR
  // =========================================================
  const progressBar = document.getElementById('scroll-progress-bar');
  const updateProgressBar = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
  };
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  // =========================================================
  // 3. AMBIENT CURSOR GLOW (DESKTOP)
  // =========================================================
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.innerWidth >= 768) {
    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let targetOpacity = 0;
    let currentOpacity = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetOpacity = 1;
    }, { passive: true });

    document.body.addEventListener('mouseleave', () => {
      targetOpacity = 0;
    });

    function renderCursor() {
      // Spring/Lerp physics
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      currentOpacity += (targetOpacity - currentOpacity) * 0.1;

      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;
      cursorGlow.style.opacity = currentOpacity.toFixed(3);

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
  }

  // =========================================================
  // 4. NAVIGATION SCROLL & SCROLLSPY
  // =========================================================
  const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const allNavButtons = document.querySelectorAll('[data-nav]');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerLine1 = document.getElementById('burger-line-1');
  const burgerLine2 = document.getElementById('burger-line-2');
  const burgerLine3 = document.getElementById('burger-line-3');
  let isMobileMenuOpen = false;

  function scrollToSection(id) {
    closeMobileMenu();
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    if (lenis) {
      lenis.scrollTo(y);
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Bind click handlers to all navigation triggers
  allNavButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-nav');
      if (targetId) scrollToSection(targetId);
    });
  });

  const logoBtn = document.getElementById('nav-logo');
  if (logoBtn) {
    logoBtn.addEventListener('click', () => scrollToSection('home'));
  }

  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      // trigger reflow for smooth transition
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', '-translate-y-5');
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
      }, 10);

      // Animate hamburger to X
      if (burgerLine1) burgerLine1.style.transform = 'translateY(6px) rotate(45deg)';
      if (burgerLine2) burgerLine2.style.opacity = '0';
      if (burgerLine3) burgerLine3.style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      closeMobileMenu();
    }
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
    if (mobileMenu) {
      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
      mobileMenu.classList.add('opacity-0', '-translate-y-5');
      setTimeout(() => {
        if (!isMobileMenuOpen) {
          mobileMenu.classList.remove('flex');
          mobileMenu.classList.add('hidden');
        }
      }, 300);
    }

    if (burgerLine1) burgerLine1.style.transform = 'translateY(0) rotate(0)';
    if (burgerLine2) burgerLine2.style.opacity = '1';
    if (burgerLine3) burgerLine3.style.transform = 'translateY(0) rotate(0)';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  // ScrollSpy active state
  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 150;
    let activeId = 'home';

    for (let i = 0; i < sectionIds.length; i++) {
      const id = sectionIds[i];
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.offsetTop;
      const height = el.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        activeId = id;
        break;
      }
    }

    // Update Desktop Nav UI
    navLinks.forEach((link) => {
      const navTarget = link.getAttribute('data-nav');
      const underline = link.querySelector('.nav-active-underline');

      if (navTarget === activeId) {
        link.classList.remove('text-secondaryText');
        link.classList.add('text-white', 'font-bold');
        if (!underline) {
          const newUnderline = document.createElement('div');
          newUnderline.className = 'nav-active-underline absolute bottom-0 left-4 right-4 h-[2px] bg-yellow-400 shadow-[0_0_10px_#facc15]';
          link.appendChild(newUnderline);
        }
      } else {
        link.classList.remove('text-white', 'font-bold');
        link.classList.add('text-secondaryText');
        if (underline) underline.remove();
      }
    });

    // Update Mobile Nav UI
    mobileNavLinks.forEach((link) => {
      const navTarget = link.getAttribute('data-nav');
      if (navTarget === activeId) {
        link.classList.remove('text-secondaryText');
        link.classList.add('text-accentNeon', 'font-bold');
      } else {
        link.classList.remove('text-accentNeon', 'font-bold');
        link.classList.add('text-secondaryText');
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();

  // =========================================================
  // 5. ABOUT SECTION: PARALLAX, STRENGTH BARS & MODAL
  // =========================================================
  // Strengths intersection observer
  const strengthsContainer = document.getElementById('strengths-container');
  if (strengthsContainer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.strength-bar');
            bars.forEach((bar) => {
              const targetWidth = bar.getAttribute('data-width');
              bar.style.width = targetWidth;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(strengthsContainer);
  }

  // Profile Modal
  const profileModal = document.getElementById('profile-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCard = document.getElementById('modal-card');
  const btnOpenModal = document.getElementById('btn-open-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');

  function openModal() {
    if (!profileModal) return;
    profileModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    setTimeout(() => {
      modalBackdrop.classList.remove('opacity-0');
      modalBackdrop.classList.add('opacity-100');
      modalCard.classList.remove('opacity-0', 'scale-95', 'translate-y-5');
      modalCard.classList.add('opacity-100', 'scale-100', 'translate-y-0');
    }, 10);
  }

  function closeModal() {
    if (!profileModal) return;
    modalBackdrop.classList.remove('opacity-100');
    modalBackdrop.classList.add('opacity-0');
    modalCard.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
    modalCard.classList.add('opacity-0', 'scale-95', 'translate-y-5');

    setTimeout(() => {
      profileModal.classList.add('hidden');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 300);
  }

  if (btnOpenModal) btnOpenModal.addEventListener('click', openModal);
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && profileModal && !profileModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // =========================================================
  // 6. SKILLS SECTION: CATEGORIES & DYNAMIC GRID
  // =========================================================
  const skillsTabsContainer = document.getElementById('skills-tabs');
  const skillsGridContainer = document.getElementById('skills-grid');
  const skillsCountEl = document.getElementById('skills-count');
  let currentSkillCategory = 'all';

  function getTechIconSvg(id, className = 'w-5 h-5') {
    switch (id) {
      case 'react':
        return `<svg viewBox="-11.5 -10.23174 23 20.46348" class="${className}"><circle cx="0" cy="0" r="2.05" fill="#61DAFB" /><g stroke="#61DAFB" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>`;
      case 'js':
      case 'javascript':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="4" fill="#F7DF1E" /><path d="M7.5 18c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6h-1.5v6c0 .1-.1.2-.2.2s-.2-.1-.2-.2v-3.5H7.5V18zm6.3-1.8c.4.6 1 1 1.7 1 .8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.3-.6-2.2-1.3-2.2-2.7 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .5 2.6 1.4l-1.1.9c-.3-.5-.7-.8-1.5-.8-.7 0-1.2.4-1.2.9 0 .6.5.9 1.3 1.2l.5.2c1.5.6 2.3 1.4 2.3 2.9 0 1.6-1.3 2.6-3 2.6-1.4 0-2.5-.6-3.1-1.7l1.2-.9z" fill="#000000" /></svg>`;
      case 'ts':
      case 'typescript':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="4" fill="#3178C6" /><path d="M12.5 10.5h-4V12h1.2v6H11v-6h1.5v-1.5zm2.8 5.7c.4.6 1 1 1.7 1 .8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.3-.6-2.2-1.3-2.2-2.7 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .5 2.6 1.4l-1.1.9c-.3-.5-.7-.8-1.5-.8-.7 0-1.2.4-1.2.9 0 .6.5.9 1.3 1.2l.5.2c1.5.6 2.3 1.4 2.3 2.9 0 1.6-1.3 2.6-3 2.6-1.4 0-2.5-.6-3.1-1.7l1.2-.9z" fill="#FFFFFF" /></svg>`;
      case 'node':
      case 'nodejs':
        return `<svg viewBox="0 0 24 24" class="${className}"><path fill="#68A063" d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z" /><path fill="#FFFFFF" d="M12 6.5l5 2.9v5.8l-5 2.9-5-2.9V9.4l5-2.9zm0 2.2L9.2 10.3v3.4L12 15.3l2.8-1.6v-3.4L12 8.7z" /></svg>`;
      case 'express':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="4" fill="#222222" /><text x="5" y="16" fill="#FFFFFF" font-size="11" font-weight="bold" font-family="sans-serif">ex</text></svg>`;
      case 'mongodb':
        return `<svg viewBox="0 0 24 24" class="${className}"><path fill="#47A248" d="M12 2s-5.5 5.5-5.5 11.2c0 4.1 3 7.3 5.5 8.8 2.5-1.5 5.5-4.7 5.5-8.8C17.5 7.5 12 2 12 2z" /><path fill="#FFFFFF" opacity="0.3" d="M12 2v20c.3-.2.6-.4.9-.6 2.1-1.4 4.6-4.3 4.6-8.2 0-5.7-5.5-11.2-5.5-11.2z" /></svg>`;
      case 'mysql':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="4" fill="#00758F" /><path fill="#F29111" d="M7 17.5c2.5-3 5-3 6.5-2 1.5 1 3.5.5 4.5-.5M6 14c1.5-1.5 3-1.5 4.5-1 1.5.5 3 .5 4-.5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" /><circle cx="15.5" cy="8.5" r="1.2" fill="#FFFFFF" /></svg>`;
      case 'java':
        return `<svg viewBox="0 0 24 24" class="${className}"><path fill="#EA2D2E" d="M8.5 18.5c2.5.5 5.5.5 8-.5-1-.5-2.5-.8-4-.8s-3 .3-4 1.3zM7.5 16c3.5.8 8 .8 10.5-.5-1.5-.6-4.5-.8-6.5-.8s-3 .3-4 1.3z" /><path fill="#5382A1" d="M10 2c-.5 1.5.5 3 1.5 4-1-1.5-1.5-2.5-1.5-4zm3 2c-.5 1.5.5 3 1.5 4-1-1.5-1.5-2.5-1.5-4zM8 8.5c1.5.5 3 .5 4 0-1-.5-2.5-.8-4 0z" /><path fill="#EA2D2E" d="M5.5 20c4.5 1.2 10.5 1.2 14.5 0-.5.8-2.5 1.5-5.5 1.5-4 0-7.5-.7-9-1.5z" /></svg>`;
      case 'html5':
      case 'html':
        return `<svg viewBox="0 0 24 24" class="${className}"><path fill="#E34F26" d="M3 2l1.6 18.4 7.4 2.1 7.4-2.1L21 2H3z" /><path fill="#EF652A" d="M12 3.6v17.2l6-1.7 1.3-15.5H12z" /><path fill="#FFFFFF" d="M12 7.7H7.7l.3 3.6h4V7.7zm0 5.4H9.5l.2 2.3 2.3.6v-2.9zM16.3 7.7h-4.3v3.6h3.9l-.4 4.2-3.5 1v-2.9l1.6-.4.2-2.1H12v-3.4h4.6l-.3 3.4z" /></svg>`;
      case 'css3':
      case 'css':
        return `<svg viewBox="0 0 24 24" class="${className}"><path fill="#1572B6" d="M3 2l1.6 18.4 7.4 2.1 7.4-2.1L21 2H3z" /><path fill="#33A9DC" d="M12 3.6v17.2l6-1.7 1.3-15.5H12z" /><path fill="#FFFFFF" d="M12 7.7H7.7l.2 2.2h4.1V7.7zm0 3.8H8.1l.3 3.6h3.6v-3.6zm0 5.2l-2.3-.6-.1-1.5H7.8l.3 3 3.9 1.1v-2zM16.3 7.7H12v2.2h3.9l-.3 3.6H12v2.2h3.3l-.3 3.4-3 1v2.1l5.2-1.7.8-9.2z" /></svg>`;
      case 'bootstrap':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="5" fill="#7952B3" /><path fill="#FFFFFF" d="M8 6h4.5c2 0 3.5 1.1 3.5 2.7 0 1.1-.7 2-1.7 2.4 1.3.4 2.2 1.4 2.2 2.8 0 1.8-1.5 3.1-3.8 3.1H8V6zm2.4 4.1h2c.8 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.4-1.1h-2v2.2zm0 4.8h2.3c.9 0 1.6-.5 1.6-1.3 0-.8-.7-1.3-1.6-1.3h-2.3v2.6z" /></svg>`;
      case 'github':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="5" fill="#181717" /><path fill="#FFFFFF" d="M12 4C7.6 4 4 7.6 4 12c0 3.5 2.3 6.5 5.5 7.6.4.1.6-.2.6-.4v-1.5c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.9.7-.2 1.4-.3 2.1-.3s1.4.1 2.1.3c1.6-1.1 2.3-.9 2.3-.9.5 1.2.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6V19.2c0 .2.2.5.6.4C17.7 18.5 20 15.5 20 12c0-4.4-3.6-8-8-8z" /></svg>`;
      case 'c':
      case 'cpp':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="5" fill="#00599C" /><path fill="#FFFFFF" d="M11 8c-2.2 0-3.5 1.6-3.5 4s1.3 4 3.5 4c1.4 0 2.4-.7 2.9-1.6l-1.4-.9c-.3.5-.8.9-1.5.9-1.2 0-1.8-.9-1.8-2.4s.6-2.4 1.8-2.4c.7 0 1.2.4 1.5.9l1.4-.9C13.4 8.7 12.4 8 11 8zm4 3h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1zm4 0h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1z" /></svg>`;
      case 'springboot':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="5" fill="#1e293b" /><path fill="#6DB33F" d="M12 4.5l6.5 3.8v7.4L12 19.5l-6.5-3.8V8.3L12 4.5z" /><path fill="#FFFFFF" d="M12 7.5L7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5zm0 2.2l2.5 1.4v2.8L12 15.3l-2.5-1.4v-2.8l2.5-1.4z" /></svg>`;
      case 'dsa':
        return `<svg viewBox="0 0 24 24" class="${className}"><rect width="24" height="24" rx="5" fill="#3b070e" /><circle cx="12" cy="7" r="2.5" fill="#facc15" /><circle cx="7" cy="16" r="2" fill="#ef4444" /><circle cx="17" cy="16" r="2" fill="#ef4444" /><path d="M10.5 9L8 14M13.5 9L16 14" stroke="#facc15" stroke-width="1.5" /></svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className} text-yellow-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    }
  }

  function getTabIconSvg(iconName, isActive) {
    const iconClass = isActive ? 'text-black' : 'text-yellow-400';
    switch (iconName) {
      case 'zap':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
      case 'code2':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>`;
      case 'laptop':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>`;
      case 'wrench':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
      case 'lightbulb':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`;
      default:
        return '';
    }
  }

  function renderSkillsTabs() {
    if (!skillsTabsContainer) return;
    skillsTabsContainer.innerHTML = categoryTabs
      .map((tab) => {
        const isActive = currentSkillCategory === tab.id;
        const activeStyles = isActive
          ? 'bg-yellow-400 text-black shadow-[0_0_16px_rgba(250,204,21,0.6)] font-bold scale-105'
          : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-yellow-400 hover:text-white hover:bg-white/10';

        return `
        <button
          type="button"
          data-skill-tab="${tab.id}"
          class="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeStyles}"
        >
          ${getTabIconSvg(tab.iconName, isActive)}
          <span>${tab.label}</span>
        </button>
      `;
      })
      .join('');

    // Bind events
    skillsTabsContainer.querySelectorAll('[data-skill-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-skill-tab');
        currentSkillCategory = tabId;
        renderSkillsTabs();
        renderSkillsGrid();
      });
    });
  }

  function renderSkillsGrid() {
    if (!skillsGridContainer) return;

    const filtered =
      currentSkillCategory === 'all'
        ? techStackData
        : techStackData.filter((item) => item.category === currentSkillCategory);

    skillsGridContainer.innerHTML = filtered
      .map((tech) => `
        <div class="group relative flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-brand-card/80 backdrop-blur-md hover:bg-brand-card hover:border-yellow-400/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(219,46,46,0.15)] transition-all duration-300 cursor-default hover:-translate-y-0.5">
          <!-- Tech Icon Tile -->
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-yellow-400/50 group-hover:scale-105 transition-all duration-300 shrink-0 p-2 shadow-inner">
            ${getTechIconSvg(tech.icon, 'w-5 h-5')}
          </div>

          <!-- Tech Text Information -->
          <div class="flex flex-col text-left overflow-hidden">
            <h3 class="text-sm font-bold text-white tracking-wide group-hover:text-yellow-300 transition-colors leading-snug">
              ${tech.name}
            </h3>
            <p class="text-[11px] text-red-200/75 leading-tight font-normal mt-0.5 truncate">
              ${tech.description}
            </p>
          </div>
        </div>
      `)
      .join('');

    if (skillsCountEl) {
      skillsCountEl.textContent = `Showing ${filtered.length} technologies`;
    }
  }

  renderSkillsTabs();
  renderSkillsGrid();

  // =========================================================
  // 7. EDUCATION & EXPERIENCE SECTION: TABS & TIMELINE
  // =========================================================
  const tabBtnExperience = document.getElementById('tab-btn-experience');
  const tabBtnEducation = document.getElementById('tab-btn-education');
  const tabActiveCapsule = document.getElementById('tab-active-capsule');
  const timelineContainer = document.getElementById('timeline-items-container');
  let currentTimelineTab = 'experience';

  function renderTimeline() {
    if (!timelineContainer) return;

    // Filter items based on active tab
    const filtered = timelineData.filter((item) => {
      const type = (item.type || '').toLowerCase();
      if (currentTimelineTab === 'experience') {
        return type === 'experience' || type === 'internship';
      }
      return type === 'education';
    });

    timelineContainer.innerHTML = filtered
      .map(
        (item) => `
        <div class="relative w-full flex flex-col items-start h-auto overflow-visible clear-both block">
          <!-- Concentric Node Ring -->
          <div class="absolute -left-[57px] top-1 w-6 h-6 rounded-full flex items-center justify-center bg-brand-bg border-[3px] border-[var(--color-brand-accent)]">
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15]"></div>
          </div>

          <!-- Info Block Wrapper split header -->
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 w-full mb-4">
            <div class="text-left block">
              <h3 class="text-xl font-bold tracking-wide font-sans block text-white">
                ${item.title}
              </h3>
              ${
                item.subtitle
                  ? `<p class="text-[13px] font-sans font-semibold mt-1 block text-neutral-400">${item.subtitle}</p>`
                  : ''
              }
              <p class="text-[14px] font-sans font-bold mt-1 block text-[#facc15]">
                ${item.organization}
              </p>
            </div>

            <!-- Calendar Period Capsule -->
            <span class="inline-flex items-center gap-2 text-[11px] font-sans px-3 py-1 rounded-md border border-white/10 bg-brand-card shrink-0 w-fit md:self-start opacity-100 shadow-[0_4px_12px_rgba(0,0,0,0.3)] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#facc15]">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
              ${item.period}
            </span>
          </div>

          <!-- Descriptors Description Stack List -->
          <ul class="flex flex-col gap-2.5 text-[14px] font-sans text-left pl-0 w-full block list-none m-0">
            ${(item.description || [])
              .map(
                (desc) => `
              <li class="flex items-start gap-2.5 m-0 p-0 block text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1 shrink-0 block text-[var(--color-brand-accent)]">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span class="leading-relaxed font-sans block text-left text-neutral-300">${desc}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      `
      )
      .join('');
  }

  function setTimelineTab(tab) {
    currentTimelineTab = tab;
    if (tab === 'experience') {
      tabBtnExperience.classList.remove('text-[#A0A0A0]');
      tabBtnExperience.classList.add('text-white');
      tabBtnEducation.classList.remove('text-white');
      tabBtnEducation.classList.add('text-[#A0A0A0]');

      tabBtnExperience.appendChild(tabActiveCapsule);
    } else {
      tabBtnEducation.classList.remove('text-[#A0A0A0]');
      tabBtnEducation.classList.add('text-white');
      tabBtnExperience.classList.remove('text-white');
      tabBtnExperience.classList.add('text-[#A0A0A0]');

      tabBtnEducation.appendChild(tabActiveCapsule);
    }
    renderTimeline();
  }

  if (tabBtnExperience) {
    tabBtnExperience.addEventListener('click', () => setTimelineTab('experience'));
  }
  if (tabBtnEducation) {
    tabBtnEducation.addEventListener('click', () => setTimelineTab('education'));
  }

  renderTimeline();

  // =========================================================
  // 8. CONTACT FORM & EMAILJS INTEGRATION
  // =========================================================
  const contactForm = document.getElementById('contact-form');
  const formSuccessBanner = document.getElementById('form-success-banner');
  const btnSubmit = document.getElementById('btn-submit-form');
  const btnSubmitText = document.getElementById('btn-submit-text');
  const btnSubmitSpinner = document.getElementById('btn-submit-spinner');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const EMAILJS_SERVICE_ID = 'service_fdslr32';
  const EMAILJS_TEMPLATE_ID = 'template_bcu684n';
  const EMAILJS_PUBLIC_KEY = 'zUH_2QpGp4DwzGLut';

  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  function validateField(fieldName, value) {
    const trimmed = String(value || '').trim();
    if (fieldName === 'name') {
      if (!trimmed) return 'Name is required.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
    }
    if (fieldName === 'email') {
      if (!trimmed) return 'Email is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    }
    if (fieldName === 'message') {
      if (!trimmed) return 'Message is required.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters.';
    }
    return '';
  }

  function setFieldError(field, errorMsg, inputEl, errorEl) {
    if (errorMsg) {
      inputEl.classList.add('border-red-500/50', 'focus:border-red-500');
      inputEl.classList.remove('border-white/10', 'focus:border-accentNeon');
      errorEl.classList.remove('hidden');
      errorEl.classList.add('flex');
      errorEl.querySelector('.error-text').textContent = errorMsg;
    } else {
      inputEl.classList.remove('border-red-500/50', 'focus:border-red-500');
      inputEl.classList.add('border-white/10', 'focus:border-accentNeon');
      errorEl.classList.remove('flex');
      errorEl.classList.add('hidden');
    }
  }

  // Real-time validation
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      const err = validateField('name', nameInput.value);
      setFieldError('name', err, nameInput, nameError);
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const err = validateField('email', emailInput.value);
      setFieldError('email', err, emailInput, emailError);
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      const err = validateField('message', messageInput.value);
      setFieldError('message', err, messageInput, messageError);
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameVal = nameInput.value;
      const emailVal = emailInput.value;
      const messageVal = messageInput.value;

      const nameErr = validateField('name', nameVal);
      const emailErr = validateField('email', emailVal);
      const messageErr = validateField('message', messageVal);

      setFieldError('name', nameErr, nameInput, nameError);
      setFieldError('email', emailErr, emailInput, emailError);
      setFieldError('message', messageErr, messageInput, messageError);

      if (nameErr || emailErr || messageErr) {
        return;
      }

      // Set Submitting State
      btnSubmit.disabled = true;
      btnSubmitText.classList.add('hidden');
      btnSubmitText.classList.remove('flex');
      btnSubmitSpinner.classList.remove('hidden');
      btnSubmitSpinner.classList.add('flex');

      try {
        const templateParams = {
          name: nameVal,
          from_name: nameVal,
          email: emailVal,
          from_email: emailVal,
          message: messageVal,
          to_name: profile.fullName,
        };

        const res = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        if (res.status !== 200) {
          throw new Error('Failed to transmit message over EmailJS.');
        }

        // Trigger Confetti Celebration Fireworks
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#8b2626', '#ffffff', '#141414'],
          });
        }

        // Show Success Banner
        contactForm.classList.add('hidden');
        formSuccessBanner.classList.remove('hidden');
        contactForm.reset();

        // Auto-restore form after 6 seconds
        setTimeout(() => {
          formSuccessBanner.classList.add('hidden');
          contactForm.classList.remove('hidden');
        }, 6000);
      } catch (err) {
        console.error('Submission pipeline error:', err);
        alert(
          err.text ||
            err.message ||
            'An error occurred while sending your message. Please try again.'
        );
      } finally {
        btnSubmit.disabled = false;
        btnSubmitText.classList.remove('hidden');
        btnSubmitText.classList.add('flex');
        btnSubmitSpinner.classList.add('hidden');
        btnSubmitSpinner.classList.remove('flex');
      }
    });
  }
});

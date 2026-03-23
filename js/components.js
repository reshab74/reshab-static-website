/**
 * components.js — Shared Navbar & Footer injector
 * Injects into #navbar-placeholder and #footer-placeholder on every page.
 */

(function () {
  'use strict';

  /* ── Navbar HTML ── */
  const navbarHTML = `
  <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
    <div class="container navbar__inner">
      <a href="/index.html" class="navbar__logo" aria-label="Reshab — Home">
        <span>Reshab</span><span>.</span>
      </a>
      <div class="navbar__links" id="navLinks" role="menubar">
        <a href="/index.html"    class="navbar__link" role="menuitem">Home</a>
        <a href="/about.html"   class="navbar__link" role="menuitem">About</a>
        <a href="/projects.html" class="navbar__link" role="menuitem">Projects</a>
        <a href="/contact.html" class="navbar__link navbar__cta" role="menuitem">Contact</a>
      </div>
      <button class="navbar__hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  /* ── Footer HTML ── */
  const footerHTML = `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <div class="footer__logo"><span>Reshab</span><span>.</span></div>
          <p class="footer__tagline">IT Student passionate about System Administration, Linux, and Server Management.</p>
          <div class="footer__socials">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="GitHub" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="LinkedIn" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:reshab@example.com" class="footer__social-link" aria-label="Email" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Skills</h4>
          <ul>
            <li><a href="/about.html#skills">System Administration</a></li>
            <li><a href="/about.html#skills">Server Management</a></li>
            <li><a href="/about.html#skills">Linux</a></li>
            <li><a href="/about.html#skills">Microsoft Office</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; ${new Date().getFullYear()} Reshab. All rights reserved.</span>
        <span>Built with &hearts; &mdash; Hosted on Cloudflare Pages</span>
      </div>
    </div>
  </footer>`;

  /* ── Inject ── */
  function inject() {
    const navEl = document.getElementById('navbar-placeholder');
    const footEl = document.getElementById('footer-placeholder');
    if (navEl)  navEl.outerHTML = navbarHTML;
    if (footEl) footEl.outerHTML = footerHTML;
    initNavbar();
    initScrollReveal();
  }

  /* ── Active link highlighting ── */
  function initNavbar() {
    const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href').replace(/\/$/, '');
      if (
        path === href ||
        (path === '' && href === '/index.html') ||
        (path.endsWith('/') && href === '/index.html')
      ) {
        link.classList.add('active');
      }
    });

    /* Hamburger toggle */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
      });
      /* Close on link click */
      navLinks.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* Scroll shadow */
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ── Scroll-reveal ── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }

  /* ── Run after DOM ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

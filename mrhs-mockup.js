/**
 * MRHS. — site interactions
 * Scope: mobile nav toggle + subtle scrolled-header state.
 * Kept framework-free; safe to lift as-is into per-page bundles later.
 */
(function () {
  'use strict';

  var header = document.querySelector('.c-header');
  var nav = document.querySelector('.c-header__nav');
  var toggle = document.querySelector('.c-header__toggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();

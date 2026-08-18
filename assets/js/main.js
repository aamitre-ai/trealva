// ===== Trealva — main.js =====

document.addEventListener('DOMContentLoaded', function () {

  // Year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Solid header on scroll
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form -> mailto
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var reason = document.getElementById('reason').value;
      var message = document.getElementById('message').value.trim();

      var subject = 'Trealva — ' + reason + ' (' + name + ')';
      var body =
        'Nombre: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Motivo: ' + reason + '\n\n' +
        message;

      var mailto = 'mailto:alejandro@trealva.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // Reveal-on-scroll for sections
  var revealTargets = document.querySelectorAll('.section-inner, .hero-content');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

});

/* ============================================
   MAISON ÀṢÀ — JavaScript
   Fashion House Website | CSC 106/IFT 203
   ============================================ */

// ---- Mobile Navigation Toggle ----
function toggleMenu() {
  var navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('open');
}

// ---- Marquee Pause on Hover ----
document.addEventListener('DOMContentLoaded', function () {
  var marquee = document.querySelector('.marquee-content');
  if (marquee) {
    marquee.addEventListener('mouseenter', function () {
      marquee.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('mouseleave', function () {
      marquee.style.animationPlayState = 'running';
    });
  }

  // ---- Scroll Fade-In Animation ----
  var fadeElements = document.querySelectorAll('.fade-in');

  function checkFade() {
    fadeElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // trigger on load

  // ---- Active Navigation Link ----
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ---- Back to Top Button ----
  var topBtn = document.getElementById('backToTop');
  if (topBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    });

    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Contact Form Validation ----
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('formName').value.trim();
      var email = document.getElementById('formEmail').value.trim();
      var message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
      }

      // Basic email validation
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }

      showNotification('Thank you, ' + name + '! Your inquiry has been received. We\'ll be in touch soon.', 'success');
      contactForm.reset();
    });
  }

  // ---- Image Gallery Lightbox (Products page) ----
  var productCards = document.querySelectorAll('.product-card');
  productCards.forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('expanded');
    });
  });

  // ---- Event Countdown Timer ----
  var countdownEl = document.getElementById('eventCountdown');
  if (countdownEl) {
    var targetDate = new Date('2026-04-15T18:00:00+01:00');

    function updateCountdown() {
      var now = new Date();
      var diff = targetDate - now;

      if (diff <= 0) {
        countdownEl.textContent = 'Event has started!';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownEl.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
  }
});

// ---- Notification Toast ----
function showNotification(message, type) {
  // Remove existing notification
  var existing = document.querySelector('.notification');
  if (existing) existing.remove();

  var notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText =
    'position:fixed;bottom:30px;right:30px;padding:18px 30px;' +
    'background:' + (type === 'success' ? '#1a1a1a' : '#8b0000') + ';' +
    'color:#d4af37;font-size:0.9rem;letter-spacing:1px;z-index:9999;' +
    'border:1px solid #d4af37;max-width:400px;animation:fadeIn 0.3s ease;';

  document.body.appendChild(notification);

  setTimeout(function () {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(function () { notification.remove(); }, 300);
  }, 4000);
}

// ---- Current Year in Footer ----
document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

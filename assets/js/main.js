var navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

var hamburger = document.getElementById('hamburger');
var navMobile = document.getElementById('navMobile');

if (hamburger && navMobile) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  var mobileLinks = navMobile.querySelectorAll('a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && !navMobile.contains(e.target)) {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    }
  });
}

var fadeEls = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });
} else {
  fadeEls.forEach(function (el) {
    el.classList.add('visible');
  });
}

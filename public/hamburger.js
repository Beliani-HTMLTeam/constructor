// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menuClose = document.querySelector('.menu-close');
  const overlay = document.querySelector('.overlay');
  const panel = document.getElementById('panel');

  // Toggle menu when hamburger is clicked
  hamburgerMenu.addEventListener('click', function () {
    panel.classList.add('open');
    overlay.classList.add('active');
    // Ukryj hamburger, pokaż ikonę X
    hamburgerMenu.style.opacity = '0';
    hamburgerMenu.style.visibility = 'hidden';
  });

  // Close menu when X is clicked
  menuClose.addEventListener('click', function () {
    panel.classList.remove('open');
    overlay.classList.remove('active');
    // Pokaż hamburger, ukryj ikonę X
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
  });

  // Close menu when overlay is clicked
  overlay.addEventListener('click', function () {
    panel.classList.remove('open');
    overlay.classList.remove('active');
    // Pokaż hamburger, ukryj ikonę X
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
  });

  // Close menu when ESC key is pressed
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      panel.classList.remove('open');
      overlay.classList.remove('active');
      // Pokaż hamburger, ukryj ikonę X
      hamburgerMenu.style.opacity = '1';
      hamburgerMenu.style.visibility = 'visible';
    }
  });

  // Close menu when window is resized above 1000px
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1000) {
      panel.classList.remove('open');
      overlay.classList.remove('active');
      // Pokaż hamburger, ukryj ikonę X
      hamburgerMenu.style.opacity = '1';
      hamburgerMenu.style.visibility = 'visible';
    }
  });
});

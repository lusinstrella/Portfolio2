// Back to top button functionality
const backToTopBtn = document.getElementById("back-to-top");

// Only run if the button exists on the page
if (backToTopBtn) {
  // When the user scrolls down 300px from the top of the document, show the button
  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  // When the user clicks the button, scroll to the top of the document
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ===========================================
// GRADIENT TEXT - SIMULATED FIXED BACKGROUND
// ===========================================

(function() {
  const gradientElements = document.querySelectorAll('.gradient-text');

  if (gradientElements.length === 0) return;

  function updateGradientPositions() {
    gradientElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const offsetX = -rect.left;
      const offsetY = -rect.top;
      el.style.setProperty('--offset-x', `${offsetX}px`);
      el.style.setProperty('--offset-y', `${offsetY}px`);
    });
  }

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateGradientPositions();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateGradientPositions);
  updateGradientPositions();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateGradientPositions);
  }
})();

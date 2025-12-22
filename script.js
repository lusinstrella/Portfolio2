// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Only run if the button exists on the page
if (scrollToTopBtn) {
  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // When the user clicks the button, scroll to the top of the document
  scrollToTopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}

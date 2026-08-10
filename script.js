// Mobile menu — ready for connecting later pages.
const menuBtn = document.querySelector(".menu-btn");

menuBtn?.addEventListener("click", () => {
  document.querySelector(".nav")?.classList.toggle("mobile-open");
});

// The image placeholders intentionally use paths that you can replace:
// assets/profile-image.jpg
// assets/work-preview.jpg
// assets/featured-logo.png

const images = document.querySelectorAll("img");

images.forEach((img) => {
  if (img.complete) {
    img.classList.add("loaded");
  } else {
    img.addEventListener("load", () => {
      img.classList.add("loaded");
    });
  }
});

// 錨點平滑滾動（避開 fixed header）
document.querySelectorAll('a[href^="#Game"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;

    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - (headerHeight + 10);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

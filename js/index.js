document.addEventListener("DOMContentLoaded", () => {
  // swiper
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1100,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

window.onload = function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

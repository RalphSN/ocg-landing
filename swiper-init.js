document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".hero-swiper", {
    // 基本參數
    slidesPerView: 1, // 同時顯示的幻燈片數
    spaceBetween: 0, // 幻燈片間距
    loop: true, // 循環模式

    // 自動播放
    autoplay: {
      delay: 5000, // 每5秒切換
      disableOnInteraction: false, // 點擊後不會停止自動播放
    },

    // 導航按鈕
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 分頁器
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // 可點擊的分頁器
    },

    // 過渡效果
    effect: "slide", // 切換效果
    speed: 500, // 切換速度

    // 響應式斷點
    breakpoints: {
      // 當螢幕寬度 >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // 當螢幕寬度 >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
});

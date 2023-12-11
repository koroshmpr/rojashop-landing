document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
      const swiper = new Swiper('.swiper.mainSlider', {
        direction: 'vertical',
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        mousewheel: {
            invert: false,
            sensitivity: 3,
            eventsTarget: '.swiper-container',
        },
        on: {
            reachEnd: function () {
                // Disable mousewheel scrolling when reaching the last slide
                swiper.mousewheel.disable();
            },
            slideChange: function () {
                // Get the active slide index
                const activeIndex = swiper.activeIndex;
    
                // Remove the 'active' class from all slides
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
    
                // Add the 'active' class to the current active slide
                slides[activeIndex].classList.add('active');
    
                // Add a custom class to slides before the active slide
                for (let i = 0; i < activeIndex; i++) {
                    slides[i].classList.add('visible-item');
                }
            },
        },
    });
    
    const swiper2 = new Swiper('.swiper.slider', {
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        autoplay: {
            delay: 3000,
          },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
        disableOnInteraction: false,
    });
});
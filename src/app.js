function lineDrawer(id) {
    // Get the path element and its length
    const svgElement = document.getElementById(id);
    if (!svgElement) {
        console.error(`Element with ID ${id} not found.`);
        return;
    }

    // Find the first path element within the SVG
    const pathElement = svgElement.querySelector('path.st1'); // Adjust the selector based on your SVG structure
    if (!pathElement) {
        console.error(`No path element found within the SVG.`);
        return;
    }

    const pathLength = pathElement.getTotalLength();

    // Set the initial styles
    pathElement.style.strokeDasharray = pathLength;
    pathElement.style.strokeDashoffset = pathLength;

    // Update stroke-dashoffset as the user scrolls
    window.addEventListener('scroll', function () {
        // Calculate the scroll percentage
        const scrollPercentage = (window.scrollY - svgElement.getBoundingClientRect().top) / (svgElement.clientHeight - window.innerHeight);

        // Update stroke-dashoffset based on the scroll percentage
        const dashOffsetValue = pathLength * (1 - scrollPercentage);
        pathElement.style.strokeDashoffset = Math.max(0, dashOffsetValue);
    });
}

// Call lineDrawer when the window is loaded
window.addEventListener('load', function () {
    // lineDrawer('Layer_1');
  
    // Optionally, you can use window.scrollTo to scroll to a specific position after the window is loaded
    // Example: Scroll to the top of the document
    window.scrollTo(0, 0);
});

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

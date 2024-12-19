
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);

  let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const sliderWrapper = document.querySelector('.slider-wrapper');
const dots = document.querySelectorAll('.slider-dots span');
const intervalTime = 3000; // Time in milliseconds (e.g., 3000ms = 3 seconds)

// Show slide based on the current index
function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Move slides by updating the transform property
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Move to the next slide
document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetAutoSlide();
});

// Move to the previous slide
document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetAutoSlide();
});

// Navigate to a specific slide based on dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToSlide(index);
        resetAutoSlide();
    });
});

function moveToSlide(index) {
    showSlide(index);
}

// Automatic slide loop
let autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
}, intervalTime);

// Reset auto-slide timer on manual control
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, intervalTime);
}

// Initialize the slider
showSlide(currentIndex);

let currentSlide = 0;
    const slides1 = document.querySelectorAll('.carousel-slide');

    function changeSlide(step) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + step + slides1.length) % slides1.length;
        slides1[currentSlide].classList.add('active');
    }

    document.getElementById('nextSlide').addEventListener('click', () => changeSlide(1));
    document.getElementById('prevSlide').addEventListener('click', () => changeSlide(-1));



    document.addEventListener("DOMContentLoaded", () => {
      // GSAP Animation for Navbar
      const timeline = gsap.timeline();
  
      // Animate the logo
      timeline.from(".navbar-brand img", {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
      });
  
      // Animate the nav links
      timeline.from(
        ".navbar-nav .nav-item",
        {
          duration: 0.8,
          opacity: 0,
          y: 20,
          stagger: 0.2, // Add a delay between items
          ease: "power2.out",
        },
        "-=0.5" // Start slightly overlapping the logo animation
      );
  
      // Animate the navbar toggler
      timeline.from(".navbar-toggler", {
        duration: 0.8,
        opacity: 0,
        scale: 0.5,
        ease: "back.out(1.7)",
      });
    });
 
    
  


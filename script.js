function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  // This function transitions to the next slide
  function setUpCarousel(carousel) {
    function handleNext() {
      currentSlide = modulo(currentSlide + 1, numSlides);
      changeSlide(currentSlide);
    }
  
      // This function transitions to the previous slide
    function handlePrevious() {
      currentSlide = modulo(currentSlide - 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function changeSlide(slideNumber) {
      carousel.style.setProperty('--current-slide', slideNumber);
    }
  
    // get elements
    const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    const buttonNext = carousel.querySelector('[data-carousel-button-next]');
    const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  
    // carousel state we need to remember
    let currentSlide = 0;
    const numSlides = slidesContainer.children.length;
  
    // set up events -- this makes the buttons on click events for previous and next
    buttonPrevious.addEventListener('click', handlePrevious);
    buttonNext.addEventListener('click', handleNext);
  }
  
  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(setUpCarousel);COPY
  
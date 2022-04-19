// Vertical Slider
const runVerticalSlider = () => {  
  const rightSlides = document.querySelector('.right-slide');
  const leftSlides = document.querySelector('.left-slide');
  const slideUpButton = document.querySelector('#slide-up');
  const slideDownButton = document.querySelector('#slide-down');
  const sliderLength = rightSlides.querySelectorAll('div').length;
  const sliderHeight = 80;
  let activeSlide = 0;
  
  slideUpButton.addEventListener('click', () => {
    if (activeSlide < sliderLength - 1) {
      activeSlide++;
      rightSlides.style.transform = `translateY(-${(sliderLength - (activeSlide + 1)) * sliderHeight}vh)`;
      leftSlides.style.transform =`translateY(-${activeSlide * sliderHeight}vh)`;
    } else {
      rightSlides.style.transform = `translateY(-${(sliderLength - 1) * sliderHeight}vh)`;
      leftSlides.style.transform =`translateY(${(sliderLength - (activeSlide + 1)) * sliderHeight}vh)`;
      activeSlide = 0;
    }
  });

  slideDownButton.addEventListener('click', () => {
    if (activeSlide > 0) {      
      activeSlide--;
      rightSlides.style.transform = `translateY(-${(sliderLength - (activeSlide + 1)) * sliderHeight}vh)`;
      leftSlides.style.transform =`translateY(-${activeSlide * sliderHeight}vh)`;      
    } else {    console.log('Blah');
      rightSlides.style.transform =`translateY(${activeSlide * sliderHeight}vh)`;
      leftSlides.style.transform =`translateY(-${(sliderLength - 1) * sliderHeight}vh)`;
      activeSlide = sliderLength - 1;   
    } 
  });
}

runVerticalSlider();
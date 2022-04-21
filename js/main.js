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
    } else {
      rightSlides.style.transform =`translateY(${activeSlide * sliderHeight}vh)`;
      leftSlides.style.transform =`translateY(-${(sliderLength - 1) * sliderHeight}vh)`;
      activeSlide = sliderLength - 1;   
    } 
  });
}

// Hoverboard
const runHoverBoard = () => {
  const hoverboard = document.querySelector('#hoverboard > .board');
  const squares = 899;
  const colors = ['#FF595E', '#FFCA3A', '#2ecc71', '#1982C4', '#6A4C93',];
  
  for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');    

    square.addEventListener('mouseover', (e) => {
      let color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.backgroundColor = color;
      e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    });

    square.addEventListener('mouseout', (e) => {
      e.target.style.backgroundColor = '#1b1b1b';
      e.target.style.boxShadow = '0 0 2px #000';
    });
    
    hoverboard.appendChild(square);
  }  
}

runVerticalSlider();
runHoverBoard();
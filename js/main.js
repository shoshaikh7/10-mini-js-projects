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
      leftSlides.style.transform = `translateY(-${activeSlide * sliderHeight}vh)`;
    } else {
      rightSlides.style.transform = `translateY(-${(sliderLength - 1) * sliderHeight}vh)`;
      leftSlides.style.transform = `translateY(${(sliderLength - (activeSlide + 1)) * sliderHeight}vh)`;
      activeSlide = 0;
    }
  });

  slideDownButton.addEventListener('click', () => {
    if (activeSlide > 0) {
      activeSlide--;
      rightSlides.style.transform = `translateY(-${(sliderLength - (activeSlide + 1)) * sliderHeight}vh)`;
      leftSlides.style.transform = `translateY(-${activeSlide * sliderHeight}vh)`;
    } else {
      rightSlides.style.transform = `translateY(${activeSlide * sliderHeight}vh)`;
      leftSlides.style.transform = `translateY(-${(sliderLength - 1) * sliderHeight}vh)`;
      activeSlide = sliderLength - 1;
    }
  });
}

// Hoverboard
const runHoverBoard = () => {
  const hoverboard = document.querySelector('#hoverboard > .board');
  const squares = 899;
  const colors = ['#FF595E', '#FFCA3A', '#2ecc71', '#1982C4', '#6A4C93', ];

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

// Digital Clock
const runDigitalClock = () => {
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');
  const hourCircle = document.querySelector('#hours-circle');
  const minuteCircle = document.querySelector('#minutes-circle');
  const secondCircle = document.querySelector('#seconds-circle');
  const hoursDot = document.querySelector('#hours-dot');
  const minutesDot = document.querySelector('#minutes-dot');
  const secondsDot = document.querySelector('#seconds-dot');
  const ampm = document.querySelector('#ampm');

  setInterval(() => {
    let currentTime = new Date();
    let hh = currentTime.getHours();
    let mm = currentTime.getMinutes();
    let ss = currentTime.getSeconds();
    let am_pm = hh >= 12 ? 'PM' : 'AM';

    // Convert 24hr clock to 12hr clock
    hh = (hh > 12) ? hh - 12 : hh;

    // Add zero before single digit
    hh = (hh < 10) ? `0${hh}` : hh;
    mm = (mm < 10) ? `0${mm}` : mm;
    ss = (ss < 10) ? `0${ss}` : ss;

    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
    ampm.innerHTML = am_pm;

    // Dashoffset based on 12hrs : 60mins : 60secs
    hourCircle.style.strokeDashoffset = 314 - (314 * hh) / 12;
    minuteCircle.style.strokeDashoffset = 314 - (314 * mm) / 60;
    secondCircle.style.strokeDashoffset = 314 - (314 * ss) / 60;

    // Rotate dots based on current time
    // 360 / 12 = 30
    hoursDot.style.transform = `rotate(${hh * 30}deg)`;
    // 360 / 60 = 6
    minutesDot.style.transform = `rotate(${mm * 6}deg)`;
    // 360 / 60 = 6
    secondsDot.style.transform = `rotate(${ss * 6}deg)`;

  });
}


runVerticalSlider();
runHoverBoard();
runDigitalClock();
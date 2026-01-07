const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
let interval;

/* FUNÇÃO PRINCIPAL */
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');

  index = i;
}

/* PRÓXIMO */
function nextSlide() {
  let i = index + 1;
  if (i >= slides.length) i = 0;
  showSlide(i);
}

/* ANTERIOR */
function prevSlide() {
  let i = index - 1;
  if (i < 0) i = slides.length - 1;
  showSlide(i);
}

/* AUTO PLAY */
function startAutoPlay() {
  interval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

/* EVENTOS */
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoPlay();
  startAutoPlay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoPlay();
  startAutoPlay();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    stopAutoPlay();
    startAutoPlay();
  });
});

/* INICIAR */
showSlide(0);
startAutoPlay();
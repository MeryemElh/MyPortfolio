/** @format */

// Wrap every letter in a span
var textWrapper = document.querySelector('.animation .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: '.animation .letter',
    translateY: ['1.1em', 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: '.animation',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });

/*first page animation*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml13 .letter',
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: '.ml13 .letter',
    translateY: [0, -100],
    opacity: [1, 0],
    easing: 'easeInExpo',
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });

//responsive nav bar

const button = document.querySelector('button');
const inerIcon = document.querySelector('#nav-icon');
const ul = document.querySelector('.navlist');
button.addEventListener('click', () => {
  if (
    inerIcon.classList.contains('open') == true &&
    ul.style.display === 'block'
  ) {
    inerIcon.classList.remove('open');
    ul.style.display = 'none';
  } else {
    inerIcon.classList.add('open');
    ul.style.display = 'block';
  }
});

//home page changing color logo
const MyLogo = document.querySelector('#Mylogo');
let LogoIndex = 0;
var LogoArray = ['img/logo-dark.png', 'img/Logo-pink.png'];
function changelogo() {
  MyLogo.setAttribute('src', LogoArray[LogoIndex]);
  LogoIndex++;
  if (LogoIndex >= LogoArray.length) {
    LogoIndex = 0;
  }
}
setInterval(changelogo, 1000);

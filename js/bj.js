const body = document.querySelector('body');
const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log('finished loading');
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/bg${imgNumber + 1}.jpeg`;
  image.classList.add('bgImage');
  body.appendChild(image);
  image.addEventListener('loaded', handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

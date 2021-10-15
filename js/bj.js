const changeBackground = () => {
  const backgroundElement = document.getElementById('background');

  const IMG_AMOUNT = 5;

  const paintImage = (imageNumber) => {
    backgroundElement.style.backgroundImage = `url(./img/bg${imageNumber}.jpeg)`;
  };

  const getRandomNumber = (amount) => {
    const randomNumber = Math.floor(Math.random() * amount + 1);
    return randomNumber;
  };

  const backgroundFadeIn = () => {
    setTimeout(() => backgroundElement.classList.add('fade-in'), 200);
  };

  const init = () => {
    paintImage(getRandomNumber(IMG_AMOUNT));
    backgroundFadeIn();
  };

  init();
};

export default changeBackground;

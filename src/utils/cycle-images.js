const backgroundImage = () => {
  const background = document.querySelector('.hero-outer-flex');

  const randomNum = Math.floor(Math.random() * 4 + 1);

  const linearGradient =
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))';

  background.style.background = `${linearGradient}, url("/Brazos/starbucks${randomNum}.jpg") center`;

  console.log(randomNum);
};

export default backgroundImage;

const goHome = () => {
  const logo = document.querySelector('#logo');
  const home = document.querySelector('#home');
  
  logo.addEventListener('click', () => {
    home.scrollIntoView({ behavior: 'smooth' });
  });
  console.log('test from NAV BAR SCROLL');
};

export default goHome;

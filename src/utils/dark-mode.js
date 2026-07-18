const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll('#theme-toggle');

  // state variable
  const theme = localStorage.getItem('theme');

  // on mount
  theme && document.body.classList.add(theme);

  // let h2 = document.querySelectorAll('.hero-inner-flex > h2');

  //handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');

      // h2.forEach((element) => {
      //   element.style.color = 'var(--clr-steelblue)';
      //   console.log('this number' + element);
      // });
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  // events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener('click', handleThemeToggle),
  );
};

export default darkMode;

const menuBurger = function (nav) {
  const menuBtn = document.querySelector('.menu__btn');
  const menuNav = document.querySelector('.menu__nav');
  const logotype = document.querySelector('.nav__logotype');

  menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    this.classList.toggle('menu__btn-active');
    menuNav.classList.toggle('menu__nav-active');
    logotype.classList.toggle('nav__logo-none');
  });
};



export default menuBurger;

const mobileMenu = document.querySelector('.mobile-menu');
const MenuBtnOpen = document.querySelector('.menu-btn-open');
const MenuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

MenuBtnOpen.addEventListener('click', toggleMenu);
MenuBtnClose.addEventListener('click', toggleMenu);


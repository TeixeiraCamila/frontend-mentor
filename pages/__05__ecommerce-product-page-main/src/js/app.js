import * as cart from './cart.js';
import _ from 'lodash';
import slider from './slider.js';
import quantidade from './quantidade.js';

cart.openCart();
cart.addProdToCart();
cart.deleteProdFromCart();
slider();
quantidade();

// MENU MOBILE
let menu = document.querySelector('.header__menu');
let btnsMenu = document.querySelectorAll('.btn__menu');

btnsMenu.forEach((btn) => btn.addEventListener('click', toggleMenu));

function toggleMenu() {
  menu.classList.toggle('active');
}

import * as cart from './cart.js';
import * as menu from './menu.js';
import _ from 'lodash';
import * as slider from './slider.js';
import quantidade from './quantidade.js';

menu.openMenu();
menu.closeMenu();
cart.openCart();
cart.addToCard();
cart.deleteProd();
slider.initSliderDesktop();
quantidade();

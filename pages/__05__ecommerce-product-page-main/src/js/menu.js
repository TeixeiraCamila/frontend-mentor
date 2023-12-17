let close_menu = document.querySelector('#menu--close');
let open_menu = document.querySelector('#menu--open');
let menu = document.querySelector('.header__menu');

export function openMenu() {
  if (open_menu) {
    open_menu.addEventListener('click', () => {
      menu.classList.add('active');
      document.querySelector('body').classList.add('overlay');
    });
  }
}

export function closeMenu() {
  close_menu.addEventListener('click', () => {
    menu.classList.remove('active');
    document.querySelector('body').classList.remove('overlay');
  });
}

let icon_cart = document.querySelector('#user_cart');
let icon_delet = document.querySelector('#icon__delet');
let cart__container = document.querySelector('.cart__container')
let cart_content = document.querySelector('.content');


export function deleteProd() {
  if (icon_delet) {
    icon_delet.addEventListener('click', () => {
      cart_content.innerHTML = '';
    });
  }
}

export function openCart() {
  icon_cart.addEventListener('click', () => {
    cart__container.classList.toggle('active')
    
  });
}

let icon_cart = document.querySelector('#user_cart');
let cart__container = document.querySelector('.cart__container');
let cart_content = document.querySelector('.cart__content');
let btnAd = document.querySelector('#btn__add');
let qtdeProd = document.querySelector('.qtde__display');


export function openCart() {
  icon_cart.addEventListener('click', () => {
    cart__container.classList.toggle('active');

  });
}

export function addProdToCart() {
  btnAd.addEventListener('click', () => {
    if (qtdeProd.innerHTML > 0) {
      let string = `
      <div class="content">
      <div>
        <div class="prod__image">
          <img src="./src/images/image-product-1-thumbnail.jpg" alt="">
        </div>
        <div class="prod__content">
          <p>Fall Limited Edition Sneakers</p>
          <span> $125.00 x ${qtdeProd.innerHTML} <span>$${
        qtdeProd.innerHTML * 125
      }</span></span>
        </div>
        <div class="prod__icon" id="icon__delet">
          <img src="./src/images/icon-delete.svg" alt="icon-delete">
        </div>
      </div>
      <button>Checkout</button>
    </div> 
      `;
      cart_content.innerHTML = string;
      cart__container.classList.add('active');
      deleteProdFromCart();
    }
  });
}

export function deleteProdFromCart() {
  let btn__delet = document.querySelector('#icon__delet');
  if (btn__delet) {
    btn__delet.addEventListener('click', () => {
      cart_content.innerHTML = `<p>Your cart is empty</p>`;
    });
  }
}
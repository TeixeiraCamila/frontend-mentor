export default function quantidade() {
  let btns = document.querySelectorAll('.qtde__container button');
  btns.forEach((btn) => {
    btn.addEventListener('click', setQtde);
  });
}
let qtdeProd = document.querySelector('.qtde__display');
function setQtde() {
  let operaction = this.dataset.q;
  if (operaction == 'plus') {
    return qtdeProd.innerHTML++;
  }
  if (operaction == 'minus' && qtdeProd.innerHTML > 0) {
    {
      qtdeProd.innerHTML--;
    }
  }
}

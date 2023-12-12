let btnMenu = document.querySelectorAll('.close-menu');
let nav = document.querySelector('nav');

btnMenu.forEach(btn => {
  btn.addEventListener('click', ()=>{
    console.log(btn);
    nav.classList.toggle('active')
    document.querySelector('body').classList.toggle('extra')
  })
});


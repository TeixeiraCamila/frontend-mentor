let questions = document.querySelectorAll('.faq__p');
let questionsContainer = document.querySelectorAll('.faq__item');
questions.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let curentParent = e.currentTarget.closest('.faq__item');

    if (curentParent.className === 'faq__item active') {
      curentParent.classList.remove('active');
    } else {
      removeClass();
      curentParent.classList.add('active');
    }
  });
});

function removeClass() {
  questionsContainer.forEach((el) => {
    el.classList.remove('active');
  });
}

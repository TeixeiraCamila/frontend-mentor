let questions = document.querySelectorAll('.faq__p');

questions.forEach((el) => {
  el.addEventListener('click', () => {
    el.parentElement.classList.toggle('active');
  });
});

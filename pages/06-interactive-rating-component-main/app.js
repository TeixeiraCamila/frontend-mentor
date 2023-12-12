let btn = document.querySelectorAll('.card-rating li'),
  primaryCard = document.querySelector('.primary-card'),
  secondaryCard = document.querySelector('.secondary-card'),
  txt = document.querySelector('#msg'),
  submitBtn = document.querySelector('#submitBtn');

btn.forEach((i) => {
  i.addEventListener('click', () => {
    btn.forEach((i) => {
      i.classList.remove('active');
    });
    i.classList.add('active');
  });
});

submitBtn.addEventListener('click', () => {
  let active = document.querySelector('.active');
  if (active) {
    txt.textContent =
      'You selected ' + active.innerHTML + ' out of ' + btn.length;
    primaryCard.style.opacity = '0';
    primaryCard.style.transition = 'opacity 1s';

    secondaryCard.style.opacity = '1';
    secondaryCard.style.transition = 'opacity 1s';

    setTimeout(() => {
      primaryCard.style.display = 'none';
    }, 300);
  }
});

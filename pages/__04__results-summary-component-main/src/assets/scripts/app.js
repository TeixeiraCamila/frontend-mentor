window.addEventListener('load', function () {
  fetchData();
});
let list = document.querySelector('.summary__list');
const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: 'icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: 'icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: 'icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: 'icon-visual.svg',
  },
];
function fetchData() {
  
  let string = ``;
  data.forEach((el) => {
    string += `
      <div class="summary__item" style="background: var(--${el.category}__bg)"> 
        <img src="./src/assets/img/${el.icon}" alt="${el.category}">
        <p style="color: var(--${el.category}__color)"> ${el.category} </p>
        <span> <span> ${el.score} </span> / 100 </span>
      </div>
    `;
  });
  list.innerHTML = string;
}

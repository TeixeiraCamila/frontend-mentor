window.addEventListener('load', function () {
  fetchData();
});

async function fetchData() {
  const response = await fetch(
    '/pages/__04__results-summary-component-main/assets/data.json'
  );
  const data = await response.json();
  setData(data);
}
let list = document.querySelector('.summary__list');
function setData(data) {
  let string = ``;
  data.forEach((el) => {
    string += `
      <div class="summary__item" style="background: var(--${el.category}__bg)"> 
        <img src="${el.icon}" alt="${el.category}">
        <p style="color: var(--${el.category}__color)"> ${el.category} </p>
        <span> <span> ${el.score} </span> / 100 </span>
      </div>
    `;
  });
  list.innerHTML = string;
}

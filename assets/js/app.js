// document.querySelector('footer').innerHTML = `
// <div class="attribution">
// Challenge by
// <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
//   >Frontend Mentor</a
// >. Coded by
// <a target="_blank" href="https://www.frontendmentor.io/profile/TeixeiraCamila">Camila</a>.
// </div>
// <div class="attribution goHome">
// <a href="../../index.html">back to home</a>
// </div>
// `;
const AppHeader = {
  name: 'AppHeader',
  template: '#appHeader',
  props: ['options'],
  data() {
    return {
      title: 'Challenges',
    };
  },
  methods: {},
  watch: {},
};

new Vue({
  el: '#app',
  components: {
    AppHeader,
  },
  data() {
    return {
      cards: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('../../assets/js/cards.json');
        const data = await response.json();
        console.log('🚀 ~ file: app.js:44 ~ fetchData ~ data:', data)
        setTimeout(() => {
          this.cards = data;
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

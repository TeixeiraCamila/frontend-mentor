
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
        setTimeout(() => {
          this.cards = data;
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

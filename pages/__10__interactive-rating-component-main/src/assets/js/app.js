new Vue({
  el: '#app',
  components: {},
  data() {
    return {
      rating: 5,
      active: true,
      rate: '',
      isSelected: false,
      error: false,
    };
  },
  created() {},
  methods: {
    select(e) {
      this.error = false;
      this.rate = e;
    },
    submit() {
      if (this.rate) {
        this.active = !this.active;
        setTimeout(() => {
          this.active = !this.active;
          this.rate = '';
        }, 4000);
      }
    },
  },
});

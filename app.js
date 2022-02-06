new Vue({
  el: "#app",
  data() {
    return {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      changePercent: -10,

      value: 0,
      // prices: [8200, 23000, 189, 38900, 100000, 15, 150000],
      color: "f4f4f4",
      price: 8200,
      pricesWithDays: [
        { day: "Lunes", value: 8200 },
        { day: "Martes", value: 23000 },
        { day: "Miercoles", value: 189 },
        { day: "Jueves", value: 38900 },
        { day: "Viernes", value: 100000 },
        { day: "Sabado", value: 15 },
        { day: "Domingo", value: 150000 },
      ],
      showPrices: false,
    };
  },

  computed: {
    title() {
      return `${this.name} - ${this.symbol}`;
    },

    convertedValue() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.price;
    },
  },

  watch: {
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.color = this.color.split("").reverse().join("");
    },
  },
});

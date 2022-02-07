Vue.component("CoinDetail", {
  // props: ["changePercent", "title", "img", "name", "price"],
  props: ["coin"],
  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit("change-color", this.showPrices ? "FF96C8" : "3D3D3D");
    },
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.coin.price;
    },
  },

  created() {
    console.log("Created CoinDetail...");
  },

  mounted() {
    console.log("Mounted CoinDetail...");
  },

  template: `
    <div>
      <img
        v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name"
      />
      <h1 v-bind:class="coin.changePercent > 0 ? 'green':'red'">
        {{title}}
        <span v-if="coin.changePercent > 0">👍🏼</span>
        <span v-else-if="coin.changePercent < 0">👎🏼</span>
        <span v-else>🤞🏼</span>

        <!-- <span v-show="changePercent > 0">👍🏼</span>
        <span v-show="changePercent < 0">👎🏼</span>
        <span v-show="changePercent == 0">🤞🏼</span> -->
        <span v-on:click="toggleShowPrices">
          {{showPrices ? "🙈" : "🙉"}}
        </span>
      </h1>

      <input type="number" v-model="value" />
      <span>{{convertedValue}}</span>

      <slot name="texto"></slot>
      <slot name="link"></slot>

      <ul v-show="showPrices">
        <li
          v-for="(p, i) in coin.pricesWithDays"
          class="uppercase"
          v-bind:class="{orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price}"
          v-bind:key="p.day"
        >
          {{i}} - {{p.day}} - {{p.value}}
        </li>
      </ul>
    </div>
`,
});

new Vue({
  el: "#app",
  data() {
    return {
      btc: {
        name: "Bitcoin",
        symbol: "BTC",
        img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        changePercent: -10,
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
      },
      // prices: [8200, 23000, 189, 38900, 100000, 15, 150000],
      color: "f4f4f4",
    };
  },

  // watch: {
  //   showPrices(newValue, oldValue) {
  //     console.log(newValue, oldValue);
  //   },
  // },

  created() {
    console.log("Created...");
  },

  mounted() {
    console.log("Mounted...");
  },

  methods: {
    // toggleShowPrices() {
    //   this.showPrices = !this.showPrices;
    //   this.color = this.color.split("").reverse().join("");
    // },
    updateColor(color) {
      this.color = color || this.color.split("").reverse().join("");
    },
  },
});

<template>
  <div class="d-flex">
    <div class="d-flex shadow rounded p-3">
      <div class="px-3 align-self-center">
        <img :src="getImgUrl()" alt="" />
      </div>
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>

    <div class="px-3 shadow rounded ml-3 align-items-center d-flex">
      <b-form-input
        :value="(theyGet / 100) | moneyFormater"
        readonly
        placeholder="Recipient Gets"
      ></b-form-input>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import moneyFormater from "@/mixins/moneyFormater";

export default {
  mixins: [moneyFormater],
  data() {
    return {
      // selected: null,
    };
  },
  computed: {
    ...mapState({
      conversionRate: (state) => state.conversion.conversionRate,
    }),
    ...mapGetters("currencyExchange", ["theyGet"]),

    options() {
      let result = [];
      Object.keys(this.conversionRate).forEach(function (key) {
        let src = require(`@/assets/icons/${key}.svg`);
        result.push({
          html: `<img src="${src}"/> ` + key,
          value: key,
          text: key,
        });
      });
      return result;
    },

    selected: {
      get() {
        return this.$store.state.currencyExchange.selected;
      },
      set(value) {
        this.$store.commit("currencyExchange/setState", {
          key: "selected",
          value: value,
        });
      },
    },
  },
  methods: {
    getImgUrl() {
      return require(`@/assets/icons/${this.selected}.svg`);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
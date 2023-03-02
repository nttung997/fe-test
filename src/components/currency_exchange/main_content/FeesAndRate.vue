<template>
  <div>
    <div>{{ fee/100 }} {{ "USD" }} fees</div>
    <div>{{ conversionRate[selected] }} {{ selected }} exchange rate</div>
  </div>
</template>
<script>
import feeCalculator from "@/mixins/feeCalculator";
import { mapGetters, mapState } from "vuex";

export default {
  mixins: [feeCalculator],
  computed: {
    ...mapState({
      conversionRate: (state) => state.conversion.conversionRate,
      selected: (state) => state.currencyExchange.selected,
      
    }),
    ...mapGetters("currencyExchange", ["fee"]),
  },
  created() {
    this.$store.dispatch("conversion/getConversionRate");
  },
};
</script>
<style lang="scss" scoped>
</style>
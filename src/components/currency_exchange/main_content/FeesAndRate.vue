<template>
  <div>
    <div>{{ fee }}</div>
    <div></div>
  </div>
</template>
<script>
import feeCalculator from "@/mixins/feeCalculator";
import { mapGetters } from "vuex";

export default {
  mixins: [feeCalculator],
  computed: {
    ...mapGetters("currencyExchange", ["fee"]),
  },
};
</script>
<style lang="scss" scoped>
</style>
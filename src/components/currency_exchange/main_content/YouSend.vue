<template>
  <div class="d-flex">
    <div class="d-flex  shadow rounded p-3">
      <div class="px-3 align-self-center">
        <img src="@/assets/icons/US.svg" alt="" />
      </div>
      <div>
        <div>{{ (balance / 100) | moneyFormater }}</div>
        <div>Available</div>
      </div>
      <!-- <div>icon</div> -->
    </div>
    <div class="px-3 shadow rounded ml-3 align-items-center d-flex">
      <b-form-input
        v-model="youSend"
        placeholder="You send"
        type="number"
        :max="balance / 100"
      ></b-form-input>
    </div>
  </div>
</template>
<script>
import moneyFormater from "@/mixins/moneyFormater";
import { mapState } from "vuex";

export default {
  mixins: [moneyFormater],
  computed: {
    ...mapState({
      balance: (state) => state.user.balance,
    }),

    youSend: {
      get() {
        return this.$store.state.currencyExchange.youSend / 100;
      },
      set(value) {
        let amount = Math.round(value * 100);
        this.$store.commit("currencyExchange/setState", {
          key: "youSend",
          value: amount < this.balance ? amount : this.balance,
        });
      },
    },
  },

  created() {
    this.$store.dispatch("user/getBalance");
  },
};
</script>
<style lang="scss" scoped>
</style>
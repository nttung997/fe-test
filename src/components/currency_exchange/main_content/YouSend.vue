<template>
  <div class="d-flex">
    <div class="d-flex">
      <div>
        <img src="@/assets/icons/US.svg" alt="" />
      </div>
      <div>{{ balance }}</div>
      <!-- <div>icon</div> -->
    </div>
    <div>
      <b-form-input v-model="youSend" placeholder="You send"></b-form-input>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      balance: (state) => state.user.balance,
    }),

    youSend: {
      get() {
        return this.$store.state.currencyExchange.youSend;
      },
      set(value) {
        this.$store.commit("currencyExchange/setState", {
          key: "youSend",
          value: value,
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
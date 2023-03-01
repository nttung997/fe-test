<template>
  <div>
    <div>
      <div>
        <img src="@/assets/icons/US.svg" alt="">
      </div>
      <div>{{ balance }}</div>
      <div>icon</div>
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
        return this.$store.state.filterForm.youSend;
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
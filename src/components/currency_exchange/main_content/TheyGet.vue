<template>
  <div class="d-flex">
    <div class="d-flex">
      <div>
        <img src="@/assets/icons/US.svg" alt="" />
      </div>
    </div>
    <div>
      <b-form-input
        v-model="theyGet"
        placeholder="Recipient Gets"
      ></b-form-input>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      //
    }),
    ...mapGetters("currencyExchange", ["theyGet"]),
  },
};
</script>
<style lang="scss" scoped>
</style>
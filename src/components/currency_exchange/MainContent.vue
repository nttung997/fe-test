<template>
  <div>
    <div class="my-3">
      <YouSend></YouSend>
    </div>
    <div class="my-3">
      <FeesAndRate></FeesAndRate>
    </div>
    <div class="my-3">
      <TheyGet></TheyGet>
    </div>
    <div class="my-3">
      <MessageBox></MessageBox>
    </div>
    <div class="my-3">
      <FooterButtons></FooterButtons>
    </div>
  </div>
</template>
<script>
import YouSend from "@/components/currency_exchange/main_content/YouSend.vue";
import FeesAndRate from "@/components/currency_exchange/main_content/FeesAndRate.vue";
import TheyGet from "@/components/currency_exchange/main_content/TheyGet.vue";
import MessageBox from "@/components/currency_exchange/main_content/MessageBox.vue";
import FooterButtons from "@/components/currency_exchange/main_content/FooterButtons.vue";

export default {
  components: { YouSend, FeesAndRate, TheyGet, MessageBox, FooterButtons },
};
</script>
<style lang="scss" scoped>
</style>
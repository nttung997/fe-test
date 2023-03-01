<template>
  <div>
    <div>
      <YouSend></YouSend>
    </div>
    <div>
      <FeesAndRate></FeesAndRate>
    </div>
    <div>
      <RecipentGets></RecipentGets>
    </div>
    <div>
      <MessageBox></MessageBox>
    </div>
    <div>
      <FooterButtons></FooterButtons>
    </div>
  </div>
</template>
<script>
import YouSend from "@/components/currency_exchange/main_content/YouSend.vue";
import FeesAndRate from "@/components/currency_exchange/main_content/FeesAndRate.vue";
import RecipentGets from "@/components/currency_exchange/main_content/RecipientGets.vue";
import MessageBox from "@/components/currency_exchange/main_content/MessageBox.vue";
import FooterButtons from "@/components/currency_exchange/main_content/FooterButtons.vue";

export default {
  components: { YouSend, FeesAndRate, RecipentGets, MessageBox, FooterButtons },
};
</script>
<style lang="scss" scoped>
</style>
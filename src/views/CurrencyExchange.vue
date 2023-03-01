<template>
  <div class="d-flex align-items-center justify-content-center">
    <MainContent></MainContent>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from "@/components/currency_exchange/MainContent.vue";

export default {
  name: "CurrencyExchange",
  components: {
    MainContent,
  },
};
</script>

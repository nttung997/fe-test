<template>
  <div class="row h-100">
    <div class="col-3 h-100">
    <Menu />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/currency_exchange/LeftMenu.vue";

export default {
  name: "HomeView",
  components: {
    Menu,
  },
};
</script>

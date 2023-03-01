<template>
  <div class="row">
    <div class="col-3">
    <Menu />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/currency_exchange/Menu.vue";

export default {
  name: "HomeView",
  components: {
    Menu,
  },
};
</script>

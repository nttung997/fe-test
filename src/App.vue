<template>
  <div id="app">
    <div class="d-flex h-100">
      <div class="col-3 h-100 p-0">
        <LeftMenu></LeftMenu>
      </div>
      <div class="col-9 h-100">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "@/components/currency_exchange/LeftMenu.vue";
export default {
  components: {
    LeftMenu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>

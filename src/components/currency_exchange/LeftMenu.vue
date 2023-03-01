<template>
  <div class="h-100 menu text-off-white overflow-auto">
    <div class="p-2">
      <div class=""></div>
      <div>
        <div class="d-flex">STEP 02</div>
        <div class="d-flex">Specify Amount</div>
      </div>
      <div class=""></div>
    </div>

    <div class="d-flex p-2">
      <div class="col-3 px-2">
        <img src="@/assets/icons/my-account.svg" alt="" />
      </div>
      <div>My Accounts</div>
    </div>

    <div class="d-flex p-2">
      <div class="col-3 px-2">
        <img src="@/assets/icons/transactions.svg" alt="" />
      </div>
      <div>Transactions</div>
    </div>

    <div class="d-flex p-2">
      <div class="col-3 px-2">
        <img src="@/assets/icons/transactions.svg" alt="" />
      </div>
      <div>Manage Cards</div>
    </div>

    <div class="d-flex p-2">
      <div class="col-3 px-2">
        <img src="@/assets/icons/transactions.svg" alt="" />
      </div>
      <div>Deposit Money</div>
    </div>

    <div class="d-flex p-2">
      <div class="col-3 px-2">
        <img src="@/assets/icons/transactions.svg" alt="" />
      </div>
      <div>Convert Money</div>
    </div>
    <div class="d-flex p-2">
      <div class="col-3 px-2">
        <img src="@/assets/icons/transactions.svg" alt="" />
      </div>
      <div>Live Chat</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LeftMenu",
  components: {},
};
</script>
<style lang="scss" scoped>
.menu {
  background-color: #0e0d52;
}
.text-off-white {
  color: #cad5f9;
}
</style>

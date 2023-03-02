<template>
  <div class="h-100 menu text-off-white overflow-auto">
    <div class="p-2 step d-flex">
      <div class="pl-2 pr-3 align-self-center">
        <img src="@/assets/icons/progress-bar.svg" alt="">
      </div>
      <div>
        <div class="d-flex">STEP 02</div>
        <div class="d-flex">Specify Amount</div>
      </div>
      <div class=""></div>
    </div>

    <div class="d-flex pt-4">
      <div class="px-3">
        <img src="@/assets/icons/my-account.svg" alt="" />
      </div>
      <div>My Accounts</div>
    </div>

    <div class="d-flex pt-4">
      <div class="px-3">
        <img src="@/assets/icons/transactions.svg" alt="" />
      </div>
      <div>Transactions</div>
    </div>

    <div class="d-flex pt-4">
      <div class="px-3">
        <img src="@/assets/icons/manage-cards.svg" alt="" />
      </div>
      <div>Manage Cards</div>
    </div>

    <div class="d-flex pt-4">
      <div class="px-3">
        <img src="@/assets/icons/deposit-money.svg" alt="" />
      </div>
      <div>Deposit Money</div>
    </div>

    <div class="d-flex pt-4">
      <div class="px-3">
        <img src="@/assets/icons/convert-money.svg" alt="" />
      </div>
      <div>Convert Money</div>
    </div>
    <div class="d-flex pt-4">
      <div class="px-3">
        <img src="@/assets/icons/live-chat.svg" alt="" />
      </div>
      <div>Live Chat</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LeftMenu",
};
</script>
<style lang="scss" scoped>
.menu {
  background-color: #0e0d52;
}
.text-off-white {
  color: #cad5f9;
}
.step{
  background: #2A2E94;
}
</style>

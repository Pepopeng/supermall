<template>
  <div class="cart">
    <navi class="navi">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </navi>
    <cartList class="cartList"></cartList>
    <bottomBar class="bottomBar"></bottomBar>
  </div>
</template>

<script>
import navi from "@c/common/navi";

import cartList from "./cart-components/cartList";
import bottomBar from "./cart-components/bottomBar";
export default {
  name: "cart",
  components:{
    navi,
    cartList,
    bottomBar
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.navi{
  background-color: var(--color-tint);
  color: white;
}
.cartList{
  height: calc(100% - 44px - 49px - 40px);
}
.bottomBar{
  height: 40px;
  background-color: #eeeeee;
  position: relative;

}
</style>
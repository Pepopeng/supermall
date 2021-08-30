<template>
  <div >
    <bar>
      <baritem path="/">
        <img slot="img1" src="~@a/img/baritem-img/home-n.svg" alt="">
        <img slot="img2" src="~@a/img/baritem-img/home.svg" alt="">
        <div slot="text">首页</div>
      </baritem>
      <baritem path="/category">
        <img slot="img1" src="~@a/img/baritem-img/cate-n.svg" alt="">
        <img slot="img2" src="~@a/img/baritem-img/cate.svg" alt="">
        <div slot="text">分类</div>
      </baritem>
      <baritem path="/cart">
        <img slot="img1" src="~@a/img/baritem-img/cart-n.svg" alt="">
        <img slot="img2" src="~@a/img/baritem-img/cart.svg" alt="">
        <div slot="text">购物车</div>
      </baritem>
      <baritem path="/profile">
        <img slot="img1" src="~@a/img/baritem-img/mine-n.svg" alt="">
        <img slot="img2" src="~@a/img/baritem-img/mine.svg" alt="">
        <div slot="text">我的</div>
      </baritem>
    </bar>
    <!--    <div @click="click()">button</div>-->
  </div>
</template>

<script>
import bar from "@c/common/bar"
import baritem from "@c/common/baritem"
export default {
  name:"mainbar",
  components:{
    bar,baritem
  }


}
</script>

<style scoped>
img {
  width:24px;
  height: 24px;

}
</style>
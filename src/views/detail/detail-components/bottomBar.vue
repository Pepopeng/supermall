<template>
  <div class="bottomBar">
    <div class="bottom-left">
      <div class="service">
      <i class="icon"></i>
      <span>客服</span>
    </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div :class="{cfav1:!isFav,cfav2:isFav}">
        <i class="icon" @click="favClick"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "bottomBar",
  data(){
    return{
      isFav:true
    }
  },
  methods:{
    favClick(){
      this.isFav=!this.isFav
    },
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottomBar{
  position: relative;
  background-color: white;
  height: 49px;
  z-index: 102;
  display: flex;
  font-size: 12px;
}

.bottom-right{
  width: 50%;
}
.bottom-right div{
  width: 50%;
  float: left;
  text-align: center;
  line-height: 49px;
}
.cart{
  background-color: orange;

}
.buy{
  background-color: var(--color-tint);
  color: white;
}
.bottom-left{
  width: 50%;
}
.bottom-left div{
  float: left;
  height: 100%;
  width: 33.3%;
  text-align: center;
}
.icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 0;
  background-image: url("~@a/img/detail/detail_bottom.png");
  background-repeat: no-repeat;
  background-size: 75%;
}
.service .icon{
  background-position: 2px -38px;
}
.shop .icon{
  background-position: 2px -72px;
}
.cfav1 .icon{
  background-position: 2px 3px;
}
.cfav2 .icon{
  background-position: 2px -18px;
}
</style>
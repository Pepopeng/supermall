<template>
  <div class="cartListItem">
    <div :class="{itemCheck:!cartItem.check,itemCheckActive:cartItem.check}" @click="checkClick"></div>
    <div class="itemImg"><img :src="cartItem.img" alt="" @load="imgload"></div>
    <div class="itemInfo">
      <div class="singleRow title">{{cartItem.title}}</div>
      <div class="singleRow">{{cartItem.desc}}</div>
      <div>
        <span class="tint">￥{{cartItem.price}}</span>
        <div class="count">
          <span class="large">×</span>
          <span class="num">{{cartItem.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "cartListItem",
  props:{
    cartItem:Object
  },
  data(){
    return{

    }
  },
  methods:{
    imgload(){
      this.$emit('imgload')
    },
    checkClick(){
      this.cartItem.check=!this.cartItem.check
    }
  }
}
</script>

<style scoped>
.cartListItem{
  font-size: 12px;
  padding: 6px 4px;
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #dddddd;
}
.tint{
  color: var(--color-high-text);
}
.count{
  float: right;
}
.count .large{
  font-size: 15px;
}
.count .num{
  position: relative;
  top: -2px;
}
.itemCheck{
  width: 16px;
  height: 16px;
  margin:auto 2px;
  border-radius: 50%;
  /*background: url("~@a/img/cart/pinkstick.svg") 0 0/100% no-repeat;*/
  border: 1px solid #999999;
}

.itemCheckActive{
  width: 16px;
  height: 16px;
  margin:auto 2px;
  border-radius: 50%;
  background: url("~@a/img/cart/pinkstick.svg") 0 0/100% no-repeat;
}
.itemImg img{
  width: 58px;
  height: 87px;
  border-radius: 4px;
}
.itemInfo{
  flex: 1;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title{
  color: black;
}
.singleRow{
  width: 230px;
   white-space: nowrap;
   text-overflow: ellipsis;
  overflow: hidden;
}
</style>
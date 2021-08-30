<template>
  <div class="bottomBar">
    <div class="bottomLeft">
      <div :class="{itemCheck:!isAllSelect,itemCheckActive:isAllSelect}" @click="checkClick"></div>
      <div>全选</div>
    </div>

    <div class="bottomCenter"><span>合计：</span><span>￥{{ totalPrice }}</span></div>
    <div class="bottomRight" @click="sumClick">去计算：({{selectLength}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "bottomBar",
  computed:{
    ...mapGetters(['cartList']),
    isAllSelect(){
      return this.cartList.find(item=>item.check===false)===undefined
    },
    totalPrice(){
      return this.cartList.reduce((pre,cur,index,array)=>{
        if(cur.check){return pre+cur.price*cur.count}
        else {return pre}
      },0)
    },
    selectLength(){
      return this.cartList.filter(item=>item.check).length
    },
    isAllNotSelect(){
      return this.cartList.find(item=>item.check===true)===undefined
    }
  },
  methods:{
    checkClick() {
       if(this.isAllSelect){this.cartList.forEach(item=>{item.check=false})}
       else {this.cartList.forEach(item=>{item.check=true})}
    },
    sumClick(){
      if(this.isAllNotSelect){ this.$toast.show('当前未有商品被选中')}
    }
  }
}
</script>

<style scoped>
.bottomBar{
  display: flex;
  font-size: 15px;
  justify-content: space-between;
}
.bottomLeft{
  display: flex;
  margin-right: 30px;

  align-items: center;
}
.bottomCenter{
  display: flex;
  align-items: center;
  margin-right: 30px;

}
.bottomRight{
  padding: 0 10px;
  text-align: center;
  display: flex;
  align-items: center;
 background-color: red;
  color: white;
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
</style>
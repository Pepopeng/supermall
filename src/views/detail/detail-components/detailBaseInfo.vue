<template>
  <div class="detailBaseInfo">
    <div class="title">{{good.title}}</div>
    <div class="priceinfo">
  <span class="newprice">{{good.newprice}}</span>
  <span class="oldprice">{{good.oldprice}}</span>
  <span class="discount">{{good.discount}}</span>
</div>
    <div class="columns">
      <span v-for="item in good.columns.length-1"  :key="item">{{good.columns[item-1]}}</span>
      <span>{{good.service[good.service.length-1].name}}</span>
    </div>
    <div class="services">
      <div v-for="item in good.service.length-1"  :key="item"  class="serviceitem">
        <img :src="good.service[item-1].icon" alt="">
        <span>{{good.service[item-1].name}}</span>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props:{
    good:Object
  }

}
</script>

<style scoped>
.columns{
  margin-top: 10px;
  color: #999999;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
}

.services{
  margin-top: 15px;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
}
.serviceitem{

}
.serviceitem img{
  width: 10px;
  height: 10px;
}
.detailBaseInfo{
  padding: 12px 10px;
}
.title{
color: black;
}
.priceinfo{
  margin-top: 10px;
}
.newprice{
  font-size: 25px;
  color: var(--color-high-text);
}
.oldprice{
  font-size: 13px;
  text-decoration:line-through;
}
.discount{
  background-color: var(--color-high-text);
  color: white;
  font-size: 11px;
  border-radius: 8px;
  padding:2px 4px;
  position: relative;
  top:-5px;
}
</style>
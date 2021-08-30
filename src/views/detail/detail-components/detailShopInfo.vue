<template>
  <div class="detailShopInfo">
    <div class="title">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="middle">
      <div class="middle1">
        <div class="middle11">
          <div class="bigfont">{{ (shop.sells/10000).toFixed(1)}}万</div>
          <div>总销量</div>
        </div>
        <div class="middle12">
          <div class="bigfont ">{{shop.goodsCount}}</div>
          <div class="adjust2">全部宝贝</div>
        </div>
      </div>
      <div class="middle2">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td>
              <span v-if="item.isBetter" style="color: #f13e3a">{{item.score}}</span>
              <span v-else style="color: #5ea732">{{item.score}}</span>
            </td>
            <td>
              <span v-if="item.isBetter" class="better">高</span>
              <span v-else class="nobetter">低</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="butt">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props:{
    shop:Object
  }
}
</script>

<style scoped>
.detailShopInfo{
  padding: 15px 10px 10px;
  border-top: 5px solid rgba(0,0,0,0.05);
}

.butt{
  margin-top: 15px;
  text-align: center;
}
.butt span{
  width: 300px;
  background-color: #eeeeee;
  padding: 5px 45px;
  border-radius: 8px;
}

.middle{
  margin-top: 20px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.middle .bigfont{
  font-size: 20px;
}
.middle table{
  width: 120px;
  height: 70px;
}
.better{
  background-color: #f13e3a;
  color: white;
}
.nobetter{
  background-color: #5ea732;
  color: white;
}
.middle1{
  display: flex;
  text-align: center;
  align-items: center;
  border-right: 1px solid rgba(0,0,0,0.3);
}
.middle11,.middle12{
  position: relative;
  top: -5px;
}
.middle12{
  padding-right: 80px;
}
.middle1 div{
  width: 75px;
}
.adjust2{
  position: relative;
  top: 3px;
}


.title{
  display: flex;
  align-items: center;
}
.title span{
  margin-left: 10px;
}
.title img{
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.1);
}
</style>
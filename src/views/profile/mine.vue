<template>
  <div class="mine">
    <navi class="navi">
    <div slot="center">我的档案</div>
  </navi>
    <div class="top">
      <div class="ava"><img src="~@a/img/profile/avatar.svg" alt="" ></div>
      <div class="topright" @click="mineClick">
        <div class="topmid">
        <div class="text1">登录/注册</div>
        <div class="text2"><img src="~@a/img/profile/phone.svg" alt="">暂无绑定手机号</div>
      </div>
        <div class="topbut"><img src="~@a/img/common/arrow-left.svg" alt=""></div>
      </div>
    </div>
    <div class="middle1">
      <div @click="mineClick">
        <div><span class="high">0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div @click="mineClick">
        <div><span class="high">0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div @click="mineClick">
        <div><span class="high">0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="middle2">
      <div @click="mineClick">
        <img src="~@a/img/profile/message.svg" alt="">
        我的消息
      </div>
      <div @click="mineClick">
        <img src="~@a/img/profile/pointer.svg" alt="">
        积分商城
      </div>
      <div @click="mineClick">
        <img src="~@a/img/profile/vip.svg" alt="">
        会员卡
      </div>
    </div>
    <div class="butt">
      <div @click="cartClick">
        <img src="~@a/img/profile/cart.svg" alt="">
        我的购物车
      </div>
      <div @click="mineClick">
        <img src="~@a/img/profile/shopping.svg" alt="">
        下载购物app
      </div>
    </div>
  </div>
</template>

<script>
import navi from "@c/common/navi";
export default {
  name: "mine",
  components:{
    navi
  },
  methods:{
    mineClick(){
      this.$toast.show('后台未开放，敬请期待')
    },
    cartClick(){
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.navi{
  background-color: var(--color-tint);
  color: white;
}
.top{
  background-color: var(--color-tint);
  padding: 12px 8px ;
  display: flex;
  color: white;
  width: 100%;
  height: 100px;
}
.ava img{
  width: 80px;
  height: 80px;
}
.topright{
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.topright img{
  width: 20px;
}
.topbut{
  line-height: 76px;
}
.topmid{
  margin-left: 9px;
  padding-top: 13px;
}
.topmid .text1{
  padding-left: 5px;
}
.topmid img{
  position: relative;
  top:3px;
}


.middle1{
  font-size: 13px;
  display: flex;
  height: 100px;
  border-bottom: 10px solid #eeeeee;
}
.middle1>div{
  width: 33.3%;
  text-align: center;
  padding-top: 25px;
  border-right: 1px solid #eeeeee;
}
.high{
  font-size:23px;
  color: red;
  font-weight: bold;
}
.middle2{
  font-size: 15px;
  border-bottom: 10px solid #eeeeee;
}
.middle2>div{
  height: 40px;
  padding: 5px ;
  border-bottom: 1px solid #dddddd;
}
.middle2 img{
  position: relative;
  top: 4px;
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
}
.butt{
  font-size: 15px;
}
.butt>div{
  height: 40px;
  padding: 5px ;
}
.butt>div:first-child{
  border-bottom: 1px solid #dddddd;
}
.butt img{
  position: relative;
  top: 4px;
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
}
</style>
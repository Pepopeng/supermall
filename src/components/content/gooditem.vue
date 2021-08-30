<template>
<div class="gooditem" @click="click">
  <img v-lazy="good.image===undefined?good.show.img:good.image" alt="" class="showimg">
  <p class="title">{{good.title}}</p>
  <span class="price">{{good.price}}</span>
<!--  <img src="~@a/img/common/collect.svg" class="collect" alt="">-->
  <span class="fav">{{good.cfav}}</span>

</div>
</template>

<script>
export default {
  name: "gooditem",
  props:{
    good: Object
  },
  methods:{
    click(){
      this.$router.push('/detail/'+this.good.iid)
    }
  }

}
</script>

<style scoped>
.gooditem{
  width: 48%;
  text-align: center;

}
.gooditem .showimg{
  width:100%;
  border-radius: 5px;
  height: 230px;
}

.gooditem .title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gooditem .price{
  margin-right: 20px;
  color: var(--color-tint);
}
.gooditem .fav{
  position: relative;
}
.gooditem .fav::before{
  content:'';
  position: absolute;
  left: -15px;
  top:1px;
  width: 14px;
  height: 14px;
  background:url("~@a/img/common/collect.svg") 0 0/14px 14px;
}
</style>
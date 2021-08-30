<template>
  <swiper class="swiper">
    <swiperitem v-for="(item,index) in images" :key="index">
      <img :src="item" alt="">
    </swiperitem>
  </swiper>
</template>

<script>
import swiper from "@c/common/swiper";
import swiperitem from "@c/common/swiperitem";
export default {
  name: "detailswiper",
  props:{
    images:Array
  },
  components:{
    swiper,
    swiperitem
  }
}
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
</style>
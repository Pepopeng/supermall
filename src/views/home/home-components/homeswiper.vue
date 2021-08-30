<template>
  <div>
    <swiper ref="swiper">
      <swiperitem v-for="(item,index) in list" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </swiperitem>

    </swiper>
  </div>
</template>

<script>
import swiper from "@c/common/swiper";
import swiperitem from "@c/common/swiperitem";
export default {
  name: "homeswiper",
  props:{
    list:{
      type:Array,
    }
  },
  data(){
    return{
      imgisload:false
    }
  },
  components:{
    swiper,swiperitem
  },
  methods:{
    imgload(){
      if(!this.imgisload){
        this.$emit('imgload')
        this.imgisload=true
      }

    },

  }
}
</script>

<style scoped>

</style>
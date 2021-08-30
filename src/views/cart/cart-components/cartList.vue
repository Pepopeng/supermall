<template>
 <div class="cartList">
   <scroll class="scroll" ref="scroll">
     <cartListItem v-for="(item,index) in cartList" :key="index" :cartItem="item" @imgload="imgload"></cartListItem>
   </scroll>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from "@c/common/scroll";

import cartListItem from "./cartListItem";

export default {
  name: "cartList",
  computed:{
    ...mapGetters(['cartList'])
  },
  components:{
    scroll,
    cartListItem
  },
  methods:{
    imgload(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.scroll{
  height: 100%;
}
</style>
<template>
<div class="detailnav">
  <navi>
    <div slot="left" class="left" @click="leftclick"><img src="~@a/img/common/back.svg" alt=""></div>
    <div slot="center" class="center">
      <span class="navitem" :class="{active:activeIndex===0}" @click="centerClick(0)">商品</span>
      <span class="navitem" :class="{active:activeIndex===1}" @click="centerClick(1)">参数</span>
      <span class="navitem" :class="{active:activeIndex===2}" @click="centerClick(2)">评论</span>
      <span class="navitem" :class="{active:activeIndex===3}" @click="centerClick(3)">推荐</span>
    </div>
    <div slot="right" class="right"><div>...</div></div>
  </navi>
</div>
</template>

<script>
import navi from '@c/common/navi'

export default {
  name: "detailnav",
  components:{
    navi
  },
  methods:{
    leftclick(){
      this.$router.back()
    },
    centerClick(index){
      this.$emit('navClick',index)
    }
  },
  props:{
    activeIndex:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  // data(){
  //   return{
  //     activeNum:this.activeIndex
  //   }
  // }
}
</script>

<style scoped>
.center{
  height: 100%;
  display: flex;
  font-size: 10px;
  justify-content: space-evenly;
  align-items: center;
  line-height: 25px;
}
.center .navitem{

}

.left img{
  vertical-align: middle;
}
.right div{
  transform: translate(0,-2px);
}

.active{
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
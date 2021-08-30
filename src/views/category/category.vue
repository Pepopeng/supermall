<template>
  <div class="category">
    <catenavi class="navi">
      <div slot="center">商品分类</div>
    </catenavi>
    <scroll class="scroll1">
        <div v-for="(item,index) in cateKey" :key="index" class="sideitem" :class="{isactive:index===active}" @click="sideItemClick(index)">
          {{item.title}}
        </div>
    </scroll>
    <scroll class="scroll2" :probetype="3" ref="scroll2" @scrolling="scrolling2">
     <itemList v-for="(item,index) in cateKey" :list="goods[item.title]" :key="index" v-if="islist" :ref="'s'+index"></itemList>
    </scroll>

  </div>
</template>

<script>
import scroll from '@c/common/scroll'
import catenavi from '@c/common/navi'

import item from "./cateComponents/item";
import itemList from "./cateComponents/itemList";

import {categoryreq,subcatereq} from "@/networks/categoryreq/categoryreq";

export default {
  name: "category",
  data(){
    return{
      cateKey:[],
      goods:Object,
      active:0,
      islist:false,
      tops:[]
    }
  },
  computed:{
  },
  created() {

    categoryreq().then(res=>{
      this.cateKey=res.data.category.list
    })

    window.setTimeout(()=> {
      console.log(this.cateKey)
      for (let key of this.cateKey) {
        subcatereq(key.maitKey).then(res => {
          const catekey = key.title
          this.goods[catekey] = res.data.list
        })
      }
      }, 100)

  },
  mounted() {

      window.setTimeout(()=>{
        this.islist=true
      },500)

    window.setTimeout(()=>{
      for(let i=0;i<this.cateKey.length; i++){
        this.tops[i]=this.$refs['s'+i][0].$el.offsetTop
      }
    },600)

  },
  components:{
    scroll,
    catenavi,
    itemList,
    item
  },
  methods:{
    sideItemClick(index){
      this.active=index
      this.$refs.scroll2.scrollto(0,-this.tops[index])
    },
    scrolling2(position){
      const posiy=-position.y
      console.log(posiy)
      let index=0

      for(let i=0;i<this.cateKey.length; i++){
        if(posiy >= this.tops[i]) {
          if(i===this.cateKey.length-1){index=i;break}
          else {continue}
        }
        else {
          if(i===0){index=0;break;}
          else {index=i-1;break;}
        }
      }
      this.active=index
    }

  }
}
</script>

<style scoped>
.category{
  height: 100vh;
}
.scroll1{
  height: calc(100% - 44px - 49px);
  width: 100px;
  display: inline-block;
  position: relative;
  background-color: #eeeeee;
}
.scroll2{
  display: inline-block;
  height: calc(100% - 44px - 49px);
  width: calc(100% - 100px);
}
.isactive{
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
  background-color: white;
}
.sideitem{
  width: 100%;
  height: 46px;
  text-align: center;
  line-height: 46px;
  touch-action: none;
}
.navi{
  background-color: var(--color-tint);
  color: white;
  font-weight: bold;
}
</style>
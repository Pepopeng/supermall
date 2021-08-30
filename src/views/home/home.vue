<template>
  <div class="home">
    <homenav style="color: white"></homenav>
    <div class="hometab1" v-show="hometabshow"><hometab :titles="['流行','新款','精选']"  ref="hometab1" @titleclick="tabclick"></hometab></div>
    <scroll  ref="scroll"  class="scroll" :probetype="3" @scrolling="scrolling" @pullingup="pullingup">
      <homeswiper :list="banner"  @imgload="swiimgload"></homeswiper>
      <homerecommend :recommends="recommend"></homerecommend>
      <div id="feature">
        <a href="http://act.mogujie.com/zzlx67">
          <img src="~@a/img/home/recommend_bg.jpg" alt="">
        </a>
      </div>
      <div class="hometab2"><hometab :titles="['流行','新款','精选']"  ref="hometab2" @titleclick="tabclick"></hometab></div>
      <homegoodslist :listdata="goods[active].data"></homegoodslist>
    </scroll>
    <backup v-show="backupshow" @click.native="backupclick"></backup>
  </div>
</template>

<script>
import homenav from "./home-components/homenav"
import homeswiper from "./home-components/homeswiper";
import homerecommend from "./home-components/homerecommend";

import hometab from '@c/content/tabcontrol'
import homegoodslist from '@c/content/goodslist'
import backup from '@c/content/backup'
import scroll from "@c/common/scroll";

import {multireq} from "@/networks/homereq/multireq";
import {goodsreq} from "@/networks/homereq/goodsreq";
export default {
  name: "home",
  data(){
    return{
      scrollposi:{x:0,y:0},
      banner:[],
      recommend:[],
      goods:{
        pop:{
          page:0,
          data:[]
        },
        new:{
          page:0,
          data:[]
        },
        sell:{
          page:0,
          data:[]
        }
      },
      active:'pop',
      hometabshow:false,
      taboffset:0
    }
  },
  computed:{
    backupshow(){
      return (-this.scrollposi.y)>=1000
    },
  },
  components:{
    homenav,
    homeswiper,
    homerecommend,
    hometab,
    homegoodslist,
    scroll,
    backup

  },
  created() {
    multireq().then(res=>{
      this.banner=res.data.banner.list
      this.recommend=res.data.recommend.list
    })

    this.loadmore('pop')
    this.loadmore('new')
    this.loadmore('sell')
  },
  activated() {
    this.$refs.scroll.scrollto(0,this.scrollposi.y,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {

  },
  methods:{
    swiimgload(){
      this.taboffset=this.$refs.hometab2.$el.offsetTop
    },
    pullingup(){
      console.log('pulling')
      this.loadmore(this.active)
      this.$refs.scroll.refresh()
      this.$refs.scroll.finishpull()
    },
    backupclick(){
      this.$refs.scroll.scrollto(0,0)
    },
    scrolling(position){
      this.scrollposi=position
      this.hometabshow=(-position.y)>=this.taboffset

    },
    loadmore(type){
       let page=++this.goods[type].page
       goodsreq(type,page).then(res=>{this.goods[type].data.push(...res.data.list)},error => {console.log(error)})
    },
    tabclick(index) {
      switch (index){
        case 0:
          this.active='pop';
          break;
        case 1:
          this.active='new';
          break;
        case 2:
          this.active='sell';
          break;
      }
      this.$refs.hometab2.activeindex=index
      this.$refs.hometab1.activeindex=index
    }

  },
}
</script>

<style scoped>
.scroll{
  height: calc(100% - 49px);
}
.home{
  height: 100vh;
}
#feature img{
  width: 100%;
}
.hometab1{
  width: 100%;
  position: fixed;
  top: 44px;
  background-color: white;
  z-index: 10;
}
</style>
<template>
<div class="detail">
  <detailnav :activeIndex="activeIndex" @navClick="navClick"></detailnav>
  <scroll class="scroll" :probetype="3" @scrolling="scrolling" ref="scroll">
    <detailswiper :images="swiimgs"></detailswiper>
    <detailBaseInfo :good="good"></detailBaseInfo>
    <detailShopInfo :shop="shop"></detailShopInfo>
    <detailGoodInfol :goodinfo="goodinfo" @imgAllLoad="imgAllLoad" ref="goodInfo"></detailGoodInfol>
    <detailParams :params="params" ref="params"></detailParams>
    <detailComment :comment="comment" ref="comment"></detailComment>
    <detailRecommend :recommend="recommend" ref="recommend"></detailRecommend>
  </scroll>
  <bottomBar @addToCart='addToCart'></bottomBar>
  <backup class="backup" v-show="backupshow" @click.native="backupclick"></backup>
</div>
</template>

<script>
import detailnav from "./detail-components/detailnav";
import detailswiper from "./detail-components/detailswiper";
import detailBaseInfo from "./detail-components/detailBaseInfo";
import detailShopInfo from "./detail-components/detailShopInfo";
import detailGoodInfol from "./detail-components/detailGoodInfo";
import detailParams from "./detail-components/detailParams";
import detailComment from "./detail-components/detailComment";
import detailRecommend from "./detail-components/detailRecommend";
import bottomBar from "./detail-components/bottomBar";

import scroll from "@c/common/scroll";
import backup from "@c/content/backup";

import {detailreq,goods,shop,goodParams,getRecommend} from "@/networks/detailreq/detailreq";

export default {
  name: "detail",
  data(){
    return{
      iid:0,
      good: {
        columns:[1,2,3],
        service:[1,2,3]
      },
      shop:{},
      swiimgs:[],
      goodinfo:{
        detailImage:[{
          key:'sb',
          list:[]
        }]
      },
      params:{
        sizes:[],
        infos:[[1,2],[2,3],[3,4]]
      },
      comment:{user:{avatar:''}},
      recommend:{},
      backupshow:false,
      paramsOffsettop:0,
      commentOffsettop:0,
      recomsOffsettop:0,
      activeIndex:0
    }
  },
  created() {
    this.iid=this.$route.params.iid
    detailreq(this.iid).then((res)=>{
      const result=res.result
      console.log(result)
      this.good=new goods(result.itemInfo,result.columns,result.shopInfo.services)
      this.shop=new shop(result.shopInfo)
      this.goodinfo=result.detailInfo
      this.params=new goodParams(result.itemParams.info,result.itemParams.rule)
      this.swiimgs=result.itemInfo.topImages
      if(result.rate.cRate!==0){
        this.comment=result.rate.list[0]
      }
        },error => {
      console.log(error)}
    )
    getRecommend().then((res)=>{
      this.recommend=res.data
      console.log(res.data)},error => {
      console.log(error)}
    )
  },
  methods:{
    addToCart(){
      const product={}
      product.img=this.swiimgs[0]
      product.title=this.good.title
      product.desc=this.good.desc
      product.price=this.good.realprice
      product.iid=this.iid
      this.$store.dispatch('addProduct',product).then((res)=>{
        this.$toast.show(res)
      })

    },
    navClick(index){
      // this.activeIndex=index
      // console.log(this.activeIndex)
      switch (index){
        case 0:
          this.$refs.scroll.scrollto(0,0);
          break;
        case 1:
          this.$refs.scroll.scrollto(0,-this.paramsOffsettop);
          break;
        case 2:
          this.$refs.scroll.scrollto(0,-this.commentOffsettop);
          break;
        case 3:
          this.$refs.scroll.scrollto(0,-this.recomsOffsettop);
          break;
      }

    },
    imgAllLoad(){
      this.$refs.scroll.refresh()

      this.paramsOffsettop=this.$refs.params.$el.offsetTop
      this.commentOffsettop=this.$refs.comment.$el.offsetTop
      this.recomsOffsettop=this.$refs.recommend.$el.offsetTop
    },
    scrolling(posi){
      if((-posi.y)>1000){
        this.backupshow=true
      }
      if((-posi.y)<this.paramsOffsettop){this.activeIndex=0}
      else if((-posi.y)<this.commentOffsettop){this.activeIndex=1}
      else if((-posi.y)<this.recomsOffsettop){this.activeIndex=2}
      else if((-posi.y)>=this.recomsOffsettop){this.activeIndex=3}
    },
    backupclick(){
      this.$refs.scroll.scrollto(0,0)
    }
  },
  components:{
    detailnav,
    detailswiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodInfol,
    detailParams,
    detailComment,
    detailRecommend,
    backup,
    bottomBar
  }
}
</script>

<style scoped>
.detail{
  height: 100vh;
}
.scroll{
  position: relative;
  height: calc(100% - 44px - 49px);
  z-index: 101;
  background-color: white;
}
.backup{
  z-index: 102;
}
</style>
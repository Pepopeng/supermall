<template>
  <div class="detailGoodInfo">
    <div class="desc">
      <div class="topline">
        <i ></i>
      </div>
      <div>{{goodinfo.desc}}</div>
      <div class="butline">
        <i></i>
      </div>
    </div>
<!--    <div v-for="(item,index) in goodinfo.detailImage" :key="index" class="detailImg">-->
<!--      <div class="imgkey">{{item.key}}</div>-->
<!--      <div v-for="(item1,index1) in item.list" :key="index1">-->
<!--        <img :src="item1" alt="">-->
<!--      </div>-->
<!--    </div>-->

    <div class="imgkey">{{goodinfo.detailImage[0].key}}</div>
    <div v-for="(item,index) in goodinfo.detailImage[0].list" :key="index">
      <img :src="item" alt=""  @load="imgload">
    </div>

  </div>
</template>

<script>
export default {
  name: "detailGoodInfo",
  props:{
    goodinfo:Object
  },
  data(){
    return{
      imglen:0,
      loadnum:0
    }
  },
  watch:{
    goodinfo(newValue,oldValue){
      this.imglen=newValue.detailImage[0].list.length
    }
  },
  methods:{
    imgload(){
        this.loadnum++
        if(this.loadnum>=this.imglen){
          this.$emit('imgAllLoad')
        }
    },
  }
}
</script>

<style scoped>
.detailGoodInfo{
  padding: 15px 10px 5px;
  border-top: 5px solid rgba(0,0,0,0.05);
  font-size: 12px;
}

.topline{
  position: relative;
  background-color: gray;
  margin-bottom: 10px;
  width: 60px;
  height: 0.5px;
}
.topline i{
  position: absolute;
  top: -2px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: black;
}
.butline{
  float: right;
  position: relative;
  background-color: gray;
  margin-top: 10px;
  width: 60px;
  height: 0.5px;
}
.butline i{
  position: absolute;
  top: -2px;
  right: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: black;
}

img{
  width: 100%;
}
.imgkey{
  padding-top: 20px;
  margin-bottom: 5px;
}
</style>
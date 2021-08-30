<template>
  <div class="swiper">
    <div class="swi" ref="swi" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator" v-if="isindica">
      <div v-for="(item,index) in itemnum" :key="index"  class="indicatoritem" :class="{active:isactive(index)}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:{
    animdur:{
      type:Number,
      default:1000   //ms
    },
    timedur:{
      type:Number,
      default:2000 //ms
    },
    isindica:{
      type:Boolean,
      default:true,
    },

  },
  data(){
    return{
      itemnum:0,
      swistyle: {},
      currentdex:1,
      swiwidth:0,
      ismoving:false,
      slideratio:0.25
    }
  },
  mounted() {
    window.setTimeout(()=>{
      this.handledom()
      if(this.itemnum>1){this.starttimer()}
    },500)
    },

  methods:{
    isactive(index) {
        return index+1===this.currentdex||index+1===this.currentdex%this.itemnum||index+1===this.currentdex+this.itemnum||this.itemnum===1
    },
    handledom(){
      let swi=this.$refs.swi
      let swichildren=swi.getElementsByClassName("slider")
      this.itemnum=swichildren.length
      if(this.itemnum>1){
        let fir=swichildren[0].cloneNode(true)
        let last=swichildren[swichildren.length-1].cloneNode(true)
        swi.insertBefore(last,swichildren[0])
        swi.appendChild(fir)
        this.swiwidth=swi.offsetWidth
        this.swistyle=swi.style
        this.settrans(-this.swiwidth)
      }


    },
    settrans(position){
      this.swistyle.transform=`translate(${position}px,0)`;
    },
    swimove(){
      this.ismoving=true
      this.swistyle.transition=`${this.animdur}ms`
      this.settrans(-this.swiwidth*this.currentdex)
      window.setTimeout(()=>{
        this.checkindex()
      },this.animdur)

      this.ismoving=false
    },
    checkindex(){
      if(this.currentdex>this.itemnum){
        this.swistyle.transition='0ms'
        this.currentdex=1
        this.settrans(-this.swiwidth)
      }
      else if(this.currentdex<1){
        this.swistyle.transition='0ms'
        this.currentdex=this.itemnum
        this.settrans(-this.currentdex*this.swiwidth)
      }



    },
    starttimer() {
      this.timerid=window.setInterval(()=>{
        this.currentdex++
        this.swimove()
      },this.timedur)
    },
    stoptimer(){
      window.clearInterval(this.timerid)
    },
    touchstart(e){
      if(this.ismoving){return}
      else {
        this.stoptimer()
        this.startX=e.touches[0].pageX
        this.swistyle.transition='0ms'
      }
    },
    touchmove(e){

      this.distance=this.startX-e.touches[0].pageX
      this.settrans(-this.currentdex*this.swiwidth-this.distance)
    },
    touchend(){
      if(Math.abs(this.distance)>this.slideratio*this.swiwidth){
        if(this.distance<0){
          this.currentdex--
          this.swimove()
        }
        else if(this.distance>0){
          this.currentdex++
          this.swimove()
        }
      }
     else{
        this.swimove()
      }
     if(this.itemnum>1){this.starttimer()}
    },

  },


}
</script>

<style scoped>
.swiper{
  width: 100%;
  overflow: hidden;
  position: relative;
}
.swi{
  display: flex;
}

.indicator{
  position: absolute;
  bottom: 8px;
  display: flex;
  justify-content: center;
  width: 100%;

}
.indicatoritem{
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: white;
  flex-shrink: 0;
  margin: 0 5px;
}
.active{
  background-color: red;
}
</style>
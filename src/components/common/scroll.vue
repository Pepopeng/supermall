<template>
<div class="scroll" ref="wrap" >
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import scroll from 'better-scroll'
export default {
  name: "scroll",
  props:{
    probetype:{
    type:Number,
    default:0
  },
    pullupload:{
      type:Boolean,
      default:true
    },
  },
  data(){
    return{
      scroll:{},
    }
  },
  mounted() {
    this.scroll=new scroll(this.$refs.wrap,{
       click:true,
       probeType:this.probetype,
       pullUpLoad:this.pullupload
    })
    this.scroll.on('scroll',position=>{
      this.$emit('scrolling',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingup')
    })
  },
  methods:{
    finishpull(){
      this.scroll.finishPullUp()
    },
    scrollto(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.scroll{
  overflow: hidden;
}
</style>
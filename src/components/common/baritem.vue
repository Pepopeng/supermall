<template>
<div class="baritem ignore" @click="click" >
  <div v-if="!isactive"><slot name="img1"></slot></div>
  <div v-else><slot name="img2"></slot></div>

  <div :class="textact"><slot name="text"></slot></div>
</div>
</template>

<script>
export default {
  name: "baritem",
  data(){
     return{
       // isactive:ture
     }
  },
  computed:{
    isactive(){
      return this.$route.path===this.path
    },
    textact(){
      return this.isactive? "textact" : ""
    }
  },
  props:{
    path:String,
  },
  methods: {
    click() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.baritem{
  flex: 1;
  height: 49px;
  text-align: center;
}

.textact{
  color: red;
}
</style>
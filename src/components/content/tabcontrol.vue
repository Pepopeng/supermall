<template>
<div class="tabcontrol">
  <div v-for="(item,index) in titles" :key="index" class="tabcontrolitem" :class="{titleactive:index===activeindex}" @click="click(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "tabcontrol",
  data(){
    return{
      activeindex:0
    }
  },
  methods:{
    click(index){
      this.activeindex=index
      this.$emit('titleclick',index)
    }
  },
  props:{
    titles:Array
  }
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  padding: 8px 0px 10px;
}
.tabcontrolitem{
  flex: 1;
}
.tabcontrolitem span{
  flex: 1;
  padding:5px;
}
.titleactive{
  color: var(--color-high-text);
}
.titleactive span{
  border-bottom:3px solid var(--color-tint);
}
</style>
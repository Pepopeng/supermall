<template>
  <div class="itemlist">
    <item v-for="(item,index) in list" :good="item" :key="index"></item>
  </div>
</template>

<script>
import item from "./item";
export default {
  name: "itemlist",
  props:{
    list:Array

  },
  components:{
    item
  },

}
</script>

<style scoped>
.itemlist{
  border-bottom: 10px solid #eeeeee;
  padding: 8px 5px 8px;
  display: flex;
  width: 100%;
  flex-wrap:wrap;
}
</style>
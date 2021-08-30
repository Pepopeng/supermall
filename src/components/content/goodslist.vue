<template>
<div class="goodslist">
  <gooditem v-for="(item,index) in listdata" :good="item" :key="index"></gooditem>
</div>
</template>

<script>
import gooditem from "./gooditem";
export default {
  name: "goodslist",
  props:{
    listdata:Array
  },
  components:{
    gooditem
  }

}
</script>

<style scoped>
.goodslist{
  display: flex;
  width: 100%;
  flex-wrap:wrap;
  justify-content: space-evenly;
}
</style>
<template>
  <div class="detailRecommend">
    <goodslist :listdata="recommend.list">
    </goodslist>
  </div>
</template>

<script>
import goodslist from "@c/content/goodslist";
import gooditem from "@c/content/gooditem";
export default {
  name: "detailRecommend",
  props:{
    recommend:Object
  },
  components:{
    goodslist,
    gooditem
  }
}
</script>

<style scoped>
.detailRecommend{
  padding-top: 5px;
}
</style>
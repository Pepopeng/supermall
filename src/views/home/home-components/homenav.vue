<template>
  <div  class="homenav">
    <navi><div slot="center">购物街</div></navi>
  </div>
</template>

<script>
import navi from "@c/common/navi"
export default {
  name: "homenav",
  components:{
    navi
  }
}
</script>

<style scoped>
.homenav{
  background-color: var(--color-tint)
}
</style>
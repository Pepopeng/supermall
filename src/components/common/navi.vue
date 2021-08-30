<template>
  <div id="navi">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center">></slot></div>
  <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navi",
}
</script>

<style scoped>
#navi{
  text-align: center;
  display: flex;
  line-height: 44px;
}
.center{
  flex:1;
}

.left,.right{
  width: 40px;
}

</style>
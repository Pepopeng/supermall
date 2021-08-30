<template>
<div class="slider">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "swiperitem",

  }

</script>

<style scoped>
.slider{
  flex-shrink: 0;
  width: 100%;
}
.slider img{
  width: 100%;
}
</style>
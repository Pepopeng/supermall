<template>
<div id="bar" ><slot></slot></div>
</template>

<script>
export default {
  name: "bar"
}
</script>

<style scoped>
#bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c6c6c6;
  box-shadow: 0 -3px #dddddd;
  z-index: 100;
}

</style>
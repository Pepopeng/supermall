<template>
  <div id="app">
   <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    <mainbar></mainbar>
  </div>
</template>

<script>
import mainbar from "@c/content/mainbar"
export default {
  name:"app",
  components:{
    mainbar
  }
}
</script>
<style>
@import "~@a/css/base.css";

</style>

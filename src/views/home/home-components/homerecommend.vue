<template>
<div class="homerecommond">
  <div v-for="(item,index) in recommends" class="recomitem">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "homerecommend",
  props:{
    recommends:Array
  }
}
</script>

<style scoped>
.homerecommond{
  width: 100%;
  display: flex;
  text-align: center;
  padding-top: 5px;
  border-bottom: 8px solid #eee;
  padding-bottom: 8px;
  font-size: 15px;
}
.recomitem{
  flex: 1;
}
.recomitem img{
  width: 70px;
  height: 70px;
}

</style>
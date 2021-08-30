<template>
  <div class="item" >
    <a :href="good.link">
      <img v-lazy="good.image" alt="" class="showimg">
      <p class="title">{{ good.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    good: Object
  },
  methods: {

  }

}
</script>

<style scoped>
.item {
  width: 33%;
  text-align: center;
}

.item .showimg {
  width: 100%;
  border-radius: 5px;

}

.item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


</style>
<template>
  <div class="detailParams">
    <div class="topimg">
      <img :src="params.image" alt="">
    </div>
    <div class="table">
      <table>
      <tr v-for="(item,index) in params.sizes[0]" :key="index"  class="tableRow">
        <td v-for="(item1,index1) in item" :key="index1" class="td">
          {{item1}}
        </td>
      </tr>
    </table>
    </div>
    <div class="table">
      <table>
      <tr v-for="(item,index) in params.infos" :key="index" class="tableRow">
        <td class="td ">{{item.key}}</td>
        <td class="td value">{{item.value}}</td>
      </tr>
    </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "detailParams",
  props:{
    params:Object
  }

}
</script>

<style scoped>
.detailParams{
  padding: 0 10px 5px;
  font-size: 12px;
  border-bottom: 5px solid rgba(0,0,0,0.1);
}

.topimg img{
  width: 100%;
}
table{
  width: 100%;
}
.table{
  width: 100%;
  padding:0px 30px 20px;
}
.tableRow{
  height: 30px;
  border-bottom: 1px solid #dddddd;
}
.table .tableRow:last-child{
  border-bottom: 2px solid #bbbbbb;
}

.tableRow .td:first-child{
  font-weight: bold;
}
.value{
  color: var(--color-high-text);
  width: 150px;
}
</style>
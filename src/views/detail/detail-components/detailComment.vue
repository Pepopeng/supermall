<template>
  <div class="detailComment">
    <div class="head">
      <span>用户评价</span>
      <div class="headright">
        <span>更多</span>
        <span> > </span>
      </div>

    </div>
    <div class="user">
      <img :src="comment.user.avatar" alt="">
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="commentContent" >{{comment.content}}</div>
    <div class="message">{{comment.created | dataShow}}{{'  '+comment.style}}</div>
    <div class="imgs">
      <img :src="item" alt="" v-for="(item,index) in comment.images" :key="index">
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/formatDate'
export default {
  name: "detailComment",
  props:{
    comment:Object
  },
  data(){
    return{
      date:''
    }
  },
  filters:{
    dataShow(timeNum){
      const commentDate=new Date(timeNum*1000)
      return formatDate(commentDate,'yyyy年M月d日 hh:mm:ss')
    }
  },


}
</script>

<style scoped>
.detailComment{
  font-size: 12px;
  padding: 10px 10px 5px;
}
.head{
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.head img{
  width: 40px;
  height: 40px;
}
.head .headright{
  float: right;
}
.user{
  margin-top: 9px;

}
.user img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.2);
  vertical-align: middle;
}
.user span{
  line-height: 40px;
  margin-left: 5px;
}
.imgs img{
  width: 70px;
  height: 70px;
  margin-right: 3px;
}
.message{
  color: #999999;
}
</style>
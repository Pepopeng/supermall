<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "toast",
  data(){
    return{
      message:'',
      isShow:false,
      timeID:0
    }
  },
  methods:{
    show(message,dealy=1000){
      window.clearTimeout(this.timeID)
      this.message=message
      this.isShow=true
      this.timeID=window.setTimeout(()=>{
        this.isShow=false
        this.message=''
      },dealy)
    }
  }

}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 105;
  background-color: #333333;
  color: white;
  padding: 9px 10px 10px;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
}
</style>
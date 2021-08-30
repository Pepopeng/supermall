import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCount(state,payload){
      payload.count++
    },
    addNew(state,payload){
      payload.check=true
      payload.count=1
      state.cartList.push(payload)
    }
  },
  actions: {
    addProduct(context,payload){
      return new Promise((resolve,reject)=>{
        const p=context.state.cartList.find(item=>item.iid===payload.iid)
        if(p!==undefined){
          context.commit('addCount',p)
          resolve('当前商品数量+1')
        }
        else {
          context.commit('addNew',payload)
          resolve('添加了新的商品')
        }
      },)
    }
  },
  getters:{
    cartList(state){
      return state.cartList
    }
  },
  modules: {
  }
})

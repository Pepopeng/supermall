import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "@/toast";
import fastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'


Vue.use(toast)
fastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(vueLazyLoad,{loading:require('@a/img/placeHolder/p.jpg')})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


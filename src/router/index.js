import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@v/home/home"


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
   {
    path: '/category',
    name: 'category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('@v/category/category')
     }
   },
   {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('@v/cart/cart')
    }
   },
  {
    path: '/profile',
    name: 'profile',
    component: function () {
      return import('@v/profile/mine')
    }
   },
    {
        path: '/detail/:iid',
        name: 'detail',
        component: function () {
            return import('@v/detail/detail')
        }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

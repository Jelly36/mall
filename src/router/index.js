import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/home',
      // redirect:'/home',
      component:()=>import("../views/home/home")
    },
    {
      path:'/category',
      component:()=>import("../views/category/category")
    },
    {
      path:'/cart',
      component:()=>import("../views/cart/cart")
    },
    {
      path:'/profile',
      component:()=>import("../views/profile/profile")
    }
  ]
})

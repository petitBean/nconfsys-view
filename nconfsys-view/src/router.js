import Vue from 'vue'
import Router from "vue-router";
import Address from './pages/address';
import Cart from './pages/cart'

//使路由生效
Vue.use(Router);
export default new Router({
  routes:[
    {
      path:'/',
      name: 'address',
      meta:{},
      component: Address
    },
    {
      path:'/cart',
      name: 'cart',
      meta:{},
      component: Cart
    }
  ]
})

import VueRouter from 'vue-router';
import Vue from 'vue'
import Index from '../views/index/index';

Vue.use(VueRouter)
let routes = [
  {
    path:'/',
    component:Index
  }
]

let router =  new VueRouter({
  routes,
  mode:'history'
})
export default router
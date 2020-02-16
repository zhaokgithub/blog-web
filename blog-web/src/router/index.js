import VueRouter from 'vue-router';
import Vue from 'vue'
import BaseLayout from '../components/layout/BaseLayout';
import Index from '../views/index/index';
import User from '../views/user/user';
import ArticleEdit from '../views/article/edit';
import Detail from '../views/article/index'
import ErrorPage from '../views/error/404'

Vue.use(VueRouter)
let routes = [
  {
    path:'/',
    component:BaseLayout,
    redirect:{path:'/home'},
    children:[
      {
        path:'/home',
        component:Index
      },
      {
        path:'/article/:id',
        component:Detail
      }
    ]
  },
  {
    path:'/edit/article',
    component:ArticleEdit
  },
  {
    path:'*',
    component: ErrorPage
  },
]

let router =  new VueRouter({
  routes,
  mode:'history'
})
export default router
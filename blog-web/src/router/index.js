import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'vue-cookie'
import login from '@/components/admin/login'
import admin from '@/components/admin'
import addarticle from '@/components/admin/addarticle'
import deletearticle from '@/components/admin/deletearticle'
import modifyarticle from '@/components/admin/modifyarticle'
import index from '@/components/views/index.vue'
import article from '@/components/views/article.vue'
import comments from '@/components/views/comments.vue'
import heatarticle from '@/components/views/heatarticle.vue'
import about from '@/components/views/about.vue'
import content from '@/components/views/content.vue'



Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect: { path: '/admin/addarticle' },
      children: [
        {
          path: 'addarticle',
          name: 'addarticle',
          component: addarticle
        },
        {
          path: 'deletearticle',
          name: 'deletearticle',
          component: deletearticle
        },
        {
          path: 'modifyarticle',
          name: 'modifyarticle',
          component: modifyarticle
        },
      ]
    },
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/article/detail/',
      name: 'article',
      component: article
    },
    {
      path: '/comments',
      name: 'comments',
      component: comments
    },
    {
      path: '/heatarticle',
      name: 'heatarticle',
      component: heatarticle,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ]
})

let self = this
router.beforeEach((to, from, next) => {
  let user = Cookies.get('user')
  if (to.path.indexOf('/admin') > -1 && ! user) {//判断是否是前往后台页面
    next({
      name: 'login'
    })
    return
  }
  next()
})
router.afterEach((to, from, next) => {
})
export default router
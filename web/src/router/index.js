import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import addarticle from '@/components/admin/addarticle'
import deletearticle from '@/components/admin/deletearticle'
import index from '@/components/views/index.vue'
import article from '@/components/views/article.vue'
import comments from '@/components/views/comments.vue'
import heatarticle from '@/components/views/heatarticle.vue'
import about from '@/components/views/about.vue'
import content from '@/components/views/content.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      // redirect:{path:'/admin/addarticle'},
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
        }
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

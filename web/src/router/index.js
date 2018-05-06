import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article,
    },
    {
      path:'/comments',
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

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/views/index.vue'
import article from '@/components/views/article.vue'
import category from '@/components/views/category.vue'
import about from '@/components/views/about.vue'



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
      path: '/category',
      name: 'category',
      component: category,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ]
})

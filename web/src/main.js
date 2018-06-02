// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Common from '../static/js/common'
import Collapase from './components/common/collapase'
import Article from './components/common/article'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { debug } from 'util';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(elementUi)
Vue.use(Common)
Vue.use(Collapase)
Vue.use(Article)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

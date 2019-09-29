import article from './article.vue'
import Vue from 'vue'
const articleCompnents = {
    install: function (Vue) {
        Vue.component('Article',article)
    }
}
export default articleCompnents;
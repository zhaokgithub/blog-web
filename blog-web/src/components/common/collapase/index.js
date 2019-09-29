import Collapase from './collapase.vue'
import Vue from 'vue'
const test = {
    install: function (Vue) {
        Vue.component('Collapase',Collapase)
    }
}
export default test;
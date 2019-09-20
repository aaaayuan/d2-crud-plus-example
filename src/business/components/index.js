import d2CrudExtend from './d2-crud-extend'
import d2Admin from './d2-admin'
import Vue from 'vue'
Vue.use(d2CrudExtend)
Vue.use(d2Admin)

Vue.component('example-helper', () => import('./example-helper/index.vue'))

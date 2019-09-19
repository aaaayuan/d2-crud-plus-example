import d2Crud from './d2-crud/src'
import d2CrudPlus from './d2-crud-plus-export'

// import d2CrudPlus from 'd2-crud-plus'
import Vue from 'vue'
import { GetDictData } from '../api/sys.dicts'
Vue.use(d2Crud)
Vue.use(d2CrudPlus, { getRemoteDictFunc: GetDictData })
import Vue from 'vue'
import App from './App.vue';
import {store} from './store'

new Vue({
  el: '#app',
  //创建好的仓库注入Vue实例里
  store,
  render: h => h(App)
})

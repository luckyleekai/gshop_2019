// webpack打包时项目的入口JS
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/stylus/reset.styl'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

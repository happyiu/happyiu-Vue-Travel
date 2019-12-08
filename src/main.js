import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fsatClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconFont/iconfont.css'

Vue.config.productionTip = false
fsatClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

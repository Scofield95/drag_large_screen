import Vue from 'vue'
import './plugins/axios'
import './plugins/element'
import './components'
import './widgetComponents'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

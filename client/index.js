import Vue from 'vue'

import router from './routes'

import App from './App.vue'

import 'isomorphic-fetch'

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')

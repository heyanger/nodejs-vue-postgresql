require('es6-promise').polyfill();
require('isomorphic-fetch');

import Vue from 'vue';

import router from './routes';

import App from './App.vue';

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app');

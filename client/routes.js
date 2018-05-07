import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './views/HelloWorld.vue'

Vue.use(VueRouter)

const siteRoutes = [{
  path: '/',
  component: HelloWorld
}]

const vueRouter = new VueRouter({
  mode: 'history',
  routes: siteRoutes
})

export default vueRouter

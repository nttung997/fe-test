import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrencyExchange from '../views/CurrencyExchange.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CurrencyExchange
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

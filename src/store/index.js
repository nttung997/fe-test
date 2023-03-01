import Vue from 'vue'
import Vuex from 'vuex'
import conversion from './modules/conversion.store'
import user from './modules/user.store'
import currencyExchange from './modules/currencyExchange.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    conversion,
    user,
    currencyExchange,
  }
})

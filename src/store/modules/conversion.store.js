// import axios from "axios";

const CONVERSION_RATE = {
  EUR: 0.815894,
  CAD: 1.204355,
  GBP: 0.70602,
  MXN: 19.88162,
  PLN: 3.66121
}

const state = {
  conversionRate: null,
  status: null,
}

const actions = {
  getConversionRate({ commit }) {
    return new Promise((resolve, reject) => {
      commit('loading')
      //  let mockPromise = axios.get(`user`)
      let mockPromise = new Promise(function (resolve) {
        setTimeout(resolve, 100);
      })
      mockPromise.then(() => {
        commit('success', {
          key: 'conversionRate', value: CONVERSION_RATE
        })
        resolve(56443)
      }).catch(error => {
        commit('error')
        reject(error)
      })
    })
  },
}

const mutations = {
  loading(state) {
    state.status = 'loading'
  },
  success(state, { key, value }) {
    state.status = 'success'
    state[key] = value
  },
  error(state) {
    state.status = 'error'
  },
  getAll(state, conversions) {
    state.status = 'success'
    if (conversions.current_page > 1) {
      let data = state.all.data
      conversions.data = data.concat(conversions.data)
    }
    state.all = conversions
  },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}

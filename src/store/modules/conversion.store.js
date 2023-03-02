/* eslint-disable no-unused-vars */
// import axios from "axios";

const CONVERSION_RATE = {
  EUR: 0.815894,
  CAD: 1.204355,
  GBP: 0.70602,
  MXN: 19.88162,
  PLN: 3.66121
}

const state = {
  conversionRate: {},
  status: null,
}

const getters = {

}

const actions = {
  getConversionRate({ commit }) {
    return new Promise((resolve, reject) => {
      commit('loading')
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
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

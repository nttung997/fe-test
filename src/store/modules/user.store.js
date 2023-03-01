// import axios from "axios";

const state = {
  balance: null,
  status: null,
}

const actions = {
  getBalance({ commit }) {
    return new Promise((resolve, reject) => {
      commit('loading')
      //  let mockPromise = axios.get(`user`)
      let mockPromise = new Promise(function (resolve) {
        setTimeout(resolve, 100);
      })
      mockPromise.then(() => {
        commit('success', { key: 'balance', value: 56443 })
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
  actions,
  mutations
}

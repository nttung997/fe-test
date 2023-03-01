import axios from "axios";

const state = {
  all: {
    data: []
  },
  status: '',
}

const actions = {
  getAll({ commit }, { branchID, data }) {
    return new Promise((resolve, reject) => {
      commit('loading')
      axios.get(`branches/${branchID}/conversions`, { params: data }).then(response => {
        commit('getAll', response.data)
        resolve(response.data)
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

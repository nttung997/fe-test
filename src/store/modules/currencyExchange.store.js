
const state = {
    youSend: null,
  }
  
  const actions = {
    // 
  }
  
  const mutations = {
    loading(state) {
      state.status = 'loading'
    },
    setState(state, { key, value }) {
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
  
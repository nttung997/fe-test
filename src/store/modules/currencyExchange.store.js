
const state = {
  youSend: null,
  selected: 'EUR',
}

const getters = {
  fee(state) {
    const amount = state.youSend
    if (amount < 1000) return Math.round(amount * 0.5 / 100)
    if (amount < 10000) return Math.round(amount * 0.8 / 100)
    return Math.round(amount * 0.5 / 100) + 150
  },

  theyGet(state, getters) {
    const youSend = state.youSend
    if (!youSend) return null
    const rate = getters.currentRate
    let result = (youSend - getters.fee) * rate
    return result
  },
  
  currentRate(state, getters, rootState) {
    return rootState.conversion.conversionRate[state.selected]
  }
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
  getters,
  actions,
  mutations,
}


export default {
  namespaced: true,
  state: {
    counter: 0
  },
  getters: {
    count (state) {
      return state.counter
    }
  },
  mutations: {
    increase (state) {
      state.counter++
    },
    decrease (state) {
      state.counter--
    }
  },
  actions: {
    increment (state) {
      state.commit('increase')
    },
    decrement (state) {
      state.commit('decrease')
    }
  }
}

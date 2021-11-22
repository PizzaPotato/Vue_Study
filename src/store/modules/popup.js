export default {
  namespaced: true,
  state: {
    message: 'test_message',
    showStatus: false
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  },
  mutations: {
    disable () {
      this.showStatus = false
    },
    setMessage (state, msg) {
      state.message = msg
      this.showStatus = true
    }
  },
  actions: {
    setMessage (state, msg) {
      state.commit('setMessage', msg)
    },
    disable (state) {
      state.commit('disable')
    }
  }
}

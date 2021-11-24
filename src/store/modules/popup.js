export default {
  namespaced: true,
  state: {
    message: '',
    isOpen: false
  },
  getters: {
    getMessage (state) {
      return state.message
    },
    isOpen (state) {
      return state.isOpen
    }
  },
  mutations: {
    disable () {
      this.showStatus = false
    },
    setMessage (state, paylod) {
      console.log('popup.js mutation:setMessage')
      state.message = paylod.message
      state.isOpen = paylod.isOpen
    }
  },
  actions: {
    setMessage (state, paylod) {
      console.log('popup.js action:setMessage')
      state.commit('setMessage', paylod)
    },
    disable (state) {
      state.commit('disable')
    }
  }
}

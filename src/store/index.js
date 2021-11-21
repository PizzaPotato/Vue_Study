import { createStore } from 'vuex'
import { counter } from './modules'

export default createStore({
  modules: {
    counter
  }
})

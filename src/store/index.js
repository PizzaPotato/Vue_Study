import { createStore } from 'vuex'
import { counter, popup } from './modules'

export default createStore({
  modules: {
    counter,
    popup
  }
})

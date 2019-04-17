import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setData (state, data) {
      state.data = data
    }
  },
  actions: {
    fetchData ({commit}) {
      fetch('https://hero-riafan.ru/posts/get')
        .then(data => data.json())
        .then(data => {
          commit('setData', data)
        })
    }
  }
})
export default store

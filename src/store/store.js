import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
      stocks: {
        namespaced:true,
        state: stocks.state,
        getters: stocks.getters,
        mutations: stocks.mutations,
        actions: stocks.actions,
      },
      portfolio: {
        namespaced:true,
        state: portfolio.state,
        getters: portfolio.getters,
        mutations: portfolio.mutations,
        actions: portfolio.actions,
      }

    }
})
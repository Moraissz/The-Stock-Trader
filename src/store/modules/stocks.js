const state = {
    stocks:[],
}

const getters = {
  stocks: (state) => {
    return state.stocks
  },
}

const mutations = {
  setStocks: (state,stocks) => {  
      state.stocks = stocks
  },

}

const actions = {
  buySuccessful: ({ commit }, stock) => {
    commit('portfolio/buySuccessful',stock,{root: true});
 },
  initStocks: ({ commit },stocks) => {
    commit('setStocks',stocks)
 }
}

export default {
    state,
    getters,
    mutations,
    actions
}
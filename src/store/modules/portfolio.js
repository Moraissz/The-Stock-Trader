const state = {
  funds:10000,
  stocks:[]
}

const getters = {
  funds: (state) => {
    return state.funds
  },
  stocks: (state) => {
    return state.stocks
  }
}

const mutations = {
  buySuccessful: (state,stock) => {
    const actualStock = state.stocks.find(element => element.id === stock.id)
    if(actualStock){
      actualStock.quantity = parseInt(actualStock.quantity) + parseInt(stock.quantity)
    }
    else {
      state.stocks.push(stock)
    }
    state.funds -= (stock.quantity * stock.price)   
  },
  sellStock: (state,stock) => {
    const sellStock = state.stocks.find(element => element.id === stock.id)
    if(parseInt(sellStock.quantity) > parseInt(stock.quantity)){
      sellStock.quantity = parseInt(sellStock.quantity) - parseInt(stock.quantity)
    }
    else{
      state.stocks.splice(state.stocks.indexOf(sellStock),1)
    }
    state.funds += (stock.quantity * stock.price)
  }
  

}

const actions = {
    sellStock: ({ commit },stock) => {
          commit('sellStock',stock)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
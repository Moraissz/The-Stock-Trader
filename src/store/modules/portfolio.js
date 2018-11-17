const state = {
  funds:10000,
}

const getters = {
  funds: (state) => {
    return state.funds
  }
}

const mutations = {
  buySuccessful: (state,payload) => {
    state.funds -= (payload.quantity * payload.stock.price)
    console.log(state.funds)
 },
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  login({ commit, dispatch }, userFormData) {
    const { token } = this.$axios.$post('/api/auth/user/login', userFormData)
    console.log('token', token)
    dispatch('setToken', token)
  },

  setToken({ commit }, token) {
    commit('setToken', token)
  },

  logout({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: (state) => Boolean(state.token)
}

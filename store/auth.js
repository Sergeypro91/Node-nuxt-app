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
  async login({ commit, dispatch }, userFormData) {
    try {
      const { token } = await this.$axios.$post(
        '/api/auth/user/login',
        userFormData
      )
      console.log('token', token)

      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async signup({ commit, dispatch }, userFormData) {
    try {
      await this.$axios.$post('/api/auth/user/signup', userFormData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
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

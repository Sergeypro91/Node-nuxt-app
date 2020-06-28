/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  error: null,
  submitStatus: null
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },

  clearError(state) {
    state.error = null
  },

  setSubmitStatus(state, submitStatus) {
    state.submitStatus = submitStatus
  }
}

export const actions = {
  setSubmitStatus({ commit }, submitStatus) {
    commit('setSubmitStatus', submitStatus)
  },

  nuxtServerInit({ dispatch }) {
    dispatch('auth2/autoLogin')
  }
}

export const getters = {
  error: (state) => state.error,
  submitStatus: (state) => state.submitStatus
}

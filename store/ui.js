/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  top: 0,
  layoutFix: false,
  fixedNN: false,
  nn: false
})

export const mutations = {
  top(state, i) {
    state.top = i
  },

  layoutFix(state, i) {
    state.layoutFix = i
  },

  fixedNN(state, i) {
    state.fixedNN = i
  },

  nn(state) {
    state.nn = !state.nn
  }
}

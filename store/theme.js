/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  toggler: false
})

export const mutations = {
  toggle(state) {
    state.toggler = !state.toggler
  }
}

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
// import Cookie from 'cookie'
import Cookies from 'js-cookie'

export const state = () => ({
  toggler: 'light__theme'
})

export const mutations = {
  setTheme(state, theme) {
    state.toggler = theme
    Cookies.set('theme', theme)
  }
}
export const actions = {
  toggleTheme({ commit }, theme) {
    commit('setTheme', theme)
  }
}

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import Cookie from 'cookie'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async setUserData({ commit }) {
    try {
      const cookieStr = process.browser
        ? document.cookie
        : this.app.context.req.headers.cookie

      const cookies = Cookie.parse(cookieStr || '') || {}
      const currentUser = {
        email: cookies.currentUser
      }

      return await this.$axios.$get('/api/user/getData', currentUser)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

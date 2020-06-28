/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  token: null,
  user: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  },

  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async login({ commit, dispatch }, userFormData) {
    try {
      const { token } = await this.$axios.$post(
        '/api/auth/user/login',
        userFormData
      )

      dispatch('setToken', token)
      Cookies.set('currentUser', userFormData.email)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async signup({ commit }, { userName, email, password, image }) {
    try {
      const fd = new FormData()

      fd.append('userName', userName)
      fd.append('email', email)
      fd.append('password', password)

      if (image) {
        fd.append('image', image, image.name)
      }

      await this.$axios.$post('/api/auth/user/signup', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async vkSignup({ commit, dispatch }, url) {
    const vkData = await this.$axios.$post('/api/auth/oauth', url)

    function srcToFile(src, fileName, mimeType) {
      return fetch(src)
        .then((res) => {
          return res.arrayBuffer()
        })
        .then((buf) => {
          return new File([buf], fileName, { type: mimeType })
        })
    }

    const file = await srcToFile(
      vkData.photo_max_orig,
      'vk_user.jpg',
      'image/jpeg'
    )
    const userData = {
      userName: vkData.screen_name.toLowerCase(),
      email: url.email.toLowerCase(),
      password: url.user_id,
      image: file
    }

    try {
      const { userStatus } = await this.$axios.$post(
        '/api/auth/user/findUser',
        userData
      )

      if (userStatus === 'User not found') {
        await dispatch('signup', userData)
      }

      await dispatch('login', userData)
      commit('setUser', userData)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  },

  async fbSignup({ commit, dispatch }, url) {
    const fbData = await this.$axios.$get(
      `https://graph.facebook.com/me?fields=id,email,first_name,last_name,picture.width(500).height(500)&access_token=${url.access_token}`
    )

    function srcToFile(src, fileName, mimeType) {
      return fetch(src)
        .then((res) => {
          return res.arrayBuffer()
        })
        .then((buf) => {
          return new File([buf], fileName, { type: mimeType })
        })
    }

    const file = await srcToFile(
      `https://graph.facebook.com/${fbData.id}/picture?width=500&height=500`,
      'fb_user.jpg',
      'image/jpeg'
    )

    const userData = {
      userName: `${fbData.first_name.toLowerCase()} ${fbData.last_name.toLowerCase()}`,
      email: fbData.email.toLowerCase(),
      password: fbData.id,
      image: file
    }

    try {
      const { userStatus } = await this.$axios.$post(
        '/api/auth/user/findUser',
        userData
      )

      if (userStatus === 'User not found') {
        await dispatch('signup', userData)
      } else if (userStatus === 'all ok') {
        await dispatch('login', userData)
        commit('setUser', userData)
      }
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async gSignup({ commit, dispatch }, url) {
    const fbData = await this.$axios.$get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${url.access_token}`
    )

    function srcToFile(src, fileName, mimeType) {
      return fetch(src)
        .then((res) => {
          return res.arrayBuffer()
        })
        .then((buf) => {
          return new File([buf], fileName, { type: mimeType })
        })
    }

    const file = await srcToFile(fbData.picture, 'g_user.jpg', 'image/jpeg')

    const userData = {
      userName: fbData.name.toLowerCase(),
      email: fbData.email.toLowerCase(),
      password: fbData.id,
      image: file
    }

    try {
      const { userStatus } = await this.$axios.$post(
        '/api/auth/user/findUser',
        userData
      )

      if (userStatus === 'User not found') {
        await dispatch('signup', userData)
      }

      await dispatch('login', userData)
      commit('setUser', userData)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  },

  setToken({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },

  logout({ commit }) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token')
    Cookies.remove('currentUser')
  },

  autoLogin({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJWTValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

const isJWTValid = (token) => {
  if (!token) {
    return false
  }

  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return new Date().getTime() / 1000 < expires
}

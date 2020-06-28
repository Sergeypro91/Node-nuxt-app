export default function({ $axios, redirect, store }) {
  $axios.interceptors.request.use((request) => {
    if (
      store.getters.isAuthenticated &&
      !request.headers.common.Authorization
    ) {
      const { token } = store.getters

      request.headers.common.Authorization = `Bearer ${token}`
    }

    console.log(request.headers)

    return request
  })

  $axios.onError((error) => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/?meesage=session')
        store.dispatch('auth2/logout')
      }
    }

    if (error.response.status === 500) {
      console.error('Server 500 error')
    }
  })
}

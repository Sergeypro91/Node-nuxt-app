export default function({ store, redirect }) {
  if (!store.getters['auth2/isAuthenticated'] && !store.state.auth.loggedIn) {
    redirect('/')
  }
}

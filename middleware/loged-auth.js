export default function({ store, redirect }) {
  if (!store.getters['auth2/isAuthenticated']) {
    redirect('/')
  }
}

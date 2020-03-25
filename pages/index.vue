<template>
  <div class="login-page">
    <Login :on-login="loginUser" />
    <Slogan />
  </div>
</template>

<script>
import Login from '~/components/login-page/Login'
import Slogan from '~/components/login-page/Slogan'

export default {
  components: { Login, Slogan },

  methods: {
    loginUser(data) {
      console.log(data)
    }
  }
}
</script>

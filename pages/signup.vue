<template>
  <div class="signup-page">
    <Signup :on-signup="signupUser" />
  </div>
</template>

<script>
import Signup from '~/components/signup-page/Signup'

export default {
  components: { Signup },

  methods: {
    signupUser(data) {
      console.log(data)
    }
  }
}
</script>

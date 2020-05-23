<template>
  <div>Clear token</div>
</template>

<script>
export default {
  middleware: ['loged-auth'],

  beforeCreate() {
    try {
      this.$store.dispatch('auth2/logout')
      this.$router.push('/')
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

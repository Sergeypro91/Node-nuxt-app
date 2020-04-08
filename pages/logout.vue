<template>
  <div>Clear token</div>
</template>

<script>
export default {
  middleware: ['loged-auth'],

  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/')
  }
}
</script>

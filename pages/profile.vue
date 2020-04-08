<template>
  <div class="profile-page">
    <Profile />
    <Charts />
  </div>
</template>

<script>
import Profile from '~/components/profile-page/Profile'
import Charts from '~/components/profile-page/Charts/Charts'

export default {
  components: { Profile, Charts },

  middleware: ['loged-auth']
}
</script>

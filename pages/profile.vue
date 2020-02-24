<template>
  <div class="profile-page">
    <Profile />
    <Charts />
  </div>
</template>

<script>
import Profile from '~/components/profile-page/Profile'
import Charts from '~/components/profile-page/Charts'

export default {
  components: { Profile, Charts }
}
</script>

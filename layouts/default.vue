<template>
  <div class="wrapper" :class="{ fixed2: laypurFix }">
    <header>
      <Header />
    </header>
    <div class="content-wrapper">
      <nuxt />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from '~/components/main/Header'
import Footer from '~/components/main/Footer'

export default {
  components: { Header, Footer },

  data() {
    return {
      top: 0,
      laypurFix: false
    }
  },

  mounted() {
    window.addEventListener('scroll', this.scrollDown)
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollDown)
  },

  methods: {
    scrollDown() {
      const top = window.pageYOffset

      if (top >= this.top) {
        this.top = top
        this.laypurFix = false
      } else {
        this.top = top
        this.laypurFix = true
      }
    }
  }
}
</script>

<template>
  <div class="wrapper" :class="{ fixed: layoutFix }">
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
      layoutFix: false
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

      if (window.innerWidth > 767) {
        if (document.documentElement.scrollTop > 468) {
          if (top >= this.top) {
            this.top = top
            this.layoutFix = false
          } else {
            this.top = top
            this.layoutFix = true
          }
        } else {
          this.layoutFix = false
        }
      } else if (window.innerWidth <= 767) {
        if (document.documentElement.scrollTop > 80) {
          if (top >= this.top) {
            this.top = top
            this.layoutFix = false
          } else {
            this.top = top
            this.layoutFix = true
          }
        } else {
          this.layoutFix = false
        }
      }
    }
  }
}
</script>

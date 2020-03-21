<template>
  <div class="wrapper" :class="{ fixed: layoutFix, fixed__nn: fixedNN }">
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

  computed: {
    top() {
      return this.$store.state.ui.top
    },
    layoutFix() {
      return this.$store.state.ui.layoutFix
    },
    fixedNN() {
      return this.$store.state.ui.fixedNN
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
        if (document.documentElement.scrollTop > 453) {
          this.$store.commit('ui/fixedNN', true)
          if (top >= this.top) {
            this.$store.commit('ui/top', top)
            this.$store.commit('ui/layoutFix', false)
          } else {
            this.$store.commit('ui/top', top)
            this.$store.commit('ui/layoutFix', true)
          }
        } else {
          this.$store.commit('ui/layoutFix', false)
          this.$store.commit('ui/fixedNN', false)
        }
      } else if (window.innerWidth <= 767) {
        if (document.documentElement.scrollTop > 80) {
          if (top >= this.top) {
            this.$store.commit('ui/top', top)
            this.$store.commit('ui/layoutFix', false)
          } else {
            this.$store.commit('ui/top', top)
            this.$store.commit('ui/layoutFix', true)
          }
        } else {
          this.$store.commit('ui/layoutFix', false)
        }
      }
    }
  }
}
</script>

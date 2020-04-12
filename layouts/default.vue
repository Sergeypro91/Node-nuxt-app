<template>
  <div class="wrapper" :class="{ fixed: layoutFix, fixed__nn: fixedNN }">
    <header>
      <Header />
    </header>
    <div class="message">
      <div v-if="this.$store.getters.submitStatus === 'OK'" class="message-ok">
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"
          />
        </svg>
        <div class="p">
          All OK, go on!
        </div>
      </div>
      <div
        v-if="this.$store.getters.submitStatus === 'ERROR'"
        class="message-error"
      >
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
          />
        </svg>
        <div class="p">
          {{ this.$store.getters.error }}
        </div>
      </div>
      <div
        v-if="this.$store.getters.submitStatus === 'PENDING'"
        class="message-pending"
      >
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"
          />
        </svg>
        <div class="p">
          Waiting...
        </div>
      </div>
    </div>
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

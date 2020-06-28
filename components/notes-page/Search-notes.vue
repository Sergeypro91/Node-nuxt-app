<template>
  <div class="search-notes">
    <div class="search-notes__wrapper">
      <div class="search-notes__header"><div class="h1">Notes</div></div>
      <div class="search-notes__input">
        <div class="input hover">
          <div class="input__icon">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
              />
            </svg>
          </div>
          <input v-model="search" type="text" placeholder="Find your note" />
        </div>
      </div>
      <div class="search-notes__filter">
        <div class="search-notes__title">
          <div class="p">Filter:</div>
        </div>
        <svg
          class="icon icon_big icon_hover"
          :class="{ icon__active: priorityFilter === 'on' }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="filteredByPriority"
        >
          <path
            d="M12,22c4.879,0,9-4.121,9-9s-4.121-9-9-9s-9,4.121-9,9S7.121,22,12,22z M12,6c3.794,0,7,3.206,7,7s-3.206,7-7,7 s-7-3.206-7-7S8.206,6,12,6z"
          />
          <path
            transform="rotate(-45.082 19.494 4.5)"
            d="M18.495 2.375H20.495V6.625H18.495z"
          />
          <path
            transform="rotate(44.919 4.495 4.5)"
            d="M3.495 2.382H5.495V6.617000000000001H3.495z"
          />
          <path d="M11 9H13V14H11zM11 15H13V17H11z" />
        </svg>

        <svg
          class="icon icon_big icon_hover"
          :class="{ icon__active: personeFilter === 'on' }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="filteredByPersone"
        >
          <path
            fill="none"
            d="M12,8c-1.178,0-2,0.822-2,2s0.822,2,2,2s2-0.822,2-2S13.178,8,12,8z"
          />
          <path
            fill="none"
            d="M12,4c-4.337,0-8,3.663-8,8c0,2.176,0.923,4.182,2.39,5.641c0.757-1.8,2.538-3.068,4.61-3.068h2 c2.072,0,3.854,1.269,4.61,3.068C19.077,16.182,20,14.176,20,12C20,7.663,16.337,4,12,4z M12,14c-2.28,0-4-1.72-4-4s1.72-4,4-4 s4,1.72,4,4S14.28,14,12,14z"
          />
          <path
            fill="none"
            d="M13,16.572h-2c-1.432,0-2.629,1.01-2.926,2.354C9.242,19.604,10.584,20,12,20s2.758-0.396,3.926-1.073 C15.629,17.582,14.432,16.572,13,16.572z"
          />
          <path
            d="M12,2C6.579,2,2,6.579,2,12c0,3.189,1.592,6.078,4,7.924V20h0.102C7.77,21.245,9.813,22,12,22s4.23-0.755,5.898-2H18 v-0.076c2.408-1.846,4-4.734,4-7.924C22,6.579,17.421,2,12,2z M8.074,18.927c0.297-1.345,1.494-2.354,2.926-2.354h2 c1.432,0,2.629,1.01,2.926,2.354C14.758,19.604,13.416,20,12,20S9.242,19.604,8.074,18.927z M17.61,17.641 c-0.757-1.8-2.538-3.068-4.61-3.068h-2c-2.072,0-3.854,1.269-4.61,3.068C4.923,16.182,4,14.176,4,12c0-4.337,3.663-8,8-8 s8,3.663,8,8C20,14.176,19.077,16.182,17.61,17.641z"
          />
          <path
            d="M12,6c-2.28,0-4,1.72-4,4s1.72,4,4,4s4-1.72,4-4S14.28,6,12,6z M12,12c-1.178,0-2-0.822-2-2s0.822-2,2-2s2,0.822,2,2 S13.178,12,12,12z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      priorityFilter: null,
      personeFilter: null
    }
  },

  watch: {
    search(val) {
      this.$root.$emit('search', val)
    }
  },

  methods: {
    filteredByPriority() {
      if (!this.priorityFilter) {
        this.priorityFilter = 'on'
      } else if (this.priorityFilter === 'on') {
        this.priorityFilter = null
      }

      this.$root.$emit('priorityFilter', this.priorityFilter)
    },

    filteredByPersone() {
      if (!this.personeFilter) {
        this.personeFilter = 'on'
      } else if (this.personeFilter === 'on') {
        this.personeFilter = null
      }

      this.$root.$emit('personeFilter', this.personeFilter)
    }
  }
}
</script>

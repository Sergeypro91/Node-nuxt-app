<template>
  <div ref="notes" class="notes" :style="{ height: notesHeight + 'px' }">
    <div v-for="note in notes" :key="note.idNote" ref="note" class="note">
      <div class="note__header">
        <div class="note__title">
          <div class="h2">{{ note.title }}</div>
        </div>
        <div class="note__type-change">
          <div class="note__type-change_standart"></div>
          <div class="note__type-change_priority"></div>
          <div class="note__type-change_important"></div>
          <div class="note__close">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="note__body">
        <div class="p">{{ note.description }}</div>
      </div>
      <div class="note__footer">
        <div class="note__auhtor">
          <div class="note__auhtor-img">
            <img src="~/static/img/users/user1.jpg" alt="" />
          </div>
          <div class="note__auhtor-info">
            <div class="p">{{ note.author.name }}</div>
            <div class="p_extra-small">{{ note.publishTime }}</div>
          </div>
        </div>
        <div class="btn btn_gray">
          <div class="btn__icon">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                transform="rotate(45.001 19.345 4.656)"
                d="M17.223 3.039H21.466V6.273H17.223z"
              />
              <path d="M8 16L11 16 18.287 8.713 15.287 5.713 8 13z" />
              <path
                d="M19,19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5h6.847l2-2H5C3.897,3,3,3.896,3,5v14 c0,1.104,0.897,2,2,2h14c1.104,0,2-0.896,2-2v-8.668l-2,2V19z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="note__edit">
        <div class="note__edit-wrapper">
          <div class="note__edit-header">
            <div class="h1">Edit note</div>
          </div>
          <div class="note__edit-body">
            <div class="input imput_without-icon hover">
              <input
                v-model="note.title"
                type="text"
                placeholder="Enter note title ..."
              />
            </div>
            <div class="input imput_without-icon hover">
              <textarea
                v-model="note.description"
                placeholder="Enter note description ..."
              />
            </div>
          </div>
          <div class="note__edit-footer">
            <div class="btn btn_primary hover">
              <div class="btn__icon">
                <svg
                  class="icon icon_white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    transform="rotate(45.001 16.357 4.656)"
                    d="M14.235 3.039H18.478V6.273H14.235z"
                  />
                  <path
                    d="M4 14L4 17 7 17 15.299 8.713 12.299 5.713zM4 20H20V22H4z"
                  />
                </svg>
              </div>
              <button>edit</button>
            </div>
            <div class="btn btn_gray">
              <div class="btn__icon">
                <svg
                  class="icon icon_white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notes() {
      return this.$store.state.notes.notes
    },

    notesHeight() {
      return this.$store.state.notes.notesHeight
    }
  },

  mounted() {
    window.addEventListener('resize', this.matchHeight)
    this.matchHeight()
  },

  destroyed() {
    window.removeEventListener('resize', this.matchHeight)
  },

  methods: {
    matchHeight() {
      const margin = 15
      const BPTwoColl = 1024
      const BPOneColl = 768
      const notesHeightArr = []

      this.$refs.note.forEach((item, i, arr) => {
        notesHeightArr.push(this.$refs.note[i].clientHeight)
      })

      const bigestCollHeight = (CollCount, numb) => {
        const newArr = []

        for (let i = 0; i < CollCount; i += 1) {
          newArr.push(
            notesHeightArr
              .filter((value, index, Arr) => {
                return index % CollCount === i
              })
              .reduce((a, b) => a + b + numb, 0)
          )
        }

        return Math.max.apply(null, newArr)
      }

      if (window.innerWidth > BPTwoColl) {
        this.$store.commit('notes/notesHeight', bigestCollHeight(3, margin))
      } else if (
        window.innerWidth <= BPTwoColl &&
        !(window.innerWidth < BPOneColl)
      ) {
        this.$store.commit('notes/notesHeight', bigestCollHeight(2, margin))
      } else {
        this.$store.commit('notes/notesHeight', bigestCollHeight(1, margin))
      }
    }
  }
}
</script>

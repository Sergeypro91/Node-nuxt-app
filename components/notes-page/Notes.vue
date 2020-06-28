<template>
  <div ref="notes" class="notes" :style="{ height: notesHeight + 'px' }">
    <div
      v-for="note in notesFiltered"
      :key="note.idNote"
      ref="note"
      class="note"
      :class="{
        note__standart: note.notePriority == 'standart',
        note__priority: note.notePriority == 'priority',
        note__important: note.notePriority == 'important'
      }"
    >
      <div class="note__header">
        <div class="note__title">
          <div class="h2">{{ note.title.substring(0, 50) }}</div>
        </div>
        <div class="note__type-change">
          <div
            v-if="note.notePriority !== 'standart'"
            class="note__type-change_standart"
            @click="determinePrioryty(note.noteId, 'standart')"
          ></div>
          <div
            v-if="note.notePriority !== 'priority'"
            class="note__type-change_priority"
            @click="determinePrioryty(note.noteId, 'priority')"
          ></div>
          <div
            v-if="note.notePriority !== 'important'"
            class="note__type-change_important"
            @click="determinePrioryty(note.noteId, 'important')"
          ></div>
          <div class="note__close" @click="deleteNote(note.noteId)">
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
        <div class="p">
          {{ note.description.substring(0, 300) }}
          <span v-if="note.description.length > 300">...</span>
        </div>
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
        <div class="btn btn_gray" @click="showEdit(note.noteId)">
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
    </div>
    <div style="position: absolute; display: none">{{ matchHeight }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notesHeightCount: [],
      refsNote: null,
      search: null,
      notes: this.$store.state.notes.notes,
      priorityFilter: null,
      personeFilter: null
    }
  },

  computed: {
    notesFiltered() {
      if (this.search) {
        return this.notes.filter((obj) => {
          if (
            obj.title.toLowerCase().includes(this.search) ||
            obj.description.toLowerCase().includes(this.search)
          ) {
            return true
          }
          return false
        })
      }

      if (this.priorityFilter) {
        const arr = []

        this.notes
          .filter((obj) => {
            return obj.notePriority === 'important'
          })
          .forEach((e) => {
            arr.push(e)
          })

        this.notes
          .filter((obj) => {
            return obj.notePriority === 'priority'
          })
          .forEach((e) => {
            arr.push(e)
          })

        this.notes
          .filter((obj) => {
            return obj.notePriority === 'standart'
          })
          .forEach((e) => {
            arr.push(e)
          })

        return arr
      }

      return this.$store.state.notes.notes
    },

    notesHeight() {
      return this.$store.state.notes.notesHeight
    },

    matchHeight() {
      const margin = 16
      const BPTwoColl = 1024
      const BPOneColl = 768
      const notesHeightArr = []

      if (this.refsNote) {
        this.refsNote.forEach((item, i, arr) => {
          notesHeightArr.push(this.refsNote[i].clientHeight)
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

        this.refsNote.forEach((item, i, arr) => {
          this.notesHeightCount.push(this.refsNote[i].clientHeight)
        })
      }

      return true
    }
  },

  mounted() {
    window.addEventListener('resize', this.matchWidth)
    this.matchWidth()
    // this.$root.$on('createNote', () => {})
    this.$root.$on('search', (val) => {
      this.search = val.trim().toLowerCase()
    })
    this.$root.$on('priorityFilter', (val) => {
      this.priorityFilter = val
    })
    this.$root.$on('personeFilter', (val) => {
      this.personeFilter = val
    })

    this.refsNote = this.$refs.note
  },

  destroyed() {
    window.removeEventListener('resize', this.matchWidth)
  },

  methods: {
    matchWidth() {
      this.notesHeightCount = []

      this.$refs.note.forEach((item, i, arr) => {
        this.notesHeightCount.push(this.$refs.note[i].clientHeight)
      })
    },

    determinePrioryty(id, type) {
      const data = {
        index: id,
        priorityType: type
      }
      this.$store.dispatch('notes/changePrioryty', data)
    },

    async deleteNote(id) {
      await this.$store.dispatch('notes/destroyNote', id)
    },

    showEdit(id) {
      this.$root.$emit('showEdit', id)
    }
  }
}
</script>

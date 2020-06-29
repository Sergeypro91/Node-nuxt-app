<template>
  <div class="note__edit" :class="{ note__edit_active: showEditNote == true }">
    <div class="note__edit-wrapper">
      <div class="note__edit-header">
        <div class="h1">Edit note</div>
      </div>
      <div v-if="note" class="note__edit-body">
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
        <div class="btn btn_gray" @click="closeEditNote">
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
</template>

<script>
export default {
  data() {
    return {
      showEditNote: false,
      noteId: 0,
      note: null
    }
  },

  computed: {
    notes() {
      return this.$store.getters['notes/notes']
    }
  },

  mounted() {
    this.$root.$on('showEdit', (id) => {
      this.showEditNote = true
      this.noteId = this.notes
        .map((x) => {
          return x.noteId
        })
        .indexOf(id)

      this.note = this.notes[this.noteId]
    })
  },

  methods: {
    closeEditNote() {
      this.showEditNote = false
    }
  }
}
</script>

<style></style>

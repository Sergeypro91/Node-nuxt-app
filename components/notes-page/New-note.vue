<template>
  <div class="new-note" :class="{ showNN: this.$store.state.ui.nn }">
    <div class="new-note__wrapper">
      <div class="new-note__headline">
        <div class="h1">Create note</div>
      </div>
      <div class="new-note__header">
        <div class="new-note__title">
          <div class="input imput_without-icon hover">
            <input
              v-model.trim="newNote.title"
              type="text"
              placeholder="Enter note title ..."
            />
          </div>
        </div>
        <div class="new-note__type">
          <div class="new-note__type-child">
            <label>
              <input
                id="radio-button-child"
                v-model="newNote.notePriority"
                type="radio"
                value="standart"
              />
              <span><div class="p">Standart</div></span>
            </label>
          </div>
          <div class="new-note__type-child">
            <label>
              <input
                id="radio-button-child"
                v-model="newNote.notePriority"
                type="radio"
                value="priority"
              />
              <span><div class="p">Priority</div></span>
            </label>
          </div>
          <div class="new-note__type-child">
            <label>
              <input
                id="radio-button-child"
                v-model="newNote.notePriority"
                type="radio"
                value="important"
              />
              <span><div class="p">Important</div></span>
            </label>
          </div>
        </div>
      </div>
      <div class="new-note__footer">
        <div class="new-note__description">
          <div class="input imput_without-icon hover">
            <textarea
              v-model.trim="newNote.description"
              placeholder="Enter note description ..."
            />
          </div>
        </div>
        <div class="new-note__ui">
          <div
            v-if="!newNote.title || !newNote.description"
            class="btn btn_primary disabled"
          >
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
            <button>New note</button>
          </div>
          <div
            v-if="newNote.title && newNote.description"
            class="btn btn_primary hover"
          >
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
            <button @click="createNote">New note</button>
          </div>
          <div class="btn btn_gray" @click="showNN">
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
</template>

<script>
export default {
  data() {
    return {
      newNote: {
        title: null,
        description: null,
        publishTime: null,
        notePriority: 'standart'
      }
    }
  },

  methods: {
    showNN() {
      this.$store.commit('ui/nn')
    },

    async createNote() {
      const note = {
        noteId: this.$store.state.notes.notesCounter + 1,
        title: this.newNote.title,
        description: this.newNote.description,
        author: {
          name: 'Sergeyprostoas',
          img: '~/static/img/users/user1.jpg'
        },
        publishTime: new Date(Date.now()).toLocaleString(),
        notePriority: this.newNote.notePriority
      }

      await this.$store.commit('notes/addNote', note)

      this.newNote.title = null
      this.newNote.description = null
      this.newNote.notePriority = 'standart'
    }
  }
}
</script>

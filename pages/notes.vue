<template>
  <div class="notes-page">
    <NewNote />
    <SearchNotes />
    <Notes />
    <NoteEdit />
    <NoteDelWin />
    <div class="nno" @click="showNN">
      <div class="btn btn_primary hover">
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
        <button>new note</button>
      </div>
    </div>
  </div>
</template>

<script>
import NewNote from '~/components/notes-page/New-note'
import SearchNotes from '~/components/notes-page/Search-notes'
import Notes from '~/components/notes-page/Notes'
import NoteEdit from '~/components/notes-page/Note-edit'
import NoteDelWin from '~/components/notes-page/Note-delete-window'

export default {
  components: { NewNote, SearchNotes, Notes, NoteEdit, NoteDelWin },

  middleware: ['loged-auth'],

  methods: {
    showNN() {
      this.$store.commit('ui/nn')
    }
  }
}
</script>

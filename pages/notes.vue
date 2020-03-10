<template>
  <div class="notes-page">
    <NewNote />
    <SearchNotes />
    <Notes />
  </div>
</template>

<script>
import NewNote from '~/components/notes-page/New-note'
import SearchNotes from '~/components/notes-page/Search-notes'
import Notes from '~/components/notes-page/Notes'

export default {
  components: { NewNote, SearchNotes, Notes }
}
</script>

<template>
  <div v-if="idNote" class="note__del-wrapper">
    <div class="note-del-win">
      <div class="note-del-win__header">
        <div class="note-del-win__header-title">
          <div class="h2">Delete?</div>
        </div>
        <div class="note-del-win__header-description">
          <div class="p">
            Are you sure you want to Delete? This action can not be undone.
          </div>
        </div>
      </div>
      <div class="note-del-win__footer">
        <div class="note-del-win__footer-botton hover" @click="cancelDelete">
          <div class="h2">No</div>
        </div>
        <div class="note-del-win__footer-botton hover" @click="deleteNote">
          <div class="h2">Yes</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idNote: null
    }
  },

  mounted() {
    this.$root.$on('deleteNote', (id) => {
      this.idNote = id
    })
  },

  methods: {
    async deleteNote() {
      await this.$store.dispatch('notes/destroyNote', this.idNote)

      this.idNote = !this.idNote
    },

    cancelDelete() {
      this.idNote = !this.idNote
    }
  }
}
</script>

<style></style>

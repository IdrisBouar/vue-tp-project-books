<template>
  <div>
    <NavBar />
    <BookForm :book="book" @submit="updateBook" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BookForm from '@/components/BookForm.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditBook',
  components: { NavBar, BookForm },
  computed: {
    ...mapState(['books']),
    book() {
      return this.books.find(book => book.id === this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['updateBook'])
  }
}
</script>
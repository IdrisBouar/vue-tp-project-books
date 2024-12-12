<template>
  <div class="page-container">
    <NavBar />
    <div class="animate__animated" :class="{'animate__shakeX': showError}">
      <BookForm 
        :book="newBook" 
        @submit="handleSubmit" 
        ref="bookForm"
      />
    </div>
    <div v-if="showSuccess" class="success-message animate__animated animate__fadeInUp">
      Book added successfully!
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BookForm from '@/components/BookForm.vue'
import { mapActions } from 'vuex'

export default {
  name: 'AddBook',
  components: { NavBar, BookForm },
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        publicationDate: '',
        category: '',
        cover: ''
      },
      showError: false,
      showSuccess: false
    }
  },
  methods: {
    ...mapActions(['addBook']),
    async handleSubmit(book) {
      if (!this.validateBook(book)) {
        this.showError = true
        setTimeout(() => {
          this.showError = false
        }, 1000)
        return
      }

      await this.addBook(book)
      this.showSuccess = true
      
      setTimeout(() => {
        this.$router.push('/')
      }, 1500)
    },
    validateBook(book) {
      return book.title && 
             book.author && 
             book.publicationDate && 
             book.category && 
             book.cover
    }
  }
}
</script>

<style scoped>
.success-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
</style>
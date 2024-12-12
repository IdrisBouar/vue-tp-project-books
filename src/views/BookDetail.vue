<template>
  <div class="page-container">
    <NavBar />
    <div v-if="book" class="book-detail glass-panel animate__animated animate__fadeIn">
      <div class="book-cover">
        <img :src="book.cover" alt="Book Cover">
      </div>
      <div class="book-info">
        <h1 class="neon-text">{{ book.title }}</h1>
        <p class="author">By {{ book.author }}</p>
        <p class="date">Published on {{ formatDate(book.publicationDate) }}</p>
        <span class="category-badge">{{ book.category }}</span>
        <div class="actions">
          <button @click="editBook" class="btn edit-btn hover-float">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button @click="handleDelete" class="btn delete-btn hover-float">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
    <div v-if="showSuccess" class="success-message animate__animated animate__fadeInUp">
      Book deleted successfully!
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BookDetail',
  components: {
    NavBar
  },
  data() {
    return {
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['books']),
    book() {
      return this.books.find(book => book.id === this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['deleteBook']),
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    editBook() {
      this.$router.push(`/edit/${this.book.id}`)
    },
    async handleDelete() {
      if (window.confirm('Are you sure you want to delete this book?')) {
        try {
          await this.deleteBook(this.book.id)
          this.showSuccess = true
          setTimeout(() => {
            this.$router.push('/')
          }, 1500)
        } catch (error) {
          console.error('Error deleting book:', error)
        }
      }
    }
  }
}
</script>

<style scoped>
.book-detail {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
}

.book-cover img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(110, 142, 251, 0.3);
}

.book-info {
  text-align: left;
}

.author, .date {
  color: #ccc;
  margin: 0.5rem 0;
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
}

.edit-btn {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
}

.delete-btn {
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
}

.success-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.category-badge {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}
</style>
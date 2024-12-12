<template>
  <div class="page-container">
    <NavBar />
    <div class="search-container glass-panel">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search books..."
          class="animate__animated animate__fadeIn"
        >
      </div>
      <select 
        v-model="selectedCategory"
        class="category-select animate__animated animate__fadeIn"
      >
        <option value="">All Categories</option>
        <option>Roman</option>
        <option>Science-Fiction</option>
        <option>Biographie</option>
      </select>
    </div>
    <div class="book-list animate__animated animate__fadeIn">
      <BookCard 
        v-for="book in filteredBooks" 
        :key="book.id" 
        :book="book" 
      />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BookCard from '@/components/BookCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: { 
    NavBar,
    BookCard 
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: ''
    }
  },
  computed: {
    ...mapState(['books']),
    filteredBooks() {
      return this.books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesCategory = !this.selectedCategory || book.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    }
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
}

.search-box {
  flex: 1;
  position: relative;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.search-box input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.category-select {
  width: 200px;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.category-select option {
  background: rgba(0, 0, 0, 0.1);
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}
</style>
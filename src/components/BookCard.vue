<template>
  <div class="book-card glass-panel hover-float animate__animated animate__fadeIn" 
       @click="viewDetails">
    <div class="book-cover">
      <img :src="book.cover" alt="Book Cover">
    </div>
    <div class="book-info">
      <h3 class="neon-text">{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <p>{{ formatDate(book.publicationDate) }}</p>
      <span class="category-badge">{{ book.category }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book'],
  methods: {
    viewDetails() {
      this.$router.push(`/book/${this.book.id}`);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
}
</script>

<style scoped>
.book-card {
  width: 280px;
  margin: 1rem;
  cursor: pointer;
  overflow: hidden;
}

.book-cover img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.book-info {
  text-align: left;
}

.category-badge {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}
</style>
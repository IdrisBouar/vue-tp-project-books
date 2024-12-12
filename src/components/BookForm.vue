<template>
  <form @submit.prevent="submitForm" class="animate__animated animate__fadeIn">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" v-model="localBook.title" required>
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" v-model="localBook.author" required>
    </div>
    <div class="form-group">
      <label for="publicationDate">Publication Date</label>
      <input type="date" v-model="localBook.publicationDate" required>
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <select v-model="localBook.category" required>
        <option>Roman</option>
        <option>Science-Fiction</option>
        <option>Biographie</option>
      </select>
    </div>
    <div class="form-group">
      <label for="cover">Cover</label>
      <input type="file" @change="handleFileUpload" required>
    </div>
    <button type="submit" class="animate__animated animate__pulse animate__infinite">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'BookForm',
  props: ['book'],
  data() {
    return {
      localBook: { ...this.book } // Create a local copy of the book prop
    }
  },
  methods: {
    handleFileUpload(event) {
      this.localBook.cover = URL.createObjectURL(event.target.files[0]);
    },
    submitForm() {
      this.$emit('submit', this.localBook);
    }
  }
}
</script>

<style>
form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.form-group {
  position: relative;
  margin-bottom: 2rem;
}

label {
  position: absolute;
  left: 15px;
  top: -10px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 0 10px;
  color: white;
  font-size: 0.8rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

input, select {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus, select:focus {
  outline: none;
  border-color: #6e8efb;
  box-shadow: 0 0 15px rgba(110, 142, 251, 0.3);
  transform: translateY(-2px);
}

input[type="file"] {
  background: transparent;
  padding: 8px;
  border: 2px dashed #6e8efb;
}

input[type="file"]::-webkit-file-upload-button {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin-right: 12px;
  transition: all 0.3s ease;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

button[type="submit"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(110, 142, 251, 0.4);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

.form-group:hover label {
  animation: float 2s ease-in-out infinite;
}
</style>
<template>
  <nav class="glass-panel">
    <router-link to="/" class="nav-link animate__animated animate__fadeIn">
      <i class="fas fa-home"></i> Home
    </router-link>
    <router-link to="/add" class="nav-link animate__animated animate__fadeIn">
      <i class="fas fa-plus"></i> Add Book
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.router-link-active {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  box-shadow: 0 0 15px rgba(110, 142, 251, 0.3);
}
</style>
<template>
  <div id="app">
    <router-view class="animate__animated animate__fadeIn"/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

#app {
  font-family: 'Orbitron', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  background-attachment: fixed;
  min-height: 100vh;
}

.page-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.neon-text {
  color: #fff;
  text-shadow: 0 0 10px rgba(110, 142, 251, 0.8);
}

.hover-float {
  transition: transform 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-5px);
}
</style>
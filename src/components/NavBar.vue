<template>
  <nav class="navbar">
    <div class="nav-container">
      <a class="nav-logo" href="/"> MyPortfolio </a>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #242424;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 24px;
  color: #00b4d8;
  text-decoration: none;
  font-weight: bold;
}

.nav-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 20px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00b4d8;
}
</style>

<!-- eslint-disable no-unused-vars -->
<template>
  <div class="project-card">
    <div class="project-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank">View Project</a>
    </div>
    <img :src="project.image" alt="Project Image" class="project-image" />
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object
})
</script>

<style scoped>
.project-card {
  background: #242424;
  padding: 20px;
  border-radius: 8px;
  width: 45%;
  color: #fff;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
}

a {
  color: #00b4d8;
  text-decoration: none;
}

.project-content {
  margin-bottom: 10px;
}

.project-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
  display: block;
  object-fit: contain;
}
</style>

<!-- eslint-disable no-unused-vars -->
<template>
    <div class="project-card">
        <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a onclick="handleViewProject()">View Project</a>
        </div>
        <img v-if="project.image" :src="project.image" alt="Project Image" class="project-image" />
    </div>
</template>

<script setup>
const props = defineProps({
    project: Object
})
// const handleViewProject {
// }
</script>

<style scoped>
.project-card {
    background: #242424;
    padding: 20px;
    border-radius: 13px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
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

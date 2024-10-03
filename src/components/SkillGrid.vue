<template>
    <div class="skill-grid">
        <div class="skill-category" v-for="category in skillCategories" :key="category.title">
            <h3>{{ category.title }}</h3>
            <ul>
                <li v-for="skill in category.skills" :key="skill">{{ skill }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const skillCategories = [
    {
        title: 'Backend Development',
        skills: ['JavaScript', 'NodeJS', 'Python', 'Flask']
    },
    {
        title: 'AWS Services',
        skills: ['Infrastructure Setup', 'EC2', 'AppRunner', 'Amplify']
    },
    {
        title: 'Frontend Development',
        skills: ['React', 'Vite', 'HTML', 'CSS']
    }
]
</script>

<style scoped>
.skill-grid {
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    gap: 20px;
    flex-wrap: wrap;
}

.skill-category {
    width: 30%;
    min-width: 250px;
    background-color: #242424;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.skill-category:hover {
    transform: translateY(-10px);
}

h3 {
    margin-bottom: 10px;
}
</style>

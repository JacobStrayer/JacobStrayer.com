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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr)); /* Dynamically adjusts columns */
    gap: 20px;
    padding: 50px 0;
    justify-items: center;
}

.skill-category {
    width: 30%;
}

h3 {
    color: #00b4d8;
}
</style>

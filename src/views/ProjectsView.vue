<template>
    <div class="projects">
        <h2>Projects</h2>
        <div class="project-list">
            <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
        </div>
    </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
    {
        title: 'AI ChatBot',
        description:
            'Worked with a small team to use Python, React, and AWS, to host an AI ChatBot for an Investor Relations company.',
        link: 'https://www.red.chat/',
        image: '/images/redchip-logo-small.png'
    },
    {
        title: 'The Promo App',
        description:
            'Worked with Senior Developers to create a mobile application through React Native and NodeJS.',
        link: 'https://play.google.com/store/apps/details?id=com.promoapp.promo&hl=en_US&pli=1',
        image: '/images/promo_logo.png'
    },
    {
        title: 'Portfolio',
        description: 'Used Vue and AWS Amplify to host my portfolio.',
        link: '#',
        image: ''
    },
    {
        title: 'Spotify Activity Tweeter',
        description:
            'Created a python script to scrape live user activity and tweet the current song being listened to (if currently listening).',
        link: 'https://play.google.com/store/apps/details?id=com.promoapp.promo&hl=en_US&pli=1',
        image: ''
    }
]
</script>

<style scoped>
.projects {
    padding: 20px;
}

.project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Dynamically adjusts columns */
    gap: 40px; /* Space between cards */
    padding-right: 20px;
}
</style>

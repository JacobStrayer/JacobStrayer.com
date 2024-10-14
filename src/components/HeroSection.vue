<template>
    <div class="hero-section">
        <h1>Full-Stack Developer | API Expert | AWS Specialist</h1>
        <p>Building scalable APIs and interactive user interfaces.</p>
    </div>
    <div class="hero-buttons">
        <router-link class="btn" to="/resume">View Resume</router-link>
        <router-link class="btn btn-secondary" to="/projects">View Projects</router-link>
    </div>
</template>

<style scoped>
.hero-section {
    text-align: center;
    padding: 100px 20px;
    background-size: cover;
    background-position: center;
    color: #fff;
}

.links a {
    margin: 0 10px;
    color: #00b4d8;
    text-decoration: none;
}

.hero-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.btn {
    color: #fff;
    padding: 10px 20px;
    margin: 1rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
</style>

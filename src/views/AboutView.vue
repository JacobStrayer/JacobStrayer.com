<template>
    <div class="about">
        <h1>About Me</h1>
        <h2>Experience</h2>
        <div class="section"></div>
        <h2>Education</h2>
        <div class="section"></div>

        <h2>Non-Technical Hobbies</h2>
        <h3>Gardening</h3>
        <div class="section">
            <img :src="`${s3Url}/plant_image01.jpg`" alt="Plant Image 1" />
            <img :src="`${s3Url}/plant_image02.jpg`" alt="Plant Image 2" />
        </div>
    </div>
</template>

<script setup>
const s3Url = import.meta.env.VITE_S3_BUCKET_URL
</script>

<style scoped>
.about {
    padding: 20px;
}

img {
    max-height: 500px;
    width: auto;
}

.section {
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>

<template>
    <div class="resume-container">
        <iframe
            :src="`${s3Url}/StrayerJacob_Resume.pdf`"
            class="pdf-viewer"
            frameborder="0"
            width="100%"
            height="800px"
        >
        </iframe>
    </div>
</template>
<script setup>
const s3Url = import.meta.env.VITE_S3_BUCKET_URL
console.log('s3', s3Url)
</script>
<style scoped>
.resume-container {
    padding: 20px;
    text-align: center;
    background-color: #1c1c1c;
    color: #fff;
}

.pdf-viewer {
    margin-top: 20px;
    border: 1px solid #ddd;
}
</style>

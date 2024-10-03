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
            <img src="/images/plant_image01.jpg" />
            <img src="/images/plant_image02.jpg" />
        </div>
        
    </div>
</template>



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

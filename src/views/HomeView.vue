<template>
    <div class="home">
        <HeroSection />
        <SkillGrid />
    </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SkillGrid from '../components/SkillGrid.vue'
</script>

<style scoped>
.home {
    padding: 20px;
}
</style>

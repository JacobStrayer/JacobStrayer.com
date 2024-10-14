<template>
    <div class="home">
        <HeroSection />
        <SkillGrid />
        <BoidsField />
    </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SkillGrid from '../components/SkillGrid.vue'
import BoidsField from '@/components/BoidsField.vue';
</script>

<style scoped>
.home {
    padding: 20px;
}
</style>

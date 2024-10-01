<template>
    <div id="app">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
import Navbar from './components/NavBar.vue'
import Footer from './components/FooterBar.vue'
</script>

<style>
/* Global Styles */
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #181818;
    color: #fff;
}

#app {
    display: flex;
    width: 100%;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}
</style>

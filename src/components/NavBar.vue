<template>
    <nav class="navbar">
        <div class="nav-container">
            <a class="nav-logo" href="/"> Jacob Strayer </a>
            <button class="hamburger" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul :class="['nav-menu', { active: isMenuActive }]">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/resume">Resume</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/projects">Projects</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuActive: false // State for toggling the menu
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #242424;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 24px;
    color: #00b4d8;
    text-decoration: none;
    font-weight: bold;
}

.nav-menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-item {
    margin-left: 20px;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #00b4d8;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    border: none;
    background: none;
}

.hamburger .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: all 0.3s ease;
}

@media (max-width: 540px) {
    .nav-menu {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        background-color: #242424;
        flex-direction: column;
        display: none; /* Hidden by default */
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-item {
        margin-left: 0;
        margin-top: 10px;
        text-align: center;
    }

    .hamburger {
        display: flex;
    }

    .nav-container {
        justify-content: space-between;
    }
}
</style>

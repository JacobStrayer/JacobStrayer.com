<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <img src="/favicon/favicon-32x32.png" href="/"/>
                <a class="nav-logo" href="/"> Jacob Strayer </a>
            </div>
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
    background-color: #181818;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 24px;
    color: #920ae0;
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

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    border: none;
    background: none;
}

.logo {
    display:flex;
    align-items: center;
}
.logo img {
    height: 100%;
    width: 1.5rem;
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

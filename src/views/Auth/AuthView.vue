<template>
    <div class="auth-container">
        <div class="auth-card">
            <component :is="activeComponent" @switch-view="switchView" />
        </div>
    </div>
</template>

<script>
import Login from '../../components/auth/LoginCard.vue'
import Register from '../../components/auth/RegisterCard.vue'
import Confirm from '../../components/auth/RegisterCard.vue'

export default {
    components: {
        Login,
        Register,
        Confirm
    },
    data() {
        return {
            activeComponent: 'Login' // Default view is the Login component
        }
    },
    methods: {
        switchView(viewName) {
            this.activeComponent = viewName // Switch between Login, Register, and Confirm
        }
    }
}
</script>

<style scoped>
.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: var(--color-background);
}

.auth-card {
    background-color: var(--color-background-soft);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    color: var(--color-text);
}
</style>

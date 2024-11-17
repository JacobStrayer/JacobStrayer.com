<template>
    <div class="auth-container">
        <div class="auth-card">
            <h2>Log In</h2>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        placeholder="jacob@strayer.com"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        v-model="password"
                        type="password"
                        id="password"
                        placeholder="SomeLongPassword0PeopleCouldHack!"
                        required
                    />
                </div>
                <div class="form-actions">
                    <label> <input type="checkbox" /> Remember me </label>
                    <a @click.prevent="$emit('switch-view', 'ForgotPassword')">Forgot Password?</a>
                </div>
                <button type="submit" class="primary-button">Log in</button>
                <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
            </form>
            <p>
                Don’t have an account?
                <a @click.prevent="$emit('switch-view', 'Register')">Sign up</a>
            </p>
            <button class="secondary-button google-button">Google SSO</button>
            <button class="secondary-button microsoft-button">Apple SSO</button>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/endpoints'
export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        async handleLogin() {
            try {
                // Replace with your API call
                const response = await login({
                    email: this.email,
                    password: this.password
                })
                if (response.success) this.$router.push('/')
                else this.errorMessage = 'Invalid email or password.'
                console.log('Login successful:', response)
            } catch (error) {
                console.error('Login failed:', error)
                this.errorMessage = 'An unexpected error occurred. Please try again.'
            }
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

.auth-card h2 {
    margin-bottom: 10px;
}

.auth-card p {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-soft);
    color: var(--color-text);
}

.form-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.forgot-link {
    color: var(--accent-secondary);
}

.primary-button {
    width: 100%;
    padding: 10px;
    background-color: var(--accent-primary);
    color: var(--color-text);
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

.primary-button:hover {
    background-color: var(--accent-hover);
}

.divider {
    margin: 20px 0;
    font-size: 14px;
    color: var(--color-border);
}

.secondary-button {
    width: 45%;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
    color: var(--color-text);
}

.google-button {
    color: #ea4335;
}

.microsoft-button {
    color: #0078d4;
}

.error-text {
    color: #ff4d4d;
    font-size: 14px;
    margin-top: 10px;
    text-align: left;
}
</style>

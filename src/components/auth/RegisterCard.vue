<template>
    <div class="auth-container">
        <div class="auth-card">
            <h2>Register</h2>
            <form @submit.prevent="handleRegister">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        placeholder="Jacob@Strayer.com"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input
                        v-model="username"
                        type="username"
                        id="username"
                        placeholder="Jacob"
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
                <div class="form-group">
                    <label for="password">Confirm Password</label>
                    <input
                        v-model="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        placeholder="SomeLongPassword0PeopleCouldHack!"
                        required
                    />
                </div>
                <div class="form-actions">
                    <label> <input type="checkbox" /> Remember me </label>
                    <a @click.prevent="$emit('switch-view', 'ForgotPassword')">Forgot Password?</a>
                </div>
                <button type="submit" class="primary-button">Sign Up</button>
            </form>
            <p>
                Already have an account?
                <a @click.prevent="$emit('switch-view', 'Login')">Login</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        async handleLogin() {
            try {
                // Replace with your API call
                const response = await this.$axios.post('/api/login', {
                    email: this.email,
                    password: this.password
                })
                console.log('Login successful:', response)
            } catch (error) {
                console.error('Login failed:', error)
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
    width: 100%;
    padding: 10px;
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
</style>

<!-- <template>
    <div class="auth-form">
        <h2>Register</h2>
        <form @submit.prevent="handleRegister">
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input v-model="name" type="text" id="name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input v-model="email" type="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input v-model="password" type="password" id="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async handleRegister() {
            try {
                // Replace this with your API call
                const response = await this.$axios.post('/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                // Handle success (e.g., redirect to login, show message)
                console.log('Registration successful', response)
                this.$router.push('/login') // Redirect to login after successful registration
            } catch (error) {
                console.error('Registration failed', error)
            }
        }
    }
}
</script>

<style scoped>
.auth-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.auth-form h2 {
    text-align: center;
}

.auth-form .form-group {
    margin-bottom: 15px;
}

.auth-form .form-group label {
    display: block;
    margin-bottom: 5px;
}

.auth-form .form-group input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
}

.auth-form button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
}

.auth-form button:hover {
    background-color: #358a6b;
}
</style> -->
